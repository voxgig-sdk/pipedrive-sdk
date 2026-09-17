package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/pipedrive-sdk/go/utility/struct"
)

type PipedriveSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewPipedriveSDK(options map[string]any) *PipedriveSDK {
	sdk := &PipedriveSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *PipedriveSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *PipedriveSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *PipedriveSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *PipedriveSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *PipedriveSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *PipedriveSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *PipedriveSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("PipedriveSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *PipedriveSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *PipedriveSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("PipedriveSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// ActivityField returns a ActivityField entity bound to this client.
// Idiomatic usage: client.ActivityField(nil).List(nil, nil) or
// client.ActivityField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) ActivityField(data map[string]any) PipedriveEntity {
	return NewActivityFieldEntityFunc(sdk, data)
}


// ActivityType returns a ActivityType entity bound to this client.
// Idiomatic usage: client.ActivityType(nil).List(nil, nil) or
// client.ActivityType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) ActivityType(data map[string]any) PipedriveEntity {
	return NewActivityTypeEntityFunc(sdk, data)
}


// Billing returns a Billing entity bound to this client.
// Idiomatic usage: client.Billing(nil).List(nil, nil) or
// client.Billing(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Billing(data map[string]any) PipedriveEntity {
	return NewBillingEntityFunc(sdk, data)
}


// CallLog returns a CallLog entity bound to this client.
// Idiomatic usage: client.CallLog(nil).List(nil, nil) or
// client.CallLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) CallLog(data map[string]any) PipedriveEntity {
	return NewCallLogEntityFunc(sdk, data)
}


// Channel returns a Channel entity bound to this client.
// Idiomatic usage: client.Channel(nil).List(nil, nil) or
// client.Channel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Channel(data map[string]any) PipedriveEntity {
	return NewChannelEntityFunc(sdk, data)
}


// Currency returns a Currency entity bound to this client.
// Idiomatic usage: client.Currency(nil).List(nil, nil) or
// client.Currency(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Currency(data map[string]any) PipedriveEntity {
	return NewCurrencyEntityFunc(sdk, data)
}


// Deal returns a Deal entity bound to this client.
// Idiomatic usage: client.Deal(nil).List(nil, nil) or
// client.Deal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Deal(data map[string]any) PipedriveEntity {
	return NewDealEntityFunc(sdk, data)
}


// DealField returns a DealField entity bound to this client.
// Idiomatic usage: client.DealField(nil).List(nil, nil) or
// client.DealField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) DealField(data map[string]any) PipedriveEntity {
	return NewDealFieldEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) File(data map[string]any) PipedriveEntity {
	return NewFileEntityFunc(sdk, data)
}


// Filter returns a Filter entity bound to this client.
// Idiomatic usage: client.Filter(nil).List(nil, nil) or
// client.Filter(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Filter(data map[string]any) PipedriveEntity {
	return NewFilterEntityFunc(sdk, data)
}


// Goal returns a Goal entity bound to this client.
// Idiomatic usage: client.Goal(nil).List(nil, nil) or
// client.Goal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Goal(data map[string]any) PipedriveEntity {
	return NewGoalEntityFunc(sdk, data)
}


// Lead returns a Lead entity bound to this client.
// Idiomatic usage: client.Lead(nil).List(nil, nil) or
// client.Lead(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Lead(data map[string]any) PipedriveEntity {
	return NewLeadEntityFunc(sdk, data)
}


// LeadField returns a LeadField entity bound to this client.
// Idiomatic usage: client.LeadField(nil).List(nil, nil) or
// client.LeadField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) LeadField(data map[string]any) PipedriveEntity {
	return NewLeadFieldEntityFunc(sdk, data)
}


// LeadLabel returns a LeadLabel entity bound to this client.
// Idiomatic usage: client.LeadLabel(nil).List(nil, nil) or
// client.LeadLabel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) LeadLabel(data map[string]any) PipedriveEntity {
	return NewLeadLabelEntityFunc(sdk, data)
}


// LeadSource returns a LeadSource entity bound to this client.
// Idiomatic usage: client.LeadSource(nil).List(nil, nil) or
// client.LeadSource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) LeadSource(data map[string]any) PipedriveEntity {
	return NewLeadSourceEntityFunc(sdk, data)
}


// LegacyTeam returns a LegacyTeam entity bound to this client.
// Idiomatic usage: client.LegacyTeam(nil).List(nil, nil) or
// client.LegacyTeam(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) LegacyTeam(data map[string]any) PipedriveEntity {
	return NewLegacyTeamEntityFunc(sdk, data)
}


// Mailbox returns a Mailbox entity bound to this client.
// Idiomatic usage: client.Mailbox(nil).List(nil, nil) or
// client.Mailbox(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Mailbox(data map[string]any) PipedriveEntity {
	return NewMailboxEntityFunc(sdk, data)
}


// Meeting returns a Meeting entity bound to this client.
// Idiomatic usage: client.Meeting(nil).List(nil, nil) or
// client.Meeting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Meeting(data map[string]any) PipedriveEntity {
	return NewMeetingEntityFunc(sdk, data)
}


// Note returns a Note entity bound to this client.
// Idiomatic usage: client.Note(nil).List(nil, nil) or
// client.Note(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Note(data map[string]any) PipedriveEntity {
	return NewNoteEntityFunc(sdk, data)
}


// NoteField returns a NoteField entity bound to this client.
// Idiomatic usage: client.NoteField(nil).List(nil, nil) or
// client.NoteField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) NoteField(data map[string]any) PipedriveEntity {
	return NewNoteFieldEntityFunc(sdk, data)
}


// Oauth returns a Oauth entity bound to this client.
// Idiomatic usage: client.Oauth(nil).List(nil, nil) or
// client.Oauth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Oauth(data map[string]any) PipedriveEntity {
	return NewOauthEntityFunc(sdk, data)
}


// Organization returns a Organization entity bound to this client.
// Idiomatic usage: client.Organization(nil).List(nil, nil) or
// client.Organization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Organization(data map[string]any) PipedriveEntity {
	return NewOrganizationEntityFunc(sdk, data)
}


// OrganizationField returns a OrganizationField entity bound to this client.
// Idiomatic usage: client.OrganizationField(nil).List(nil, nil) or
// client.OrganizationField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) OrganizationField(data map[string]any) PipedriveEntity {
	return NewOrganizationFieldEntityFunc(sdk, data)
}


// OrganizationRelationship returns a OrganizationRelationship entity bound to this client.
// Idiomatic usage: client.OrganizationRelationship(nil).List(nil, nil) or
// client.OrganizationRelationship(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) OrganizationRelationship(data map[string]any) PipedriveEntity {
	return NewOrganizationRelationshipEntityFunc(sdk, data)
}


// PermissionSet returns a PermissionSet entity bound to this client.
// Idiomatic usage: client.PermissionSet(nil).List(nil, nil) or
// client.PermissionSet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) PermissionSet(data map[string]any) PipedriveEntity {
	return NewPermissionSetEntityFunc(sdk, data)
}


// Person returns a Person entity bound to this client.
// Idiomatic usage: client.Person(nil).List(nil, nil) or
// client.Person(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Person(data map[string]any) PipedriveEntity {
	return NewPersonEntityFunc(sdk, data)
}


// PersonField returns a PersonField entity bound to this client.
// Idiomatic usage: client.PersonField(nil).List(nil, nil) or
// client.PersonField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) PersonField(data map[string]any) PipedriveEntity {
	return NewPersonFieldEntityFunc(sdk, data)
}


// Pipeline returns a Pipeline entity bound to this client.
// Idiomatic usage: client.Pipeline(nil).List(nil, nil) or
// client.Pipeline(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Pipeline(data map[string]any) PipedriveEntity {
	return NewPipelineEntityFunc(sdk, data)
}


// Product returns a Product entity bound to this client.
// Idiomatic usage: client.Product(nil).List(nil, nil) or
// client.Product(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Product(data map[string]any) PipedriveEntity {
	return NewProductEntityFunc(sdk, data)
}


// ProductField returns a ProductField entity bound to this client.
// Idiomatic usage: client.ProductField(nil).List(nil, nil) or
// client.ProductField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) ProductField(data map[string]any) PipedriveEntity {
	return NewProductFieldEntityFunc(sdk, data)
}


// Project returns a Project entity bound to this client.
// Idiomatic usage: client.Project(nil).List(nil, nil) or
// client.Project(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Project(data map[string]any) PipedriveEntity {
	return NewProjectEntityFunc(sdk, data)
}


// ProjectBoard returns a ProjectBoard entity bound to this client.
// Idiomatic usage: client.ProjectBoard(nil).List(nil, nil) or
// client.ProjectBoard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) ProjectBoard(data map[string]any) PipedriveEntity {
	return NewProjectBoardEntityFunc(sdk, data)
}


// ProjectPhase returns a ProjectPhase entity bound to this client.
// Idiomatic usage: client.ProjectPhase(nil).List(nil, nil) or
// client.ProjectPhase(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) ProjectPhase(data map[string]any) PipedriveEntity {
	return NewProjectPhaseEntityFunc(sdk, data)
}


// ProjectTemplate returns a ProjectTemplate entity bound to this client.
// Idiomatic usage: client.ProjectTemplate(nil).List(nil, nil) or
// client.ProjectTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) ProjectTemplate(data map[string]any) PipedriveEntity {
	return NewProjectTemplateEntityFunc(sdk, data)
}


// Recent returns a Recent entity bound to this client.
// Idiomatic usage: client.Recent(nil).List(nil, nil) or
// client.Recent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Recent(data map[string]any) PipedriveEntity {
	return NewRecentEntityFunc(sdk, data)
}


// Role returns a Role entity bound to this client.
// Idiomatic usage: client.Role(nil).List(nil, nil) or
// client.Role(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Role(data map[string]any) PipedriveEntity {
	return NewRoleEntityFunc(sdk, data)
}


// Stage returns a Stage entity bound to this client.
// Idiomatic usage: client.Stage(nil).List(nil, nil) or
// client.Stage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Stage(data map[string]any) PipedriveEntity {
	return NewStageEntityFunc(sdk, data)
}


// Task returns a Task entity bound to this client.
// Idiomatic usage: client.Task(nil).List(nil, nil) or
// client.Task(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Task(data map[string]any) PipedriveEntity {
	return NewTaskEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) User(data map[string]any) PipedriveEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserConnection returns a UserConnection entity bound to this client.
// Idiomatic usage: client.UserConnection(nil).List(nil, nil) or
// client.UserConnection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) UserConnection(data map[string]any) PipedriveEntity {
	return NewUserConnectionEntityFunc(sdk, data)
}


// UserSetting returns a UserSetting entity bound to this client.
// Idiomatic usage: client.UserSetting(nil).List(nil, nil) or
// client.UserSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) UserSetting(data map[string]any) PipedriveEntity {
	return NewUserSettingEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *PipedriveSDK) Webhook(data map[string]any) PipedriveEntity {
	return NewWebhookEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *PipedriveSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewPipedriveSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
