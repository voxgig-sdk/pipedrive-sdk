# Deal entity test

import json
import os
import time

import pytest

from pipedrive_sdk.utility.voxgig_struct import voxgig_struct as vs
from pipedrive_sdk import PipedriveSDK
from pipedrive_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestDealEntity:

    def test_should_create_instance(self):
        testsdk = PipedriveSDK.test(None, None)
        ent = testsdk.Deal(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "deal": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = PipedriveSDK.test(seed, None)
        seen = list(base.Deal(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from pipedrive_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = PipedriveSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Deal(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _deal_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "deal." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set PIPEDRIVE_TEST_DEAL_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        deal_ref01_ent = client.Deal(None)
        deal_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.deal"), "deal_ref01"))

        deal_ref01_data = helpers.to_map(runner.entity_data(deal_ref01_ent.create(deal_ref01_data, None)))
        assert deal_ref01_data is not None
        assert deal_ref01_data["id"] is not None

        # LIST
        deal_ref01_match = {}

        deal_ref01_list_result = deal_ref01_ent.list(deal_ref01_match, None)
        assert isinstance(deal_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(deal_ref01_list_result),
            {"id": deal_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        deal_ref01_data_up0_up = {
            "id": deal_ref01_data["id"],
        }

        deal_ref01_markdef_up0_name = "add_time"
        deal_ref01_markdef_up0_value = "Mark01-deal_ref01_" + str(setup["now"])
        deal_ref01_data_up0_up[deal_ref01_markdef_up0_name] = deal_ref01_markdef_up0_value

        deal_ref01_resdata_up0 = helpers.to_map(runner.entity_data(deal_ref01_ent.update(deal_ref01_data_up0_up, None)))
        assert deal_ref01_resdata_up0 is not None
        assert deal_ref01_resdata_up0["id"] == deal_ref01_data_up0_up["id"]
        assert deal_ref01_resdata_up0[deal_ref01_markdef_up0_name] == deal_ref01_markdef_up0_value

        # LOAD
        deal_ref01_match_dt0 = {
            "id": deal_ref01_data["id"],
        }
        deal_ref01_data_dt0_loaded = deal_ref01_ent.load(deal_ref01_match_dt0, None)
        deal_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(deal_ref01_data_dt0_loaded))
        assert deal_ref01_data_dt0_load_result is not None
        assert deal_ref01_data_dt0_load_result["id"] == deal_ref01_data["id"]

        # REMOVE
        deal_ref01_match_rm0 = {
            "id": deal_ref01_data["id"],
        }
        deal_ref01_ent.remove(deal_ref01_match_rm0, None)

        # LIST
        deal_ref01_match_rt0 = {}

        deal_ref01_list_rt0_result = deal_ref01_ent.list(deal_ref01_match_rt0, None)
        assert isinstance(deal_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(deal_ref01_list_rt0_result),
            {"id": deal_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _deal_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/deal/DealTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = PipedriveSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["deal01", "deal02", "deal03"],
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
        "PIPEDRIVE_TEST_DEAL_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "PIPEDRIVE_TEST_DEAL_ENTID": idmap,
        "PIPEDRIVE_TEST_LIVE": "FALSE",
        "PIPEDRIVE_TEST_EXPLAIN": "FALSE",
        "PIPEDRIVE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("PIPEDRIVE_TEST_DEAL_ENTID"))
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
