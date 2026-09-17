-- Goal entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("pipedrive_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("GoalEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Goal(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = goal_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "goal." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set PIPEDRIVE_TEST_GOAL_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local goal_ref01_ent = client:Goal(nil)
    local goal_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.goal"), "goal_ref01"))

    local goal_ref01_data_result, err = goal_ref01_ent:create(goal_ref01_data, nil)
    assert.is_nil(err)
    goal_ref01_data = helpers.to_map(type(goal_ref01_data_result) == 'table' and goal_ref01_data_result.data_get and goal_ref01_data_result:data_get() or goal_ref01_data_result)
    assert.is_not_nil(goal_ref01_data)
    assert.is_not_nil(goal_ref01_data["id"])

    -- UPDATE
    local goal_ref01_data_up0_up = {
      id = goal_ref01_data["id"],
    }

    local goal_ref01_markdef_up0_name = "interval"
    local goal_ref01_markdef_up0_value = "Mark01-goal_ref01_" .. tostring(setup.now)
    goal_ref01_data_up0_up[goal_ref01_markdef_up0_name] = goal_ref01_markdef_up0_value

    local goal_ref01_resdata_up0_result, err = goal_ref01_ent:update(goal_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local goal_ref01_resdata_up0 = helpers.to_map(type(goal_ref01_resdata_up0_result) == 'table' and goal_ref01_resdata_up0_result.data_get and goal_ref01_resdata_up0_result:data_get() or goal_ref01_resdata_up0_result)
    assert.is_not_nil(goal_ref01_resdata_up0)
    assert.are.equal(goal_ref01_resdata_up0["id"], goal_ref01_data_up0_up["id"])
    assert.are.equal(goal_ref01_resdata_up0[goal_ref01_markdef_up0_name], goal_ref01_markdef_up0_value)

    -- LOAD
    local goal_ref01_match_dt0 = {
      id = goal_ref01_data["id"],
    }
    local goal_ref01_data_dt0_loaded, err = goal_ref01_ent:load(goal_ref01_match_dt0, nil)
    assert.is_nil(err)
    local goal_ref01_data_dt0_load_result = helpers.to_map(type(goal_ref01_data_dt0_loaded) == 'table' and goal_ref01_data_dt0_loaded.data_get and goal_ref01_data_dt0_loaded:data_get() or goal_ref01_data_dt0_loaded)
    assert.is_not_nil(goal_ref01_data_dt0_load_result)
    assert.are.equal(goal_ref01_data_dt0_load_result["id"], goal_ref01_data["id"])

    -- REMOVE
    local goal_ref01_match_rm0 = {
      id = goal_ref01_data["id"],
    }
    local _, err = goal_ref01_ent:remove(goal_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function goal_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/goal/GoalTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read goal test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "goal01", "goal02", "goal03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("PIPEDRIVE_TEST_GOAL_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["PIPEDRIVE_TEST_GOAL_ENTID"] = idmap,
    ["PIPEDRIVE_TEST_LIVE"] = "FALSE",
    ["PIPEDRIVE_TEST_EXPLAIN"] = "FALSE",
    ["PIPEDRIVE_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["PIPEDRIVE_TEST_GOAL_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["PIPEDRIVE_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["PIPEDRIVE_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["PIPEDRIVE_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["PIPEDRIVE_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
