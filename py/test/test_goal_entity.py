# Goal entity test

import json
import os
import time

import pytest

from pipedrive_sdk.utility.voxgig_struct import voxgig_struct as vs
from pipedrive_sdk import PipedriveSDK
from pipedrive_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestGoalEntity:

    def test_should_create_instance(self):
        testsdk = PipedriveSDK.test(None, None)
        ent = testsdk.Goal(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _goal_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "goal." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set PIPEDRIVE_TEST_GOAL_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        goal_ref01_ent = client.Goal(None)
        goal_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.goal"), "goal_ref01"))

        goal_ref01_data = helpers.to_map(runner.entity_data(goal_ref01_ent.create(goal_ref01_data, None)))
        assert goal_ref01_data is not None
        assert goal_ref01_data["id"] is not None

        # UPDATE
        goal_ref01_data_up0_up = {
            "id": goal_ref01_data["id"],
        }

        goal_ref01_markdef_up0_name = "interval"
        goal_ref01_markdef_up0_value = "Mark01-goal_ref01_" + str(setup["now"])
        goal_ref01_data_up0_up[goal_ref01_markdef_up0_name] = goal_ref01_markdef_up0_value

        goal_ref01_resdata_up0 = helpers.to_map(runner.entity_data(goal_ref01_ent.update(goal_ref01_data_up0_up, None)))
        assert goal_ref01_resdata_up0 is not None
        assert goal_ref01_resdata_up0["id"] == goal_ref01_data_up0_up["id"]
        assert goal_ref01_resdata_up0[goal_ref01_markdef_up0_name] == goal_ref01_markdef_up0_value

        # LOAD
        goal_ref01_match_dt0 = {
            "id": goal_ref01_data["id"],
        }
        goal_ref01_data_dt0_loaded = goal_ref01_ent.load(goal_ref01_match_dt0, None)
        goal_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(goal_ref01_data_dt0_loaded))
        assert goal_ref01_data_dt0_load_result is not None
        assert goal_ref01_data_dt0_load_result["id"] == goal_ref01_data["id"]

        # REMOVE
        goal_ref01_match_rm0 = {
            "id": goal_ref01_data["id"],
        }
        goal_ref01_ent.remove(goal_ref01_match_rm0, None)



def _goal_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/goal/GoalTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = PipedriveSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["goal01", "goal02", "goal03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "PIPEDRIVE_TEST_GOAL_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "PIPEDRIVE_TEST_GOAL_ENTID": idmap,
        "PIPEDRIVE_TEST_LIVE": "FALSE",
        "PIPEDRIVE_TEST_EXPLAIN": "FALSE",
        "PIPEDRIVE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("PIPEDRIVE_TEST_GOAL_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("PIPEDRIVE_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("PIPEDRIVE_APIKEY"),
            },
            extra or {},
        ])
        client = PipedriveSDK(helpers.to_map(merged_opts))

    _live = env.get("PIPEDRIVE_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("PIPEDRIVE_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
