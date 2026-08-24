package voxgigpipedrivesdk

import (
	"github.com/voxgig-sdk/pipedrive-sdk/go/core"
	"github.com/voxgig-sdk/pipedrive-sdk/go/entity"
	"github.com/voxgig-sdk/pipedrive-sdk/go/feature"
	_ "github.com/voxgig-sdk/pipedrive-sdk/go/utility"
)

// Type aliases preserve external API.
type PipedriveSDK = core.PipedriveSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type PipedriveEntity = core.PipedriveEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type PipedriveError = core.PipedriveError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDealEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewDealEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewPipedriveSDK = core.NewPipedriveSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewPipedriveSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *PipedriveSDK  { return NewPipedriveSDK(nil) }
func Test() *PipedriveSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
