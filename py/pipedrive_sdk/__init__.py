# Pipedrive SDK

from pipedrive_sdk.utility.voxgig_struct import voxgig_struct as vs
from pipedrive_sdk.core.utility_type import PipedriveUtility
from pipedrive_sdk.core.spec import PipedriveSpec
from pipedrive_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from pipedrive_sdk.utility import register

# Load features
from pipedrive_sdk.feature.base_feature import PipedriveBaseFeature
from pipedrive_sdk.features import _has_feature, _make_feature


class PipedriveSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = PipedriveUtility()
        self._utility = utility

        from pipedrive_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return PipedriveUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = PipedriveSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "PipedriveSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("PipedriveSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def ActivityField(self, data=None) -> "ActivityFieldEntity":
        """Entity factory: client.ActivityField().list() / client.ActivityField().load({"id": ...})."""
        from pipedrive_sdk.entity.activity_field_entity import ActivityFieldEntity
        return ActivityFieldEntity(self, data)


    def ActivityType(self, data=None) -> "ActivityTypeEntity":
        """Entity factory: client.ActivityType().list() / client.ActivityType().load({"id": ...})."""
        from pipedrive_sdk.entity.activity_type_entity import ActivityTypeEntity
        return ActivityTypeEntity(self, data)


    def Billing(self, data=None) -> "BillingEntity":
        """Entity factory: client.Billing().list() / client.Billing().load({"id": ...})."""
        from pipedrive_sdk.entity.billing_entity import BillingEntity
        return BillingEntity(self, data)


    def CallLog(self, data=None) -> "CallLogEntity":
        """Entity factory: client.CallLog().list() / client.CallLog().load({"id": ...})."""
        from pipedrive_sdk.entity.call_log_entity import CallLogEntity
        return CallLogEntity(self, data)


    def Channel(self, data=None) -> "ChannelEntity":
        """Entity factory: client.Channel().list() / client.Channel().load({"id": ...})."""
        from pipedrive_sdk.entity.channel_entity import ChannelEntity
        return ChannelEntity(self, data)


    def Currency(self, data=None) -> "CurrencyEntity":
        """Entity factory: client.Currency().list() / client.Currency().load({"id": ...})."""
        from pipedrive_sdk.entity.currency_entity import CurrencyEntity
        return CurrencyEntity(self, data)


    def Deal(self, data=None) -> "DealEntity":
        """Entity factory: client.Deal().list() / client.Deal().load({"id": ...})."""
        from pipedrive_sdk.entity.deal_entity import DealEntity
        return DealEntity(self, data)


    def DealField(self, data=None) -> "DealFieldEntity":
        """Entity factory: client.DealField().list() / client.DealField().load({"id": ...})."""
        from pipedrive_sdk.entity.deal_field_entity import DealFieldEntity
        return DealFieldEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from pipedrive_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def Filter(self, data=None) -> "FilterEntity":
        """Entity factory: client.Filter().list() / client.Filter().load({"id": ...})."""
        from pipedrive_sdk.entity.filter_entity import FilterEntity
        return FilterEntity(self, data)


    def Goal(self, data=None) -> "GoalEntity":
        """Entity factory: client.Goal().list() / client.Goal().load({"id": ...})."""
        from pipedrive_sdk.entity.goal_entity import GoalEntity
        return GoalEntity(self, data)


    def Lead(self, data=None) -> "LeadEntity":
        """Entity factory: client.Lead().list() / client.Lead().load({"id": ...})."""
        from pipedrive_sdk.entity.lead_entity import LeadEntity
        return LeadEntity(self, data)


    def LeadField(self, data=None) -> "LeadFieldEntity":
        """Entity factory: client.LeadField().list() / client.LeadField().load({"id": ...})."""
        from pipedrive_sdk.entity.lead_field_entity import LeadFieldEntity
        return LeadFieldEntity(self, data)


    def LeadLabel(self, data=None) -> "LeadLabelEntity":
        """Entity factory: client.LeadLabel().list() / client.LeadLabel().load({"id": ...})."""
        from pipedrive_sdk.entity.lead_label_entity import LeadLabelEntity
        return LeadLabelEntity(self, data)


    def LeadSource(self, data=None) -> "LeadSourceEntity":
        """Entity factory: client.LeadSource().list() / client.LeadSource().load({"id": ...})."""
        from pipedrive_sdk.entity.lead_source_entity import LeadSourceEntity
        return LeadSourceEntity(self, data)


    def LegacyTeam(self, data=None) -> "LegacyTeamEntity":
        """Entity factory: client.LegacyTeam().list() / client.LegacyTeam().load({"id": ...})."""
        from pipedrive_sdk.entity.legacy_team_entity import LegacyTeamEntity
        return LegacyTeamEntity(self, data)


    def Mailbox(self, data=None) -> "MailboxEntity":
        """Entity factory: client.Mailbox().list() / client.Mailbox().load({"id": ...})."""
        from pipedrive_sdk.entity.mailbox_entity import MailboxEntity
        return MailboxEntity(self, data)


    def Meeting(self, data=None) -> "MeetingEntity":
        """Entity factory: client.Meeting().list() / client.Meeting().load({"id": ...})."""
        from pipedrive_sdk.entity.meeting_entity import MeetingEntity
        return MeetingEntity(self, data)


    def Note(self, data=None) -> "NoteEntity":
        """Entity factory: client.Note().list() / client.Note().load({"id": ...})."""
        from pipedrive_sdk.entity.note_entity import NoteEntity
        return NoteEntity(self, data)


    def NoteField(self, data=None) -> "NoteFieldEntity":
        """Entity factory: client.NoteField().list() / client.NoteField().load({"id": ...})."""
        from pipedrive_sdk.entity.note_field_entity import NoteFieldEntity
        return NoteFieldEntity(self, data)


    def Oauth(self, data=None) -> "OauthEntity":
        """Entity factory: client.Oauth().list() / client.Oauth().load({"id": ...})."""
        from pipedrive_sdk.entity.oauth_entity import OauthEntity
        return OauthEntity(self, data)


    def Organization(self, data=None) -> "OrganizationEntity":
        """Entity factory: client.Organization().list() / client.Organization().load({"id": ...})."""
        from pipedrive_sdk.entity.organization_entity import OrganizationEntity
        return OrganizationEntity(self, data)


    def OrganizationField(self, data=None) -> "OrganizationFieldEntity":
        """Entity factory: client.OrganizationField().list() / client.OrganizationField().load({"id": ...})."""
        from pipedrive_sdk.entity.organization_field_entity import OrganizationFieldEntity
        return OrganizationFieldEntity(self, data)


    def OrganizationRelationship(self, data=None) -> "OrganizationRelationshipEntity":
        """Entity factory: client.OrganizationRelationship().list() / client.OrganizationRelationship().load({"id": ...})."""
        from pipedrive_sdk.entity.organization_relationship_entity import OrganizationRelationshipEntity
        return OrganizationRelationshipEntity(self, data)


    def PermissionSet(self, data=None) -> "PermissionSetEntity":
        """Entity factory: client.PermissionSet().list() / client.PermissionSet().load({"id": ...})."""
        from pipedrive_sdk.entity.permission_set_entity import PermissionSetEntity
        return PermissionSetEntity(self, data)


    def Person(self, data=None) -> "PersonEntity":
        """Entity factory: client.Person().list() / client.Person().load({"id": ...})."""
        from pipedrive_sdk.entity.person_entity import PersonEntity
        return PersonEntity(self, data)


    def PersonField(self, data=None) -> "PersonFieldEntity":
        """Entity factory: client.PersonField().list() / client.PersonField().load({"id": ...})."""
        from pipedrive_sdk.entity.person_field_entity import PersonFieldEntity
        return PersonFieldEntity(self, data)


    def Pipeline(self, data=None) -> "PipelineEntity":
        """Entity factory: client.Pipeline().list() / client.Pipeline().load({"id": ...})."""
        from pipedrive_sdk.entity.pipeline_entity import PipelineEntity
        return PipelineEntity(self, data)


    def Product(self, data=None) -> "ProductEntity":
        """Entity factory: client.Product().list() / client.Product().load({"id": ...})."""
        from pipedrive_sdk.entity.product_entity import ProductEntity
        return ProductEntity(self, data)


    def ProductField(self, data=None) -> "ProductFieldEntity":
        """Entity factory: client.ProductField().list() / client.ProductField().load({"id": ...})."""
        from pipedrive_sdk.entity.product_field_entity import ProductFieldEntity
        return ProductFieldEntity(self, data)


    def Project(self, data=None) -> "ProjectEntity":
        """Entity factory: client.Project().list() / client.Project().load({"id": ...})."""
        from pipedrive_sdk.entity.project_entity import ProjectEntity
        return ProjectEntity(self, data)


    def ProjectBoard(self, data=None) -> "ProjectBoardEntity":
        """Entity factory: client.ProjectBoard().list() / client.ProjectBoard().load({"id": ...})."""
        from pipedrive_sdk.entity.project_board_entity import ProjectBoardEntity
        return ProjectBoardEntity(self, data)


    def ProjectPhase(self, data=None) -> "ProjectPhaseEntity":
        """Entity factory: client.ProjectPhase().list() / client.ProjectPhase().load({"id": ...})."""
        from pipedrive_sdk.entity.project_phase_entity import ProjectPhaseEntity
        return ProjectPhaseEntity(self, data)


    def ProjectTemplate(self, data=None) -> "ProjectTemplateEntity":
        """Entity factory: client.ProjectTemplate().list() / client.ProjectTemplate().load({"id": ...})."""
        from pipedrive_sdk.entity.project_template_entity import ProjectTemplateEntity
        return ProjectTemplateEntity(self, data)


    def Recent(self, data=None) -> "RecentEntity":
        """Entity factory: client.Recent().list() / client.Recent().load({"id": ...})."""
        from pipedrive_sdk.entity.recent_entity import RecentEntity
        return RecentEntity(self, data)


    def Role(self, data=None) -> "RoleEntity":
        """Entity factory: client.Role().list() / client.Role().load({"id": ...})."""
        from pipedrive_sdk.entity.role_entity import RoleEntity
        return RoleEntity(self, data)


    def Stage(self, data=None) -> "StageEntity":
        """Entity factory: client.Stage().list() / client.Stage().load({"id": ...})."""
        from pipedrive_sdk.entity.stage_entity import StageEntity
        return StageEntity(self, data)


    def Task(self, data=None) -> "TaskEntity":
        """Entity factory: client.Task().list() / client.Task().load({"id": ...})."""
        from pipedrive_sdk.entity.task_entity import TaskEntity
        return TaskEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from pipedrive_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserConnection(self, data=None) -> "UserConnectionEntity":
        """Entity factory: client.UserConnection().list() / client.UserConnection().load({"id": ...})."""
        from pipedrive_sdk.entity.user_connection_entity import UserConnectionEntity
        return UserConnectionEntity(self, data)


    def UserSetting(self, data=None) -> "UserSettingEntity":
        """Entity factory: client.UserSetting().list() / client.UserSetting().load({"id": ...})."""
        from pipedrive_sdk.entity.user_setting_entity import UserSettingEntity
        return UserSettingEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from pipedrive_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "PipedriveSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from pipedrive_sdk.entity.activity_field_entity import ActivityFieldEntity
    from pipedrive_sdk.entity.activity_type_entity import ActivityTypeEntity
    from pipedrive_sdk.entity.billing_entity import BillingEntity
    from pipedrive_sdk.entity.call_log_entity import CallLogEntity
    from pipedrive_sdk.entity.channel_entity import ChannelEntity
    from pipedrive_sdk.entity.currency_entity import CurrencyEntity
    from pipedrive_sdk.entity.deal_entity import DealEntity
    from pipedrive_sdk.entity.deal_field_entity import DealFieldEntity
    from pipedrive_sdk.entity.file_entity import FileEntity
    from pipedrive_sdk.entity.filter_entity import FilterEntity
    from pipedrive_sdk.entity.goal_entity import GoalEntity
    from pipedrive_sdk.entity.lead_entity import LeadEntity
    from pipedrive_sdk.entity.lead_field_entity import LeadFieldEntity
    from pipedrive_sdk.entity.lead_label_entity import LeadLabelEntity
    from pipedrive_sdk.entity.lead_source_entity import LeadSourceEntity
    from pipedrive_sdk.entity.legacy_team_entity import LegacyTeamEntity
    from pipedrive_sdk.entity.mailbox_entity import MailboxEntity
    from pipedrive_sdk.entity.meeting_entity import MeetingEntity
    from pipedrive_sdk.entity.note_entity import NoteEntity
    from pipedrive_sdk.entity.note_field_entity import NoteFieldEntity
    from pipedrive_sdk.entity.oauth_entity import OauthEntity
    from pipedrive_sdk.entity.organization_entity import OrganizationEntity
    from pipedrive_sdk.entity.organization_field_entity import OrganizationFieldEntity
    from pipedrive_sdk.entity.organization_relationship_entity import OrganizationRelationshipEntity
    from pipedrive_sdk.entity.permission_set_entity import PermissionSetEntity
    from pipedrive_sdk.entity.person_entity import PersonEntity
    from pipedrive_sdk.entity.person_field_entity import PersonFieldEntity
    from pipedrive_sdk.entity.pipeline_entity import PipelineEntity
    from pipedrive_sdk.entity.product_entity import ProductEntity
    from pipedrive_sdk.entity.product_field_entity import ProductFieldEntity
    from pipedrive_sdk.entity.project_entity import ProjectEntity
    from pipedrive_sdk.entity.project_board_entity import ProjectBoardEntity
    from pipedrive_sdk.entity.project_phase_entity import ProjectPhaseEntity
    from pipedrive_sdk.entity.project_template_entity import ProjectTemplateEntity
    from pipedrive_sdk.entity.recent_entity import RecentEntity
    from pipedrive_sdk.entity.role_entity import RoleEntity
    from pipedrive_sdk.entity.stage_entity import StageEntity
    from pipedrive_sdk.entity.task_entity import TaskEntity
    from pipedrive_sdk.entity.user_entity import UserEntity
    from pipedrive_sdk.entity.user_connection_entity import UserConnectionEntity
    from pipedrive_sdk.entity.user_setting_entity import UserSettingEntity
    from pipedrive_sdk.entity.webhook_entity import WebhookEntity
