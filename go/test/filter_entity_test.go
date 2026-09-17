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

func TestFilterEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Filter(nil)
		if ent == nil {
			t.Fatal("expected non-nil FilterEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"filter": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Filter(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Filter(nil).Stream("list", nil, nil) {
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
		setup := filterBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "filter." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set PIPEDRIVE_TEST_FILTER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		filterRef01Ent := client.Filter(nil)
		filterRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "filter"}), "filter_ref01"))

		filterRef01DataResult, err := filterRef01Ent.Create(filterRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		filterRef01Data = core.ToMapAny(entityData(filterRef01DataResult))
		if filterRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if filterRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		filterRef01Match := map[string]any{}

		filterRef01ListResult, err := filterRef01Ent.List(filterRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		filterRef01List, filterRef01ListOk := filterRef01ListResult.([]any)
		if !filterRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", filterRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(filterRef01List), map[string]any{"id": filterRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		filterRef01DataUp0Up := map[string]any{
			"id": filterRef01Data["id"],
		}

		filterRef01MarkdefUp0Name := "name"
		filterRef01MarkdefUp0Value := fmt.Sprintf("Mark01-filter_ref01_%d", setup.now)
		filterRef01DataUp0Up[filterRef01MarkdefUp0Name] = filterRef01MarkdefUp0Value

		filterRef01ResdataUp0Result, err := filterRef01Ent.Update(filterRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		filterRef01ResdataUp0 := core.ToMapAny(entityData(filterRef01ResdataUp0Result))
		if filterRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if filterRef01ResdataUp0["id"] != filterRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if filterRef01ResdataUp0[filterRef01MarkdefUp0Name] != filterRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", filterRef01MarkdefUp0Name, filterRef01ResdataUp0[filterRef01MarkdefUp0Name])
		}

		// LOAD
		filterRef01MatchDt0 := map[string]any{
			"id": filterRef01Data["id"],
		}
		filterRef01DataDt0Loaded, err := filterRef01Ent.Load(filterRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		filterRef01DataDt0LoadResult := core.ToMapAny(entityData(filterRef01DataDt0Loaded))
		if filterRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if filterRef01DataDt0LoadResult["id"] != filterRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		filterRef01MatchRm0 := map[string]any{
			"id": filterRef01Data["id"],
		}
		_, err = filterRef01Ent.Remove(filterRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		filterRef01MatchRt0 := map[string]any{}

		filterRef01ListRt0Result, err := filterRef01Ent.List(filterRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		filterRef01ListRt0, filterRef01ListRt0Ok := filterRef01ListRt0Result.([]any)
		if !filterRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", filterRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(filterRef01ListRt0), map[string]any{"id": filterRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func filterBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "filter", "FilterTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read filter test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse filter test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"filter01", "filter02", "filter03"},
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
	entidEnvRaw := os.Getenv("PIPEDRIVE_TEST_FILTER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PIPEDRIVE_TEST_FILTER_ENTID": idmap,
		"PIPEDRIVE_TEST_LIVE":      "FALSE",
		"PIPEDRIVE_TEST_EXPLAIN":   "FALSE",
		"PIPEDRIVE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["PIPEDRIVE_TEST_FILTER_ENTID"])
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
