<?php
declare(strict_types=1);

// Pipedrive SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class PipedriveSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new PipedriveUtility();
        $this->_utility = $utility;

        $config = PipedriveConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = PipedriveHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = PipedriveHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!PipedriveFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, PipedriveFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return PipedriveUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = PipedriveHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = PipedriveHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = PipedriveHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new PipedriveSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new PipedriveError($op . "_allow",
                "PipedriveSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = PipedriveHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = PipedriveHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new PipedriveError("graphql_error",
                "PipedriveSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_activity_field = null;

    // Canonical facade: $client->ActivityField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity_field()
    // resolves here too.
    public function ActivityField($data = null)
    {
        require_once __DIR__ . '/entity/activity_field_entity.php';
        if ($data === null) {
            if ($this->_activity_field === null) {
                $this->_activity_field = new ActivityFieldEntity($this, null);
            }
            return $this->_activity_field;
        }
        return new ActivityFieldEntity($this, $data);
    }


    private $_activity_type = null;

    // Canonical facade: $client->ActivityType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity_type()
    // resolves here too.
    public function ActivityType($data = null)
    {
        require_once __DIR__ . '/entity/activity_type_entity.php';
        if ($data === null) {
            if ($this->_activity_type === null) {
                $this->_activity_type = new ActivityTypeEntity($this, null);
            }
            return $this->_activity_type;
        }
        return new ActivityTypeEntity($this, $data);
    }


    private $_billing = null;

    // Canonical facade: $client->Billing()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billing()
    // resolves here too.
    public function Billing($data = null)
    {
        require_once __DIR__ . '/entity/billing_entity.php';
        if ($data === null) {
            if ($this->_billing === null) {
                $this->_billing = new BillingEntity($this, null);
            }
            return $this->_billing;
        }
        return new BillingEntity($this, $data);
    }


    private $_call_log = null;

    // Canonical facade: $client->CallLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->call_log()
    // resolves here too.
    public function CallLog($data = null)
    {
        require_once __DIR__ . '/entity/call_log_entity.php';
        if ($data === null) {
            if ($this->_call_log === null) {
                $this->_call_log = new CallLogEntity($this, null);
            }
            return $this->_call_log;
        }
        return new CallLogEntity($this, $data);
    }


    private $_channel = null;

    // Canonical facade: $client->Channel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->channel()
    // resolves here too.
    public function Channel($data = null)
    {
        require_once __DIR__ . '/entity/channel_entity.php';
        if ($data === null) {
            if ($this->_channel === null) {
                $this->_channel = new ChannelEntity($this, null);
            }
            return $this->_channel;
        }
        return new ChannelEntity($this, $data);
    }


    private $_currency = null;

    // Canonical facade: $client->Currency()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->currency()
    // resolves here too.
    public function Currency($data = null)
    {
        require_once __DIR__ . '/entity/currency_entity.php';
        if ($data === null) {
            if ($this->_currency === null) {
                $this->_currency = new CurrencyEntity($this, null);
            }
            return $this->_currency;
        }
        return new CurrencyEntity($this, $data);
    }


    private $_deal = null;

    // Canonical facade: $client->Deal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deal()
    // resolves here too.
    public function Deal($data = null)
    {
        require_once __DIR__ . '/entity/deal_entity.php';
        if ($data === null) {
            if ($this->_deal === null) {
                $this->_deal = new DealEntity($this, null);
            }
            return $this->_deal;
        }
        return new DealEntity($this, $data);
    }


    private $_deal_field = null;

    // Canonical facade: $client->DealField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deal_field()
    // resolves here too.
    public function DealField($data = null)
    {
        require_once __DIR__ . '/entity/deal_field_entity.php';
        if ($data === null) {
            if ($this->_deal_field === null) {
                $this->_deal_field = new DealFieldEntity($this, null);
            }
            return $this->_deal_field;
        }
        return new DealFieldEntity($this, $data);
    }


    private $_file = null;

    // Canonical facade: $client->File()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file()
    // resolves here too.
    public function File($data = null)
    {
        require_once __DIR__ . '/entity/file_entity.php';
        if ($data === null) {
            if ($this->_file === null) {
                $this->_file = new FileEntity($this, null);
            }
            return $this->_file;
        }
        return new FileEntity($this, $data);
    }


    private $_filter = null;

    // Canonical facade: $client->Filter()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->filter()
    // resolves here too.
    public function Filter($data = null)
    {
        require_once __DIR__ . '/entity/filter_entity.php';
        if ($data === null) {
            if ($this->_filter === null) {
                $this->_filter = new FilterEntity($this, null);
            }
            return $this->_filter;
        }
        return new FilterEntity($this, $data);
    }


    private $_goal = null;

    // Canonical facade: $client->Goal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->goal()
    // resolves here too.
    public function Goal($data = null)
    {
        require_once __DIR__ . '/entity/goal_entity.php';
        if ($data === null) {
            if ($this->_goal === null) {
                $this->_goal = new GoalEntity($this, null);
            }
            return $this->_goal;
        }
        return new GoalEntity($this, $data);
    }


    private $_lead = null;

    // Canonical facade: $client->Lead()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lead()
    // resolves here too.
    public function Lead($data = null)
    {
        require_once __DIR__ . '/entity/lead_entity.php';
        if ($data === null) {
            if ($this->_lead === null) {
                $this->_lead = new LeadEntity($this, null);
            }
            return $this->_lead;
        }
        return new LeadEntity($this, $data);
    }


    private $_lead_field = null;

    // Canonical facade: $client->LeadField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lead_field()
    // resolves here too.
    public function LeadField($data = null)
    {
        require_once __DIR__ . '/entity/lead_field_entity.php';
        if ($data === null) {
            if ($this->_lead_field === null) {
                $this->_lead_field = new LeadFieldEntity($this, null);
            }
            return $this->_lead_field;
        }
        return new LeadFieldEntity($this, $data);
    }


    private $_lead_label = null;

    // Canonical facade: $client->LeadLabel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lead_label()
    // resolves here too.
    public function LeadLabel($data = null)
    {
        require_once __DIR__ . '/entity/lead_label_entity.php';
        if ($data === null) {
            if ($this->_lead_label === null) {
                $this->_lead_label = new LeadLabelEntity($this, null);
            }
            return $this->_lead_label;
        }
        return new LeadLabelEntity($this, $data);
    }


    private $_lead_source = null;

    // Canonical facade: $client->LeadSource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lead_source()
    // resolves here too.
    public function LeadSource($data = null)
    {
        require_once __DIR__ . '/entity/lead_source_entity.php';
        if ($data === null) {
            if ($this->_lead_source === null) {
                $this->_lead_source = new LeadSourceEntity($this, null);
            }
            return $this->_lead_source;
        }
        return new LeadSourceEntity($this, $data);
    }


    private $_legacy_team = null;

    // Canonical facade: $client->LegacyTeam()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->legacy_team()
    // resolves here too.
    public function LegacyTeam($data = null)
    {
        require_once __DIR__ . '/entity/legacy_team_entity.php';
        if ($data === null) {
            if ($this->_legacy_team === null) {
                $this->_legacy_team = new LegacyTeamEntity($this, null);
            }
            return $this->_legacy_team;
        }
        return new LegacyTeamEntity($this, $data);
    }


    private $_mailbox = null;

    // Canonical facade: $client->Mailbox()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->mailbox()
    // resolves here too.
    public function Mailbox($data = null)
    {
        require_once __DIR__ . '/entity/mailbox_entity.php';
        if ($data === null) {
            if ($this->_mailbox === null) {
                $this->_mailbox = new MailboxEntity($this, null);
            }
            return $this->_mailbox;
        }
        return new MailboxEntity($this, $data);
    }


    private $_meeting = null;

    // Canonical facade: $client->Meeting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meeting()
    // resolves here too.
    public function Meeting($data = null)
    {
        require_once __DIR__ . '/entity/meeting_entity.php';
        if ($data === null) {
            if ($this->_meeting === null) {
                $this->_meeting = new MeetingEntity($this, null);
            }
            return $this->_meeting;
        }
        return new MeetingEntity($this, $data);
    }


    private $_note = null;

    // Canonical facade: $client->Note()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->note()
    // resolves here too.
    public function Note($data = null)
    {
        require_once __DIR__ . '/entity/note_entity.php';
        if ($data === null) {
            if ($this->_note === null) {
                $this->_note = new NoteEntity($this, null);
            }
            return $this->_note;
        }
        return new NoteEntity($this, $data);
    }


    private $_note_field = null;

    // Canonical facade: $client->NoteField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->note_field()
    // resolves here too.
    public function NoteField($data = null)
    {
        require_once __DIR__ . '/entity/note_field_entity.php';
        if ($data === null) {
            if ($this->_note_field === null) {
                $this->_note_field = new NoteFieldEntity($this, null);
            }
            return $this->_note_field;
        }
        return new NoteFieldEntity($this, $data);
    }


    private $_oauth = null;

    // Canonical facade: $client->Oauth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oauth()
    // resolves here too.
    public function Oauth($data = null)
    {
        require_once __DIR__ . '/entity/oauth_entity.php';
        if ($data === null) {
            if ($this->_oauth === null) {
                $this->_oauth = new OauthEntity($this, null);
            }
            return $this->_oauth;
        }
        return new OauthEntity($this, $data);
    }


    private $_organization = null;

    // Canonical facade: $client->Organization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization()
    // resolves here too.
    public function Organization($data = null)
    {
        require_once __DIR__ . '/entity/organization_entity.php';
        if ($data === null) {
            if ($this->_organization === null) {
                $this->_organization = new OrganizationEntity($this, null);
            }
            return $this->_organization;
        }
        return new OrganizationEntity($this, $data);
    }


    private $_organization_field = null;

    // Canonical facade: $client->OrganizationField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_field()
    // resolves here too.
    public function OrganizationField($data = null)
    {
        require_once __DIR__ . '/entity/organization_field_entity.php';
        if ($data === null) {
            if ($this->_organization_field === null) {
                $this->_organization_field = new OrganizationFieldEntity($this, null);
            }
            return $this->_organization_field;
        }
        return new OrganizationFieldEntity($this, $data);
    }


    private $_organization_relationship = null;

    // Canonical facade: $client->OrganizationRelationship()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_relationship()
    // resolves here too.
    public function OrganizationRelationship($data = null)
    {
        require_once __DIR__ . '/entity/organization_relationship_entity.php';
        if ($data === null) {
            if ($this->_organization_relationship === null) {
                $this->_organization_relationship = new OrganizationRelationshipEntity($this, null);
            }
            return $this->_organization_relationship;
        }
        return new OrganizationRelationshipEntity($this, $data);
    }


    private $_permission_set = null;

    // Canonical facade: $client->PermissionSet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->permission_set()
    // resolves here too.
    public function PermissionSet($data = null)
    {
        require_once __DIR__ . '/entity/permission_set_entity.php';
        if ($data === null) {
            if ($this->_permission_set === null) {
                $this->_permission_set = new PermissionSetEntity($this, null);
            }
            return $this->_permission_set;
        }
        return new PermissionSetEntity($this, $data);
    }


    private $_person = null;

    // Canonical facade: $client->Person()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->person()
    // resolves here too.
    public function Person($data = null)
    {
        require_once __DIR__ . '/entity/person_entity.php';
        if ($data === null) {
            if ($this->_person === null) {
                $this->_person = new PersonEntity($this, null);
            }
            return $this->_person;
        }
        return new PersonEntity($this, $data);
    }


    private $_person_field = null;

    // Canonical facade: $client->PersonField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->person_field()
    // resolves here too.
    public function PersonField($data = null)
    {
        require_once __DIR__ . '/entity/person_field_entity.php';
        if ($data === null) {
            if ($this->_person_field === null) {
                $this->_person_field = new PersonFieldEntity($this, null);
            }
            return $this->_person_field;
        }
        return new PersonFieldEntity($this, $data);
    }


    private $_pipeline = null;

    // Canonical facade: $client->Pipeline()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pipeline()
    // resolves here too.
    public function Pipeline($data = null)
    {
        require_once __DIR__ . '/entity/pipeline_entity.php';
        if ($data === null) {
            if ($this->_pipeline === null) {
                $this->_pipeline = new PipelineEntity($this, null);
            }
            return $this->_pipeline;
        }
        return new PipelineEntity($this, $data);
    }


    private $_product = null;

    // Canonical facade: $client->Product()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product()
    // resolves here too.
    public function Product($data = null)
    {
        require_once __DIR__ . '/entity/product_entity.php';
        if ($data === null) {
            if ($this->_product === null) {
                $this->_product = new ProductEntity($this, null);
            }
            return $this->_product;
        }
        return new ProductEntity($this, $data);
    }


    private $_product_field = null;

    // Canonical facade: $client->ProductField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_field()
    // resolves here too.
    public function ProductField($data = null)
    {
        require_once __DIR__ . '/entity/product_field_entity.php';
        if ($data === null) {
            if ($this->_product_field === null) {
                $this->_product_field = new ProductFieldEntity($this, null);
            }
            return $this->_product_field;
        }
        return new ProductFieldEntity($this, $data);
    }


    private $_project = null;

    // Canonical facade: $client->Project()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project()
    // resolves here too.
    public function Project($data = null)
    {
        require_once __DIR__ . '/entity/project_entity.php';
        if ($data === null) {
            if ($this->_project === null) {
                $this->_project = new ProjectEntity($this, null);
            }
            return $this->_project;
        }
        return new ProjectEntity($this, $data);
    }


    private $_project_board = null;

    // Canonical facade: $client->ProjectBoard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_board()
    // resolves here too.
    public function ProjectBoard($data = null)
    {
        require_once __DIR__ . '/entity/project_board_entity.php';
        if ($data === null) {
            if ($this->_project_board === null) {
                $this->_project_board = new ProjectBoardEntity($this, null);
            }
            return $this->_project_board;
        }
        return new ProjectBoardEntity($this, $data);
    }


    private $_project_phase = null;

    // Canonical facade: $client->ProjectPhase()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_phase()
    // resolves here too.
    public function ProjectPhase($data = null)
    {
        require_once __DIR__ . '/entity/project_phase_entity.php';
        if ($data === null) {
            if ($this->_project_phase === null) {
                $this->_project_phase = new ProjectPhaseEntity($this, null);
            }
            return $this->_project_phase;
        }
        return new ProjectPhaseEntity($this, $data);
    }


    private $_project_template = null;

    // Canonical facade: $client->ProjectTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_template()
    // resolves here too.
    public function ProjectTemplate($data = null)
    {
        require_once __DIR__ . '/entity/project_template_entity.php';
        if ($data === null) {
            if ($this->_project_template === null) {
                $this->_project_template = new ProjectTemplateEntity($this, null);
            }
            return $this->_project_template;
        }
        return new ProjectTemplateEntity($this, $data);
    }


    private $_recent = null;

    // Canonical facade: $client->Recent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->recent()
    // resolves here too.
    public function Recent($data = null)
    {
        require_once __DIR__ . '/entity/recent_entity.php';
        if ($data === null) {
            if ($this->_recent === null) {
                $this->_recent = new RecentEntity($this, null);
            }
            return $this->_recent;
        }
        return new RecentEntity($this, $data);
    }


    private $_role = null;

    // Canonical facade: $client->Role()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->role()
    // resolves here too.
    public function Role($data = null)
    {
        require_once __DIR__ . '/entity/role_entity.php';
        if ($data === null) {
            if ($this->_role === null) {
                $this->_role = new RoleEntity($this, null);
            }
            return $this->_role;
        }
        return new RoleEntity($this, $data);
    }


    private $_stage = null;

    // Canonical facade: $client->Stage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stage()
    // resolves here too.
    public function Stage($data = null)
    {
        require_once __DIR__ . '/entity/stage_entity.php';
        if ($data === null) {
            if ($this->_stage === null) {
                $this->_stage = new StageEntity($this, null);
            }
            return $this->_stage;
        }
        return new StageEntity($this, $data);
    }


    private $_task = null;

    // Canonical facade: $client->Task()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->task()
    // resolves here too.
    public function Task($data = null)
    {
        require_once __DIR__ . '/entity/task_entity.php';
        if ($data === null) {
            if ($this->_task === null) {
                $this->_task = new TaskEntity($this, null);
            }
            return $this->_task;
        }
        return new TaskEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_connection = null;

    // Canonical facade: $client->UserConnection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_connection()
    // resolves here too.
    public function UserConnection($data = null)
    {
        require_once __DIR__ . '/entity/user_connection_entity.php';
        if ($data === null) {
            if ($this->_user_connection === null) {
                $this->_user_connection = new UserConnectionEntity($this, null);
            }
            return $this->_user_connection;
        }
        return new UserConnectionEntity($this, $data);
    }


    private $_user_setting = null;

    // Canonical facade: $client->UserSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_setting()
    // resolves here too.
    public function UserSetting($data = null)
    {
        require_once __DIR__ . '/entity/user_setting_entity.php';
        if ($data === null) {
            if ($this->_user_setting === null) {
                $this->_user_setting = new UserSettingEntity($this, null);
            }
            return $this->_user_setting;
        }
        return new UserSettingEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new PipedriveSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
