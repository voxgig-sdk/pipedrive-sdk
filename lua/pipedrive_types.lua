-- Typed models for the Pipedrive SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ActivityField
---@field additional_data? table
---@field data? table
---@field success? boolean

---@class ActivityFieldListMatch
---@field additional_data? table
---@field data? table
---@field success? boolean

---@class ActivityType
---@field color? string
---@field data? table
---@field icon_key string
---@field id? string
---@field name string
---@field order_nr? number
---@field success? boolean

---@class ActivityTypeListMatch
---@field color? string
---@field data? table
---@field icon_key? string
---@field id? string
---@field name? string
---@field order_nr? number
---@field success? boolean

---@class ActivityTypeCreateData
---@field color? string
---@field data? table
---@field icon_key string
---@field id? string
---@field name string
---@field order_nr? number
---@field success? boolean

---@class ActivityTypeUpdateData
---@field id number
---@field color? string
---@field data? table
---@field icon_key? string
---@field name? string
---@field order_nr? number
---@field success? boolean

---@class ActivityTypeRemoveMatch
---@field id number

---@class Billing
---@field data? table
---@field success? boolean

---@class BillingListMatch
---@field data? table
---@field success? boolean

---@class CallLog
---@field activity_id? number
---@field company_id? number
---@field deal_id? number
---@field duration? string
---@field end_time string
---@field from_phone_number? string
---@field has_recording? boolean
---@field id? string
---@field lead_id? string
---@field note? string
---@field org_id? number
---@field outcome string
---@field person_id? number
---@field start_time string
---@field subject? string
---@field to_phone_number string
---@field user_id? number

---@class CallLogLoadMatch
---@field id string

---@class CallLogListMatch
---@field limit? number
---@field start? number

---@class CallLogCreateData
---@field activity_id? number
---@field company_id? number
---@field deal_id? number
---@field duration? string
---@field end_time string
---@field from_phone_number? string
---@field has_recording? boolean
---@field id? string
---@field lead_id? string
---@field note? string
---@field org_id? number
---@field outcome string
---@field person_id? number
---@field start_time string
---@field subject? string
---@field to_phone_number string
---@field user_id? number

---@class CallLogRemoveMatch
---@field id string

---@class Channel
---@field attachments? table
---@field avatar_url? string
---@field channel_id string
---@field conversation_id string
---@field conversation_link? string
---@field created_at? string
---@field id? string
---@field marketplace_client_id? string
---@field message string
---@field name? string
---@field pd_company_id? number
---@field pd_user_id? number
---@field provider_channel_id? string
---@field provider_type? string
---@field reply_by? string
---@field sender_id string
---@field status string
---@field template_support? boolean

---@class ChannelCreateData
---@field attachments? table
---@field avatar_url? string
---@field channel_id string
---@field conversation_id string
---@field conversation_link? string
---@field created_at? string
---@field id? string
---@field marketplace_client_id? string
---@field message string
---@field name? string
---@field pd_company_id? number
---@field pd_user_id? number
---@field provider_channel_id? string
---@field provider_type? string
---@field reply_by? string
---@field sender_id string
---@field status string
---@field template_support? boolean

---@class ChannelRemoveMatch
---@field conversation_id? string
---@field id string

---@class Currency
---@field active_flag? boolean
---@field code? string
---@field decimal_points? number
---@field id? number
---@field is_custom_flag? boolean
---@field name? string
---@field symbol? string

---@class CurrencyListMatch
---@field term? string

---@class Deal
---@field deals? table
---@field id? string
---@field period_end? string
---@field period_start? string
---@field total_count? number
---@field total_currency_converted_value? number
---@field total_currency_converted_value_formatted? string
---@field total_weighted_currency_converted_value? number
---@field total_weighted_currency_converted_value_formatted? string
---@field totals? table
---@field values_total? table
---@field weighted_values_total? table

---@class DealLoadMatch
---@field amount number
---@field exclude_deal? number
---@field field_key string
---@field filter_id? number
---@field interval string
---@field pipeline_id? number
---@field start_date string
---@field totals_convert_currency? string
---@field user_id? number

---@class DealListMatch
---@field filter_id? number
---@field limit? number
---@field org_id? number
---@field owned_by_you? number
---@field person_id? number
---@field pipeline_id? number
---@field product_id? number
---@field sort? string
---@field stage_id? number
---@field start? number
---@field status? string
---@field user_id? number

---@class DealCreateData
---@field id number
---@field deals? table
---@field period_end? string
---@field period_start? string
---@field total_count? number
---@field total_currency_converted_value? number
---@field total_currency_converted_value_formatted? string
---@field total_weighted_currency_converted_value? number
---@field total_weighted_currency_converted_value_formatted? string
---@field totals? table
---@field values_total? table
---@field weighted_values_total? table

---@class DealUpdateData
---@field id number
---@field deals? table
---@field period_end? string
---@field period_start? string
---@field total_count? number
---@field total_currency_converted_value? number
---@field total_currency_converted_value_formatted? string
---@field total_weighted_currency_converted_value? number
---@field total_weighted_currency_converted_value_formatted? string
---@field totals? table
---@field values_total? table
---@field weighted_values_total? table

---@class DealRemoveMatch
---@field deal_participant_id? number
---@field id number
---@field follower_id? number

---@class DealField
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field id? string
---@field name? string
---@field options? table
---@field success? boolean

---@class DealFieldLoadMatch
---@field id number

---@class DealFieldListMatch
---@field limit? number
---@field start? number

---@class DealFieldCreateData
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field id? string
---@field name? string
---@field options? table
---@field success? boolean

---@class DealFieldUpdateData
---@field id number
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field name? string
---@field options? table
---@field success? boolean

---@class DealFieldRemoveMatch
---@field id number

---@class File
---@field active_flag? boolean
---@field activity_id? number
---@field add_time? string
---@field cid? string
---@field deal_id? number
---@field deal_name? string
---@field description? string
---@field file_name? string
---@field file_size? number
---@field id? number
---@field inline_flag? boolean
---@field lead_id? string
---@field lead_name? string
---@field mail_message_id? string
---@field mail_template_id? string
---@field name? string
---@field org_id? number
---@field org_name? string
---@field person_id? number
---@field person_name? string
---@field product_id? number
---@field product_name? string
---@field project_id? number
---@field project_name? string
---@field remote_id? string
---@field remote_location? string
---@field s3_bucket? string
---@field update_time? string
---@field url? string
---@field user_id? number

---@class FileLoadMatch
---@field id number

---@class FileListMatch
---@field limit? number
---@field sort? string
---@field start? number

---@class FileCreateData
---@field active_flag? boolean
---@field activity_id? number
---@field add_time? string
---@field cid? string
---@field deal_id? number
---@field deal_name? string
---@field description? string
---@field file_name? string
---@field file_size? number
---@field id? number
---@field inline_flag? boolean
---@field lead_id? string
---@field lead_name? string
---@field mail_message_id? string
---@field mail_template_id? string
---@field name? string
---@field org_id? number
---@field org_name? string
---@field person_id? number
---@field person_name? string
---@field product_id? number
---@field product_name? string
---@field project_id? number
---@field project_name? string
---@field remote_id? string
---@field remote_location? string
---@field s3_bucket? string
---@field update_time? string
---@field url? string
---@field user_id? number

---@class FileUpdateData
---@field id number
---@field active_flag? boolean
---@field activity_id? number
---@field add_time? string
---@field cid? string
---@field deal_id? number
---@field deal_name? string
---@field description? string
---@field file_name? string
---@field file_size? number
---@field inline_flag? boolean
---@field lead_id? string
---@field lead_name? string
---@field mail_message_id? string
---@field mail_template_id? string
---@field name? string
---@field org_id? number
---@field org_name? string
---@field person_id? number
---@field person_name? string
---@field product_id? number
---@field product_name? string
---@field project_id? number
---@field project_name? string
---@field remote_id? string
---@field remote_location? string
---@field s3_bucket? string
---@field update_time? string
---@field url? string
---@field user_id? number

---@class FileRemoveMatch
---@field id number

---@class Filter
---@field conditions table
---@field data? table
---@field id? string
---@field name string
---@field success? boolean
---@field type string

---@class FilterLoadMatch
---@field id number
---@field include_field_code? boolean

---@class FilterListMatch
---@field type? string

---@class FilterCreateData
---@field include_field_code? boolean
---@field conditions table
---@field data? table
---@field id? string
---@field name string
---@field success? boolean
---@field type string

---@class FilterUpdateData
---@field id number
---@field include_field_code? boolean
---@field conditions? table
---@field data? table
---@field name? string
---@field success? boolean
---@field type? string

---@class FilterRemoveMatch
---@field id number

---@class Goal
---@field assignee table
---@field duration table
---@field expected_outcome table
---@field goal? table
---@field id? string
---@field interval string
---@field title? string
---@field type table

---@class GoalLoadMatch
---@field assignee_id? number
---@field assignee_type? string
---@field expected_outcome_currency_id? number
---@field expected_outcome_target? number
---@field expected_outcome_tracking_metric? string
---@field is_active? boolean
---@field period_end? string
---@field period_start? string
---@field title? string
---@field type_name? string
---@field type_params_activity_type_id? table
---@field type_params_pipeline_id? table
---@field type_params_stage_id? number

---@class GoalCreateData
---@field assignee table
---@field duration table
---@field expected_outcome table
---@field goal? table
---@field id? string
---@field interval string
---@field title? string
---@field type table

---@class GoalUpdateData
---@field id string
---@field assignee? table
---@field duration? table
---@field expected_outcome? table
---@field goal? table
---@field interval? string
---@field title? string
---@field type? table

---@class GoalRemoveMatch
---@field id string

---@class Lead
---@field add_time? string
---@field cc_email? string
---@field channel? number
---@field channel_id? string
---@field creator_id? number
---@field expected_close_date? string
---@field id? string
---@field is_archived? boolean
---@field label_ids? table
---@field next_activity_id? number
---@field organization_id? number
---@field origin? string
---@field origin_id? string
---@field owner_id? number
---@field person_id? number
---@field source_deal_id? number
---@field source_name? string
---@field title? string
---@field update_time? string
---@field value table
---@field visible_to? string
---@field was_seen? boolean

---@class LeadLoadMatch
---@field id string

---@class LeadListMatch
---@field filter_id? number
---@field limit? number
---@field organization_id? number
---@field owner_id? number
---@field person_id? number
---@field sort? string
---@field start? number
---@field updated_since? string

---@class LeadCreateData
---@field add_time? string
---@field cc_email? string
---@field channel? number
---@field channel_id? string
---@field creator_id? number
---@field expected_close_date? string
---@field id? string
---@field is_archived? boolean
---@field label_ids? table
---@field next_activity_id? number
---@field organization_id? number
---@field origin? string
---@field origin_id? string
---@field owner_id? number
---@field person_id? number
---@field source_deal_id? number
---@field source_name? string
---@field title? string
---@field update_time? string
---@field value table
---@field visible_to? string
---@field was_seen? boolean

---@class LeadUpdateData
---@field id string
---@field add_time? string
---@field cc_email? string
---@field channel? number
---@field channel_id? string
---@field creator_id? number
---@field expected_close_date? string
---@field is_archived? boolean
---@field label_ids? table
---@field next_activity_id? number
---@field organization_id? number
---@field origin? string
---@field origin_id? string
---@field owner_id? number
---@field person_id? number
---@field source_deal_id? number
---@field source_name? string
---@field title? string
---@field update_time? string
---@field value? table
---@field visible_to? string
---@field was_seen? boolean

---@class LeadRemoveMatch
---@field id string

---@class LeadField
---@field additional_data? table
---@field data? table
---@field success? boolean

---@class LeadFieldListMatch
---@field limit? number
---@field start? number

---@class LeadLabel
---@field add_time? string
---@field color? string
---@field id? string
---@field name? string
---@field update_time? string

---@class LeadLabelListMatch
---@field add_time? string
---@field color? string
---@field id? string
---@field name? string
---@field update_time? string

---@class LeadLabelCreateData
---@field add_time? string
---@field color? string
---@field id? string
---@field name? string
---@field update_time? string

---@class LeadLabelUpdateData
---@field id string
---@field add_time? string
---@field color? string
---@field name? string
---@field update_time? string

---@class LeadLabelRemoveMatch
---@field id string

---@class LeadSource
---@field name? string

---@class LeadSourceListMatch
---@field name? string

---@class LegacyTeam
---@field data? table
---@field description? string
---@field id? string
---@field manager_id number
---@field name string
---@field success? boolean
---@field users? table

---@class LegacyTeamLoadMatch
---@field id number
---@field order_by? string
---@field skip_user? number

---@class LegacyTeamListMatch
---@field order_by? string
---@field skip_user? number

---@class LegacyTeamCreateData
---@field data? table
---@field description? string
---@field id? string
---@field manager_id number
---@field name string
---@field success? boolean
---@field users? table

---@class LegacyTeamUpdateData
---@field id number
---@field data? table
---@field description? string
---@field manager_id? number
---@field name? string
---@field success? boolean
---@field users? table

---@class LegacyTeamRemoveMatch
---@field id number

---@class Mailbox
---@field data? table
---@field id? string
---@field service? string
---@field statusCode? number
---@field statusText? string
---@field success? boolean

---@class MailboxLoadMatch
---@field id number
---@field include_body? number

---@class MailboxListMatch
---@field mail_thread_id number

---@class MailboxUpdateData
---@field id number
---@field data? table
---@field service? string
---@field statusCode? number
---@field statusText? string
---@field success? boolean

---@class MailboxRemoveMatch
---@field id number

---@class Meeting
---@field id? string

---@class MeetingCreateData
---@field id? string

---@class MeetingRemoveMatch
---@field id string

---@class Note
---@field active_flag? boolean
---@field add_time? string
---@field company_id? number
---@field content? string
---@field deal? table
---@field deal_id? number
---@field id? number
---@field last_update_user_id? number
---@field lead_id? string
---@field object_id? string
---@field object_type? string
---@field org_id? number
---@field organization? table
---@field person? table
---@field person_id? number
---@field pinned_to_deal_flag? boolean
---@field pinned_to_organization_flag? boolean
---@field pinned_to_person_flag? boolean
---@field pinned_to_project_flag? boolean
---@field pinned_to_task_flag? boolean
---@field project? table
---@field project_id? number
---@field task? table
---@field task_id? number
---@field update_time? string
---@field updater_id? number
---@field user? table
---@field user_id? number
---@field uuid? string

---@class NoteLoadMatch
---@field comment_id? string
---@field id number

---@class NoteListMatch
---@field deal_id? number
---@field end_date? string
---@field lead_id? string
---@field limit? number
---@field org_id? number
---@field person_id? number
---@field pinned_to_deal_flag? number
---@field pinned_to_lead_flag? number
---@field pinned_to_organization_flag? number
---@field pinned_to_person_flag? number
---@field pinned_to_project_flag? number
---@field pinned_to_task_flag? number
---@field project_id? number
---@field sort? string
---@field start? number
---@field start_date? string
---@field task_id? number
---@field updated_since? string
---@field user_id? number

---@class NoteCreateData
---@field active_flag? boolean
---@field add_time? string
---@field company_id? number
---@field content? string
---@field deal? table
---@field deal_id? number
---@field id? number
---@field last_update_user_id? number
---@field lead_id? string
---@field object_id? string
---@field object_type? string
---@field org_id? number
---@field organization? table
---@field person? table
---@field person_id? number
---@field pinned_to_deal_flag? boolean
---@field pinned_to_organization_flag? boolean
---@field pinned_to_person_flag? boolean
---@field pinned_to_project_flag? boolean
---@field pinned_to_task_flag? boolean
---@field project? table
---@field project_id? number
---@field task? table
---@field task_id? number
---@field update_time? string
---@field updater_id? number
---@field user? table
---@field user_id? number
---@field uuid? string

---@class NoteUpdateData
---@field comment_id? string
---@field id number
---@field active_flag? boolean
---@field add_time? string
---@field company_id? number
---@field content? string
---@field deal? table
---@field deal_id? number
---@field last_update_user_id? number
---@field lead_id? string
---@field object_id? string
---@field object_type? string
---@field org_id? number
---@field organization? table
---@field person? table
---@field person_id? number
---@field pinned_to_deal_flag? boolean
---@field pinned_to_organization_flag? boolean
---@field pinned_to_person_flag? boolean
---@field pinned_to_project_flag? boolean
---@field pinned_to_task_flag? boolean
---@field project? table
---@field project_id? number
---@field task? table
---@field task_id? number
---@field update_time? string
---@field updater_id? number
---@field user? table
---@field user_id? number
---@field uuid? string

---@class NoteRemoveMatch
---@field comment_id? string
---@field id number

---@class NoteField
---@field additional_data? table
---@field data? table
---@field success? boolean

---@class NoteFieldListMatch
---@field additional_data? table
---@field data? table
---@field success? boolean

---@class Oauth

---@class OauthLoadMatch
---@field client_id string
---@field redirect_uri string
---@field state? string

---@class OauthCreateData

---@class Organization
---@field id? string

---@class OrganizationListMatch
---@field id number
---@field all_change? string
---@field item? string
---@field limit? number
---@field start? number
---@field sort? string
---@field include_body? number
---@field cursor? string

---@class OrganizationCreateData
---@field id number

---@class OrganizationUpdateData
---@field id number

---@class OrganizationRemoveMatch
---@field follower_id number
---@field id number

---@class OrganizationField
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field id? string
---@field name? string
---@field options? table
---@field success? boolean

---@class OrganizationFieldLoadMatch
---@field id number

---@class OrganizationFieldListMatch
---@field limit? number
---@field start? number

---@class OrganizationFieldCreateData
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field id? string
---@field name? string
---@field options? table
---@field success? boolean

---@class OrganizationFieldUpdateData
---@field id number
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field name? string
---@field options? table
---@field success? boolean

---@class OrganizationFieldRemoveMatch
---@field id number

---@class OrganizationRelationship
---@field additional_data? table
---@field data? any
---@field id? string
---@field org_id? number
---@field rel_linked_org_id number
---@field rel_owner_org_id number
---@field related_objects? table
---@field success? boolean
---@field type string

---@class OrganizationRelationshipLoadMatch
---@field id number
---@field org_id? number

---@class OrganizationRelationshipListMatch
---@field org_id number

---@class OrganizationRelationshipCreateData
---@field additional_data? table
---@field data? any
---@field id? string
---@field org_id? number
---@field rel_linked_org_id number
---@field rel_owner_org_id number
---@field related_objects? table
---@field success? boolean
---@field type string

---@class OrganizationRelationshipUpdateData
---@field id number
---@field additional_data? table
---@field data? any
---@field org_id? number
---@field rel_linked_org_id? number
---@field rel_owner_org_id? number
---@field related_objects? table
---@field success? boolean
---@field type? string

---@class OrganizationRelationshipRemoveMatch
---@field id number

---@class PermissionSet
---@field app? string
---@field assignment_count? number
---@field contents? table
---@field data? table
---@field description? string
---@field id? string
---@field name? string
---@field success? boolean
---@field type? string

---@class PermissionSetLoadMatch
---@field id string

---@class PermissionSetListMatch
---@field app? string

---@class Person
---@field id? string

---@class PersonListMatch
---@field id number
---@field all_change? string
---@field item? string
---@field limit? number
---@field start? number
---@field sort? string
---@field include_body? number
---@field cursor? string

---@class PersonCreateData
---@field id number

---@class PersonUpdateData
---@field id number

---@class PersonRemoveMatch
---@field follower_id number
---@field id number

---@class PersonField
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field id? string
---@field name? string
---@field options? table
---@field success? boolean

---@class PersonFieldLoadMatch
---@field id number

---@class PersonFieldListMatch
---@field limit? number
---@field start? number

---@class PersonFieldCreateData
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field id? string
---@field name? string
---@field options? table
---@field success? boolean

---@class PersonFieldUpdateData
---@field id number
---@field add_visible_flag? boolean
---@field additional_data? table
---@field data? table
---@field name? string
---@field options? table
---@field success? boolean

---@class PersonFieldRemoveMatch
---@field id number

---@class Pipeline
---@field id? string

---@class PipelineLoadMatch
---@field id number
---@field end_date string
---@field start_date string
---@field user_id? number

---@class PipelineListMatch
---@field id number
---@field everyone? number
---@field filter_id? number
---@field get_summary? number
---@field limit? number
---@field stage_id? number
---@field start? number
---@field totals_convert_currency? string
---@field user_id? number

---@class Product
---@field id? string

---@class ProductListMatch
---@field id number
---@field limit? number
---@field start? number
---@field status? string
---@field sort? string

---@class ProductCreateData
---@field id number

---@class ProductRemoveMatch
---@field follower_id number
---@field id number

---@class ProductField
---@field data? table
---@field field_type string
---@field id? string
---@field name string
---@field options? table
---@field success? boolean

---@class ProductFieldLoadMatch
---@field id number

---@class ProductFieldListMatch
---@field limit? number
---@field start? number

---@class ProductFieldCreateData
---@field data? table
---@field field_type string
---@field id? string
---@field name string
---@field options? table
---@field success? boolean

---@class ProductFieldUpdateData
---@field id number
---@field data? table
---@field field_type? string
---@field name? string
---@field options? table
---@field success? boolean

---@class ProductFieldRemoveMatch
---@field id number

---@class Project
---@field additional_data? table
---@field data? any
---@field group_id? number
---@field id? number
---@field phase_id? number
---@field success? boolean

---@class ProjectLoadMatch
---@field id number

---@class ProjectListMatch
---@field cursor? string
---@field filter_id? number
---@field include_archived? boolean
---@field limit? number
---@field phase_id? number
---@field status? string

---@class ProjectCreateData
---@field additional_data? table
---@field data? any
---@field group_id? number
---@field id? number
---@field phase_id? number
---@field success? boolean

---@class ProjectUpdateData
---@field activity_id? number
---@field id number
---@field task_id? number
---@field additional_data? table
---@field data? any
---@field group_id? number
---@field phase_id? number
---@field success? boolean

---@class ProjectRemoveMatch
---@field id number

---@class ProjectBoard
---@field add_time? string
---@field additional_data? table
---@field data? table
---@field id? number
---@field name? string
---@field order_nr? number
---@field success? boolean
---@field update_time? string

---@class ProjectBoardLoadMatch
---@field id number

---@class ProjectBoardListMatch
---@field add_time? string
---@field additional_data? table
---@field data? table
---@field id? number
---@field name? string
---@field order_nr? number
---@field success? boolean
---@field update_time? string

---@class ProjectPhase
---@field add_time? string
---@field additional_data? table
---@field board_id? number
---@field data? table
---@field id? number
---@field name? string
---@field order_nr? number
---@field success? boolean
---@field update_time? string

---@class ProjectPhaseLoadMatch
---@field id number

---@class ProjectPhaseListMatch
---@field board_id number

---@class ProjectTemplate
---@field add_time? string
---@field additional_data? table
---@field data? any
---@field description? string
---@field id? number
---@field owner_id? number
---@field projects_board_id? number
---@field success? boolean
---@field title? string
---@field update_time? string

---@class ProjectTemplateLoadMatch
---@field id number

---@class ProjectTemplateListMatch
---@field cursor? string
---@field limit? number

---@class Recent
---@field additional_data? table
---@field data? table
---@field success? boolean

---@class RecentListMatch
---@field item? string
---@field limit? number
---@field since_timestamp string
---@field start? number

---@class Role
---@field additional_data? table
---@field data? any
---@field id? string
---@field name string
---@field parent_role_id? number
---@field success? boolean

---@class RoleLoadMatch
---@field id number

---@class RoleListMatch
---@field limit? number
---@field start? number

---@class RoleCreateData
---@field additional_data? table
---@field data? any
---@field id? string
---@field name string
---@field parent_role_id? number
---@field success? boolean

---@class RoleUpdateData
---@field id number
---@field additional_data? table
---@field data? any
---@field name? string
---@field parent_role_id? number
---@field success? boolean

---@class RoleRemoveMatch
---@field id number

---@class Stage
---@field id? string

---@class StageListMatch
---@field id number
---@field everyone? number
---@field filter_id? number
---@field limit? number
---@field start? number
---@field user_id? number

---@class Task
---@field additional_data? table
---@field data? table
---@field id? number
---@field success? boolean

---@class TaskLoadMatch
---@field id number

---@class TaskListMatch
---@field assignee_id? number
---@field cursor? string
---@field done? number
---@field limit? number
---@field parent_task_id? number
---@field project_id? number

---@class TaskCreateData
---@field additional_data? table
---@field data? table
---@field id? number
---@field success? boolean

---@class TaskUpdateData
---@field id number
---@field additional_data? table
---@field data? table
---@field success? boolean

---@class TaskRemoveMatch
---@field id number

---@class User
---@field access? table
---@field active_flag? boolean
---@field data? table
---@field email string
---@field id? string
---@field success? boolean

---@class UserLoadMatch
---@field id number

---@class UserListMatch
---@field access? table
---@field active_flag? boolean
---@field data? table
---@field email? string
---@field id? string
---@field success? boolean

---@class UserCreateData
---@field access? table
---@field active_flag? boolean
---@field data? table
---@field email string
---@field id? string
---@field success? boolean

---@class UserUpdateData
---@field id number
---@field access? table
---@field active_flag? boolean
---@field data? table
---@field email? string
---@field success? boolean

---@class UserConnection
---@field data? table
---@field success? boolean

---@class UserConnectionLoadMatch
---@field data? table
---@field success? boolean

---@class UserSetting
---@field data? table
---@field success? boolean

---@class UserSettingLoadMatch
---@field data? table
---@field success? boolean

---@class Webhook
---@field data? table
---@field event_action string
---@field event_object string
---@field http_auth_password? string
---@field http_auth_user? string
---@field id? string
---@field name string
---@field subscription_url string
---@field user_id? number
---@field version? string

---@class WebhookListMatch
---@field data? table
---@field event_action? string
---@field event_object? string
---@field http_auth_password? string
---@field http_auth_user? string
---@field id? string
---@field name? string
---@field subscription_url? string
---@field user_id? number
---@field version? string

---@class WebhookCreateData
---@field data? table
---@field event_action string
---@field event_object string
---@field http_auth_password? string
---@field http_auth_user? string
---@field id? string
---@field name string
---@field subscription_url string
---@field user_id? number
---@field version? string

---@class WebhookRemoveMatch
---@field id number

local M = {}

return M
