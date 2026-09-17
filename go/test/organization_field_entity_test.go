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

func TestOrganizationFieldEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OrganizationField(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrganizationFieldEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"organization_field": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.OrganizationField(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.OrganizationField(nil).Stream("list", nil, nil) {
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
		setup := organization_fieldBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "organization_field." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set PIPEDRIVE_TEST_ORGANIZATION_FIELD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		organizationFieldRef01Ent := client.OrganizationField(nil)
		organizationFieldRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "organization_field"}), "organization_field_ref01"))

		organizationFieldRef01DataResult, err := organizationFieldRef01Ent.Create(organizationFieldRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		organizationFieldRef01Data = core.ToMapAny(entityData(organizationFieldRef01DataResult))
		if organizationFieldRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if organizationFieldRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		organizationFieldRef01Match := map[string]any{}

		organizationFieldRef01ListResult, err := organizationFieldRef01Ent.List(organizationFieldRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		organizationFieldRef01List, organizationFieldRef01ListOk := organizationFieldRef01ListResult.([]any)
		if !organizationFieldRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", organizationFieldRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(organizationFieldRef01List), map[string]any{"id": organizationFieldRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		organizationFieldRef01DataUp0Up := map[string]any{
			"id": organizationFieldRef01Data["id"],
		}

		organizationFieldRef01MarkdefUp0Name := "name"
		organizationFieldRef01MarkdefUp0Value := fmt.Sprintf("Mark01-organization_field_ref01_%d", setup.now)
		organizationFieldRef01DataUp0Up[organizationFieldRef01MarkdefUp0Name] = organizationFieldRef01MarkdefUp0Value

		organizationFieldRef01ResdataUp0Result, err := organizationFieldRef01Ent.Update(organizationFieldRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		organizationFieldRef01ResdataUp0 := core.ToMapAny(entityData(organizationFieldRef01ResdataUp0Result))
		if organizationFieldRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if organizationFieldRef01ResdataUp0["id"] != organizationFieldRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if organizationFieldRef01ResdataUp0[organizationFieldRef01MarkdefUp0Name] != organizationFieldRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", organizationFieldRef01MarkdefUp0Name, organizationFieldRef01ResdataUp0[organizationFieldRef01MarkdefUp0Name])
		}

		// LOAD
		organizationFieldRef01MatchDt0 := map[string]any{
			"id": organizationFieldRef01Data["id"],
		}
		organizationFieldRef01DataDt0Loaded, err := organizationFieldRef01Ent.Load(organizationFieldRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		organizationFieldRef01DataDt0LoadResult := core.ToMapAny(entityData(organizationFieldRef01DataDt0Loaded))
		if organizationFieldRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if organizationFieldRef01DataDt0LoadResult["id"] != organizationFieldRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		organizationFieldRef01MatchRm0 := map[string]any{
			"id": organizationFieldRef01Data["id"],
		}
		_, err = organizationFieldRef01Ent.Remove(organizationFieldRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		organizationFieldRef01MatchRt0 := map[string]any{}

		organizationFieldRef01ListRt0Result, err := organizationFieldRef01Ent.List(organizationFieldRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		organizationFieldRef01ListRt0, organizationFieldRef01ListRt0Ok := organizationFieldRef01ListRt0Result.([]any)
		if !organizationFieldRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", organizationFieldRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(organizationFieldRef01ListRt0), map[string]any{"id": organizationFieldRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func organization_fieldBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "organization_field", "OrganizationFieldTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read organization_field test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse organization_field test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"organization_field01", "organization_field02", "organization_field03"},
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
	entidEnvRaw := os.Getenv("PIPEDRIVE_TEST_ORGANIZATION_FIELD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PIPEDRIVE_TEST_ORGANIZATION_FIELD_ENTID": idmap,
		"PIPEDRIVE_TEST_LIVE":      "FALSE",
		"PIPEDRIVE_TEST_EXPLAIN":   "FALSE",
		"PIPEDRIVE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["PIPEDRIVE_TEST_ORGANIZATION_FIELD_ENTID"])
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
