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
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActivityFieldEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewActivityFieldEntity(client, entopts)
	}
	core.NewActivityTypeEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewActivityTypeEntity(client, entopts)
	}
	core.NewBillingEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewBillingEntity(client, entopts)
	}
	core.NewCallLogEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewCallLogEntity(client, entopts)
	}
	core.NewChannelEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewChannelEntity(client, entopts)
	}
	core.NewCurrencyEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewCurrencyEntity(client, entopts)
	}
	core.NewDealEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewDealEntity(client, entopts)
	}
	core.NewDealFieldEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewDealFieldEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewFilterEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewFilterEntity(client, entopts)
	}
	core.NewGoalEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewGoalEntity(client, entopts)
	}
	core.NewLeadEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewLeadEntity(client, entopts)
	}
	core.NewLeadFieldEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewLeadFieldEntity(client, entopts)
	}
	core.NewLeadLabelEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewLeadLabelEntity(client, entopts)
	}
	core.NewLeadSourceEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewLeadSourceEntity(client, entopts)
	}
	core.NewLegacyTeamEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewLegacyTeamEntity(client, entopts)
	}
	core.NewMailboxEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewMailboxEntity(client, entopts)
	}
	core.NewMeetingEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewMeetingEntity(client, entopts)
	}
	core.NewNoteEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewNoteEntity(client, entopts)
	}
	core.NewNoteFieldEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewNoteFieldEntity(client, entopts)
	}
	core.NewOauthEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewOauthEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewOrganizationFieldEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewOrganizationFieldEntity(client, entopts)
	}
	core.NewOrganizationRelationshipEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewOrganizationRelationshipEntity(client, entopts)
	}
	core.NewPermissionSetEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewPermissionSetEntity(client, entopts)
	}
	core.NewPersonEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewPersonEntity(client, entopts)
	}
	core.NewPersonFieldEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewPersonFieldEntity(client, entopts)
	}
	core.NewPipelineEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewPipelineEntity(client, entopts)
	}
	core.NewProductEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewProductFieldEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewProductFieldEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewProjectEntity(client, entopts)
	}
	core.NewProjectBoardEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewProjectBoardEntity(client, entopts)
	}
	core.NewProjectPhaseEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewProjectPhaseEntity(client, entopts)
	}
	core.NewProjectTemplateEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewProjectTemplateEntity(client, entopts)
	}
	core.NewRecentEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewRecentEntity(client, entopts)
	}
	core.NewRoleEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewRoleEntity(client, entopts)
	}
	core.NewStageEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewStageEntity(client, entopts)
	}
	core.NewTaskEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewTaskEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserConnectionEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewUserConnectionEntity(client, entopts)
	}
	core.NewUserSettingEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewUserSettingEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.PipedriveSDK, entopts map[string]any) core.PipedriveEntity {
		return entity.NewWebhookEntity(client, entopts)
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
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
