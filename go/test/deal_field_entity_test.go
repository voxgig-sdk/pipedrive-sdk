package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/pipedrive-sdk/go"
	"github.com/voxgig-sdk/pipedrive-sdk/go/core"

	vs "github.com/voxgig-sdk/pipedrive-sdk/go/utility/struct"
)

func TestDealFieldEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DealField(nil)
		if ent == nil {
			t.Fatal("expected non-nil DealFieldEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"deal_field": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DealField(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.DealField(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := deal_fieldBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "deal_field." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set PIPEDRIVE_TEST_DEAL_FIELD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dealFieldRef01Ent := client.DealField(nil)
		dealFieldRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "deal_field"}), "deal_field_ref01"))

		dealFieldRef01DataResult, err := dealFieldRef01Ent.Create(dealFieldRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dealFieldRef01Data = core.ToMapAny(entityData(dealFieldRef01DataResult))
		if dealFieldRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dealFieldRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		dealFieldRef01Match := map[string]any{}

		dealFieldRef01ListResult, err := dealFieldRef01Ent.List(dealFieldRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dealFieldRef01List, dealFieldRef01ListOk := dealFieldRef01ListResult.([]any)
		if !dealFieldRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dealFieldRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(dealFieldRef01List), map[string]any{"id": dealFieldRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		dealFieldRef01DataUp0Up := map[string]any{
			"id": dealFieldRef01Data["id"],
		}

		dealFieldRef01MarkdefUp0Name := "name"
		dealFieldRef01MarkdefUp0Value := fmt.Sprintf("Mark01-deal_field_ref01_%d", setup.now)
		dealFieldRef01DataUp0Up[dealFieldRef01MarkdefUp0Name] = dealFieldRef01MarkdefUp0Value

		dealFieldRef01ResdataUp0Result, err := dealFieldRef01Ent.Update(dealFieldRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dealFieldRef01ResdataUp0 := core.ToMapAny(entityData(dealFieldRef01ResdataUp0Result))
		if dealFieldRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dealFieldRef01ResdataUp0["id"] != dealFieldRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dealFieldRef01ResdataUp0[dealFieldRef01MarkdefUp0Name] != dealFieldRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dealFieldRef01MarkdefUp0Name, dealFieldRef01ResdataUp0[dealFieldRef01MarkdefUp0Name])
		}

		// LOAD
		dealFieldRef01MatchDt0 := map[string]any{
			"id": dealFieldRef01Data["id"],
		}
		dealFieldRef01DataDt0Loaded, err := dealFieldRef01Ent.Load(dealFieldRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dealFieldRef01DataDt0LoadResult := core.ToMapAny(entityData(dealFieldRef01DataDt0Loaded))
		if dealFieldRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dealFieldRef01DataDt0LoadResult["id"] != dealFieldRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dealFieldRef01MatchRm0 := map[string]any{
			"id": dealFieldRef01Data["id"],
		}
		_, err = dealFieldRef01Ent.Remove(dealFieldRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		dealFieldRef01MatchRt0 := map[string]any{}

		dealFieldRef01ListRt0Result, err := dealFieldRef01Ent.List(dealFieldRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dealFieldRef01ListRt0, dealFieldRef01ListRt0Ok := dealFieldRef01ListRt0Result.([]any)
		if !dealFieldRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", dealFieldRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(dealFieldRef01ListRt0), map[string]any{"id": dealFieldRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func deal_fieldBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "deal_field", "DealFieldTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read deal_field test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse deal_field test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"deal_field01", "deal_field02", "deal_field03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("PIPEDRIVE_TEST_DEAL_FIELD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PIPEDRIVE_TEST_DEAL_FIELD_ENTID": idmap,
		"PIPEDRIVE_TEST_LIVE":      "FALSE",
		"PIPEDRIVE_TEST_EXPLAIN":   "FALSE",
		"PIPEDRIVE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["PIPEDRIVE_TEST_DEAL_FIELD_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["PIPEDRIVE_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["PIPEDRIVE_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewPipedriveSDK(core.ToMapAny(mergedOpts))
	}

	live := env["PIPEDRIVE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["PIPEDRIVE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
