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

func TestGoalEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Goal(nil)
		if ent == nil {
			t.Fatal("expected non-nil GoalEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := goalBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "goal." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set PIPEDRIVE_TEST_GOAL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		goalRef01Ent := client.Goal(nil)
		goalRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "goal"}), "goal_ref01"))

		goalRef01DataResult, err := goalRef01Ent.Create(goalRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		goalRef01Data = core.ToMapAny(entityData(goalRef01DataResult))
		if goalRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if goalRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		goalRef01DataUp0Up := map[string]any{
			"id": goalRef01Data["id"],
		}

		goalRef01MarkdefUp0Name := "interval"
		goalRef01MarkdefUp0Value := fmt.Sprintf("Mark01-goal_ref01_%d", setup.now)
		goalRef01DataUp0Up[goalRef01MarkdefUp0Name] = goalRef01MarkdefUp0Value

		goalRef01ResdataUp0Result, err := goalRef01Ent.Update(goalRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		goalRef01ResdataUp0 := core.ToMapAny(entityData(goalRef01ResdataUp0Result))
		if goalRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if goalRef01ResdataUp0["id"] != goalRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if goalRef01ResdataUp0[goalRef01MarkdefUp0Name] != goalRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", goalRef01MarkdefUp0Name, goalRef01ResdataUp0[goalRef01MarkdefUp0Name])
		}

		// LOAD
		goalRef01MatchDt0 := map[string]any{
			"id": goalRef01Data["id"],
		}
		goalRef01DataDt0Loaded, err := goalRef01Ent.Load(goalRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		goalRef01DataDt0LoadResult := core.ToMapAny(entityData(goalRef01DataDt0Loaded))
		if goalRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if goalRef01DataDt0LoadResult["id"] != goalRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		goalRef01MatchRm0 := map[string]any{
			"id": goalRef01Data["id"],
		}
		_, err = goalRef01Ent.Remove(goalRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func goalBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "goal", "GoalTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read goal test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse goal test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"goal01", "goal02", "goal03"},
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
	entidEnvRaw := os.Getenv("PIPEDRIVE_TEST_GOAL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PIPEDRIVE_TEST_GOAL_ENTID": idmap,
		"PIPEDRIVE_TEST_LIVE":      "FALSE",
		"PIPEDRIVE_TEST_EXPLAIN":   "FALSE",
		"PIPEDRIVE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["PIPEDRIVE_TEST_GOAL_ENTID"])
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
