// Typed models for the Pipedrive SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} ActivityField
 * @property {Object} [additional_data]
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ActivityFieldListMatch
 * @property {Object} [additional_data]
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ActivityType
 * @property {string} [color]
 * @property {Array} [data]
 * @property {string} icon_key
 * @property {string} [id]
 * @property {string} name
 * @property {number} [order_nr]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ActivityTypeListMatch
 * @property {string} [color]
 * @property {Array} [data]
 * @property {string} [icon_key]
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [order_nr]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ActivityTypeCreateData
 * @property {string} [color]
 * @property {Array} [data]
 * @property {string} icon_key
 * @property {string} [id]
 * @property {string} name
 * @property {number} [order_nr]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ActivityTypeUpdateData
 * @property {number} id
 * @property {string} [color]
 * @property {Array} [data]
 * @property {string} [icon_key]
 * @property {string} [name]
 * @property {number} [order_nr]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ActivityTypeRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Billing
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} BillingListMatch
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} CallLog
 * @property {number} [activity_id]
 * @property {number} [company_id]
 * @property {number} [deal_id]
 * @property {string} [duration]
 * @property {string} end_time
 * @property {string} [from_phone_number]
 * @property {boolean} [has_recording]
 * @property {string} [id]
 * @property {string} [lead_id]
 * @property {string} [note]
 * @property {number} [org_id]
 * @property {string} outcome
 * @property {number} [person_id]
 * @property {string} start_time
 * @property {string} [subject]
 * @property {string} to_phone_number
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} CallLogLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CallLogListMatch
 * @property {number} [limit]
 * @property {number} [start]
 */

/**
 * @typedef {Object} CallLogCreateData
 * @property {number} [activity_id]
 * @property {number} [company_id]
 * @property {number} [deal_id]
 * @property {string} [duration]
 * @property {string} end_time
 * @property {string} [from_phone_number]
 * @property {boolean} [has_recording]
 * @property {string} [id]
 * @property {string} [lead_id]
 * @property {string} [note]
 * @property {number} [org_id]
 * @property {string} outcome
 * @property {number} [person_id]
 * @property {string} start_time
 * @property {string} [subject]
 * @property {string} to_phone_number
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} CallLogRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Channel
 * @property {Array} [attachments]
 * @property {string} [avatar_url]
 * @property {string} channel_id
 * @property {string} conversation_id
 * @property {string} [conversation_link]
 * @property {string} [created_at]
 * @property {string} [id]
 * @property {string} [marketplace_client_id]
 * @property {string} message
 * @property {string} [name]
 * @property {number} [pd_company_id]
 * @property {number} [pd_user_id]
 * @property {string} [provider_channel_id]
 * @property {string} [provider_type]
 * @property {string} [reply_by]
 * @property {string} sender_id
 * @property {string} status
 * @property {boolean} [template_support]
 */

/**
 * @typedef {Object} ChannelCreateData
 * @property {Array} [attachments]
 * @property {string} [avatar_url]
 * @property {string} channel_id
 * @property {string} conversation_id
 * @property {string} [conversation_link]
 * @property {string} [created_at]
 * @property {string} [id]
 * @property {string} [marketplace_client_id]
 * @property {string} message
 * @property {string} [name]
 * @property {number} [pd_company_id]
 * @property {number} [pd_user_id]
 * @property {string} [provider_channel_id]
 * @property {string} [provider_type]
 * @property {string} [reply_by]
 * @property {string} sender_id
 * @property {string} status
 * @property {boolean} [template_support]
 */

/**
 * @typedef {Object} ChannelRemoveMatch
 * @property {string} [conversation_id]
 * @property {string} id
 */

/**
 * @typedef {Object} Currency
 * @property {boolean} [active_flag]
 * @property {string} [code]
 * @property {number} [decimal_points]
 * @property {number} [id]
 * @property {boolean} [is_custom_flag]
 * @property {string} [name]
 * @property {string} [symbol]
 */

/**
 * @typedef {Object} CurrencyListMatch
 * @property {string} [term]
 */

/**
 * @typedef {Object} Deal
 * @property {Array} [deals]
 * @property {string} [id]
 * @property {string} [period_end]
 * @property {string} [period_start]
 * @property {number} [total_count]
 * @property {number} [total_currency_converted_value]
 * @property {string} [total_currency_converted_value_formatted]
 * @property {number} [total_weighted_currency_converted_value]
 * @property {string} [total_weighted_currency_converted_value_formatted]
 * @property {Object} [totals]
 * @property {Object} [values_total]
 * @property {Object} [weighted_values_total]
 */

/**
 * @typedef {Object} DealLoadMatch
 * @property {number} amount
 * @property {number} [exclude_deal]
 * @property {string} field_key
 * @property {number} [filter_id]
 * @property {string} interval
 * @property {number} [pipeline_id]
 * @property {string} start_date
 * @property {string} [totals_convert_currency]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} DealListMatch
 * @property {number} [filter_id]
 * @property {number} [limit]
 * @property {number} [org_id]
 * @property {number} [owned_by_you]
 * @property {number} [person_id]
 * @property {number} [pipeline_id]
 * @property {number} [product_id]
 * @property {string} [sort]
 * @property {number} [stage_id]
 * @property {number} [start]
 * @property {string} [status]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} DealCreateData
 * @property {number} id
 * @property {Array} [deals]
 * @property {string} [period_end]
 * @property {string} [period_start]
 * @property {number} [total_count]
 * @property {number} [total_currency_converted_value]
 * @property {string} [total_currency_converted_value_formatted]
 * @property {number} [total_weighted_currency_converted_value]
 * @property {string} [total_weighted_currency_converted_value_formatted]
 * @property {Object} [totals]
 * @property {Object} [values_total]
 * @property {Object} [weighted_values_total]
 */

/**
 * @typedef {Object} DealUpdateData
 * @property {number} id
 * @property {Array} [deals]
 * @property {string} [period_end]
 * @property {string} [period_start]
 * @property {number} [total_count]
 * @property {number} [total_currency_converted_value]
 * @property {string} [total_currency_converted_value_formatted]
 * @property {number} [total_weighted_currency_converted_value]
 * @property {string} [total_weighted_currency_converted_value_formatted]
 * @property {Object} [totals]
 * @property {Object} [values_total]
 * @property {Object} [weighted_values_total]
 */

/**
 * @typedef {Object} DealRemoveMatch
 * @property {number} [deal_participant_id]
 * @property {number} id
 * @property {number} [follower_id]
 */

/**
 * @typedef {Object} DealField
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} DealFieldLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} DealFieldListMatch
 * @property {number} [limit]
 * @property {number} [start]
 */

/**
 * @typedef {Object} DealFieldCreateData
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} DealFieldUpdateData
 * @property {number} id
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} DealFieldRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} File
 * @property {boolean} [active_flag]
 * @property {number} [activity_id]
 * @property {string} [add_time]
 * @property {string} [cid]
 * @property {number} [deal_id]
 * @property {string} [deal_name]
 * @property {string} [description]
 * @property {string} [file_name]
 * @property {number} [file_size]
 * @property {number} [id]
 * @property {boolean} [inline_flag]
 * @property {string} [lead_id]
 * @property {string} [lead_name]
 * @property {string} [mail_message_id]
 * @property {string} [mail_template_id]
 * @property {string} [name]
 * @property {number} [org_id]
 * @property {string} [org_name]
 * @property {number} [person_id]
 * @property {string} [person_name]
 * @property {number} [product_id]
 * @property {string} [product_name]
 * @property {number} [project_id]
 * @property {string} [project_name]
 * @property {string} [remote_id]
 * @property {string} [remote_location]
 * @property {string} [s3_bucket]
 * @property {string} [update_time]
 * @property {string} [url]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} FileLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} FileListMatch
 * @property {number} [limit]
 * @property {string} [sort]
 * @property {number} [start]
 */

/**
 * @typedef {Object} FileCreateData
 * @property {boolean} [active_flag]
 * @property {number} [activity_id]
 * @property {string} [add_time]
 * @property {string} [cid]
 * @property {number} [deal_id]
 * @property {string} [deal_name]
 * @property {string} [description]
 * @property {string} [file_name]
 * @property {number} [file_size]
 * @property {number} [id]
 * @property {boolean} [inline_flag]
 * @property {string} [lead_id]
 * @property {string} [lead_name]
 * @property {string} [mail_message_id]
 * @property {string} [mail_template_id]
 * @property {string} [name]
 * @property {number} [org_id]
 * @property {string} [org_name]
 * @property {number} [person_id]
 * @property {string} [person_name]
 * @property {number} [product_id]
 * @property {string} [product_name]
 * @property {number} [project_id]
 * @property {string} [project_name]
 * @property {string} [remote_id]
 * @property {string} [remote_location]
 * @property {string} [s3_bucket]
 * @property {string} [update_time]
 * @property {string} [url]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} FileUpdateData
 * @property {number} id
 * @property {boolean} [active_flag]
 * @property {number} [activity_id]
 * @property {string} [add_time]
 * @property {string} [cid]
 * @property {number} [deal_id]
 * @property {string} [deal_name]
 * @property {string} [description]
 * @property {string} [file_name]
 * @property {number} [file_size]
 * @property {boolean} [inline_flag]
 * @property {string} [lead_id]
 * @property {string} [lead_name]
 * @property {string} [mail_message_id]
 * @property {string} [mail_template_id]
 * @property {string} [name]
 * @property {number} [org_id]
 * @property {string} [org_name]
 * @property {number} [person_id]
 * @property {string} [person_name]
 * @property {number} [product_id]
 * @property {string} [product_name]
 * @property {number} [project_id]
 * @property {string} [project_name]
 * @property {string} [remote_id]
 * @property {string} [remote_location]
 * @property {string} [s3_bucket]
 * @property {string} [update_time]
 * @property {string} [url]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} FileRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Filter
 * @property {Object} conditions
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} name
 * @property {boolean} [success]
 * @property {string} type
 */

/**
 * @typedef {Object} FilterLoadMatch
 * @property {number} id
 * @property {boolean} [include_field_code]
 */

/**
 * @typedef {Object} FilterListMatch
 * @property {string} [type]
 */

/**
 * @typedef {Object} FilterCreateData
 * @property {boolean} [include_field_code]
 * @property {Object} conditions
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} name
 * @property {boolean} [success]
 * @property {string} type
 */

/**
 * @typedef {Object} FilterUpdateData
 * @property {number} id
 * @property {boolean} [include_field_code]
 * @property {Object} [conditions]
 * @property {Object} [data]
 * @property {string} [name]
 * @property {boolean} [success]
 * @property {string} [type]
 */

/**
 * @typedef {Object} FilterRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Goal
 * @property {Object} assignee
 * @property {Object} duration
 * @property {Object} expected_outcome
 * @property {Object} [goal]
 * @property {string} [id]
 * @property {string} interval
 * @property {string} [title]
 * @property {Object} type
 */

/**
 * @typedef {Object} GoalLoadMatch
 * @property {number} [assignee_id]
 * @property {string} [assignee_type]
 * @property {number} [expected_outcome_currency_id]
 * @property {number} [expected_outcome_target]
 * @property {string} [expected_outcome_tracking_metric]
 * @property {boolean} [is_active]
 * @property {string} [period_end]
 * @property {string} [period_start]
 * @property {string} [title]
 * @property {string} [type_name]
 * @property {Array} [type_params_activity_type_id]
 * @property {Array} [type_params_pipeline_id]
 * @property {number} [type_params_stage_id]
 */

/**
 * @typedef {Object} GoalCreateData
 * @property {Object} assignee
 * @property {Object} duration
 * @property {Object} expected_outcome
 * @property {Object} [goal]
 * @property {string} [id]
 * @property {string} interval
 * @property {string} [title]
 * @property {Object} type
 */

/**
 * @typedef {Object} GoalUpdateData
 * @property {string} id
 * @property {Object} [assignee]
 * @property {Object} [duration]
 * @property {Object} [expected_outcome]
 * @property {Object} [goal]
 * @property {string} [interval]
 * @property {string} [title]
 * @property {Object} [type]
 */

/**
 * @typedef {Object} GoalRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Lead
 * @property {string} [add_time]
 * @property {string} [cc_email]
 * @property {number} [channel]
 * @property {string} [channel_id]
 * @property {number} [creator_id]
 * @property {string} [expected_close_date]
 * @property {string} [id]
 * @property {boolean} [is_archived]
 * @property {Array} [label_ids]
 * @property {number} [next_activity_id]
 * @property {number} [organization_id]
 * @property {string} [origin]
 * @property {string} [origin_id]
 * @property {number} [owner_id]
 * @property {number} [person_id]
 * @property {number} [source_deal_id]
 * @property {string} [source_name]
 * @property {string} [title]
 * @property {string} [update_time]
 * @property {Object} value
 * @property {string} [visible_to]
 * @property {boolean} [was_seen]
 */

/**
 * @typedef {Object} LeadLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LeadListMatch
 * @property {number} [filter_id]
 * @property {number} [limit]
 * @property {number} [organization_id]
 * @property {number} [owner_id]
 * @property {number} [person_id]
 * @property {string} [sort]
 * @property {number} [start]
 * @property {string} [updated_since]
 */

/**
 * @typedef {Object} LeadCreateData
 * @property {string} [add_time]
 * @property {string} [cc_email]
 * @property {number} [channel]
 * @property {string} [channel_id]
 * @property {number} [creator_id]
 * @property {string} [expected_close_date]
 * @property {string} [id]
 * @property {boolean} [is_archived]
 * @property {Array} [label_ids]
 * @property {number} [next_activity_id]
 * @property {number} [organization_id]
 * @property {string} [origin]
 * @property {string} [origin_id]
 * @property {number} [owner_id]
 * @property {number} [person_id]
 * @property {number} [source_deal_id]
 * @property {string} [source_name]
 * @property {string} [title]
 * @property {string} [update_time]
 * @property {Object} value
 * @property {string} [visible_to]
 * @property {boolean} [was_seen]
 */

/**
 * @typedef {Object} LeadUpdateData
 * @property {string} id
 * @property {string} [add_time]
 * @property {string} [cc_email]
 * @property {number} [channel]
 * @property {string} [channel_id]
 * @property {number} [creator_id]
 * @property {string} [expected_close_date]
 * @property {boolean} [is_archived]
 * @property {Array} [label_ids]
 * @property {number} [next_activity_id]
 * @property {number} [organization_id]
 * @property {string} [origin]
 * @property {string} [origin_id]
 * @property {number} [owner_id]
 * @property {number} [person_id]
 * @property {number} [source_deal_id]
 * @property {string} [source_name]
 * @property {string} [title]
 * @property {string} [update_time]
 * @property {Object} [value]
 * @property {string} [visible_to]
 * @property {boolean} [was_seen]
 */

/**
 * @typedef {Object} LeadRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LeadField
 * @property {Object} [additional_data]
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} LeadFieldListMatch
 * @property {number} [limit]
 * @property {number} [start]
 */

/**
 * @typedef {Object} LeadLabel
 * @property {string} [add_time]
 * @property {string} [color]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} LeadLabelListMatch
 * @property {string} [add_time]
 * @property {string} [color]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} LeadLabelCreateData
 * @property {string} [add_time]
 * @property {string} [color]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} LeadLabelUpdateData
 * @property {string} id
 * @property {string} [add_time]
 * @property {string} [color]
 * @property {string} [name]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} LeadLabelRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LeadSource
 * @property {string} [name]
 */

/**
 * @typedef {Object} LeadSourceListMatch
 * @property {string} [name]
 */

/**
 * @typedef {Object} LegacyTeam
 * @property {Array} [data]
 * @property {string} [description]
 * @property {string} [id]
 * @property {number} manager_id
 * @property {string} name
 * @property {boolean} [success]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} LegacyTeamLoadMatch
 * @property {number} id
 * @property {string} [order_by]
 * @property {number} [skip_user]
 */

/**
 * @typedef {Object} LegacyTeamListMatch
 * @property {string} [order_by]
 * @property {number} [skip_user]
 */

/**
 * @typedef {Object} LegacyTeamCreateData
 * @property {Array} [data]
 * @property {string} [description]
 * @property {string} [id]
 * @property {number} manager_id
 * @property {string} name
 * @property {boolean} [success]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} LegacyTeamUpdateData
 * @property {number} id
 * @property {Array} [data]
 * @property {string} [description]
 * @property {number} [manager_id]
 * @property {string} [name]
 * @property {boolean} [success]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} LegacyTeamRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Mailbox
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} [service]
 * @property {number} [statusCode]
 * @property {string} [statusText]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} MailboxLoadMatch
 * @property {number} id
 * @property {number} [include_body]
 */

/**
 * @typedef {Object} MailboxListMatch
 * @property {number} mail_thread_id
 */

/**
 * @typedef {Object} MailboxUpdateData
 * @property {number} id
 * @property {Object} [data]
 * @property {string} [service]
 * @property {number} [statusCode]
 * @property {string} [statusText]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} MailboxRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Meeting
 * @property {string} [id]
 */

/**
 * @typedef {Object} MeetingCreateData
 * @property {string} [id]
 */

/**
 * @typedef {Object} MeetingRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Note
 * @property {boolean} [active_flag]
 * @property {string} [add_time]
 * @property {number} [company_id]
 * @property {string} [content]
 * @property {Object} [deal]
 * @property {number} [deal_id]
 * @property {number} [id]
 * @property {number} [last_update_user_id]
 * @property {string} [lead_id]
 * @property {string} [object_id]
 * @property {string} [object_type]
 * @property {number} [org_id]
 * @property {Object} [organization]
 * @property {Object} [person]
 * @property {number} [person_id]
 * @property {boolean} [pinned_to_deal_flag]
 * @property {boolean} [pinned_to_organization_flag]
 * @property {boolean} [pinned_to_person_flag]
 * @property {boolean} [pinned_to_project_flag]
 * @property {boolean} [pinned_to_task_flag]
 * @property {Object} [project]
 * @property {number} [project_id]
 * @property {Object} [task]
 * @property {number} [task_id]
 * @property {string} [update_time]
 * @property {number} [updater_id]
 * @property {Object} [user]
 * @property {number} [user_id]
 * @property {string} [uuid]
 */

/**
 * @typedef {Object} NoteLoadMatch
 * @property {string} [comment_id]
 * @property {number} id
 */

/**
 * @typedef {Object} NoteListMatch
 * @property {number} [deal_id]
 * @property {string} [end_date]
 * @property {string} [lead_id]
 * @property {number} [limit]
 * @property {number} [org_id]
 * @property {number} [person_id]
 * @property {number} [pinned_to_deal_flag]
 * @property {number} [pinned_to_lead_flag]
 * @property {number} [pinned_to_organization_flag]
 * @property {number} [pinned_to_person_flag]
 * @property {number} [pinned_to_project_flag]
 * @property {number} [pinned_to_task_flag]
 * @property {number} [project_id]
 * @property {string} [sort]
 * @property {number} [start]
 * @property {string} [start_date]
 * @property {number} [task_id]
 * @property {string} [updated_since]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} NoteCreateData
 * @property {boolean} [active_flag]
 * @property {string} [add_time]
 * @property {number} [company_id]
 * @property {string} [content]
 * @property {Object} [deal]
 * @property {number} [deal_id]
 * @property {number} [id]
 * @property {number} [last_update_user_id]
 * @property {string} [lead_id]
 * @property {string} [object_id]
 * @property {string} [object_type]
 * @property {number} [org_id]
 * @property {Object} [organization]
 * @property {Object} [person]
 * @property {number} [person_id]
 * @property {boolean} [pinned_to_deal_flag]
 * @property {boolean} [pinned_to_organization_flag]
 * @property {boolean} [pinned_to_person_flag]
 * @property {boolean} [pinned_to_project_flag]
 * @property {boolean} [pinned_to_task_flag]
 * @property {Object} [project]
 * @property {number} [project_id]
 * @property {Object} [task]
 * @property {number} [task_id]
 * @property {string} [update_time]
 * @property {number} [updater_id]
 * @property {Object} [user]
 * @property {number} [user_id]
 * @property {string} [uuid]
 */

/**
 * @typedef {Object} NoteUpdateData
 * @property {string} [comment_id]
 * @property {number} id
 * @property {boolean} [active_flag]
 * @property {string} [add_time]
 * @property {number} [company_id]
 * @property {string} [content]
 * @property {Object} [deal]
 * @property {number} [deal_id]
 * @property {number} [last_update_user_id]
 * @property {string} [lead_id]
 * @property {string} [object_id]
 * @property {string} [object_type]
 * @property {number} [org_id]
 * @property {Object} [organization]
 * @property {Object} [person]
 * @property {number} [person_id]
 * @property {boolean} [pinned_to_deal_flag]
 * @property {boolean} [pinned_to_organization_flag]
 * @property {boolean} [pinned_to_person_flag]
 * @property {boolean} [pinned_to_project_flag]
 * @property {boolean} [pinned_to_task_flag]
 * @property {Object} [project]
 * @property {number} [project_id]
 * @property {Object} [task]
 * @property {number} [task_id]
 * @property {string} [update_time]
 * @property {number} [updater_id]
 * @property {Object} [user]
 * @property {number} [user_id]
 * @property {string} [uuid]
 */

/**
 * @typedef {Object} NoteRemoveMatch
 * @property {string} [comment_id]
 * @property {number} id
 */

/**
 * @typedef {Object} NoteField
 * @property {Object} [additional_data]
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} NoteFieldListMatch
 * @property {Object} [additional_data]
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} Oauth
 */

/**
 * @typedef {Object} OauthLoadMatch
 * @property {string} client_id
 * @property {string} redirect_uri
 * @property {string} [state]
 */

/**
 * @typedef {Object} OauthCreateData
 */

/**
 * @typedef {Object} Organization
 * @property {string} [id]
 */

/**
 * @typedef {Object} OrganizationListMatch
 * @property {number} id
 * @property {string} [all_change]
 * @property {string} [item]
 * @property {number} [limit]
 * @property {number} [start]
 * @property {string} [sort]
 * @property {number} [include_body]
 * @property {string} [cursor]
 */

/**
 * @typedef {Object} OrganizationCreateData
 * @property {number} id
 */

/**
 * @typedef {Object} OrganizationUpdateData
 * @property {number} id
 */

/**
 * @typedef {Object} OrganizationRemoveMatch
 * @property {number} follower_id
 * @property {number} id
 */

/**
 * @typedef {Object} OrganizationField
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} OrganizationFieldLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} OrganizationFieldListMatch
 * @property {number} [limit]
 * @property {number} [start]
 */

/**
 * @typedef {Object} OrganizationFieldCreateData
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} OrganizationFieldUpdateData
 * @property {number} id
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} OrganizationFieldRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} OrganizationRelationship
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {string} [id]
 * @property {number} [org_id]
 * @property {number} rel_linked_org_id
 * @property {number} rel_owner_org_id
 * @property {Object} [related_objects]
 * @property {boolean} [success]
 * @property {string} type
 */

/**
 * @typedef {Object} OrganizationRelationshipLoadMatch
 * @property {number} id
 * @property {number} [org_id]
 */

/**
 * @typedef {Object} OrganizationRelationshipListMatch
 * @property {number} org_id
 */

/**
 * @typedef {Object} OrganizationRelationshipCreateData
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {string} [id]
 * @property {number} [org_id]
 * @property {number} rel_linked_org_id
 * @property {number} rel_owner_org_id
 * @property {Object} [related_objects]
 * @property {boolean} [success]
 * @property {string} type
 */

/**
 * @typedef {Object} OrganizationRelationshipUpdateData
 * @property {number} id
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {number} [org_id]
 * @property {number} [rel_linked_org_id]
 * @property {number} [rel_owner_org_id]
 * @property {Object} [related_objects]
 * @property {boolean} [success]
 * @property {string} [type]
 */

/**
 * @typedef {Object} OrganizationRelationshipRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} PermissionSet
 * @property {string} [app]
 * @property {number} [assignment_count]
 * @property {Array} [contents]
 * @property {Array} [data]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [success]
 * @property {string} [type]
 */

/**
 * @typedef {Object} PermissionSetLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PermissionSetListMatch
 * @property {string} [app]
 */

/**
 * @typedef {Object} Person
 * @property {string} [id]
 */

/**
 * @typedef {Object} PersonListMatch
 * @property {number} id
 * @property {string} [all_change]
 * @property {string} [item]
 * @property {number} [limit]
 * @property {number} [start]
 * @property {string} [sort]
 * @property {number} [include_body]
 * @property {string} [cursor]
 */

/**
 * @typedef {Object} PersonCreateData
 * @property {number} id
 */

/**
 * @typedef {Object} PersonUpdateData
 * @property {number} id
 */

/**
 * @typedef {Object} PersonRemoveMatch
 * @property {number} follower_id
 * @property {number} id
 */

/**
 * @typedef {Object} PersonField
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} PersonFieldLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} PersonFieldListMatch
 * @property {number} [limit]
 * @property {number} [start]
 */

/**
 * @typedef {Object} PersonFieldCreateData
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} PersonFieldUpdateData
 * @property {number} id
 * @property {boolean} [add_visible_flag]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} PersonFieldRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Pipeline
 * @property {string} [id]
 */

/**
 * @typedef {Object} PipelineLoadMatch
 * @property {number} id
 * @property {string} end_date
 * @property {string} start_date
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} PipelineListMatch
 * @property {number} id
 * @property {number} [everyone]
 * @property {number} [filter_id]
 * @property {number} [get_summary]
 * @property {number} [limit]
 * @property {number} [stage_id]
 * @property {number} [start]
 * @property {string} [totals_convert_currency]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} Product
 * @property {string} [id]
 */

/**
 * @typedef {Object} ProductListMatch
 * @property {number} id
 * @property {number} [limit]
 * @property {number} [start]
 * @property {string} [status]
 * @property {string} [sort]
 */

/**
 * @typedef {Object} ProductCreateData
 * @property {number} id
 */

/**
 * @typedef {Object} ProductRemoveMatch
 * @property {number} follower_id
 * @property {number} id
 */

/**
 * @typedef {Object} ProductField
 * @property {Object} [data]
 * @property {string} field_type
 * @property {string} [id]
 * @property {string} name
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ProductFieldLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProductFieldListMatch
 * @property {number} [limit]
 * @property {number} [start]
 */

/**
 * @typedef {Object} ProductFieldCreateData
 * @property {Object} [data]
 * @property {string} field_type
 * @property {string} [id]
 * @property {string} name
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ProductFieldUpdateData
 * @property {number} id
 * @property {Object} [data]
 * @property {string} [field_type]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ProductFieldRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Project
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {number} [group_id]
 * @property {number} [id]
 * @property {number} [phase_id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ProjectLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectListMatch
 * @property {string} [cursor]
 * @property {number} [filter_id]
 * @property {boolean} [include_archived]
 * @property {number} [limit]
 * @property {number} [phase_id]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ProjectCreateData
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {number} [group_id]
 * @property {number} [id]
 * @property {number} [phase_id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ProjectUpdateData
 * @property {number} [activity_id]
 * @property {number} id
 * @property {number} [task_id]
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {number} [group_id]
 * @property {number} [phase_id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} ProjectRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectBoard
 * @property {string} [add_time]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [order_nr]
 * @property {boolean} [success]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} ProjectBoardLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectBoardListMatch
 * @property {string} [add_time]
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [order_nr]
 * @property {boolean} [success]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} ProjectPhase
 * @property {string} [add_time]
 * @property {Object} [additional_data]
 * @property {number} [board_id]
 * @property {Object} [data]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [order_nr]
 * @property {boolean} [success]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} ProjectPhaseLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectPhaseListMatch
 * @property {number} board_id
 */

/**
 * @typedef {Object} ProjectTemplate
 * @property {string} [add_time]
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {string} [description]
 * @property {number} [id]
 * @property {number} [owner_id]
 * @property {number} [projects_board_id]
 * @property {boolean} [success]
 * @property {string} [title]
 * @property {string} [update_time]
 */

/**
 * @typedef {Object} ProjectTemplateLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectTemplateListMatch
 * @property {string} [cursor]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} Recent
 * @property {Object} [additional_data]
 * @property {Array} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} RecentListMatch
 * @property {string} [item]
 * @property {number} [limit]
 * @property {string} since_timestamp
 * @property {number} [start]
 */

/**
 * @typedef {Object} Role
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {string} [id]
 * @property {string} name
 * @property {number} [parent_role_id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} RoleLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} RoleListMatch
 * @property {number} [limit]
 * @property {number} [start]
 */

/**
 * @typedef {Object} RoleCreateData
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {string} [id]
 * @property {string} name
 * @property {number} [parent_role_id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} RoleUpdateData
 * @property {number} id
 * @property {Object} [additional_data]
 * @property {*} [data]
 * @property {string} [name]
 * @property {number} [parent_role_id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} RoleRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Stage
 * @property {string} [id]
 */

/**
 * @typedef {Object} StageListMatch
 * @property {number} id
 * @property {number} [everyone]
 * @property {number} [filter_id]
 * @property {number} [limit]
 * @property {number} [start]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} Task
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {number} [id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} TaskLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} TaskListMatch
 * @property {number} [assignee_id]
 * @property {string} [cursor]
 * @property {number} [done]
 * @property {number} [limit]
 * @property {number} [parent_task_id]
 * @property {number} [project_id]
 */

/**
 * @typedef {Object} TaskCreateData
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {number} [id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} TaskUpdateData
 * @property {number} id
 * @property {Object} [additional_data]
 * @property {Object} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} TaskRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} User
 * @property {Array} [access]
 * @property {boolean} [active_flag]
 * @property {Object} [data]
 * @property {string} email
 * @property {string} [id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} UserLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} UserListMatch
 * @property {Array} [access]
 * @property {boolean} [active_flag]
 * @property {Object} [data]
 * @property {string} [email]
 * @property {string} [id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} UserCreateData
 * @property {Array} [access]
 * @property {boolean} [active_flag]
 * @property {Object} [data]
 * @property {string} email
 * @property {string} [id]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} UserUpdateData
 * @property {number} id
 * @property {Array} [access]
 * @property {boolean} [active_flag]
 * @property {Object} [data]
 * @property {string} [email]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} UserConnection
 * @property {Object} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} UserConnectionLoadMatch
 * @property {Object} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} UserSetting
 * @property {Object} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} UserSettingLoadMatch
 * @property {Object} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef {Object} Webhook
 * @property {Array} [data]
 * @property {string} event_action
 * @property {string} event_object
 * @property {string} [http_auth_password]
 * @property {string} [http_auth_user]
 * @property {string} [id]
 * @property {string} name
 * @property {string} subscription_url
 * @property {number} [user_id]
 * @property {string} [version]
 */

/**
 * @typedef {Object} WebhookListMatch
 * @property {Array} [data]
 * @property {string} [event_action]
 * @property {string} [event_object]
 * @property {string} [http_auth_password]
 * @property {string} [http_auth_user]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [subscription_url]
 * @property {number} [user_id]
 * @property {string} [version]
 */

/**
 * @typedef {Object} WebhookCreateData
 * @property {Array} [data]
 * @property {string} event_action
 * @property {string} event_object
 * @property {string} [http_auth_password]
 * @property {string} [http_auth_user]
 * @property {string} [id]
 * @property {string} name
 * @property {string} subscription_url
 * @property {number} [user_id]
 * @property {string} [version]
 */

/**
 * @typedef {Object} WebhookRemoveMatch
 * @property {number} id
 */

