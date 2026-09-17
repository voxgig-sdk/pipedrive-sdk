# Recent entity test

import json
import os
import time

import pytest

from pipedrive_sdk.utility.voxgig_struct import voxgig_struct as vs
from pipedrive_sdk import PipedriveSDK
from pipedrive_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestRecentEntity:

    def test_should_create_instance(self):
        testsdk = PipedriveSDK.test(None, None)
        ent = testsdk.Recent(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "recent": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = PipedriveSDK.test(seed, None)
        seen = list(base.Recent(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from pipedrive_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = PipedriveSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Recent(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _recent_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "recent." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set PIPEDRIVE_TEST_RECENT_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        recent_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.recent")))
        recent_ref01_data = None
        if len(recent_ref01_data_raw) > 0:
            recent_ref01_data = helpers.to_map(recent_ref01_data_raw[0][1])

        # LIST
        recent_ref01_ent = client.Recent(None)
        recent_ref01_match = {}

        recent_ref01_list_result = recent_ref01_ent.list(recent_ref01_match, None)
        assert isinstance(recent_ref01_list_result, list)



def _recent_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/recent/RecentTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = PipedriveSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["recent01", "recent02", "recent03"],
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
        "PIPEDRIVE_TEST_RECENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "PIPEDRIVE_TEST_RECENT_ENTID": idmap,
        "PIPEDRIVE_TEST_LIVE": "FALSE",
        "PIPEDRIVE_TEST_EXPLAIN": "FALSE",
        "PIPEDRIVE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("PIPEDRIVE_TEST_RECENT_ENTID"))
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
