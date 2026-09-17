// Typed models for the Pipedrive SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/pipedrive-sdk/go/core"
)

// ActivityField is the typed data model for the activity_field entity.
type ActivityField struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ActivityFieldListMatch is the typed request payload for ActivityField.ListTyped.
type ActivityFieldListMatch struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ActivityType is the typed data model for the activity_type entity.
type ActivityType struct {
	Color *string `json:"color,omitempty"`
	Data *[]any `json:"data,omitempty"`
	IconKey string `json:"icon_key"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	OrderNr *int `json:"order_nr,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ActivityTypeListMatch is the typed request payload for ActivityType.ListTyped.
type ActivityTypeListMatch struct {
	Color *string `json:"color,omitempty"`
	Data *[]any `json:"data,omitempty"`
	IconKey *string `json:"icon_key,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderNr *int `json:"order_nr,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ActivityTypeCreateData is the typed request payload for ActivityType.CreateTyped.
type ActivityTypeCreateData struct {
	Color *string `json:"color,omitempty"`
	Data *[]any `json:"data,omitempty"`
	IconKey string `json:"icon_key"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	OrderNr *int `json:"order_nr,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ActivityTypeUpdateData is the typed request payload for ActivityType.UpdateTyped.
type ActivityTypeUpdateData struct {
	Id int `json:"id"`
	Color *string `json:"color,omitempty"`
	Data *[]any `json:"data,omitempty"`
	IconKey *string `json:"icon_key,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderNr *int `json:"order_nr,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ActivityTypeRemoveMatch is the typed request payload for ActivityType.RemoveTyped.
type ActivityTypeRemoveMatch struct {
	Id int `json:"id"`
}

// Billing is the typed data model for the billing entity.
type Billing struct {
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// BillingListMatch is the typed request payload for Billing.ListTyped.
type BillingListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// CallLog is the typed data model for the call_log entity.
type CallLog struct {
	ActivityId *int `json:"activity_id,omitempty"`
	CompanyId *int `json:"company_id,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	Duration *string `json:"duration,omitempty"`
	EndTime string `json:"end_time"`
	FromPhoneNumber *string `json:"from_phone_number,omitempty"`
	HasRecording *bool `json:"has_recording,omitempty"`
	Id *string `json:"id,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	Note *string `json:"note,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	Outcome string `json:"outcome"`
	PersonId *int `json:"person_id,omitempty"`
	StartTime string `json:"start_time"`
	Subject *string `json:"subject,omitempty"`
	ToPhoneNumber string `json:"to_phone_number"`
	UserId *int `json:"user_id,omitempty"`
}

// CallLogLoadMatch is the typed request payload for CallLog.LoadTyped.
type CallLogLoadMatch struct {
	Id string `json:"id"`
}

// CallLogListMatch is the typed request payload for CallLog.ListTyped.
type CallLogListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
}

// CallLogCreateData is the typed request payload for CallLog.CreateTyped.
type CallLogCreateData struct {
	ActivityId *int `json:"activity_id,omitempty"`
	CompanyId *int `json:"company_id,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	Duration *string `json:"duration,omitempty"`
	EndTime string `json:"end_time"`
	FromPhoneNumber *string `json:"from_phone_number,omitempty"`
	HasRecording *bool `json:"has_recording,omitempty"`
	Id *string `json:"id,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	Note *string `json:"note,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	Outcome string `json:"outcome"`
	PersonId *int `json:"person_id,omitempty"`
	StartTime string `json:"start_time"`
	Subject *string `json:"subject,omitempty"`
	ToPhoneNumber string `json:"to_phone_number"`
	UserId *int `json:"user_id,omitempty"`
}

// CallLogRemoveMatch is the typed request payload for CallLog.RemoveTyped.
type CallLogRemoveMatch struct {
	Id string `json:"id"`
}

// Channel is the typed data model for the channel entity.
type Channel struct {
	Attachments *[]any `json:"attachments,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	ChannelId string `json:"channel_id"`
	ConversationId string `json:"conversation_id"`
	ConversationLink *string `json:"conversation_link,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	MarketplaceClientId *string `json:"marketplace_client_id,omitempty"`
	Message string `json:"message"`
	Name *string `json:"name,omitempty"`
	PdCompanyId *int `json:"pd_company_id,omitempty"`
	PdUserId *int `json:"pd_user_id,omitempty"`
	ProviderChannelId *string `json:"provider_channel_id,omitempty"`
	ProviderType *string `json:"provider_type,omitempty"`
	ReplyBy *string `json:"reply_by,omitempty"`
	SenderId string `json:"sender_id"`
	Status string `json:"status"`
	TemplateSupport *bool `json:"template_support,omitempty"`
}

// ChannelCreateData is the typed request payload for Channel.CreateTyped.
type ChannelCreateData struct {
	Attachments *[]any `json:"attachments,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	ChannelId string `json:"channel_id"`
	ConversationId string `json:"conversation_id"`
	ConversationLink *string `json:"conversation_link,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	MarketplaceClientId *string `json:"marketplace_client_id,omitempty"`
	Message string `json:"message"`
	Name *string `json:"name,omitempty"`
	PdCompanyId *int `json:"pd_company_id,omitempty"`
	PdUserId *int `json:"pd_user_id,omitempty"`
	ProviderChannelId *string `json:"provider_channel_id,omitempty"`
	ProviderType *string `json:"provider_type,omitempty"`
	ReplyBy *string `json:"reply_by,omitempty"`
	SenderId string `json:"sender_id"`
	Status string `json:"status"`
	TemplateSupport *bool `json:"template_support,omitempty"`
}

// ChannelRemoveMatch is the typed request payload for Channel.RemoveTyped.
type ChannelRemoveMatch struct {
	ConversationId *string `json:"conversation_id,omitempty"`
	Id string `json:"id"`
}

// Currency is the typed data model for the currency entity.
type Currency struct {
	ActiveFlag *bool `json:"active_flag,omitempty"`
	Code *string `json:"code,omitempty"`
	DecimalPoints *int `json:"decimal_points,omitempty"`
	Id *int `json:"id,omitempty"`
	IsCustomFlag *bool `json:"is_custom_flag,omitempty"`
	Name *string `json:"name,omitempty"`
	Symbol *string `json:"symbol,omitempty"`
}

// CurrencyListMatch is the typed request payload for Currency.ListTyped.
type CurrencyListMatch struct {
	Term *string `json:"term,omitempty"`
}

// Deal is the typed data model for the deal entity.
type Deal struct {
	Deals *[]any `json:"deals,omitempty"`
	Id *string `json:"id,omitempty"`
	PeriodEnd *string `json:"period_end,omitempty"`
	PeriodStart *string `json:"period_start,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TotalCurrencyConvertedValue *float64 `json:"total_currency_converted_value,omitempty"`
	TotalCurrencyConvertedValueFormatted *string `json:"total_currency_converted_value_formatted,omitempty"`
	TotalWeightedCurrencyConvertedValue *float64 `json:"total_weighted_currency_converted_value,omitempty"`
	TotalWeightedCurrencyConvertedValueFormatted *string `json:"total_weighted_currency_converted_value_formatted,omitempty"`
	Totals *map[string]any `json:"totals,omitempty"`
	ValuesTotal *map[string]any `json:"values_total,omitempty"`
	WeightedValuesTotal *map[string]any `json:"weighted_values_total,omitempty"`
}

// DealLoadMatch is the typed request payload for Deal.LoadTyped.
type DealLoadMatch struct {
	Amount int `json:"amount"`
	ExcludeDeal *float64 `json:"exclude_deal,omitempty"`
	FieldKey string `json:"field_key"`
	FilterId *int `json:"filter_id,omitempty"`
	Interval string `json:"interval"`
	PipelineId *int `json:"pipeline_id,omitempty"`
	StartDate string `json:"start_date"`
	TotalsConvertCurrency *string `json:"totals_convert_currency,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// DealListMatch is the typed request payload for Deal.ListTyped.
type DealListMatch struct {
	FilterId *int `json:"filter_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	OwnedByYou *float64 `json:"owned_by_you,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PipelineId *int `json:"pipeline_id,omitempty"`
	ProductId *int `json:"product_id,omitempty"`
	Sort *string `json:"sort,omitempty"`
	StageId *int `json:"stage_id,omitempty"`
	Start *int `json:"start,omitempty"`
	Status *string `json:"status,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// DealCreateData is the typed request payload for Deal.CreateTyped.
type DealCreateData struct {
	Id int `json:"id"`
	Deals *[]any `json:"deals,omitempty"`
	PeriodEnd *string `json:"period_end,omitempty"`
	PeriodStart *string `json:"period_start,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TotalCurrencyConvertedValue *float64 `json:"total_currency_converted_value,omitempty"`
	TotalCurrencyConvertedValueFormatted *string `json:"total_currency_converted_value_formatted,omitempty"`
	TotalWeightedCurrencyConvertedValue *float64 `json:"total_weighted_currency_converted_value,omitempty"`
	TotalWeightedCurrencyConvertedValueFormatted *string `json:"total_weighted_currency_converted_value_formatted,omitempty"`
	Totals *map[string]any `json:"totals,omitempty"`
	ValuesTotal *map[string]any `json:"values_total,omitempty"`
	WeightedValuesTotal *map[string]any `json:"weighted_values_total,omitempty"`
}

// DealUpdateData is the typed request payload for Deal.UpdateTyped.
type DealUpdateData struct {
	Id int `json:"id"`
	Deals *[]any `json:"deals,omitempty"`
	PeriodEnd *string `json:"period_end,omitempty"`
	PeriodStart *string `json:"period_start,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TotalCurrencyConvertedValue *float64 `json:"total_currency_converted_value,omitempty"`
	TotalCurrencyConvertedValueFormatted *string `json:"total_currency_converted_value_formatted,omitempty"`
	TotalWeightedCurrencyConvertedValue *float64 `json:"total_weighted_currency_converted_value,omitempty"`
	TotalWeightedCurrencyConvertedValueFormatted *string `json:"total_weighted_currency_converted_value_formatted,omitempty"`
	Totals *map[string]any `json:"totals,omitempty"`
	ValuesTotal *map[string]any `json:"values_total,omitempty"`
	WeightedValuesTotal *map[string]any `json:"weighted_values_total,omitempty"`
}

// DealRemoveMatch is the typed request payload for Deal.RemoveTyped.
type DealRemoveMatch struct {
	DealParticipantId *int `json:"deal_participant_id,omitempty"`
	Id int `json:"id"`
	FollowerId *int `json:"follower_id,omitempty"`
}

// DealField is the typed data model for the deal_field entity.
type DealField struct {
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// DealFieldLoadMatch is the typed request payload for DealField.LoadTyped.
type DealFieldLoadMatch struct {
	Id int `json:"id"`
}

// DealFieldListMatch is the typed request payload for DealField.ListTyped.
type DealFieldListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
}

// DealFieldCreateData is the typed request payload for DealField.CreateTyped.
type DealFieldCreateData struct {
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// DealFieldUpdateData is the typed request payload for DealField.UpdateTyped.
type DealFieldUpdateData struct {
	Id int `json:"id"`
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// DealFieldRemoveMatch is the typed request payload for DealField.RemoveTyped.
type DealFieldRemoveMatch struct {
	Id int `json:"id"`
}

// File is the typed data model for the file entity.
type File struct {
	ActiveFlag *bool `json:"active_flag,omitempty"`
	ActivityId *int `json:"activity_id,omitempty"`
	AddTime *string `json:"add_time,omitempty"`
	Cid *string `json:"cid,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	DealName *string `json:"deal_name,omitempty"`
	Description *string `json:"description,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	FileSize *int `json:"file_size,omitempty"`
	Id *int `json:"id,omitempty"`
	InlineFlag *bool `json:"inline_flag,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	LeadName *string `json:"lead_name,omitempty"`
	MailMessageId *string `json:"mail_message_id,omitempty"`
	MailTemplateId *string `json:"mail_template_id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	OrgName *string `json:"org_name,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PersonName *string `json:"person_name,omitempty"`
	ProductId *int `json:"product_id,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ProjectName *string `json:"project_name,omitempty"`
	RemoteId *string `json:"remote_id,omitempty"`
	RemoteLocation *string `json:"remote_location,omitempty"`
	S3Bucket *string `json:"s3_bucket,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	Url *string `json:"url,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// FileLoadMatch is the typed request payload for File.LoadTyped.
type FileLoadMatch struct {
	Id int `json:"id"`
}

// FileListMatch is the typed request payload for File.ListTyped.
type FileListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Start *int `json:"start,omitempty"`
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	ActiveFlag *bool `json:"active_flag,omitempty"`
	ActivityId *int `json:"activity_id,omitempty"`
	AddTime *string `json:"add_time,omitempty"`
	Cid *string `json:"cid,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	DealName *string `json:"deal_name,omitempty"`
	Description *string `json:"description,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	FileSize *int `json:"file_size,omitempty"`
	Id *int `json:"id,omitempty"`
	InlineFlag *bool `json:"inline_flag,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	LeadName *string `json:"lead_name,omitempty"`
	MailMessageId *string `json:"mail_message_id,omitempty"`
	MailTemplateId *string `json:"mail_template_id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	OrgName *string `json:"org_name,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PersonName *string `json:"person_name,omitempty"`
	ProductId *int `json:"product_id,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ProjectName *string `json:"project_name,omitempty"`
	RemoteId *string `json:"remote_id,omitempty"`
	RemoteLocation *string `json:"remote_location,omitempty"`
	S3Bucket *string `json:"s3_bucket,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	Url *string `json:"url,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// FileUpdateData is the typed request payload for File.UpdateTyped.
type FileUpdateData struct {
	Id int `json:"id"`
	ActiveFlag *bool `json:"active_flag,omitempty"`
	ActivityId *int `json:"activity_id,omitempty"`
	AddTime *string `json:"add_time,omitempty"`
	Cid *string `json:"cid,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	DealName *string `json:"deal_name,omitempty"`
	Description *string `json:"description,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	FileSize *int `json:"file_size,omitempty"`
	InlineFlag *bool `json:"inline_flag,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	LeadName *string `json:"lead_name,omitempty"`
	MailMessageId *string `json:"mail_message_id,omitempty"`
	MailTemplateId *string `json:"mail_template_id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	OrgName *string `json:"org_name,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PersonName *string `json:"person_name,omitempty"`
	ProductId *int `json:"product_id,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ProjectName *string `json:"project_name,omitempty"`
	RemoteId *string `json:"remote_id,omitempty"`
	RemoteLocation *string `json:"remote_location,omitempty"`
	S3Bucket *string `json:"s3_bucket,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	Url *string `json:"url,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// FileRemoveMatch is the typed request payload for File.RemoveTyped.
type FileRemoveMatch struct {
	Id int `json:"id"`
}

// Filter is the typed data model for the filter entity.
type Filter struct {
	Conditions map[string]any `json:"conditions"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Success *bool `json:"success,omitempty"`
	Type string `json:"type"`
}

// FilterLoadMatch is the typed request payload for Filter.LoadTyped.
type FilterLoadMatch struct {
	Id int `json:"id"`
	IncludeFieldCode *bool `json:"include_field_code,omitempty"`
}

// FilterListMatch is the typed request payload for Filter.ListTyped.
type FilterListMatch struct {
	Type *string `json:"type,omitempty"`
}

// FilterCreateData is the typed request payload for Filter.CreateTyped.
type FilterCreateData struct {
	IncludeFieldCode *bool `json:"include_field_code,omitempty"`
	Conditions map[string]any `json:"conditions"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Success *bool `json:"success,omitempty"`
	Type string `json:"type"`
}

// FilterUpdateData is the typed request payload for Filter.UpdateTyped.
type FilterUpdateData struct {
	Id int `json:"id"`
	IncludeFieldCode *bool `json:"include_field_code,omitempty"`
	Conditions *map[string]any `json:"conditions,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Name *string `json:"name,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type *string `json:"type,omitempty"`
}

// FilterRemoveMatch is the typed request payload for Filter.RemoveTyped.
type FilterRemoveMatch struct {
	Id int `json:"id"`
}

// Goal is the typed data model for the goal entity.
type Goal struct {
	Assignee map[string]any `json:"assignee"`
	Duration map[string]any `json:"duration"`
	ExpectedOutcome map[string]any `json:"expected_outcome"`
	Goal *map[string]any `json:"goal,omitempty"`
	Id *string `json:"id,omitempty"`
	Interval string `json:"interval"`
	Title *string `json:"title,omitempty"`
	Type map[string]any `json:"type"`
}

// GoalLoadMatch is the typed request payload for Goal.LoadTyped.
type GoalLoadMatch struct {
	AssigneeId *int `json:"assignee_id,omitempty"`
	AssigneeType *string `json:"assignee_type,omitempty"`
	ExpectedOutcomeCurrencyId *int `json:"expected_outcome_currency_id,omitempty"`
	ExpectedOutcomeTarget *float64 `json:"expected_outcome_target,omitempty"`
	ExpectedOutcomeTrackingMetric *string `json:"expected_outcome_tracking_metric,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	PeriodEnd *string `json:"period_end,omitempty"`
	PeriodStart *string `json:"period_start,omitempty"`
	Title *string `json:"title,omitempty"`
	TypeName *string `json:"type_name,omitempty"`
	TypeParamsActivityTypeId *[]any `json:"type_params_activity_type_id,omitempty"`
	TypeParamsPipelineId *[]any `json:"type_params_pipeline_id,omitempty"`
	TypeParamsStageId *int `json:"type_params_stage_id,omitempty"`
}

// GoalCreateData is the typed request payload for Goal.CreateTyped.
type GoalCreateData struct {
	Assignee map[string]any `json:"assignee"`
	Duration map[string]any `json:"duration"`
	ExpectedOutcome map[string]any `json:"expected_outcome"`
	Goal *map[string]any `json:"goal,omitempty"`
	Id *string `json:"id,omitempty"`
	Interval string `json:"interval"`
	Title *string `json:"title,omitempty"`
	Type map[string]any `json:"type"`
}

// GoalUpdateData is the typed request payload for Goal.UpdateTyped.
type GoalUpdateData struct {
	Id string `json:"id"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	Duration *map[string]any `json:"duration,omitempty"`
	ExpectedOutcome *map[string]any `json:"expected_outcome,omitempty"`
	Goal *map[string]any `json:"goal,omitempty"`
	Interval *string `json:"interval,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *map[string]any `json:"type,omitempty"`
}

// GoalRemoveMatch is the typed request payload for Goal.RemoveTyped.
type GoalRemoveMatch struct {
	Id string `json:"id"`
}

// Lead is the typed data model for the lead entity.
type Lead struct {
	AddTime *string `json:"add_time,omitempty"`
	CcEmail *string `json:"cc_email,omitempty"`
	Channel *int `json:"channel,omitempty"`
	ChannelId *string `json:"channel_id,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	ExpectedCloseDate *string `json:"expected_close_date,omitempty"`
	Id *string `json:"id,omitempty"`
	IsArchived *bool `json:"is_archived,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	NextActivityId *int `json:"next_activity_id,omitempty"`
	OrganizationId *int `json:"organization_id,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginId *string `json:"origin_id,omitempty"`
	OwnerId *int `json:"owner_id,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	SourceDealId *int `json:"source_deal_id,omitempty"`
	SourceName *string `json:"source_name,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	Value map[string]any `json:"value"`
	VisibleTo *string `json:"visible_to,omitempty"`
	WasSeen *bool `json:"was_seen,omitempty"`
}

// LeadLoadMatch is the typed request payload for Lead.LoadTyped.
type LeadLoadMatch struct {
	Id string `json:"id"`
}

// LeadListMatch is the typed request payload for Lead.ListTyped.
type LeadListMatch struct {
	FilterId *int `json:"filter_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrganizationId *int `json:"organization_id,omitempty"`
	OwnerId *int `json:"owner_id,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Start *int `json:"start,omitempty"`
	UpdatedSince *string `json:"updated_since,omitempty"`
}

// LeadCreateData is the typed request payload for Lead.CreateTyped.
type LeadCreateData struct {
	AddTime *string `json:"add_time,omitempty"`
	CcEmail *string `json:"cc_email,omitempty"`
	Channel *int `json:"channel,omitempty"`
	ChannelId *string `json:"channel_id,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	ExpectedCloseDate *string `json:"expected_close_date,omitempty"`
	Id *string `json:"id,omitempty"`
	IsArchived *bool `json:"is_archived,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	NextActivityId *int `json:"next_activity_id,omitempty"`
	OrganizationId *int `json:"organization_id,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginId *string `json:"origin_id,omitempty"`
	OwnerId *int `json:"owner_id,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	SourceDealId *int `json:"source_deal_id,omitempty"`
	SourceName *string `json:"source_name,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	Value map[string]any `json:"value"`
	VisibleTo *string `json:"visible_to,omitempty"`
	WasSeen *bool `json:"was_seen,omitempty"`
}

// LeadUpdateData is the typed request payload for Lead.UpdateTyped.
type LeadUpdateData struct {
	Id string `json:"id"`
	AddTime *string `json:"add_time,omitempty"`
	CcEmail *string `json:"cc_email,omitempty"`
	Channel *int `json:"channel,omitempty"`
	ChannelId *string `json:"channel_id,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	ExpectedCloseDate *string `json:"expected_close_date,omitempty"`
	IsArchived *bool `json:"is_archived,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	NextActivityId *int `json:"next_activity_id,omitempty"`
	OrganizationId *int `json:"organization_id,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginId *string `json:"origin_id,omitempty"`
	OwnerId *int `json:"owner_id,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	SourceDealId *int `json:"source_deal_id,omitempty"`
	SourceName *string `json:"source_name,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	Value *map[string]any `json:"value,omitempty"`
	VisibleTo *string `json:"visible_to,omitempty"`
	WasSeen *bool `json:"was_seen,omitempty"`
}

// LeadRemoveMatch is the typed request payload for Lead.RemoveTyped.
type LeadRemoveMatch struct {
	Id string `json:"id"`
}

// LeadField is the typed data model for the lead_field entity.
type LeadField struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// LeadFieldListMatch is the typed request payload for LeadField.ListTyped.
type LeadFieldListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
}

// LeadLabel is the typed data model for the lead_label entity.
type LeadLabel struct {
	AddTime *string `json:"add_time,omitempty"`
	Color *string `json:"color,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// LeadLabelListMatch is the typed request payload for LeadLabel.ListTyped.
type LeadLabelListMatch struct {
	AddTime *string `json:"add_time,omitempty"`
	Color *string `json:"color,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// LeadLabelCreateData is the typed request payload for LeadLabel.CreateTyped.
type LeadLabelCreateData struct {
	AddTime *string `json:"add_time,omitempty"`
	Color *string `json:"color,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// LeadLabelUpdateData is the typed request payload for LeadLabel.UpdateTyped.
type LeadLabelUpdateData struct {
	Id string `json:"id"`
	AddTime *string `json:"add_time,omitempty"`
	Color *string `json:"color,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// LeadLabelRemoveMatch is the typed request payload for LeadLabel.RemoveTyped.
type LeadLabelRemoveMatch struct {
	Id string `json:"id"`
}

// LeadSource is the typed data model for the lead_source entity.
type LeadSource struct {
	Name *string `json:"name,omitempty"`
}

// LeadSourceListMatch is the typed request payload for LeadSource.ListTyped.
type LeadSourceListMatch struct {
	Name *string `json:"name,omitempty"`
}

// LegacyTeam is the typed data model for the legacy_team entity.
type LegacyTeam struct {
	Data *[]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	ManagerId int `json:"manager_id"`
	Name string `json:"name"`
	Success *bool `json:"success,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// LegacyTeamLoadMatch is the typed request payload for LegacyTeam.LoadTyped.
type LegacyTeamLoadMatch struct {
	Id int `json:"id"`
	OrderBy *string `json:"order_by,omitempty"`
	SkipUser *float64 `json:"skip_user,omitempty"`
}

// LegacyTeamListMatch is the typed request payload for LegacyTeam.ListTyped.
type LegacyTeamListMatch struct {
	OrderBy *string `json:"order_by,omitempty"`
	SkipUser *float64 `json:"skip_user,omitempty"`
}

// LegacyTeamCreateData is the typed request payload for LegacyTeam.CreateTyped.
type LegacyTeamCreateData struct {
	Data *[]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	ManagerId int `json:"manager_id"`
	Name string `json:"name"`
	Success *bool `json:"success,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// LegacyTeamUpdateData is the typed request payload for LegacyTeam.UpdateTyped.
type LegacyTeamUpdateData struct {
	Id int `json:"id"`
	Data *[]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	ManagerId *int `json:"manager_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Success *bool `json:"success,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// LegacyTeamRemoveMatch is the typed request payload for LegacyTeam.RemoveTyped.
type LegacyTeamRemoveMatch struct {
	Id int `json:"id"`
}

// Mailbox is the typed data model for the mailbox entity.
type Mailbox struct {
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Service *string `json:"service,omitempty"`
	StatusCode *int `json:"statusCode,omitempty"`
	StatusText *string `json:"statusText,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// MailboxLoadMatch is the typed request payload for Mailbox.LoadTyped.
type MailboxLoadMatch struct {
	Id int `json:"id"`
	IncludeBody *float64 `json:"include_body,omitempty"`
}

// MailboxListMatch is the typed request payload for Mailbox.ListTyped.
type MailboxListMatch struct {
	MailThreadId int `json:"mail_thread_id"`
}

// MailboxUpdateData is the typed request payload for Mailbox.UpdateTyped.
type MailboxUpdateData struct {
	Id int `json:"id"`
	Data *map[string]any `json:"data,omitempty"`
	Service *string `json:"service,omitempty"`
	StatusCode *int `json:"statusCode,omitempty"`
	StatusText *string `json:"statusText,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// MailboxRemoveMatch is the typed request payload for Mailbox.RemoveTyped.
type MailboxRemoveMatch struct {
	Id int `json:"id"`
}

// Meeting is the typed data model for the meeting entity.
type Meeting struct {
	Id *string `json:"id,omitempty"`
}

// MeetingCreateData is the typed request payload for Meeting.CreateTyped.
type MeetingCreateData struct {
	Id *string `json:"id,omitempty"`
}

// MeetingRemoveMatch is the typed request payload for Meeting.RemoveTyped.
type MeetingRemoveMatch struct {
	Id string `json:"id"`
}

// Note is the typed data model for the note entity.
type Note struct {
	ActiveFlag *bool `json:"active_flag,omitempty"`
	AddTime *string `json:"add_time,omitempty"`
	CompanyId *int `json:"company_id,omitempty"`
	Content *string `json:"content,omitempty"`
	Deal *map[string]any `json:"deal,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdateUserId *int `json:"last_update_user_id,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectType *string `json:"object_type,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PinnedToDealFlag *bool `json:"pinned_to_deal_flag,omitempty"`
	PinnedToOrganizationFlag *bool `json:"pinned_to_organization_flag,omitempty"`
	PinnedToPersonFlag *bool `json:"pinned_to_person_flag,omitempty"`
	PinnedToProjectFlag *bool `json:"pinned_to_project_flag,omitempty"`
	PinnedToTaskFlag *bool `json:"pinned_to_task_flag,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Task *map[string]any `json:"task,omitempty"`
	TaskId *int `json:"task_id,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	UpdaterId *int `json:"updater_id,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserId *int `json:"user_id,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// NoteLoadMatch is the typed request payload for Note.LoadTyped.
type NoteLoadMatch struct {
	CommentId *string `json:"comment_id,omitempty"`
	Id int `json:"id"`
}

// NoteListMatch is the typed request payload for Note.ListTyped.
type NoteListMatch struct {
	DealId *int `json:"deal_id,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PinnedToDealFlag *float64 `json:"pinned_to_deal_flag,omitempty"`
	PinnedToLeadFlag *float64 `json:"pinned_to_lead_flag,omitempty"`
	PinnedToOrganizationFlag *float64 `json:"pinned_to_organization_flag,omitempty"`
	PinnedToPersonFlag *float64 `json:"pinned_to_person_flag,omitempty"`
	PinnedToProjectFlag *float64 `json:"pinned_to_project_flag,omitempty"`
	PinnedToTaskFlag *float64 `json:"pinned_to_task_flag,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Start *int `json:"start,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	TaskId *int `json:"task_id,omitempty"`
	UpdatedSince *string `json:"updated_since,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// NoteCreateData is the typed request payload for Note.CreateTyped.
type NoteCreateData struct {
	ActiveFlag *bool `json:"active_flag,omitempty"`
	AddTime *string `json:"add_time,omitempty"`
	CompanyId *int `json:"company_id,omitempty"`
	Content *string `json:"content,omitempty"`
	Deal *map[string]any `json:"deal,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdateUserId *int `json:"last_update_user_id,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectType *string `json:"object_type,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PinnedToDealFlag *bool `json:"pinned_to_deal_flag,omitempty"`
	PinnedToOrganizationFlag *bool `json:"pinned_to_organization_flag,omitempty"`
	PinnedToPersonFlag *bool `json:"pinned_to_person_flag,omitempty"`
	PinnedToProjectFlag *bool `json:"pinned_to_project_flag,omitempty"`
	PinnedToTaskFlag *bool `json:"pinned_to_task_flag,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Task *map[string]any `json:"task,omitempty"`
	TaskId *int `json:"task_id,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	UpdaterId *int `json:"updater_id,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserId *int `json:"user_id,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// NoteUpdateData is the typed request payload for Note.UpdateTyped.
type NoteUpdateData struct {
	CommentId *string `json:"comment_id,omitempty"`
	Id int `json:"id"`
	ActiveFlag *bool `json:"active_flag,omitempty"`
	AddTime *string `json:"add_time,omitempty"`
	CompanyId *int `json:"company_id,omitempty"`
	Content *string `json:"content,omitempty"`
	Deal *map[string]any `json:"deal,omitempty"`
	DealId *int `json:"deal_id,omitempty"`
	LastUpdateUserId *int `json:"last_update_user_id,omitempty"`
	LeadId *string `json:"lead_id,omitempty"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectType *string `json:"object_type,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	PersonId *int `json:"person_id,omitempty"`
	PinnedToDealFlag *bool `json:"pinned_to_deal_flag,omitempty"`
	PinnedToOrganizationFlag *bool `json:"pinned_to_organization_flag,omitempty"`
	PinnedToPersonFlag *bool `json:"pinned_to_person_flag,omitempty"`
	PinnedToProjectFlag *bool `json:"pinned_to_project_flag,omitempty"`
	PinnedToTaskFlag *bool `json:"pinned_to_task_flag,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	Task *map[string]any `json:"task,omitempty"`
	TaskId *int `json:"task_id,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
	UpdaterId *int `json:"updater_id,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserId *int `json:"user_id,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// NoteRemoveMatch is the typed request payload for Note.RemoveTyped.
type NoteRemoveMatch struct {
	CommentId *string `json:"comment_id,omitempty"`
	Id int `json:"id"`
}

// NoteField is the typed data model for the note_field entity.
type NoteField struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// NoteFieldListMatch is the typed request payload for NoteField.ListTyped.
type NoteFieldListMatch struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// Oauth is the typed data model for the oauth entity.
type Oauth struct {
}

// OauthLoadMatch is the typed request payload for Oauth.LoadTyped.
type OauthLoadMatch struct {
	ClientId string `json:"client_id"`
	RedirectUri string `json:"redirect_uri"`
	State *string `json:"state,omitempty"`
}

// OauthCreateData is the typed request payload for Oauth.CreateTyped.
type OauthCreateData struct {
}

// Organization is the typed data model for the organization entity.
type Organization struct {
	Id *string `json:"id,omitempty"`
}

// OrganizationListMatch is the typed request payload for Organization.ListTyped.
type OrganizationListMatch struct {
	Id int `json:"id"`
	AllChange *string `json:"all_change,omitempty"`
	Item *string `json:"item,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
	Sort *string `json:"sort,omitempty"`
	IncludeBody *float64 `json:"include_body,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
}

// OrganizationCreateData is the typed request payload for Organization.CreateTyped.
type OrganizationCreateData struct {
	Id int `json:"id"`
}

// OrganizationUpdateData is the typed request payload for Organization.UpdateTyped.
type OrganizationUpdateData struct {
	Id int `json:"id"`
}

// OrganizationRemoveMatch is the typed request payload for Organization.RemoveTyped.
type OrganizationRemoveMatch struct {
	FollowerId int `json:"follower_id"`
	Id int `json:"id"`
}

// OrganizationField is the typed data model for the organization_field entity.
type OrganizationField struct {
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// OrganizationFieldLoadMatch is the typed request payload for OrganizationField.LoadTyped.
type OrganizationFieldLoadMatch struct {
	Id int `json:"id"`
}

// OrganizationFieldListMatch is the typed request payload for OrganizationField.ListTyped.
type OrganizationFieldListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
}

// OrganizationFieldCreateData is the typed request payload for OrganizationField.CreateTyped.
type OrganizationFieldCreateData struct {
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// OrganizationFieldUpdateData is the typed request payload for OrganizationField.UpdateTyped.
type OrganizationFieldUpdateData struct {
	Id int `json:"id"`
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// OrganizationFieldRemoveMatch is the typed request payload for OrganizationField.RemoveTyped.
type OrganizationFieldRemoveMatch struct {
	Id int `json:"id"`
}

// OrganizationRelationship is the typed data model for the organization_relationship entity.
type OrganizationRelationship struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	RelLinkedOrgId int `json:"rel_linked_org_id"`
	RelOwnerOrgId int `json:"rel_owner_org_id"`
	RelatedObjects *map[string]any `json:"related_objects,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type string `json:"type"`
}

// OrganizationRelationshipLoadMatch is the typed request payload for OrganizationRelationship.LoadTyped.
type OrganizationRelationshipLoadMatch struct {
	Id int `json:"id"`
	OrgId *int `json:"org_id,omitempty"`
}

// OrganizationRelationshipListMatch is the typed request payload for OrganizationRelationship.ListTyped.
type OrganizationRelationshipListMatch struct {
	OrgId int `json:"org_id"`
}

// OrganizationRelationshipCreateData is the typed request payload for OrganizationRelationship.CreateTyped.
type OrganizationRelationshipCreateData struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	RelLinkedOrgId int `json:"rel_linked_org_id"`
	RelOwnerOrgId int `json:"rel_owner_org_id"`
	RelatedObjects *map[string]any `json:"related_objects,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type string `json:"type"`
}

// OrganizationRelationshipUpdateData is the typed request payload for OrganizationRelationship.UpdateTyped.
type OrganizationRelationshipUpdateData struct {
	Id int `json:"id"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	OrgId *int `json:"org_id,omitempty"`
	RelLinkedOrgId *int `json:"rel_linked_org_id,omitempty"`
	RelOwnerOrgId *int `json:"rel_owner_org_id,omitempty"`
	RelatedObjects *map[string]any `json:"related_objects,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type *string `json:"type,omitempty"`
}

// OrganizationRelationshipRemoveMatch is the typed request payload for OrganizationRelationship.RemoveTyped.
type OrganizationRelationshipRemoveMatch struct {
	Id int `json:"id"`
}

// PermissionSet is the typed data model for the permission_set entity.
type PermissionSet struct {
	App *string `json:"app,omitempty"`
	AssignmentCount *int `json:"assignment_count,omitempty"`
	Contents *[]any `json:"contents,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type *string `json:"type,omitempty"`
}

// PermissionSetLoadMatch is the typed request payload for PermissionSet.LoadTyped.
type PermissionSetLoadMatch struct {
	Id string `json:"id"`
}

// PermissionSetListMatch is the typed request payload for PermissionSet.ListTyped.
type PermissionSetListMatch struct {
	App *string `json:"app,omitempty"`
}

// Person is the typed data model for the person entity.
type Person struct {
	Id *string `json:"id,omitempty"`
}

// PersonListMatch is the typed request payload for Person.ListTyped.
type PersonListMatch struct {
	Id int `json:"id"`
	AllChange *string `json:"all_change,omitempty"`
	Item *string `json:"item,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
	Sort *string `json:"sort,omitempty"`
	IncludeBody *float64 `json:"include_body,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
}

// PersonCreateData is the typed request payload for Person.CreateTyped.
type PersonCreateData struct {
	Id int `json:"id"`
}

// PersonUpdateData is the typed request payload for Person.UpdateTyped.
type PersonUpdateData struct {
	Id int `json:"id"`
}

// PersonRemoveMatch is the typed request payload for Person.RemoveTyped.
type PersonRemoveMatch struct {
	FollowerId int `json:"follower_id"`
	Id int `json:"id"`
}

// PersonField is the typed data model for the person_field entity.
type PersonField struct {
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// PersonFieldLoadMatch is the typed request payload for PersonField.LoadTyped.
type PersonFieldLoadMatch struct {
	Id int `json:"id"`
}

// PersonFieldListMatch is the typed request payload for PersonField.ListTyped.
type PersonFieldListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
}

// PersonFieldCreateData is the typed request payload for PersonField.CreateTyped.
type PersonFieldCreateData struct {
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// PersonFieldUpdateData is the typed request payload for PersonField.UpdateTyped.
type PersonFieldUpdateData struct {
	Id int `json:"id"`
	AddVisibleFlag *bool `json:"add_visible_flag,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// PersonFieldRemoveMatch is the typed request payload for PersonField.RemoveTyped.
type PersonFieldRemoveMatch struct {
	Id int `json:"id"`
}

// Pipeline is the typed data model for the pipeline entity.
type Pipeline struct {
	Id *string `json:"id,omitempty"`
}

// PipelineLoadMatch is the typed request payload for Pipeline.LoadTyped.
type PipelineLoadMatch struct {
	Id int `json:"id"`
	EndDate string `json:"end_date"`
	StartDate string `json:"start_date"`
	UserId *int `json:"user_id,omitempty"`
}

// PipelineListMatch is the typed request payload for Pipeline.ListTyped.
type PipelineListMatch struct {
	Id int `json:"id"`
	Everyone *float64 `json:"everyone,omitempty"`
	FilterId *int `json:"filter_id,omitempty"`
	GetSummary *float64 `json:"get_summary,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StageId *int `json:"stage_id,omitempty"`
	Start *int `json:"start,omitempty"`
	TotalsConvertCurrency *string `json:"totals_convert_currency,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// Product is the typed data model for the product entity.
type Product struct {
	Id *string `json:"id,omitempty"`
}

// ProductListMatch is the typed request payload for Product.ListTyped.
type ProductListMatch struct {
	Id int `json:"id"`
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
	Status *string `json:"status,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// ProductCreateData is the typed request payload for Product.CreateTyped.
type ProductCreateData struct {
	Id int `json:"id"`
}

// ProductRemoveMatch is the typed request payload for Product.RemoveTyped.
type ProductRemoveMatch struct {
	FollowerId int `json:"follower_id"`
	Id int `json:"id"`
}

// ProductField is the typed data model for the product_field entity.
type ProductField struct {
	Data *map[string]any `json:"data,omitempty"`
	FieldType string `json:"field_type"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ProductFieldLoadMatch is the typed request payload for ProductField.LoadTyped.
type ProductFieldLoadMatch struct {
	Id int `json:"id"`
}

// ProductFieldListMatch is the typed request payload for ProductField.ListTyped.
type ProductFieldListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
}

// ProductFieldCreateData is the typed request payload for ProductField.CreateTyped.
type ProductFieldCreateData struct {
	Data *map[string]any `json:"data,omitempty"`
	FieldType string `json:"field_type"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ProductFieldUpdateData is the typed request payload for ProductField.UpdateTyped.
type ProductFieldUpdateData struct {
	Id int `json:"id"`
	Data *map[string]any `json:"data,omitempty"`
	FieldType *string `json:"field_type,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ProductFieldRemoveMatch is the typed request payload for ProductField.RemoveTyped.
type ProductFieldRemoveMatch struct {
	Id int `json:"id"`
}

// Project is the typed data model for the project entity.
type Project struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	GroupId *float64 `json:"group_id,omitempty"`
	Id *int `json:"id,omitempty"`
	PhaseId *float64 `json:"phase_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ProjectLoadMatch is the typed request payload for Project.LoadTyped.
type ProjectLoadMatch struct {
	Id int `json:"id"`
}

// ProjectListMatch is the typed request payload for Project.ListTyped.
type ProjectListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	FilterId *int `json:"filter_id,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PhaseId *int `json:"phase_id,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	GroupId *float64 `json:"group_id,omitempty"`
	Id *int `json:"id,omitempty"`
	PhaseId *float64 `json:"phase_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	ActivityId *int `json:"activity_id,omitempty"`
	Id int `json:"id"`
	TaskId *int `json:"task_id,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	GroupId *float64 `json:"group_id,omitempty"`
	PhaseId *float64 `json:"phase_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	Id int `json:"id"`
}

// ProjectBoard is the typed data model for the project_board entity.
type ProjectBoard struct {
	AddTime *string `json:"add_time,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderNr *float64 `json:"order_nr,omitempty"`
	Success *bool `json:"success,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// ProjectBoardLoadMatch is the typed request payload for ProjectBoard.LoadTyped.
type ProjectBoardLoadMatch struct {
	Id int `json:"id"`
}

// ProjectBoardListMatch is the typed request payload for ProjectBoard.ListTyped.
type ProjectBoardListMatch struct {
	AddTime *string `json:"add_time,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderNr *float64 `json:"order_nr,omitempty"`
	Success *bool `json:"success,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// ProjectPhase is the typed data model for the project_phase entity.
type ProjectPhase struct {
	AddTime *string `json:"add_time,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	BoardId *float64 `json:"board_id,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderNr *float64 `json:"order_nr,omitempty"`
	Success *bool `json:"success,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// ProjectPhaseLoadMatch is the typed request payload for ProjectPhase.LoadTyped.
type ProjectPhaseLoadMatch struct {
	Id int `json:"id"`
}

// ProjectPhaseListMatch is the typed request payload for ProjectPhase.ListTyped.
type ProjectPhaseListMatch struct {
	BoardId int `json:"board_id"`
}

// ProjectTemplate is the typed data model for the project_template entity.
type ProjectTemplate struct {
	AddTime *string `json:"add_time,omitempty"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *float64 `json:"id,omitempty"`
	OwnerId *float64 `json:"owner_id,omitempty"`
	ProjectsBoardId *float64 `json:"projects_board_id,omitempty"`
	Success *bool `json:"success,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdateTime *string `json:"update_time,omitempty"`
}

// ProjectTemplateLoadMatch is the typed request payload for ProjectTemplate.LoadTyped.
type ProjectTemplateLoadMatch struct {
	Id int `json:"id"`
}

// ProjectTemplateListMatch is the typed request payload for ProjectTemplate.ListTyped.
type ProjectTemplateListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// Recent is the typed data model for the recent entity.
type Recent struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// RecentListMatch is the typed request payload for Recent.ListTyped.
type RecentListMatch struct {
	Item *string `json:"item,omitempty"`
	Limit *int `json:"limit,omitempty"`
	SinceTimestamp string `json:"since_timestamp"`
	Start *int `json:"start,omitempty"`
}

// Role is the typed data model for the role entity.
type Role struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	ParentRoleId *int `json:"parent_role_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// RoleLoadMatch is the typed request payload for Role.LoadTyped.
type RoleLoadMatch struct {
	Id int `json:"id"`
}

// RoleListMatch is the typed request payload for Role.ListTyped.
type RoleListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
}

// RoleCreateData is the typed request payload for Role.CreateTyped.
type RoleCreateData struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	ParentRoleId *int `json:"parent_role_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// RoleUpdateData is the typed request payload for Role.UpdateTyped.
type RoleUpdateData struct {
	Id int `json:"id"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *any `json:"data,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentRoleId *int `json:"parent_role_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// RoleRemoveMatch is the typed request payload for Role.RemoveTyped.
type RoleRemoveMatch struct {
	Id int `json:"id"`
}

// Stage is the typed data model for the stage entity.
type Stage struct {
	Id *string `json:"id,omitempty"`
}

// StageListMatch is the typed request payload for Stage.ListTyped.
type StageListMatch struct {
	Id int `json:"id"`
	Everyone *float64 `json:"everyone,omitempty"`
	FilterId *int `json:"filter_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Start *int `json:"start,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// Task is the typed data model for the task entity.
type Task struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *int `json:"id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// TaskLoadMatch is the typed request payload for Task.LoadTyped.
type TaskLoadMatch struct {
	Id int `json:"id"`
}

// TaskListMatch is the typed request payload for Task.ListTyped.
type TaskListMatch struct {
	AssigneeId *int `json:"assignee_id,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Done *float64 `json:"done,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ParentTaskId *int `json:"parent_task_id,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
}

// TaskCreateData is the typed request payload for Task.CreateTyped.
type TaskCreateData struct {
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Id *int `json:"id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// TaskUpdateData is the typed request payload for Task.UpdateTyped.
type TaskUpdateData struct {
	Id int `json:"id"`
	AdditionalData *map[string]any `json:"additional_data,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// TaskRemoveMatch is the typed request payload for Task.RemoveTyped.
type TaskRemoveMatch struct {
	Id int `json:"id"`
}

// User is the typed data model for the user entity.
type User struct {
	Access *[]any `json:"access,omitempty"`
	ActiveFlag *bool `json:"active_flag,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Email string `json:"email"`
	Id *string `json:"id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id int `json:"id"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	Access *[]any `json:"access,omitempty"`
	ActiveFlag *bool `json:"active_flag,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// UserCreateData is the typed request payload for User.CreateTyped.
type UserCreateData struct {
	Access *[]any `json:"access,omitempty"`
	ActiveFlag *bool `json:"active_flag,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Email string `json:"email"`
	Id *string `json:"id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// UserUpdateData is the typed request payload for User.UpdateTyped.
type UserUpdateData struct {
	Id int `json:"id"`
	Access *[]any `json:"access,omitempty"`
	ActiveFlag *bool `json:"active_flag,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Email *string `json:"email,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// UserConnection is the typed data model for the user_connection entity.
type UserConnection struct {
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// UserConnectionLoadMatch is the typed request payload for UserConnection.LoadTyped.
type UserConnectionLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// UserSetting is the typed data model for the user_setting entity.
type UserSetting struct {
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// UserSettingLoadMatch is the typed request payload for UserSetting.LoadTyped.
type UserSettingLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	Data *[]any `json:"data,omitempty"`
	EventAction string `json:"event_action"`
	EventObject string `json:"event_object"`
	HttpAuthPassword *string `json:"http_auth_password,omitempty"`
	HttpAuthUser *string `json:"http_auth_user,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	SubscriptionUrl string `json:"subscription_url"`
	UserId *int `json:"user_id,omitempty"`
	Version *string `json:"version,omitempty"`
}

// WebhookListMatch is the typed request payload for Webhook.ListTyped.
type WebhookListMatch struct {
	Data *[]any `json:"data,omitempty"`
	EventAction *string `json:"event_action,omitempty"`
	EventObject *string `json:"event_object,omitempty"`
	HttpAuthPassword *string `json:"http_auth_password,omitempty"`
	HttpAuthUser *string `json:"http_auth_user,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	UserId *int `json:"user_id,omitempty"`
	Version *string `json:"version,omitempty"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	Data *[]any `json:"data,omitempty"`
	EventAction string `json:"event_action"`
	EventObject string `json:"event_object"`
	HttpAuthPassword *string `json:"http_auth_password,omitempty"`
	HttpAuthUser *string `json:"http_auth_user,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	SubscriptionUrl string `json:"subscription_url"`
	UserId *int `json:"user_id,omitempty"`
	Version *string `json:"version,omitempty"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
