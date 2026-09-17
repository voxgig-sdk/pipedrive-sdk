# Typed models for the Pipedrive SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ActivityField(TypedDict, total=False):
    additional_data: dict
    data: list
    success: bool


class ActivityFieldListMatch(TypedDict, total=False):
    additional_data: dict
    data: list
    success: bool


class ActivityTypeRequired(TypedDict):
    icon_key: str
    name: str


class ActivityType(ActivityTypeRequired, total=False):
    color: str
    data: list
    id: str
    order_nr: int
    success: bool


class ActivityTypeListMatch(TypedDict, total=False):
    color: str
    data: list
    icon_key: str
    id: str
    name: str
    order_nr: int
    success: bool


class ActivityTypeCreateDataRequired(TypedDict):
    icon_key: str
    name: str


class ActivityTypeCreateData(ActivityTypeCreateDataRequired, total=False):
    color: str
    data: list
    id: str
    order_nr: int
    success: bool


class ActivityTypeUpdateDataRequired(TypedDict):
    id: int


class ActivityTypeUpdateData(ActivityTypeUpdateDataRequired, total=False):
    color: str
    data: list
    icon_key: str
    name: str
    order_nr: int
    success: bool


class ActivityTypeRemoveMatch(TypedDict):
    id: int


class Billing(TypedDict, total=False):
    data: list
    success: bool


class BillingListMatch(TypedDict, total=False):
    data: list
    success: bool


class CallLogRequired(TypedDict):
    end_time: str
    outcome: str
    start_time: str
    to_phone_number: str


class CallLog(CallLogRequired, total=False):
    activity_id: int
    company_id: int
    deal_id: int
    duration: str
    from_phone_number: str
    has_recording: bool
    id: str
    lead_id: str
    note: str
    org_id: int
    person_id: int
    subject: str
    user_id: int


class CallLogLoadMatch(TypedDict):
    id: str


class CallLogListMatch(TypedDict, total=False):
    limit: int
    start: int


class CallLogCreateDataRequired(TypedDict):
    end_time: str
    outcome: str
    start_time: str
    to_phone_number: str


class CallLogCreateData(CallLogCreateDataRequired, total=False):
    activity_id: int
    company_id: int
    deal_id: int
    duration: str
    from_phone_number: str
    has_recording: bool
    id: str
    lead_id: str
    note: str
    org_id: int
    person_id: int
    subject: str
    user_id: int


class CallLogRemoveMatch(TypedDict):
    id: str


class ChannelRequired(TypedDict):
    channel_id: str
    conversation_id: str
    message: str
    sender_id: str
    status: str


class Channel(ChannelRequired, total=False):
    attachments: list
    avatar_url: str
    conversation_link: str
    created_at: str
    id: str
    marketplace_client_id: str
    name: str
    pd_company_id: int
    pd_user_id: int
    provider_channel_id: str
    provider_type: str
    reply_by: str
    template_support: bool


class ChannelCreateDataRequired(TypedDict):
    channel_id: str
    conversation_id: str
    message: str
    sender_id: str
    status: str


class ChannelCreateData(ChannelCreateDataRequired, total=False):
    attachments: list
    avatar_url: str
    conversation_link: str
    created_at: str
    id: str
    marketplace_client_id: str
    name: str
    pd_company_id: int
    pd_user_id: int
    provider_channel_id: str
    provider_type: str
    reply_by: str
    template_support: bool


class ChannelRemoveMatchRequired(TypedDict):
    id: str


class ChannelRemoveMatch(ChannelRemoveMatchRequired, total=False):
    conversation_id: str


class Currency(TypedDict, total=False):
    active_flag: bool
    code: str
    decimal_points: int
    id: int
    is_custom_flag: bool
    name: str
    symbol: str


class CurrencyListMatch(TypedDict, total=False):
    term: str


class Deal(TypedDict, total=False):
    deals: list
    id: str
    period_end: str
    period_start: str
    total_count: int
    total_currency_converted_value: float
    total_currency_converted_value_formatted: str
    total_weighted_currency_converted_value: float
    total_weighted_currency_converted_value_formatted: str
    totals: dict
    values_total: dict
    weighted_values_total: dict


class DealLoadMatchRequired(TypedDict):
    amount: int
    field_key: str
    interval: str
    start_date: str


class DealLoadMatch(DealLoadMatchRequired, total=False):
    exclude_deal: float
    filter_id: int
    pipeline_id: int
    totals_convert_currency: str
    user_id: int


class DealListMatch(TypedDict, total=False):
    filter_id: int
    limit: int
    org_id: int
    owned_by_you: float
    person_id: int
    pipeline_id: int
    product_id: int
    sort: str
    stage_id: int
    start: int
    status: str
    user_id: int


class DealCreateDataRequired(TypedDict):
    id: int


class DealCreateData(DealCreateDataRequired, total=False):
    deals: list
    period_end: str
    period_start: str
    total_count: int
    total_currency_converted_value: float
    total_currency_converted_value_formatted: str
    total_weighted_currency_converted_value: float
    total_weighted_currency_converted_value_formatted: str
    totals: dict
    values_total: dict
    weighted_values_total: dict


class DealUpdateDataRequired(TypedDict):
    id: int


class DealUpdateData(DealUpdateDataRequired, total=False):
    deals: list
    period_end: str
    period_start: str
    total_count: int
    total_currency_converted_value: float
    total_currency_converted_value_formatted: str
    total_weighted_currency_converted_value: float
    total_weighted_currency_converted_value_formatted: str
    totals: dict
    values_total: dict
    weighted_values_total: dict


class DealRemoveMatchRequired(TypedDict):
    id: int


class DealRemoveMatch(DealRemoveMatchRequired, total=False):
    deal_participant_id: int
    follower_id: int


class DealField(TypedDict, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    id: str
    name: str
    options: list
    success: bool


class DealFieldLoadMatch(TypedDict):
    id: int


class DealFieldListMatch(TypedDict, total=False):
    limit: int
    start: int


class DealFieldCreateData(TypedDict, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    id: str
    name: str
    options: list
    success: bool


class DealFieldUpdateDataRequired(TypedDict):
    id: int


class DealFieldUpdateData(DealFieldUpdateDataRequired, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    name: str
    options: list
    success: bool


class DealFieldRemoveMatch(TypedDict):
    id: int


class File(TypedDict, total=False):
    active_flag: bool
    activity_id: int
    add_time: str
    cid: str
    deal_id: int
    deal_name: str
    description: str
    file_name: str
    file_size: int
    id: int
    inline_flag: bool
    lead_id: str
    lead_name: str
    mail_message_id: str
    mail_template_id: str
    name: str
    org_id: int
    org_name: str
    person_id: int
    person_name: str
    product_id: int
    product_name: str
    project_id: int
    project_name: str
    remote_id: str
    remote_location: str
    s3_bucket: str
    update_time: str
    url: str
    user_id: int


class FileLoadMatch(TypedDict):
    id: int


class FileListMatch(TypedDict, total=False):
    limit: int
    sort: str
    start: int


class FileCreateData(TypedDict, total=False):
    active_flag: bool
    activity_id: int
    add_time: str
    cid: str
    deal_id: int
    deal_name: str
    description: str
    file_name: str
    file_size: int
    id: int
    inline_flag: bool
    lead_id: str
    lead_name: str
    mail_message_id: str
    mail_template_id: str
    name: str
    org_id: int
    org_name: str
    person_id: int
    person_name: str
    product_id: int
    product_name: str
    project_id: int
    project_name: str
    remote_id: str
    remote_location: str
    s3_bucket: str
    update_time: str
    url: str
    user_id: int


class FileUpdateDataRequired(TypedDict):
    id: int


class FileUpdateData(FileUpdateDataRequired, total=False):
    active_flag: bool
    activity_id: int
    add_time: str
    cid: str
    deal_id: int
    deal_name: str
    description: str
    file_name: str
    file_size: int
    inline_flag: bool
    lead_id: str
    lead_name: str
    mail_message_id: str
    mail_template_id: str
    name: str
    org_id: int
    org_name: str
    person_id: int
    person_name: str
    product_id: int
    product_name: str
    project_id: int
    project_name: str
    remote_id: str
    remote_location: str
    s3_bucket: str
    update_time: str
    url: str
    user_id: int


class FileRemoveMatch(TypedDict):
    id: int


class FilterRequired(TypedDict):
    conditions: dict
    name: str
    type: str


class Filter(FilterRequired, total=False):
    data: dict
    id: str
    success: bool


class FilterLoadMatchRequired(TypedDict):
    id: int


class FilterLoadMatch(FilterLoadMatchRequired, total=False):
    include_field_code: bool


class FilterListMatch(TypedDict, total=False):
    type: str


class FilterCreateDataRequired(TypedDict):
    conditions: dict
    name: str
    type: str


class FilterCreateData(FilterCreateDataRequired, total=False):
    include_field_code: bool
    data: dict
    id: str
    success: bool


class FilterUpdateDataRequired(TypedDict):
    id: int


class FilterUpdateData(FilterUpdateDataRequired, total=False):
    include_field_code: bool
    conditions: dict
    data: dict
    name: str
    success: bool
    type: str


class FilterRemoveMatch(TypedDict):
    id: int


class GoalRequired(TypedDict):
    assignee: dict
    duration: dict
    expected_outcome: dict
    interval: str
    type: dict


class Goal(GoalRequired, total=False):
    goal: dict
    id: str
    title: str


class GoalLoadMatch(TypedDict, total=False):
    assignee_id: int
    assignee_type: str
    expected_outcome_currency_id: int
    expected_outcome_target: float
    expected_outcome_tracking_metric: str
    is_active: bool
    period_end: str
    period_start: str
    title: str
    type_name: str
    type_params_activity_type_id: list
    type_params_pipeline_id: list
    type_params_stage_id: int


class GoalCreateDataRequired(TypedDict):
    assignee: dict
    duration: dict
    expected_outcome: dict
    interval: str
    type: dict


class GoalCreateData(GoalCreateDataRequired, total=False):
    goal: dict
    id: str
    title: str


class GoalUpdateDataRequired(TypedDict):
    id: str


class GoalUpdateData(GoalUpdateDataRequired, total=False):
    assignee: dict
    duration: dict
    expected_outcome: dict
    goal: dict
    interval: str
    title: str
    type: dict


class GoalRemoveMatch(TypedDict):
    id: str


class LeadRequired(TypedDict):
    value: dict


class Lead(LeadRequired, total=False):
    add_time: str
    cc_email: str
    channel: int
    channel_id: str
    creator_id: int
    expected_close_date: str
    id: str
    is_archived: bool
    label_ids: list
    next_activity_id: int
    organization_id: int
    origin: str
    origin_id: str
    owner_id: int
    person_id: int
    source_deal_id: int
    source_name: str
    title: str
    update_time: str
    visible_to: str
    was_seen: bool


class LeadLoadMatch(TypedDict):
    id: str


class LeadListMatch(TypedDict, total=False):
    filter_id: int
    limit: int
    organization_id: int
    owner_id: int
    person_id: int
    sort: str
    start: int
    updated_since: str


class LeadCreateDataRequired(TypedDict):
    value: dict


class LeadCreateData(LeadCreateDataRequired, total=False):
    add_time: str
    cc_email: str
    channel: int
    channel_id: str
    creator_id: int
    expected_close_date: str
    id: str
    is_archived: bool
    label_ids: list
    next_activity_id: int
    organization_id: int
    origin: str
    origin_id: str
    owner_id: int
    person_id: int
    source_deal_id: int
    source_name: str
    title: str
    update_time: str
    visible_to: str
    was_seen: bool


class LeadUpdateDataRequired(TypedDict):
    id: str


class LeadUpdateData(LeadUpdateDataRequired, total=False):
    add_time: str
    cc_email: str
    channel: int
    channel_id: str
    creator_id: int
    expected_close_date: str
    is_archived: bool
    label_ids: list
    next_activity_id: int
    organization_id: int
    origin: str
    origin_id: str
    owner_id: int
    person_id: int
    source_deal_id: int
    source_name: str
    title: str
    update_time: str
    value: dict
    visible_to: str
    was_seen: bool


class LeadRemoveMatch(TypedDict):
    id: str


class LeadField(TypedDict, total=False):
    additional_data: dict
    data: list
    success: bool


class LeadFieldListMatch(TypedDict, total=False):
    limit: int
    start: int


class LeadLabel(TypedDict, total=False):
    add_time: str
    color: str
    id: str
    name: str
    update_time: str


class LeadLabelListMatch(TypedDict, total=False):
    add_time: str
    color: str
    id: str
    name: str
    update_time: str


class LeadLabelCreateData(TypedDict, total=False):
    add_time: str
    color: str
    id: str
    name: str
    update_time: str


class LeadLabelUpdateDataRequired(TypedDict):
    id: str


class LeadLabelUpdateData(LeadLabelUpdateDataRequired, total=False):
    add_time: str
    color: str
    name: str
    update_time: str


class LeadLabelRemoveMatch(TypedDict):
    id: str


class LeadSource(TypedDict, total=False):
    name: str


class LeadSourceListMatch(TypedDict, total=False):
    name: str


class LegacyTeamRequired(TypedDict):
    manager_id: int
    name: str


class LegacyTeam(LegacyTeamRequired, total=False):
    data: list
    description: str
    id: str
    success: bool
    users: list


class LegacyTeamLoadMatchRequired(TypedDict):
    id: int


class LegacyTeamLoadMatch(LegacyTeamLoadMatchRequired, total=False):
    order_by: str
    skip_user: float


class LegacyTeamListMatch(TypedDict, total=False):
    order_by: str
    skip_user: float


class LegacyTeamCreateDataRequired(TypedDict):
    manager_id: int
    name: str


class LegacyTeamCreateData(LegacyTeamCreateDataRequired, total=False):
    data: list
    description: str
    id: str
    success: bool
    users: list


class LegacyTeamUpdateDataRequired(TypedDict):
    id: int


class LegacyTeamUpdateData(LegacyTeamUpdateDataRequired, total=False):
    data: list
    description: str
    manager_id: int
    name: str
    success: bool
    users: list


class LegacyTeamRemoveMatch(TypedDict):
    id: int


class Mailbox(TypedDict, total=False):
    data: dict
    id: str
    service: str
    statusCode: int
    statusText: str
    success: bool


class MailboxLoadMatchRequired(TypedDict):
    id: int


class MailboxLoadMatch(MailboxLoadMatchRequired, total=False):
    include_body: float


class MailboxListMatch(TypedDict):
    mail_thread_id: int


class MailboxUpdateDataRequired(TypedDict):
    id: int


class MailboxUpdateData(MailboxUpdateDataRequired, total=False):
    data: dict
    service: str
    statusCode: int
    statusText: str
    success: bool


class MailboxRemoveMatch(TypedDict):
    id: int


class Meeting(TypedDict, total=False):
    id: str


class MeetingCreateData(TypedDict, total=False):
    id: str


class MeetingRemoveMatch(TypedDict):
    id: str


class Note(TypedDict, total=False):
    active_flag: bool
    add_time: str
    company_id: int
    content: str
    deal: dict
    deal_id: int
    id: int
    last_update_user_id: int
    lead_id: str
    object_id: str
    object_type: str
    org_id: int
    organization: dict
    person: dict
    person_id: int
    pinned_to_deal_flag: bool
    pinned_to_organization_flag: bool
    pinned_to_person_flag: bool
    pinned_to_project_flag: bool
    pinned_to_task_flag: bool
    project: dict
    project_id: int
    task: dict
    task_id: int
    update_time: str
    updater_id: int
    user: dict
    user_id: int
    uuid: str


class NoteLoadMatchRequired(TypedDict):
    id: int


class NoteLoadMatch(NoteLoadMatchRequired, total=False):
    comment_id: str


class NoteListMatch(TypedDict, total=False):
    deal_id: int
    end_date: str
    lead_id: str
    limit: int
    org_id: int
    person_id: int
    pinned_to_deal_flag: float
    pinned_to_lead_flag: float
    pinned_to_organization_flag: float
    pinned_to_person_flag: float
    pinned_to_project_flag: float
    pinned_to_task_flag: float
    project_id: int
    sort: str
    start: int
    start_date: str
    task_id: int
    updated_since: str
    user_id: int


class NoteCreateData(TypedDict, total=False):
    active_flag: bool
    add_time: str
    company_id: int
    content: str
    deal: dict
    deal_id: int
    id: int
    last_update_user_id: int
    lead_id: str
    object_id: str
    object_type: str
    org_id: int
    organization: dict
    person: dict
    person_id: int
    pinned_to_deal_flag: bool
    pinned_to_organization_flag: bool
    pinned_to_person_flag: bool
    pinned_to_project_flag: bool
    pinned_to_task_flag: bool
    project: dict
    project_id: int
    task: dict
    task_id: int
    update_time: str
    updater_id: int
    user: dict
    user_id: int
    uuid: str


class NoteUpdateDataRequired(TypedDict):
    id: int


class NoteUpdateData(NoteUpdateDataRequired, total=False):
    comment_id: str
    active_flag: bool
    add_time: str
    company_id: int
    content: str
    deal: dict
    deal_id: int
    last_update_user_id: int
    lead_id: str
    object_id: str
    object_type: str
    org_id: int
    organization: dict
    person: dict
    person_id: int
    pinned_to_deal_flag: bool
    pinned_to_organization_flag: bool
    pinned_to_person_flag: bool
    pinned_to_project_flag: bool
    pinned_to_task_flag: bool
    project: dict
    project_id: int
    task: dict
    task_id: int
    update_time: str
    updater_id: int
    user: dict
    user_id: int
    uuid: str


class NoteRemoveMatchRequired(TypedDict):
    id: int


class NoteRemoveMatch(NoteRemoveMatchRequired, total=False):
    comment_id: str


class NoteField(TypedDict, total=False):
    additional_data: dict
    data: list
    success: bool


class NoteFieldListMatch(TypedDict, total=False):
    additional_data: dict
    data: list
    success: bool


class Oauth(TypedDict):
    pass


class OauthLoadMatchRequired(TypedDict):
    client_id: str
    redirect_uri: str


class OauthLoadMatch(OauthLoadMatchRequired, total=False):
    state: str


class OauthCreateData(TypedDict):
    pass


class Organization(TypedDict, total=False):
    id: str


class OrganizationListMatchRequired(TypedDict):
    id: int


class OrganizationListMatch(OrganizationListMatchRequired, total=False):
    all_change: str
    item: str
    limit: int
    start: int
    sort: str
    include_body: float
    cursor: str


class OrganizationCreateData(TypedDict):
    id: int


class OrganizationUpdateData(TypedDict):
    id: int


class OrganizationRemoveMatch(TypedDict):
    follower_id: int
    id: int


class OrganizationField(TypedDict, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    id: str
    name: str
    options: list
    success: bool


class OrganizationFieldLoadMatch(TypedDict):
    id: int


class OrganizationFieldListMatch(TypedDict, total=False):
    limit: int
    start: int


class OrganizationFieldCreateData(TypedDict, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    id: str
    name: str
    options: list
    success: bool


class OrganizationFieldUpdateDataRequired(TypedDict):
    id: int


class OrganizationFieldUpdateData(OrganizationFieldUpdateDataRequired, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    name: str
    options: list
    success: bool


class OrganizationFieldRemoveMatch(TypedDict):
    id: int


class OrganizationRelationshipRequired(TypedDict):
    rel_linked_org_id: int
    rel_owner_org_id: int
    type: str


class OrganizationRelationship(OrganizationRelationshipRequired, total=False):
    additional_data: dict
    data: Any
    id: str
    org_id: int
    related_objects: dict
    success: bool


class OrganizationRelationshipLoadMatchRequired(TypedDict):
    id: int


class OrganizationRelationshipLoadMatch(OrganizationRelationshipLoadMatchRequired, total=False):
    org_id: int


class OrganizationRelationshipListMatch(TypedDict):
    org_id: int


class OrganizationRelationshipCreateDataRequired(TypedDict):
    rel_linked_org_id: int
    rel_owner_org_id: int
    type: str


class OrganizationRelationshipCreateData(OrganizationRelationshipCreateDataRequired, total=False):
    additional_data: dict
    data: Any
    id: str
    org_id: int
    related_objects: dict
    success: bool


class OrganizationRelationshipUpdateDataRequired(TypedDict):
    id: int


class OrganizationRelationshipUpdateData(OrganizationRelationshipUpdateDataRequired, total=False):
    additional_data: dict
    data: Any
    org_id: int
    rel_linked_org_id: int
    rel_owner_org_id: int
    related_objects: dict
    success: bool
    type: str


class OrganizationRelationshipRemoveMatch(TypedDict):
    id: int


class PermissionSet(TypedDict, total=False):
    app: str
    assignment_count: int
    contents: list
    data: list
    description: str
    id: str
    name: str
    success: bool
    type: str


class PermissionSetLoadMatch(TypedDict):
    id: str


class PermissionSetListMatch(TypedDict, total=False):
    app: str


class Person(TypedDict, total=False):
    id: str


class PersonListMatchRequired(TypedDict):
    id: int


class PersonListMatch(PersonListMatchRequired, total=False):
    all_change: str
    item: str
    limit: int
    start: int
    sort: str
    include_body: float
    cursor: str


class PersonCreateData(TypedDict):
    id: int


class PersonUpdateData(TypedDict):
    id: int


class PersonRemoveMatch(TypedDict):
    follower_id: int
    id: int


class PersonField(TypedDict, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    id: str
    name: str
    options: list
    success: bool


class PersonFieldLoadMatch(TypedDict):
    id: int


class PersonFieldListMatch(TypedDict, total=False):
    limit: int
    start: int


class PersonFieldCreateData(TypedDict, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    id: str
    name: str
    options: list
    success: bool


class PersonFieldUpdateDataRequired(TypedDict):
    id: int


class PersonFieldUpdateData(PersonFieldUpdateDataRequired, total=False):
    add_visible_flag: bool
    additional_data: dict
    data: dict
    name: str
    options: list
    success: bool


class PersonFieldRemoveMatch(TypedDict):
    id: int


class Pipeline(TypedDict, total=False):
    id: str


class PipelineLoadMatchRequired(TypedDict):
    id: int
    end_date: str
    start_date: str


class PipelineLoadMatch(PipelineLoadMatchRequired, total=False):
    user_id: int


class PipelineListMatchRequired(TypedDict):
    id: int


class PipelineListMatch(PipelineListMatchRequired, total=False):
    everyone: float
    filter_id: int
    get_summary: float
    limit: int
    stage_id: int
    start: int
    totals_convert_currency: str
    user_id: int


class Product(TypedDict, total=False):
    id: str


class ProductListMatchRequired(TypedDict):
    id: int


class ProductListMatch(ProductListMatchRequired, total=False):
    limit: int
    start: int
    status: str
    sort: str


class ProductCreateData(TypedDict):
    id: int


class ProductRemoveMatch(TypedDict):
    follower_id: int
    id: int


class ProductFieldRequired(TypedDict):
    field_type: str
    name: str


class ProductField(ProductFieldRequired, total=False):
    data: dict
    id: str
    options: list
    success: bool


class ProductFieldLoadMatch(TypedDict):
    id: int


class ProductFieldListMatch(TypedDict, total=False):
    limit: int
    start: int


class ProductFieldCreateDataRequired(TypedDict):
    field_type: str
    name: str


class ProductFieldCreateData(ProductFieldCreateDataRequired, total=False):
    data: dict
    id: str
    options: list
    success: bool


class ProductFieldUpdateDataRequired(TypedDict):
    id: int


class ProductFieldUpdateData(ProductFieldUpdateDataRequired, total=False):
    data: dict
    field_type: str
    name: str
    options: list
    success: bool


class ProductFieldRemoveMatch(TypedDict):
    id: int


class Project(TypedDict, total=False):
    additional_data: dict
    data: Any
    group_id: float
    id: int
    phase_id: float
    success: bool


class ProjectLoadMatch(TypedDict):
    id: int


class ProjectListMatch(TypedDict, total=False):
    cursor: str
    filter_id: int
    include_archived: bool
    limit: int
    phase_id: int
    status: str


class ProjectCreateData(TypedDict, total=False):
    additional_data: dict
    data: Any
    group_id: float
    id: int
    phase_id: float
    success: bool


class ProjectUpdateDataRequired(TypedDict):
    id: int


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    activity_id: int
    task_id: int
    additional_data: dict
    data: Any
    group_id: float
    phase_id: float
    success: bool


class ProjectRemoveMatch(TypedDict):
    id: int


class ProjectBoard(TypedDict, total=False):
    add_time: str
    additional_data: dict
    data: dict
    id: int
    name: str
    order_nr: float
    success: bool
    update_time: str


class ProjectBoardLoadMatch(TypedDict):
    id: int


class ProjectBoardListMatch(TypedDict, total=False):
    add_time: str
    additional_data: dict
    data: dict
    id: int
    name: str
    order_nr: float
    success: bool
    update_time: str


class ProjectPhase(TypedDict, total=False):
    add_time: str
    additional_data: dict
    board_id: float
    data: dict
    id: int
    name: str
    order_nr: float
    success: bool
    update_time: str


class ProjectPhaseLoadMatch(TypedDict):
    id: int


class ProjectPhaseListMatch(TypedDict):
    board_id: int


class ProjectTemplate(TypedDict, total=False):
    add_time: str
    additional_data: dict
    data: Any
    description: str
    id: float
    owner_id: float
    projects_board_id: float
    success: bool
    title: str
    update_time: str


class ProjectTemplateLoadMatch(TypedDict):
    id: int


class ProjectTemplateListMatch(TypedDict, total=False):
    cursor: str
    limit: int


class Recent(TypedDict, total=False):
    additional_data: dict
    data: list
    success: bool


class RecentListMatchRequired(TypedDict):
    since_timestamp: str


class RecentListMatch(RecentListMatchRequired, total=False):
    item: str
    limit: int
    start: int


class RoleRequired(TypedDict):
    name: str


class Role(RoleRequired, total=False):
    additional_data: dict
    data: Any
    id: str
    parent_role_id: int
    success: bool


class RoleLoadMatch(TypedDict):
    id: int


class RoleListMatch(TypedDict, total=False):
    limit: int
    start: int


class RoleCreateDataRequired(TypedDict):
    name: str


class RoleCreateData(RoleCreateDataRequired, total=False):
    additional_data: dict
    data: Any
    id: str
    parent_role_id: int
    success: bool


class RoleUpdateDataRequired(TypedDict):
    id: int


class RoleUpdateData(RoleUpdateDataRequired, total=False):
    additional_data: dict
    data: Any
    name: str
    parent_role_id: int
    success: bool


class RoleRemoveMatch(TypedDict):
    id: int


class Stage(TypedDict, total=False):
    id: str


class StageListMatchRequired(TypedDict):
    id: int


class StageListMatch(StageListMatchRequired, total=False):
    everyone: float
    filter_id: int
    limit: int
    start: int
    user_id: int


class Task(TypedDict, total=False):
    additional_data: dict
    data: dict
    id: int
    success: bool


class TaskLoadMatch(TypedDict):
    id: int


class TaskListMatch(TypedDict, total=False):
    assignee_id: int
    cursor: str
    done: float
    limit: int
    parent_task_id: int
    project_id: int


class TaskCreateData(TypedDict, total=False):
    additional_data: dict
    data: dict
    id: int
    success: bool


class TaskUpdateDataRequired(TypedDict):
    id: int


class TaskUpdateData(TaskUpdateDataRequired, total=False):
    additional_data: dict
    data: dict
    success: bool


class TaskRemoveMatch(TypedDict):
    id: int


class UserRequired(TypedDict):
    email: str


class User(UserRequired, total=False):
    access: list
    active_flag: bool
    data: dict
    id: str
    success: bool


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    access: list
    active_flag: bool
    data: dict
    email: str
    id: str
    success: bool


class UserCreateDataRequired(TypedDict):
    email: str


class UserCreateData(UserCreateDataRequired, total=False):
    access: list
    active_flag: bool
    data: dict
    id: str
    success: bool


class UserUpdateDataRequired(TypedDict):
    id: int


class UserUpdateData(UserUpdateDataRequired, total=False):
    access: list
    active_flag: bool
    data: dict
    email: str
    success: bool


class UserConnection(TypedDict, total=False):
    data: dict
    success: bool


class UserConnectionLoadMatch(TypedDict, total=False):
    data: dict
    success: bool


class UserSetting(TypedDict, total=False):
    data: dict
    success: bool


class UserSettingLoadMatch(TypedDict, total=False):
    data: dict
    success: bool


class WebhookRequired(TypedDict):
    event_action: str
    event_object: str
    name: str
    subscription_url: str


class Webhook(WebhookRequired, total=False):
    data: list
    http_auth_password: str
    http_auth_user: str
    id: str
    user_id: int
    version: str


class WebhookListMatch(TypedDict, total=False):
    data: list
    event_action: str
    event_object: str
    http_auth_password: str
    http_auth_user: str
    id: str
    name: str
    subscription_url: str
    user_id: int
    version: str


class WebhookCreateDataRequired(TypedDict):
    event_action: str
    event_object: str
    name: str
    subscription_url: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    data: list
    http_auth_password: str
    http_auth_user: str
    id: str
    user_id: int
    version: str


class WebhookRemoveMatch(TypedDict):
    id: int
