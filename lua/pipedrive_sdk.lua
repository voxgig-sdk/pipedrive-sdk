-- Pipedrive SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("pipedrive_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local PipedriveSDK = {}
PipedriveSDK.__index = PipedriveSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

PipedriveSDK._make_feature = _make_feature


function PipedriveSDK.new(options)
  local self = setmetatable({}, PipedriveSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function PipedriveSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function PipedriveSDK:get_utility()
  return Utility.copy(self._utility)
end


function PipedriveSDK:get_root_ctx()
  return self._rootctx
end


function PipedriveSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function PipedriveSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function PipedriveSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function PipedriveSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "PipedriveSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function PipedriveSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function PipedriveSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "PipedriveSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:ActivityField():list() / client:ActivityField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:ActivityField(data)
  local EntityMod = require("entity.activity_field_entity")
  if data == nil then
    if self._activity_field == nil then
      self._activity_field = EntityMod.new(self, nil)
    end
    return self._activity_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActivityType():list() / client:ActivityType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:ActivityType(data)
  local EntityMod = require("entity.activity_type_entity")
  if data == nil then
    if self._activity_type == nil then
      self._activity_type = EntityMod.new(self, nil)
    end
    return self._activity_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Billing():list() / client:Billing():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Billing(data)
  local EntityMod = require("entity.billing_entity")
  if data == nil then
    if self._billing == nil then
      self._billing = EntityMod.new(self, nil)
    end
    return self._billing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CallLog():list() / client:CallLog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:CallLog(data)
  local EntityMod = require("entity.call_log_entity")
  if data == nil then
    if self._call_log == nil then
      self._call_log = EntityMod.new(self, nil)
    end
    return self._call_log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Channel():list() / client:Channel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Channel(data)
  local EntityMod = require("entity.channel_entity")
  if data == nil then
    if self._channel == nil then
      self._channel = EntityMod.new(self, nil)
    end
    return self._channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Currency():list() / client:Currency():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Currency(data)
  local EntityMod = require("entity.currency_entity")
  if data == nil then
    if self._currency == nil then
      self._currency = EntityMod.new(self, nil)
    end
    return self._currency
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Deal():list() / client:Deal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Deal(data)
  local EntityMod = require("entity.deal_entity")
  if data == nil then
    if self._deal == nil then
      self._deal = EntityMod.new(self, nil)
    end
    return self._deal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DealField():list() / client:DealField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:DealField(data)
  local EntityMod = require("entity.deal_field_entity")
  if data == nil then
    if self._deal_field == nil then
      self._deal_field = EntityMod.new(self, nil)
    end
    return self._deal_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:File():list() / client:File():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:File(data)
  local EntityMod = require("entity.file_entity")
  if data == nil then
    if self._file == nil then
      self._file = EntityMod.new(self, nil)
    end
    return self._file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Filter():list() / client:Filter():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Filter(data)
  local EntityMod = require("entity.filter_entity")
  if data == nil then
    if self._filter == nil then
      self._filter = EntityMod.new(self, nil)
    end
    return self._filter
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Goal():list() / client:Goal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Goal(data)
  local EntityMod = require("entity.goal_entity")
  if data == nil then
    if self._goal == nil then
      self._goal = EntityMod.new(self, nil)
    end
    return self._goal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Lead():list() / client:Lead():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Lead(data)
  local EntityMod = require("entity.lead_entity")
  if data == nil then
    if self._lead == nil then
      self._lead = EntityMod.new(self, nil)
    end
    return self._lead
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LeadField():list() / client:LeadField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:LeadField(data)
  local EntityMod = require("entity.lead_field_entity")
  if data == nil then
    if self._lead_field == nil then
      self._lead_field = EntityMod.new(self, nil)
    end
    return self._lead_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LeadLabel():list() / client:LeadLabel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:LeadLabel(data)
  local EntityMod = require("entity.lead_label_entity")
  if data == nil then
    if self._lead_label == nil then
      self._lead_label = EntityMod.new(self, nil)
    end
    return self._lead_label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LeadSource():list() / client:LeadSource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:LeadSource(data)
  local EntityMod = require("entity.lead_source_entity")
  if data == nil then
    if self._lead_source == nil then
      self._lead_source = EntityMod.new(self, nil)
    end
    return self._lead_source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LegacyTeam():list() / client:LegacyTeam():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:LegacyTeam(data)
  local EntityMod = require("entity.legacy_team_entity")
  if data == nil then
    if self._legacy_team == nil then
      self._legacy_team = EntityMod.new(self, nil)
    end
    return self._legacy_team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Mailbox():list() / client:Mailbox():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Mailbox(data)
  local EntityMod = require("entity.mailbox_entity")
  if data == nil then
    if self._mailbox == nil then
      self._mailbox = EntityMod.new(self, nil)
    end
    return self._mailbox
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Meeting():list() / client:Meeting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Meeting(data)
  local EntityMod = require("entity.meeting_entity")
  if data == nil then
    if self._meeting == nil then
      self._meeting = EntityMod.new(self, nil)
    end
    return self._meeting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Note():list() / client:Note():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Note(data)
  local EntityMod = require("entity.note_entity")
  if data == nil then
    if self._note == nil then
      self._note = EntityMod.new(self, nil)
    end
    return self._note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NoteField():list() / client:NoteField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:NoteField(data)
  local EntityMod = require("entity.note_field_entity")
  if data == nil then
    if self._note_field == nil then
      self._note_field = EntityMod.new(self, nil)
    end
    return self._note_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Oauth():list() / client:Oauth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Oauth(data)
  local EntityMod = require("entity.oauth_entity")
  if data == nil then
    if self._oauth == nil then
      self._oauth = EntityMod.new(self, nil)
    end
    return self._oauth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Organization():list() / client:Organization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Organization(data)
  local EntityMod = require("entity.organization_entity")
  if data == nil then
    if self._organization == nil then
      self._organization = EntityMod.new(self, nil)
    end
    return self._organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationField():list() / client:OrganizationField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:OrganizationField(data)
  local EntityMod = require("entity.organization_field_entity")
  if data == nil then
    if self._organization_field == nil then
      self._organization_field = EntityMod.new(self, nil)
    end
    return self._organization_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationRelationship():list() / client:OrganizationRelationship():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:OrganizationRelationship(data)
  local EntityMod = require("entity.organization_relationship_entity")
  if data == nil then
    if self._organization_relationship == nil then
      self._organization_relationship = EntityMod.new(self, nil)
    end
    return self._organization_relationship
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PermissionSet():list() / client:PermissionSet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:PermissionSet(data)
  local EntityMod = require("entity.permission_set_entity")
  if data == nil then
    if self._permission_set == nil then
      self._permission_set = EntityMod.new(self, nil)
    end
    return self._permission_set
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Person():list() / client:Person():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Person(data)
  local EntityMod = require("entity.person_entity")
  if data == nil then
    if self._person == nil then
      self._person = EntityMod.new(self, nil)
    end
    return self._person
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PersonField():list() / client:PersonField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:PersonField(data)
  local EntityMod = require("entity.person_field_entity")
  if data == nil then
    if self._person_field == nil then
      self._person_field = EntityMod.new(self, nil)
    end
    return self._person_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Pipeline():list() / client:Pipeline():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Pipeline(data)
  local EntityMod = require("entity.pipeline_entity")
  if data == nil then
    if self._pipeline == nil then
      self._pipeline = EntityMod.new(self, nil)
    end
    return self._pipeline
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Product():list() / client:Product():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Product(data)
  local EntityMod = require("entity.product_entity")
  if data == nil then
    if self._product == nil then
      self._product = EntityMod.new(self, nil)
    end
    return self._product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductField():list() / client:ProductField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:ProductField(data)
  local EntityMod = require("entity.product_field_entity")
  if data == nil then
    if self._product_field == nil then
      self._product_field = EntityMod.new(self, nil)
    end
    return self._product_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Project():list() / client:Project():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Project(data)
  local EntityMod = require("entity.project_entity")
  if data == nil then
    if self._project == nil then
      self._project = EntityMod.new(self, nil)
    end
    return self._project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectBoard():list() / client:ProjectBoard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:ProjectBoard(data)
  local EntityMod = require("entity.project_board_entity")
  if data == nil then
    if self._project_board == nil then
      self._project_board = EntityMod.new(self, nil)
    end
    return self._project_board
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectPhase():list() / client:ProjectPhase():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:ProjectPhase(data)
  local EntityMod = require("entity.project_phase_entity")
  if data == nil then
    if self._project_phase == nil then
      self._project_phase = EntityMod.new(self, nil)
    end
    return self._project_phase
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectTemplate():list() / client:ProjectTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:ProjectTemplate(data)
  local EntityMod = require("entity.project_template_entity")
  if data == nil then
    if self._project_template == nil then
      self._project_template = EntityMod.new(self, nil)
    end
    return self._project_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Recent():list() / client:Recent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Recent(data)
  local EntityMod = require("entity.recent_entity")
  if data == nil then
    if self._recent == nil then
      self._recent = EntityMod.new(self, nil)
    end
    return self._recent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Role():list() / client:Role():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Role(data)
  local EntityMod = require("entity.role_entity")
  if data == nil then
    if self._role == nil then
      self._role = EntityMod.new(self, nil)
    end
    return self._role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Stage():list() / client:Stage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Stage(data)
  local EntityMod = require("entity.stage_entity")
  if data == nil then
    if self._stage == nil then
      self._stage = EntityMod.new(self, nil)
    end
    return self._stage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Task():list() / client:Task():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Task(data)
  local EntityMod = require("entity.task_entity")
  if data == nil then
    if self._task == nil then
      self._task = EntityMod.new(self, nil)
    end
    return self._task
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserConnection():list() / client:UserConnection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:UserConnection(data)
  local EntityMod = require("entity.user_connection_entity")
  if data == nil then
    if self._user_connection == nil then
      self._user_connection = EntityMod.new(self, nil)
    end
    return self._user_connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserSetting():list() / client:UserSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:UserSetting(data)
  local EntityMod = require("entity.user_setting_entity")
  if data == nil then
    if self._user_setting == nil then
      self._user_setting = EntityMod.new(self, nil)
    end
    return self._user_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function PipedriveSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end




function PipedriveSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = PipedriveSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return PipedriveSDK
