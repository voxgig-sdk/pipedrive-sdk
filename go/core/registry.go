package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActivityFieldEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewActivityTypeEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewBillingEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewCallLogEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewChannelEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewCurrencyEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewDealEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewDealFieldEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewFileEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewFilterEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewGoalEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewLeadEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewLeadFieldEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewLeadLabelEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewLeadSourceEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewLegacyTeamEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewMailboxEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewMeetingEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewNoteEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewNoteFieldEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewOauthEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewOrganizationEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewOrganizationFieldEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewOrganizationRelationshipEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewPermissionSetEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewPersonEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewPersonFieldEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewPipelineEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewProductEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewProductFieldEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewProjectEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewProjectBoardEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewProjectPhaseEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewProjectTemplateEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewRecentEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewRoleEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewStageEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewTaskEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewUserEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewUserConnectionEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewUserSettingEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

var NewWebhookEntityFunc func(client *PipedriveSDK, entopts map[string]any) PipedriveEntity

