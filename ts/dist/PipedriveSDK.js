"use strict";
// Pipedrive Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.PipedriveSDK = exports.PipedriveEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActivityFieldEntity_1 = require("./entity/ActivityFieldEntity");
const ActivityTypeEntity_1 = require("./entity/ActivityTypeEntity");
const BillingEntity_1 = require("./entity/BillingEntity");
const CallLogEntity_1 = require("./entity/CallLogEntity");
const ChannelEntity_1 = require("./entity/ChannelEntity");
const CurrencyEntity_1 = require("./entity/CurrencyEntity");
const DealEntity_1 = require("./entity/DealEntity");
const DealFieldEntity_1 = require("./entity/DealFieldEntity");
const FileEntity_1 = require("./entity/FileEntity");
const FilterEntity_1 = require("./entity/FilterEntity");
const GoalEntity_1 = require("./entity/GoalEntity");
const LeadEntity_1 = require("./entity/LeadEntity");
const LeadFieldEntity_1 = require("./entity/LeadFieldEntity");
const LeadLabelEntity_1 = require("./entity/LeadLabelEntity");
const LeadSourceEntity_1 = require("./entity/LeadSourceEntity");
const LegacyTeamEntity_1 = require("./entity/LegacyTeamEntity");
const MailboxEntity_1 = require("./entity/MailboxEntity");
const MeetingEntity_1 = require("./entity/MeetingEntity");
const NoteEntity_1 = require("./entity/NoteEntity");
const NoteFieldEntity_1 = require("./entity/NoteFieldEntity");
const OauthEntity_1 = require("./entity/OauthEntity");
const OrganizationEntity_1 = require("./entity/OrganizationEntity");
const OrganizationFieldEntity_1 = require("./entity/OrganizationFieldEntity");
const OrganizationRelationshipEntity_1 = require("./entity/OrganizationRelationshipEntity");
const PermissionSetEntity_1 = require("./entity/PermissionSetEntity");
const PersonEntity_1 = require("./entity/PersonEntity");
const PersonFieldEntity_1 = require("./entity/PersonFieldEntity");
const PipelineEntity_1 = require("./entity/PipelineEntity");
const ProductEntity_1 = require("./entity/ProductEntity");
const ProductFieldEntity_1 = require("./entity/ProductFieldEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const ProjectBoardEntity_1 = require("./entity/ProjectBoardEntity");
const ProjectPhaseEntity_1 = require("./entity/ProjectPhaseEntity");
const ProjectTemplateEntity_1 = require("./entity/ProjectTemplateEntity");
const RecentEntity_1 = require("./entity/RecentEntity");
const RoleEntity_1 = require("./entity/RoleEntity");
const StageEntity_1 = require("./entity/StageEntity");
const TaskEntity_1 = require("./entity/TaskEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserConnectionEntity_1 = require("./entity/UserConnectionEntity");
const UserSettingEntity_1 = require("./entity/UserSettingEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const PipedriveEntityBase_1 = require("./PipedriveEntityBase");
Object.defineProperty(exports, "PipedriveEntityBase", { enumerable: true, get: function () { return PipedriveEntityBase_1.PipedriveEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class PipedriveSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('PipedriveSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('PipedriveSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('PipedriveSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.ActivityField().list()` / `client.ActivityField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActivityField(entopts) {
        const self = this;
        return new ActivityFieldEntity_1.ActivityFieldEntity(self, entopts);
    }
    // Entity access: `client.ActivityType().list()` / `client.ActivityType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActivityType(entopts) {
        const self = this;
        return new ActivityTypeEntity_1.ActivityTypeEntity(self, entopts);
    }
    // Entity access: `client.Billing().list()` / `client.Billing().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Billing(entopts) {
        const self = this;
        return new BillingEntity_1.BillingEntity(self, entopts);
    }
    // Entity access: `client.CallLog().list()` / `client.CallLog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CallLog(entopts) {
        const self = this;
        return new CallLogEntity_1.CallLogEntity(self, entopts);
    }
    // Entity access: `client.Channel().list()` / `client.Channel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Channel(entopts) {
        const self = this;
        return new ChannelEntity_1.ChannelEntity(self, entopts);
    }
    // Entity access: `client.Currency().list()` / `client.Currency().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Currency(entopts) {
        const self = this;
        return new CurrencyEntity_1.CurrencyEntity(self, entopts);
    }
    // Entity access: `client.Deal().list()` / `client.Deal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deal(entopts) {
        const self = this;
        return new DealEntity_1.DealEntity(self, entopts);
    }
    // Entity access: `client.DealField().list()` / `client.DealField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DealField(entopts) {
        const self = this;
        return new DealFieldEntity_1.DealFieldEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.Filter().list()` / `client.Filter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Filter(entopts) {
        const self = this;
        return new FilterEntity_1.FilterEntity(self, entopts);
    }
    // Entity access: `client.Goal().list()` / `client.Goal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Goal(entopts) {
        const self = this;
        return new GoalEntity_1.GoalEntity(self, entopts);
    }
    // Entity access: `client.Lead().list()` / `client.Lead().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Lead(entopts) {
        const self = this;
        return new LeadEntity_1.LeadEntity(self, entopts);
    }
    // Entity access: `client.LeadField().list()` / `client.LeadField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LeadField(entopts) {
        const self = this;
        return new LeadFieldEntity_1.LeadFieldEntity(self, entopts);
    }
    // Entity access: `client.LeadLabel().list()` / `client.LeadLabel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LeadLabel(entopts) {
        const self = this;
        return new LeadLabelEntity_1.LeadLabelEntity(self, entopts);
    }
    // Entity access: `client.LeadSource().list()` / `client.LeadSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LeadSource(entopts) {
        const self = this;
        return new LeadSourceEntity_1.LeadSourceEntity(self, entopts);
    }
    // Entity access: `client.LegacyTeam().list()` / `client.LegacyTeam().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LegacyTeam(entopts) {
        const self = this;
        return new LegacyTeamEntity_1.LegacyTeamEntity(self, entopts);
    }
    // Entity access: `client.Mailbox().list()` / `client.Mailbox().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Mailbox(entopts) {
        const self = this;
        return new MailboxEntity_1.MailboxEntity(self, entopts);
    }
    // Entity access: `client.Meeting().list()` / `client.Meeting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Meeting(entopts) {
        const self = this;
        return new MeetingEntity_1.MeetingEntity(self, entopts);
    }
    // Entity access: `client.Note().list()` / `client.Note().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Note(entopts) {
        const self = this;
        return new NoteEntity_1.NoteEntity(self, entopts);
    }
    // Entity access: `client.NoteField().list()` / `client.NoteField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NoteField(entopts) {
        const self = this;
        return new NoteFieldEntity_1.NoteFieldEntity(self, entopts);
    }
    // Entity access: `client.Oauth().list()` / `client.Oauth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Oauth(entopts) {
        const self = this;
        return new OauthEntity_1.OauthEntity(self, entopts);
    }
    // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Organization(entopts) {
        const self = this;
        return new OrganizationEntity_1.OrganizationEntity(self, entopts);
    }
    // Entity access: `client.OrganizationField().list()` / `client.OrganizationField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationField(entopts) {
        const self = this;
        return new OrganizationFieldEntity_1.OrganizationFieldEntity(self, entopts);
    }
    // Entity access: `client.OrganizationRelationship().list()` / `client.OrganizationRelationship().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationRelationship(entopts) {
        const self = this;
        return new OrganizationRelationshipEntity_1.OrganizationRelationshipEntity(self, entopts);
    }
    // Entity access: `client.PermissionSet().list()` / `client.PermissionSet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PermissionSet(entopts) {
        const self = this;
        return new PermissionSetEntity_1.PermissionSetEntity(self, entopts);
    }
    // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Person(entopts) {
        const self = this;
        return new PersonEntity_1.PersonEntity(self, entopts);
    }
    // Entity access: `client.PersonField().list()` / `client.PersonField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonField(entopts) {
        const self = this;
        return new PersonFieldEntity_1.PersonFieldEntity(self, entopts);
    }
    // Entity access: `client.Pipeline().list()` / `client.Pipeline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pipeline(entopts) {
        const self = this;
        return new PipelineEntity_1.PipelineEntity(self, entopts);
    }
    // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Product(entopts) {
        const self = this;
        return new ProductEntity_1.ProductEntity(self, entopts);
    }
    // Entity access: `client.ProductField().list()` / `client.ProductField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductField(entopts) {
        const self = this;
        return new ProductFieldEntity_1.ProductFieldEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.ProjectBoard().list()` / `client.ProjectBoard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectBoard(entopts) {
        const self = this;
        return new ProjectBoardEntity_1.ProjectBoardEntity(self, entopts);
    }
    // Entity access: `client.ProjectPhase().list()` / `client.ProjectPhase().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectPhase(entopts) {
        const self = this;
        return new ProjectPhaseEntity_1.ProjectPhaseEntity(self, entopts);
    }
    // Entity access: `client.ProjectTemplate().list()` / `client.ProjectTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectTemplate(entopts) {
        const self = this;
        return new ProjectTemplateEntity_1.ProjectTemplateEntity(self, entopts);
    }
    // Entity access: `client.Recent().list()` / `client.Recent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Recent(entopts) {
        const self = this;
        return new RecentEntity_1.RecentEntity(self, entopts);
    }
    // Entity access: `client.Role().list()` / `client.Role().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Role(entopts) {
        const self = this;
        return new RoleEntity_1.RoleEntity(self, entopts);
    }
    // Entity access: `client.Stage().list()` / `client.Stage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Stage(entopts) {
        const self = this;
        return new StageEntity_1.StageEntity(self, entopts);
    }
    // Entity access: `client.Task().list()` / `client.Task().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Task(entopts) {
        const self = this;
        return new TaskEntity_1.TaskEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.UserConnection().list()` / `client.UserConnection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserConnection(entopts) {
        const self = this;
        return new UserConnectionEntity_1.UserConnectionEntity(self, entopts);
    }
    // Entity access: `client.UserSetting().list()` / `client.UserSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserSetting(entopts) {
        const self = this;
        return new UserSettingEntity_1.UserSettingEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new PipedriveSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return PipedriveSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Pipedrive' };
    }
    toString() {
        return 'Pipedrive ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.PipedriveSDK = PipedriveSDK;
const SDK = PipedriveSDK;
exports.SDK = SDK;
//# sourceMappingURL=PipedriveSDK.js.map