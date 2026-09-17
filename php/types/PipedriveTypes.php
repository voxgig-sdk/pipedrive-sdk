<?php
declare(strict_types=1);

// Typed models for the Pipedrive SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ActivityField entity data model. */
class ActivityField
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for ActivityField#list. */
class ActivityFieldListMatch
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?bool $success = null;
}

/** ActivityType entity data model. */
class ActivityType
{
    public ?string $color = null;
    public ?array $data = null;
    public string $icon_key;
    public ?string $id = null;
    public string $name;
    public ?int $order_nr = null;
    public ?bool $success = null;
}

/** Request payload for ActivityType#list. */
class ActivityTypeListMatch
{
    public ?string $color = null;
    public ?array $data = null;
    public ?string $icon_key = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?int $order_nr = null;
    public ?bool $success = null;
}

/** Request payload for ActivityType#create. */
class ActivityTypeCreateData
{
    public ?string $color = null;
    public ?array $data = null;
    public string $icon_key;
    public ?string $id = null;
    public string $name;
    public ?int $order_nr = null;
    public ?bool $success = null;
}

/** Request payload for ActivityType#update. */
class ActivityTypeUpdateData
{
    public int $id;
    public ?string $color = null;
    public ?array $data = null;
    public ?string $icon_key = null;
    public ?string $name = null;
    public ?int $order_nr = null;
    public ?bool $success = null;
}

/** Request payload for ActivityType#remove. */
class ActivityTypeRemoveMatch
{
    public int $id;
}

/** Billing entity data model. */
class Billing
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for Billing#list. */
class BillingListMatch
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** CallLog entity data model. */
class CallLog
{
    public ?int $activity_id = null;
    public ?int $company_id = null;
    public ?int $deal_id = null;
    public ?string $duration = null;
    public string $end_time;
    public ?string $from_phone_number = null;
    public ?bool $has_recording = null;
    public ?string $id = null;
    public ?string $lead_id = null;
    public ?string $note = null;
    public ?int $org_id = null;
    public string $outcome;
    public ?int $person_id = null;
    public string $start_time;
    public ?string $subject = null;
    public string $to_phone_number;
    public ?int $user_id = null;
}

/** Request payload for CallLog#load. */
class CallLogLoadMatch
{
    public string $id;
}

/** Request payload for CallLog#list. */
class CallLogListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
}

/** Request payload for CallLog#create. */
class CallLogCreateData
{
    public ?int $activity_id = null;
    public ?int $company_id = null;
    public ?int $deal_id = null;
    public ?string $duration = null;
    public string $end_time;
    public ?string $from_phone_number = null;
    public ?bool $has_recording = null;
    public ?string $id = null;
    public ?string $lead_id = null;
    public ?string $note = null;
    public ?int $org_id = null;
    public string $outcome;
    public ?int $person_id = null;
    public string $start_time;
    public ?string $subject = null;
    public string $to_phone_number;
    public ?int $user_id = null;
}

/** Request payload for CallLog#remove. */
class CallLogRemoveMatch
{
    public string $id;
}

/** Channel entity data model. */
class Channel
{
    public ?array $attachments = null;
    public ?string $avatar_url = null;
    public string $channel_id;
    public string $conversation_id;
    public ?string $conversation_link = null;
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $marketplace_client_id = null;
    public string $message;
    public ?string $name = null;
    public ?int $pd_company_id = null;
    public ?int $pd_user_id = null;
    public ?string $provider_channel_id = null;
    public ?string $provider_type = null;
    public ?string $reply_by = null;
    public string $sender_id;
    public string $status;
    public ?bool $template_support = null;
}

/** Request payload for Channel#create. */
class ChannelCreateData
{
    public ?array $attachments = null;
    public ?string $avatar_url = null;
    public string $channel_id;
    public string $conversation_id;
    public ?string $conversation_link = null;
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $marketplace_client_id = null;
    public string $message;
    public ?string $name = null;
    public ?int $pd_company_id = null;
    public ?int $pd_user_id = null;
    public ?string $provider_channel_id = null;
    public ?string $provider_type = null;
    public ?string $reply_by = null;
    public string $sender_id;
    public string $status;
    public ?bool $template_support = null;
}

/** Request payload for Channel#remove. */
class ChannelRemoveMatch
{
    public ?string $conversation_id = null;
    public string $id;
}

/** Currency entity data model. */
class Currency
{
    public ?bool $active_flag = null;
    public ?string $code = null;
    public ?int $decimal_points = null;
    public ?int $id = null;
    public ?bool $is_custom_flag = null;
    public ?string $name = null;
    public ?string $symbol = null;
}

/** Request payload for Currency#list. */
class CurrencyListMatch
{
    public ?string $term = null;
}

/** Deal entity data model. */
class Deal
{
    public ?array $deals = null;
    public ?string $id = null;
    public ?string $period_end = null;
    public ?string $period_start = null;
    public ?int $total_count = null;
    public ?float $total_currency_converted_value = null;
    public ?string $total_currency_converted_value_formatted = null;
    public ?float $total_weighted_currency_converted_value = null;
    public ?string $total_weighted_currency_converted_value_formatted = null;
    public ?array $totals = null;
    public ?array $values_total = null;
    public ?array $weighted_values_total = null;
}

/** Request payload for Deal#load. */
class DealLoadMatch
{
    public int $amount;
    public ?float $exclude_deal = null;
    public string $field_key;
    public ?int $filter_id = null;
    public string $interval;
    public ?int $pipeline_id = null;
    public string $start_date;
    public ?string $totals_convert_currency = null;
    public ?int $user_id = null;
}

/** Request payload for Deal#list. */
class DealListMatch
{
    public ?int $filter_id = null;
    public ?int $limit = null;
    public ?int $org_id = null;
    public ?float $owned_by_you = null;
    public ?int $person_id = null;
    public ?int $pipeline_id = null;
    public ?int $product_id = null;
    public ?string $sort = null;
    public ?int $stage_id = null;
    public ?int $start = null;
    public ?string $status = null;
    public ?int $user_id = null;
}

/** Request payload for Deal#create. */
class DealCreateData
{
    public int $id;
    public ?array $deals = null;
    public ?string $period_end = null;
    public ?string $period_start = null;
    public ?int $total_count = null;
    public ?float $total_currency_converted_value = null;
    public ?string $total_currency_converted_value_formatted = null;
    public ?float $total_weighted_currency_converted_value = null;
    public ?string $total_weighted_currency_converted_value_formatted = null;
    public ?array $totals = null;
    public ?array $values_total = null;
    public ?array $weighted_values_total = null;
}

/** Request payload for Deal#update. */
class DealUpdateData
{
    public int $id;
    public ?array $deals = null;
    public ?string $period_end = null;
    public ?string $period_start = null;
    public ?int $total_count = null;
    public ?float $total_currency_converted_value = null;
    public ?string $total_currency_converted_value_formatted = null;
    public ?float $total_weighted_currency_converted_value = null;
    public ?string $total_weighted_currency_converted_value_formatted = null;
    public ?array $totals = null;
    public ?array $values_total = null;
    public ?array $weighted_values_total = null;
}

/** Request payload for Deal#remove. */
class DealRemoveMatch
{
    public ?int $deal_participant_id = null;
    public int $id;
    public ?int $follower_id = null;
}

/** DealField entity data model. */
class DealField
{
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for DealField#load. */
class DealFieldLoadMatch
{
    public int $id;
}

/** Request payload for DealField#list. */
class DealFieldListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
}

/** Request payload for DealField#create. */
class DealFieldCreateData
{
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for DealField#update. */
class DealFieldUpdateData
{
    public int $id;
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for DealField#remove. */
class DealFieldRemoveMatch
{
    public int $id;
}

/** File entity data model. */
class File
{
    public ?bool $active_flag = null;
    public ?int $activity_id = null;
    public ?string $add_time = null;
    public ?string $cid = null;
    public ?int $deal_id = null;
    public ?string $deal_name = null;
    public ?string $description = null;
    public ?string $file_name = null;
    public ?int $file_size = null;
    public ?int $id = null;
    public ?bool $inline_flag = null;
    public ?string $lead_id = null;
    public ?string $lead_name = null;
    public ?string $mail_message_id = null;
    public ?string $mail_template_id = null;
    public ?string $name = null;
    public ?int $org_id = null;
    public ?string $org_name = null;
    public ?int $person_id = null;
    public ?string $person_name = null;
    public ?int $product_id = null;
    public ?string $product_name = null;
    public ?int $project_id = null;
    public ?string $project_name = null;
    public ?string $remote_id = null;
    public ?string $remote_location = null;
    public ?string $s3_bucket = null;
    public ?string $update_time = null;
    public ?string $url = null;
    public ?int $user_id = null;
}

/** Request payload for File#load. */
class FileLoadMatch
{
    public int $id;
}

/** Request payload for File#list. */
class FileListMatch
{
    public ?int $limit = null;
    public ?string $sort = null;
    public ?int $start = null;
}

/** Request payload for File#create. */
class FileCreateData
{
    public ?bool $active_flag = null;
    public ?int $activity_id = null;
    public ?string $add_time = null;
    public ?string $cid = null;
    public ?int $deal_id = null;
    public ?string $deal_name = null;
    public ?string $description = null;
    public ?string $file_name = null;
    public ?int $file_size = null;
    public ?int $id = null;
    public ?bool $inline_flag = null;
    public ?string $lead_id = null;
    public ?string $lead_name = null;
    public ?string $mail_message_id = null;
    public ?string $mail_template_id = null;
    public ?string $name = null;
    public ?int $org_id = null;
    public ?string $org_name = null;
    public ?int $person_id = null;
    public ?string $person_name = null;
    public ?int $product_id = null;
    public ?string $product_name = null;
    public ?int $project_id = null;
    public ?string $project_name = null;
    public ?string $remote_id = null;
    public ?string $remote_location = null;
    public ?string $s3_bucket = null;
    public ?string $update_time = null;
    public ?string $url = null;
    public ?int $user_id = null;
}

/** Request payload for File#update. */
class FileUpdateData
{
    public int $id;
    public ?bool $active_flag = null;
    public ?int $activity_id = null;
    public ?string $add_time = null;
    public ?string $cid = null;
    public ?int $deal_id = null;
    public ?string $deal_name = null;
    public ?string $description = null;
    public ?string $file_name = null;
    public ?int $file_size = null;
    public ?bool $inline_flag = null;
    public ?string $lead_id = null;
    public ?string $lead_name = null;
    public ?string $mail_message_id = null;
    public ?string $mail_template_id = null;
    public ?string $name = null;
    public ?int $org_id = null;
    public ?string $org_name = null;
    public ?int $person_id = null;
    public ?string $person_name = null;
    public ?int $product_id = null;
    public ?string $product_name = null;
    public ?int $project_id = null;
    public ?string $project_name = null;
    public ?string $remote_id = null;
    public ?string $remote_location = null;
    public ?string $s3_bucket = null;
    public ?string $update_time = null;
    public ?string $url = null;
    public ?int $user_id = null;
}

/** Request payload for File#remove. */
class FileRemoveMatch
{
    public int $id;
}

/** Filter entity data model. */
class Filter
{
    public array $conditions;
    public ?array $data = null;
    public ?string $id = null;
    public string $name;
    public ?bool $success = null;
    public string $type;
}

/** Request payload for Filter#load. */
class FilterLoadMatch
{
    public int $id;
    public ?bool $include_field_code = null;
}

/** Request payload for Filter#list. */
class FilterListMatch
{
    public ?string $type = null;
}

/** Request payload for Filter#create. */
class FilterCreateData
{
    public ?bool $include_field_code = null;
    public array $conditions;
    public ?array $data = null;
    public ?string $id = null;
    public string $name;
    public ?bool $success = null;
    public string $type;
}

/** Request payload for Filter#update. */
class FilterUpdateData
{
    public int $id;
    public ?bool $include_field_code = null;
    public ?array $conditions = null;
    public ?array $data = null;
    public ?string $name = null;
    public ?bool $success = null;
    public ?string $type = null;
}

/** Request payload for Filter#remove. */
class FilterRemoveMatch
{
    public int $id;
}

/** Goal entity data model. */
class Goal
{
    public array $assignee;
    public array $duration;
    public array $expected_outcome;
    public ?array $goal = null;
    public ?string $id = null;
    public string $interval;
    public ?string $title = null;
    public array $type;
}

/** Request payload for Goal#load. */
class GoalLoadMatch
{
    public ?int $assignee_id = null;
    public ?string $assignee_type = null;
    public ?int $expected_outcome_currency_id = null;
    public ?float $expected_outcome_target = null;
    public ?string $expected_outcome_tracking_metric = null;
    public ?bool $is_active = null;
    public ?string $period_end = null;
    public ?string $period_start = null;
    public ?string $title = null;
    public ?string $type_name = null;
    public ?array $type_params_activity_type_id = null;
    public ?array $type_params_pipeline_id = null;
    public ?int $type_params_stage_id = null;
}

/** Request payload for Goal#create. */
class GoalCreateData
{
    public array $assignee;
    public array $duration;
    public array $expected_outcome;
    public ?array $goal = null;
    public ?string $id = null;
    public string $interval;
    public ?string $title = null;
    public array $type;
}

/** Request payload for Goal#update. */
class GoalUpdateData
{
    public string $id;
    public ?array $assignee = null;
    public ?array $duration = null;
    public ?array $expected_outcome = null;
    public ?array $goal = null;
    public ?string $interval = null;
    public ?string $title = null;
    public ?array $type = null;
}

/** Request payload for Goal#remove. */
class GoalRemoveMatch
{
    public string $id;
}

/** Lead entity data model. */
class Lead
{
    public ?string $add_time = null;
    public ?string $cc_email = null;
    public ?int $channel = null;
    public ?string $channel_id = null;
    public ?int $creator_id = null;
    public ?string $expected_close_date = null;
    public ?string $id = null;
    public ?bool $is_archived = null;
    public ?array $label_ids = null;
    public ?int $next_activity_id = null;
    public ?int $organization_id = null;
    public ?string $origin = null;
    public ?string $origin_id = null;
    public ?int $owner_id = null;
    public ?int $person_id = null;
    public ?int $source_deal_id = null;
    public ?string $source_name = null;
    public ?string $title = null;
    public ?string $update_time = null;
    public array $value;
    public ?string $visible_to = null;
    public ?bool $was_seen = null;
}

/** Request payload for Lead#load. */
class LeadLoadMatch
{
    public string $id;
}

/** Request payload for Lead#list. */
class LeadListMatch
{
    public ?int $filter_id = null;
    public ?int $limit = null;
    public ?int $organization_id = null;
    public ?int $owner_id = null;
    public ?int $person_id = null;
    public ?string $sort = null;
    public ?int $start = null;
    public ?string $updated_since = null;
}

/** Request payload for Lead#create. */
class LeadCreateData
{
    public ?string $add_time = null;
    public ?string $cc_email = null;
    public ?int $channel = null;
    public ?string $channel_id = null;
    public ?int $creator_id = null;
    public ?string $expected_close_date = null;
    public ?string $id = null;
    public ?bool $is_archived = null;
    public ?array $label_ids = null;
    public ?int $next_activity_id = null;
    public ?int $organization_id = null;
    public ?string $origin = null;
    public ?string $origin_id = null;
    public ?int $owner_id = null;
    public ?int $person_id = null;
    public ?int $source_deal_id = null;
    public ?string $source_name = null;
    public ?string $title = null;
    public ?string $update_time = null;
    public array $value;
    public ?string $visible_to = null;
    public ?bool $was_seen = null;
}

/** Request payload for Lead#update. */
class LeadUpdateData
{
    public string $id;
    public ?string $add_time = null;
    public ?string $cc_email = null;
    public ?int $channel = null;
    public ?string $channel_id = null;
    public ?int $creator_id = null;
    public ?string $expected_close_date = null;
    public ?bool $is_archived = null;
    public ?array $label_ids = null;
    public ?int $next_activity_id = null;
    public ?int $organization_id = null;
    public ?string $origin = null;
    public ?string $origin_id = null;
    public ?int $owner_id = null;
    public ?int $person_id = null;
    public ?int $source_deal_id = null;
    public ?string $source_name = null;
    public ?string $title = null;
    public ?string $update_time = null;
    public ?array $value = null;
    public ?string $visible_to = null;
    public ?bool $was_seen = null;
}

/** Request payload for Lead#remove. */
class LeadRemoveMatch
{
    public string $id;
}

/** LeadField entity data model. */
class LeadField
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for LeadField#list. */
class LeadFieldListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
}

/** LeadLabel entity data model. */
class LeadLabel
{
    public ?string $add_time = null;
    public ?string $color = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $update_time = null;
}

/** Request payload for LeadLabel#list. */
class LeadLabelListMatch
{
    public ?string $add_time = null;
    public ?string $color = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $update_time = null;
}

/** Request payload for LeadLabel#create. */
class LeadLabelCreateData
{
    public ?string $add_time = null;
    public ?string $color = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $update_time = null;
}

/** Request payload for LeadLabel#update. */
class LeadLabelUpdateData
{
    public string $id;
    public ?string $add_time = null;
    public ?string $color = null;
    public ?string $name = null;
    public ?string $update_time = null;
}

/** Request payload for LeadLabel#remove. */
class LeadLabelRemoveMatch
{
    public string $id;
}

/** LeadSource entity data model. */
class LeadSource
{
    public ?string $name = null;
}

/** Request payload for LeadSource#list. */
class LeadSourceListMatch
{
    public ?string $name = null;
}

/** LegacyTeam entity data model. */
class LegacyTeam
{
    public ?array $data = null;
    public ?string $description = null;
    public ?string $id = null;
    public int $manager_id;
    public string $name;
    public ?bool $success = null;
    public ?array $users = null;
}

/** Request payload for LegacyTeam#load. */
class LegacyTeamLoadMatch
{
    public int $id;
    public ?string $order_by = null;
    public ?float $skip_user = null;
}

/** Request payload for LegacyTeam#list. */
class LegacyTeamListMatch
{
    public ?string $order_by = null;
    public ?float $skip_user = null;
}

/** Request payload for LegacyTeam#create. */
class LegacyTeamCreateData
{
    public ?array $data = null;
    public ?string $description = null;
    public ?string $id = null;
    public int $manager_id;
    public string $name;
    public ?bool $success = null;
    public ?array $users = null;
}

/** Request payload for LegacyTeam#update. */
class LegacyTeamUpdateData
{
    public int $id;
    public ?array $data = null;
    public ?string $description = null;
    public ?int $manager_id = null;
    public ?string $name = null;
    public ?bool $success = null;
    public ?array $users = null;
}

/** Request payload for LegacyTeam#remove. */
class LegacyTeamRemoveMatch
{
    public int $id;
}

/** Mailbox entity data model. */
class Mailbox
{
    public ?array $data = null;
    public ?string $id = null;
    public ?string $service = null;
    public ?int $statusCode = null;
    public ?string $statusText = null;
    public ?bool $success = null;
}

/** Request payload for Mailbox#load. */
class MailboxLoadMatch
{
    public int $id;
    public ?float $include_body = null;
}

/** Request payload for Mailbox#list. */
class MailboxListMatch
{
    public int $mail_thread_id;
}

/** Request payload for Mailbox#update. */
class MailboxUpdateData
{
    public int $id;
    public ?array $data = null;
    public ?string $service = null;
    public ?int $statusCode = null;
    public ?string $statusText = null;
    public ?bool $success = null;
}

/** Request payload for Mailbox#remove. */
class MailboxRemoveMatch
{
    public int $id;
}

/** Meeting entity data model. */
class Meeting
{
    public ?string $id = null;
}

/** Request payload for Meeting#create. */
class MeetingCreateData
{
    public ?string $id = null;
}

/** Request payload for Meeting#remove. */
class MeetingRemoveMatch
{
    public string $id;
}

/** Note entity data model. */
class Note
{
    public ?bool $active_flag = null;
    public ?string $add_time = null;
    public ?int $company_id = null;
    public ?string $content = null;
    public ?array $deal = null;
    public ?int $deal_id = null;
    public ?int $id = null;
    public ?int $last_update_user_id = null;
    public ?string $lead_id = null;
    public ?string $object_id = null;
    public ?string $object_type = null;
    public ?int $org_id = null;
    public ?array $organization = null;
    public ?array $person = null;
    public ?int $person_id = null;
    public ?bool $pinned_to_deal_flag = null;
    public ?bool $pinned_to_organization_flag = null;
    public ?bool $pinned_to_person_flag = null;
    public ?bool $pinned_to_project_flag = null;
    public ?bool $pinned_to_task_flag = null;
    public ?array $project = null;
    public ?int $project_id = null;
    public ?array $task = null;
    public ?int $task_id = null;
    public ?string $update_time = null;
    public ?int $updater_id = null;
    public ?array $user = null;
    public ?int $user_id = null;
    public ?string $uuid = null;
}

/** Request payload for Note#load. */
class NoteLoadMatch
{
    public ?string $comment_id = null;
    public int $id;
}

/** Request payload for Note#list. */
class NoteListMatch
{
    public ?int $deal_id = null;
    public ?string $end_date = null;
    public ?string $lead_id = null;
    public ?int $limit = null;
    public ?int $org_id = null;
    public ?int $person_id = null;
    public ?float $pinned_to_deal_flag = null;
    public ?float $pinned_to_lead_flag = null;
    public ?float $pinned_to_organization_flag = null;
    public ?float $pinned_to_person_flag = null;
    public ?float $pinned_to_project_flag = null;
    public ?float $pinned_to_task_flag = null;
    public ?int $project_id = null;
    public ?string $sort = null;
    public ?int $start = null;
    public ?string $start_date = null;
    public ?int $task_id = null;
    public ?string $updated_since = null;
    public ?int $user_id = null;
}

/** Request payload for Note#create. */
class NoteCreateData
{
    public ?bool $active_flag = null;
    public ?string $add_time = null;
    public ?int $company_id = null;
    public ?string $content = null;
    public ?array $deal = null;
    public ?int $deal_id = null;
    public ?int $id = null;
    public ?int $last_update_user_id = null;
    public ?string $lead_id = null;
    public ?string $object_id = null;
    public ?string $object_type = null;
    public ?int $org_id = null;
    public ?array $organization = null;
    public ?array $person = null;
    public ?int $person_id = null;
    public ?bool $pinned_to_deal_flag = null;
    public ?bool $pinned_to_organization_flag = null;
    public ?bool $pinned_to_person_flag = null;
    public ?bool $pinned_to_project_flag = null;
    public ?bool $pinned_to_task_flag = null;
    public ?array $project = null;
    public ?int $project_id = null;
    public ?array $task = null;
    public ?int $task_id = null;
    public ?string $update_time = null;
    public ?int $updater_id = null;
    public ?array $user = null;
    public ?int $user_id = null;
    public ?string $uuid = null;
}

/** Request payload for Note#update. */
class NoteUpdateData
{
    public ?string $comment_id = null;
    public int $id;
    public ?bool $active_flag = null;
    public ?string $add_time = null;
    public ?int $company_id = null;
    public ?string $content = null;
    public ?array $deal = null;
    public ?int $deal_id = null;
    public ?int $last_update_user_id = null;
    public ?string $lead_id = null;
    public ?string $object_id = null;
    public ?string $object_type = null;
    public ?int $org_id = null;
    public ?array $organization = null;
    public ?array $person = null;
    public ?int $person_id = null;
    public ?bool $pinned_to_deal_flag = null;
    public ?bool $pinned_to_organization_flag = null;
    public ?bool $pinned_to_person_flag = null;
    public ?bool $pinned_to_project_flag = null;
    public ?bool $pinned_to_task_flag = null;
    public ?array $project = null;
    public ?int $project_id = null;
    public ?array $task = null;
    public ?int $task_id = null;
    public ?string $update_time = null;
    public ?int $updater_id = null;
    public ?array $user = null;
    public ?int $user_id = null;
    public ?string $uuid = null;
}

/** Request payload for Note#remove. */
class NoteRemoveMatch
{
    public ?string $comment_id = null;
    public int $id;
}

/** NoteField entity data model. */
class NoteField
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for NoteField#list. */
class NoteFieldListMatch
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?bool $success = null;
}

/** Oauth entity data model. */
class Oauth
{
}

/** Request payload for Oauth#load. */
class OauthLoadMatch
{
    public string $client_id;
    public string $redirect_uri;
    public ?string $state = null;
}

/** Request payload for Oauth#create. */
class OauthCreateData
{
}

/** Organization entity data model. */
class Organization
{
    public ?string $id = null;
}

/** Request payload for Organization#list. */
class OrganizationListMatch
{
    public int $id;
    public ?string $all_change = null;
    public ?string $item = null;
    public ?int $limit = null;
    public ?int $start = null;
    public ?string $sort = null;
    public ?float $include_body = null;
    public ?string $cursor = null;
}

/** Request payload for Organization#create. */
class OrganizationCreateData
{
    public int $id;
}

/** Request payload for Organization#update. */
class OrganizationUpdateData
{
    public int $id;
}

/** Request payload for Organization#remove. */
class OrganizationRemoveMatch
{
    public int $follower_id;
    public int $id;
}

/** OrganizationField entity data model. */
class OrganizationField
{
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for OrganizationField#load. */
class OrganizationFieldLoadMatch
{
    public int $id;
}

/** Request payload for OrganizationField#list. */
class OrganizationFieldListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
}

/** Request payload for OrganizationField#create. */
class OrganizationFieldCreateData
{
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for OrganizationField#update. */
class OrganizationFieldUpdateData
{
    public int $id;
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for OrganizationField#remove. */
class OrganizationFieldRemoveMatch
{
    public int $id;
}

/** OrganizationRelationship entity data model. */
class OrganizationRelationship
{
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?string $id = null;
    public ?int $org_id = null;
    public int $rel_linked_org_id;
    public int $rel_owner_org_id;
    public ?array $related_objects = null;
    public ?bool $success = null;
    public string $type;
}

/** Request payload for OrganizationRelationship#load. */
class OrganizationRelationshipLoadMatch
{
    public int $id;
    public ?int $org_id = null;
}

/** Request payload for OrganizationRelationship#list. */
class OrganizationRelationshipListMatch
{
    public int $org_id;
}

/** Request payload for OrganizationRelationship#create. */
class OrganizationRelationshipCreateData
{
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?string $id = null;
    public ?int $org_id = null;
    public int $rel_linked_org_id;
    public int $rel_owner_org_id;
    public ?array $related_objects = null;
    public ?bool $success = null;
    public string $type;
}

/** Request payload for OrganizationRelationship#update. */
class OrganizationRelationshipUpdateData
{
    public int $id;
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?int $org_id = null;
    public ?int $rel_linked_org_id = null;
    public ?int $rel_owner_org_id = null;
    public ?array $related_objects = null;
    public ?bool $success = null;
    public ?string $type = null;
}

/** Request payload for OrganizationRelationship#remove. */
class OrganizationRelationshipRemoveMatch
{
    public int $id;
}

/** PermissionSet entity data model. */
class PermissionSet
{
    public ?string $app = null;
    public ?int $assignment_count = null;
    public ?array $contents = null;
    public ?array $data = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?bool $success = null;
    public ?string $type = null;
}

/** Request payload for PermissionSet#load. */
class PermissionSetLoadMatch
{
    public string $id;
}

/** Request payload for PermissionSet#list. */
class PermissionSetListMatch
{
    public ?string $app = null;
}

/** Person entity data model. */
class Person
{
    public ?string $id = null;
}

/** Request payload for Person#list. */
class PersonListMatch
{
    public int $id;
    public ?string $all_change = null;
    public ?string $item = null;
    public ?int $limit = null;
    public ?int $start = null;
    public ?string $sort = null;
    public ?float $include_body = null;
    public ?string $cursor = null;
}

/** Request payload for Person#create. */
class PersonCreateData
{
    public int $id;
}

/** Request payload for Person#update. */
class PersonUpdateData
{
    public int $id;
}

/** Request payload for Person#remove. */
class PersonRemoveMatch
{
    public int $follower_id;
    public int $id;
}

/** PersonField entity data model. */
class PersonField
{
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for PersonField#load. */
class PersonFieldLoadMatch
{
    public int $id;
}

/** Request payload for PersonField#list. */
class PersonFieldListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
}

/** Request payload for PersonField#create. */
class PersonFieldCreateData
{
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for PersonField#update. */
class PersonFieldUpdateData
{
    public int $id;
    public ?bool $add_visible_flag = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for PersonField#remove. */
class PersonFieldRemoveMatch
{
    public int $id;
}

/** Pipeline entity data model. */
class Pipeline
{
    public ?string $id = null;
}

/** Request payload for Pipeline#load. */
class PipelineLoadMatch
{
    public int $id;
    public string $end_date;
    public string $start_date;
    public ?int $user_id = null;
}

/** Request payload for Pipeline#list. */
class PipelineListMatch
{
    public int $id;
    public ?float $everyone = null;
    public ?int $filter_id = null;
    public ?float $get_summary = null;
    public ?int $limit = null;
    public ?int $stage_id = null;
    public ?int $start = null;
    public ?string $totals_convert_currency = null;
    public ?int $user_id = null;
}

/** Product entity data model. */
class Product
{
    public ?string $id = null;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public int $id;
    public ?int $limit = null;
    public ?int $start = null;
    public ?string $status = null;
    public ?string $sort = null;
}

/** Request payload for Product#create. */
class ProductCreateData
{
    public int $id;
}

/** Request payload for Product#remove. */
class ProductRemoveMatch
{
    public int $follower_id;
    public int $id;
}

/** ProductField entity data model. */
class ProductField
{
    public ?array $data = null;
    public string $field_type;
    public ?string $id = null;
    public string $name;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for ProductField#load. */
class ProductFieldLoadMatch
{
    public int $id;
}

/** Request payload for ProductField#list. */
class ProductFieldListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
}

/** Request payload for ProductField#create. */
class ProductFieldCreateData
{
    public ?array $data = null;
    public string $field_type;
    public ?string $id = null;
    public string $name;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for ProductField#update. */
class ProductFieldUpdateData
{
    public int $id;
    public ?array $data = null;
    public ?string $field_type = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?bool $success = null;
}

/** Request payload for ProductField#remove. */
class ProductFieldRemoveMatch
{
    public int $id;
}

/** Project entity data model. */
class Project
{
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?float $group_id = null;
    public ?int $id = null;
    public ?float $phase_id = null;
    public ?bool $success = null;
}

/** Request payload for Project#load. */
class ProjectLoadMatch
{
    public int $id;
}

/** Request payload for Project#list. */
class ProjectListMatch
{
    public ?string $cursor = null;
    public ?int $filter_id = null;
    public ?bool $include_archived = null;
    public ?int $limit = null;
    public ?int $phase_id = null;
    public ?string $status = null;
}

/** Request payload for Project#create. */
class ProjectCreateData
{
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?float $group_id = null;
    public ?int $id = null;
    public ?float $phase_id = null;
    public ?bool $success = null;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public ?int $activity_id = null;
    public int $id;
    public ?int $task_id = null;
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?float $group_id = null;
    public ?float $phase_id = null;
    public ?bool $success = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public int $id;
}

/** ProjectBoard entity data model. */
class ProjectBoard
{
    public ?string $add_time = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?float $order_nr = null;
    public ?bool $success = null;
    public ?string $update_time = null;
}

/** Request payload for ProjectBoard#load. */
class ProjectBoardLoadMatch
{
    public int $id;
}

/** Request payload for ProjectBoard#list. */
class ProjectBoardListMatch
{
    public ?string $add_time = null;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?float $order_nr = null;
    public ?bool $success = null;
    public ?string $update_time = null;
}

/** ProjectPhase entity data model. */
class ProjectPhase
{
    public ?string $add_time = null;
    public ?array $additional_data = null;
    public ?float $board_id = null;
    public ?array $data = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?float $order_nr = null;
    public ?bool $success = null;
    public ?string $update_time = null;
}

/** Request payload for ProjectPhase#load. */
class ProjectPhaseLoadMatch
{
    public int $id;
}

/** Request payload for ProjectPhase#list. */
class ProjectPhaseListMatch
{
    public int $board_id;
}

/** ProjectTemplate entity data model. */
class ProjectTemplate
{
    public ?string $add_time = null;
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?string $description = null;
    public ?float $id = null;
    public ?float $owner_id = null;
    public ?float $projects_board_id = null;
    public ?bool $success = null;
    public ?string $title = null;
    public ?string $update_time = null;
}

/** Request payload for ProjectTemplate#load. */
class ProjectTemplateLoadMatch
{
    public int $id;
}

/** Request payload for ProjectTemplate#list. */
class ProjectTemplateListMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
}

/** Recent entity data model. */
class Recent
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for Recent#list. */
class RecentListMatch
{
    public ?string $item = null;
    public ?int $limit = null;
    public string $since_timestamp;
    public ?int $start = null;
}

/** Role entity data model. */
class Role
{
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?string $id = null;
    public string $name;
    public ?int $parent_role_id = null;
    public ?bool $success = null;
}

/** Request payload for Role#load. */
class RoleLoadMatch
{
    public int $id;
}

/** Request payload for Role#list. */
class RoleListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
}

/** Request payload for Role#create. */
class RoleCreateData
{
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?string $id = null;
    public string $name;
    public ?int $parent_role_id = null;
    public ?bool $success = null;
}

/** Request payload for Role#update. */
class RoleUpdateData
{
    public int $id;
    public ?array $additional_data = null;
    public mixed $data = null;
    public ?string $name = null;
    public ?int $parent_role_id = null;
    public ?bool $success = null;
}

/** Request payload for Role#remove. */
class RoleRemoveMatch
{
    public int $id;
}

/** Stage entity data model. */
class Stage
{
    public ?string $id = null;
}

/** Request payload for Stage#list. */
class StageListMatch
{
    public int $id;
    public ?float $everyone = null;
    public ?int $filter_id = null;
    public ?int $limit = null;
    public ?int $start = null;
    public ?int $user_id = null;
}

/** Task entity data model. */
class Task
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?int $id = null;
    public ?bool $success = null;
}

/** Request payload for Task#load. */
class TaskLoadMatch
{
    public int $id;
}

/** Request payload for Task#list. */
class TaskListMatch
{
    public ?int $assignee_id = null;
    public ?string $cursor = null;
    public ?float $done = null;
    public ?int $limit = null;
    public ?int $parent_task_id = null;
    public ?int $project_id = null;
}

/** Request payload for Task#create. */
class TaskCreateData
{
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?int $id = null;
    public ?bool $success = null;
}

/** Request payload for Task#update. */
class TaskUpdateData
{
    public int $id;
    public ?array $additional_data = null;
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for Task#remove. */
class TaskRemoveMatch
{
    public int $id;
}

/** User entity data model. */
class User
{
    public ?array $access = null;
    public ?bool $active_flag = null;
    public ?array $data = null;
    public string $email;
    public ?string $id = null;
    public ?bool $success = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public int $id;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?array $access = null;
    public ?bool $active_flag = null;
    public ?array $data = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?bool $success = null;
}

/** Request payload for User#create. */
class UserCreateData
{
    public ?array $access = null;
    public ?bool $active_flag = null;
    public ?array $data = null;
    public string $email;
    public ?string $id = null;
    public ?bool $success = null;
}

/** Request payload for User#update. */
class UserUpdateData
{
    public int $id;
    public ?array $access = null;
    public ?bool $active_flag = null;
    public ?array $data = null;
    public ?string $email = null;
    public ?bool $success = null;
}

/** UserConnection entity data model. */
class UserConnection
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for UserConnection#load. */
class UserConnectionLoadMatch
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** UserSetting entity data model. */
class UserSetting
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for UserSetting#load. */
class UserSettingLoadMatch
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** Webhook entity data model. */
class Webhook
{
    public ?array $data = null;
    public string $event_action;
    public string $event_object;
    public ?string $http_auth_password = null;
    public ?string $http_auth_user = null;
    public ?string $id = null;
    public string $name;
    public string $subscription_url;
    public ?int $user_id = null;
    public ?string $version = null;
}

/** Request payload for Webhook#list. */
class WebhookListMatch
{
    public ?array $data = null;
    public ?string $event_action = null;
    public ?string $event_object = null;
    public ?string $http_auth_password = null;
    public ?string $http_auth_user = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $subscription_url = null;
    public ?int $user_id = null;
    public ?string $version = null;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public ?array $data = null;
    public string $event_action;
    public string $event_object;
    public ?string $http_auth_password = null;
    public ?string $http_auth_user = null;
    public ?string $id = null;
    public string $name;
    public string $subscription_url;
    public ?int $user_id = null;
    public ?string $version = null;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public int $id;
}

