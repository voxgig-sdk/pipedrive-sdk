export interface ActivityField {
    additional_data?: Record<string, any>;
    data?: any[];
    success?: boolean;
}
export interface ActivityFieldListMatch {
    additional_data?: Record<string, any>;
    data?: any[];
    success?: boolean;
}
export interface ActivityType {
    color?: string;
    data?: any[];
    icon_key: string;
    id?: string;
    name: string;
    order_nr?: number;
    success?: boolean;
}
export interface ActivityTypeListMatch {
    color?: string;
    data?: any[];
    icon_key?: string;
    id?: string;
    name?: string;
    order_nr?: number;
    success?: boolean;
}
export interface ActivityTypeCreateData {
    color?: string;
    data?: any[];
    icon_key: string;
    id?: string;
    name: string;
    order_nr?: number;
    success?: boolean;
}
export interface ActivityTypeUpdateData {
    id: number;
    color?: string;
    data?: any[];
    icon_key?: string;
    name?: string;
    order_nr?: number;
    success?: boolean;
}
export interface ActivityTypeRemoveMatch {
    id: number;
}
export interface Billing {
    data?: any[];
    success?: boolean;
}
export interface BillingListMatch {
    data?: any[];
    success?: boolean;
}
export interface CallLog {
    activity_id?: number;
    company_id?: number;
    deal_id?: number;
    duration?: string;
    end_time: string;
    from_phone_number?: string;
    has_recording?: boolean;
    id?: string;
    lead_id?: string;
    note?: string;
    org_id?: number;
    outcome: string;
    person_id?: number;
    start_time: string;
    subject?: string;
    to_phone_number: string;
    user_id?: number;
}
export interface CallLogLoadMatch {
    id: string;
}
export interface CallLogListMatch {
    limit?: number;
    start?: number;
}
export interface CallLogCreateData {
    activity_id?: number;
    company_id?: number;
    deal_id?: number;
    duration?: string;
    end_time: string;
    from_phone_number?: string;
    has_recording?: boolean;
    id?: string;
    lead_id?: string;
    note?: string;
    org_id?: number;
    outcome: string;
    person_id?: number;
    start_time: string;
    subject?: string;
    to_phone_number: string;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface CallLogRemoveMatch {
    id: string;
}
export interface Channel {
    attachments?: any[];
    avatar_url?: string;
    channel_id: string;
    conversation_id: string;
    conversation_link?: string;
    created_at?: string;
    id?: string;
    marketplace_client_id?: string;
    message: string;
    name?: string;
    pd_company_id?: number;
    pd_user_id?: number;
    provider_channel_id?: string;
    provider_type?: string;
    reply_by?: string;
    sender_id: string;
    status: string;
    template_support?: boolean;
}
export interface ChannelCreateData {
    attachments?: any[];
    avatar_url?: string;
    channel_id: string;
    conversation_id: string;
    conversation_link?: string;
    created_at?: string;
    id?: string;
    marketplace_client_id?: string;
    message: string;
    name?: string;
    pd_company_id?: number;
    pd_user_id?: number;
    provider_channel_id?: string;
    provider_type?: string;
    reply_by?: string;
    sender_id: string;
    status: string;
    template_support?: boolean;
}
export interface ChannelRemoveMatch {
    conversation_id?: string;
    id: string;
}
export interface Currency {
    active_flag?: boolean;
    code?: string;
    decimal_points?: number;
    id?: number;
    is_custom_flag?: boolean;
    name?: string;
    symbol?: string;
}
export interface CurrencyListMatch {
    term?: string;
}
export interface Deal {
    deals?: any[];
    id?: string;
    period_end?: string;
    period_start?: string;
    total_count?: number;
    total_currency_converted_value?: number;
    total_currency_converted_value_formatted?: string;
    total_weighted_currency_converted_value?: number;
    total_weighted_currency_converted_value_formatted?: string;
    totals?: Record<string, any>;
    values_total?: Record<string, any>;
    weighted_values_total?: Record<string, any>;
}
export interface DealLoadMatch {
    amount: number;
    exclude_deal?: number;
    field_key: string;
    filter_id?: number;
    interval: string;
    pipeline_id?: number;
    start_date: string;
    totals_convert_currency?: string;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface DealListMatch {
    filter_id?: number;
    limit?: number;
    org_id?: number;
    owned_by_you?: number;
    person_id?: number;
    pipeline_id?: number;
    product_id?: number;
    sort?: string;
    stage_id?: number;
    start?: number;
    status?: string;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface DealCreateData {
    id: number;
    deals?: any[];
    period_end?: string;
    period_start?: string;
    total_count?: number;
    total_currency_converted_value?: number;
    total_currency_converted_value_formatted?: string;
    total_weighted_currency_converted_value?: number;
    total_weighted_currency_converted_value_formatted?: string;
    totals?: Record<string, any>;
    values_total?: Record<string, any>;
    weighted_values_total?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface DealUpdateData {
    id: number;
    deals?: any[];
    period_end?: string;
    period_start?: string;
    total_count?: number;
    total_currency_converted_value?: number;
    total_currency_converted_value_formatted?: string;
    total_weighted_currency_converted_value?: number;
    total_weighted_currency_converted_value_formatted?: string;
    totals?: Record<string, any>;
    values_total?: Record<string, any>;
    weighted_values_total?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface DealRemoveMatch {
    deal_participant_id?: number;
    id: number;
    follower_id?: number;
}
export interface DealField {
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface DealFieldLoadMatch {
    id: number;
}
export interface DealFieldListMatch {
    limit?: number;
    start?: number;
}
export interface DealFieldCreateData {
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface DealFieldUpdateData {
    id: number;
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface DealFieldRemoveMatch {
    id: number;
}
export interface File {
    active_flag?: boolean;
    activity_id?: number;
    add_time?: string;
    cid?: string;
    deal_id?: number;
    deal_name?: string;
    description?: string;
    file_name?: string;
    file_size?: number;
    id?: number;
    inline_flag?: boolean;
    lead_id?: string;
    lead_name?: string;
    mail_message_id?: string;
    mail_template_id?: string;
    name?: string;
    org_id?: number;
    org_name?: string;
    person_id?: number;
    person_name?: string;
    product_id?: number;
    product_name?: string;
    project_id?: number;
    project_name?: string;
    remote_id?: string;
    remote_location?: string;
    s3_bucket?: string;
    update_time?: string;
    url?: string;
    user_id?: number;
}
export interface FileLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface FileListMatch {
    limit?: number;
    sort?: string;
    start?: number;
}
export interface FileCreateData {
    active_flag?: boolean;
    activity_id?: number;
    add_time?: string;
    cid?: string;
    deal_id?: number;
    deal_name?: string;
    description?: string;
    file_name?: string;
    file_size?: number;
    id?: number;
    inline_flag?: boolean;
    lead_id?: string;
    lead_name?: string;
    mail_message_id?: string;
    mail_template_id?: string;
    name?: string;
    org_id?: number;
    org_name?: string;
    person_id?: number;
    person_name?: string;
    product_id?: number;
    product_name?: string;
    project_id?: number;
    project_name?: string;
    remote_id?: string;
    remote_location?: string;
    s3_bucket?: string;
    update_time?: string;
    url?: string;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface FileUpdateData {
    id: number;
    active_flag?: boolean;
    activity_id?: number;
    add_time?: string;
    cid?: string;
    deal_id?: number;
    deal_name?: string;
    description?: string;
    file_name?: string;
    file_size?: number;
    inline_flag?: boolean;
    lead_id?: string;
    lead_name?: string;
    mail_message_id?: string;
    mail_template_id?: string;
    name?: string;
    org_id?: number;
    org_name?: string;
    person_id?: number;
    person_name?: string;
    product_id?: number;
    product_name?: string;
    project_id?: number;
    project_name?: string;
    remote_id?: string;
    remote_location?: string;
    s3_bucket?: string;
    update_time?: string;
    url?: string;
    user_id?: number;
}
export interface FileRemoveMatch {
    id: number;
}
export interface Filter {
    conditions: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name: string;
    success?: boolean;
    type: string;
}
export interface FilterLoadMatch {
    id: number;
    include_field_code?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface FilterListMatch {
    type?: string;
}
export interface FilterCreateData {
    include_field_code?: boolean;
    conditions: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name: string;
    success?: boolean;
    type: string;
}
export interface FilterUpdateData {
    id: number;
    include_field_code?: boolean;
    conditions?: Record<string, any>;
    data?: Record<string, any>;
    name?: string;
    success?: boolean;
    type?: string;
}
export interface FilterRemoveMatch {
    id: number;
}
export interface Goal {
    assignee: Record<string, any>;
    duration: Record<string, any>;
    expected_outcome: Record<string, any>;
    goal?: Record<string, any>;
    id?: string;
    interval: string;
    title?: string;
    type: Record<string, any>;
}
export interface GoalLoadMatch {
    assignee_id?: number;
    assignee_type?: string;
    expected_outcome_currency_id?: number;
    expected_outcome_target?: number;
    expected_outcome_tracking_metric?: string;
    is_active?: boolean;
    period_end?: string;
    period_start?: string;
    title?: string;
    type_name?: string;
    type_params_activity_type_id?: any[];
    type_params_pipeline_id?: any[];
    type_params_stage_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface GoalCreateData {
    assignee: Record<string, any>;
    duration: Record<string, any>;
    expected_outcome: Record<string, any>;
    goal?: Record<string, any>;
    id?: string;
    interval: string;
    title?: string;
    type: Record<string, any>;
}
export interface GoalUpdateData {
    id: string;
    assignee?: Record<string, any>;
    duration?: Record<string, any>;
    expected_outcome?: Record<string, any>;
    goal?: Record<string, any>;
    interval?: string;
    title?: string;
    type?: Record<string, any>;
}
export interface GoalRemoveMatch {
    id: string;
}
export interface Lead {
    add_time?: string;
    cc_email?: string;
    channel?: number;
    channel_id?: string;
    creator_id?: number;
    expected_close_date?: string;
    id?: string;
    is_archived?: boolean;
    label_ids?: any[];
    next_activity_id?: number;
    organization_id?: number;
    origin?: string;
    origin_id?: string;
    owner_id?: number;
    person_id?: number;
    source_deal_id?: number;
    source_name?: string;
    title?: string;
    update_time?: string;
    value: Record<string, any>;
    visible_to?: string;
    was_seen?: boolean;
}
export interface LeadLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface LeadListMatch {
    filter_id?: number;
    limit?: number;
    organization_id?: number;
    owner_id?: number;
    person_id?: number;
    sort?: string;
    start?: number;
    updated_since?: string;
    $action?: string;
    [action: string]: any;
}
export interface LeadCreateData {
    add_time?: string;
    cc_email?: string;
    channel?: number;
    channel_id?: string;
    creator_id?: number;
    expected_close_date?: string;
    id?: string;
    is_archived?: boolean;
    label_ids?: any[];
    next_activity_id?: number;
    organization_id?: number;
    origin?: string;
    origin_id?: string;
    owner_id?: number;
    person_id?: number;
    source_deal_id?: number;
    source_name?: string;
    title?: string;
    update_time?: string;
    value: Record<string, any>;
    visible_to?: string;
    was_seen?: boolean;
}
export interface LeadUpdateData {
    id: string;
    add_time?: string;
    cc_email?: string;
    channel?: number;
    channel_id?: string;
    creator_id?: number;
    expected_close_date?: string;
    is_archived?: boolean;
    label_ids?: any[];
    next_activity_id?: number;
    organization_id?: number;
    origin?: string;
    origin_id?: string;
    owner_id?: number;
    person_id?: number;
    source_deal_id?: number;
    source_name?: string;
    title?: string;
    update_time?: string;
    value?: Record<string, any>;
    visible_to?: string;
    was_seen?: boolean;
}
export interface LeadRemoveMatch {
    id: string;
}
export interface LeadField {
    additional_data?: Record<string, any>;
    data?: any[];
    success?: boolean;
}
export interface LeadFieldListMatch {
    limit?: number;
    start?: number;
}
export interface LeadLabel {
    add_time?: string;
    color?: string;
    id?: string;
    name?: string;
    update_time?: string;
}
export interface LeadLabelListMatch {
    add_time?: string;
    color?: string;
    id?: string;
    name?: string;
    update_time?: string;
}
export interface LeadLabelCreateData {
    add_time?: string;
    color?: string;
    id?: string;
    name?: string;
    update_time?: string;
}
export interface LeadLabelUpdateData {
    id: string;
    add_time?: string;
    color?: string;
    name?: string;
    update_time?: string;
}
export interface LeadLabelRemoveMatch {
    id: string;
}
export interface LeadSource {
    name?: string;
}
export interface LeadSourceListMatch {
    name?: string;
}
export interface LegacyTeam {
    data?: any[];
    description?: string;
    id?: string;
    manager_id: number;
    name: string;
    success?: boolean;
    users?: any[];
}
export interface LegacyTeamLoadMatch {
    id: number;
    order_by?: string;
    skip_user?: number;
}
export interface LegacyTeamListMatch {
    order_by?: string;
    skip_user?: number;
    $action?: string;
    [action: string]: any;
}
export interface LegacyTeamCreateData {
    data?: any[];
    description?: string;
    id?: string;
    manager_id: number;
    name: string;
    success?: boolean;
    users?: any[];
    $action?: string;
    [action: string]: any;
}
export interface LegacyTeamUpdateData {
    id: number;
    data?: any[];
    description?: string;
    manager_id?: number;
    name?: string;
    success?: boolean;
    users?: any[];
}
export interface LegacyTeamRemoveMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface Mailbox {
    data?: Record<string, any>;
    id?: string;
    service?: string;
    statusCode?: number;
    statusText?: string;
    success?: boolean;
}
export interface MailboxLoadMatch {
    id: number;
    include_body?: number;
}
export interface MailboxListMatch {
    mail_thread_id: number;
    $action?: string;
    [action: string]: any;
}
export interface MailboxUpdateData {
    id: number;
    data?: Record<string, any>;
    service?: string;
    statusCode?: number;
    statusText?: string;
    success?: boolean;
}
export interface MailboxRemoveMatch {
    id: number;
}
export interface Meeting {
    id?: string;
}
export interface MeetingCreateData {
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface MeetingRemoveMatch {
    id: string;
}
export interface Note {
    active_flag?: boolean;
    add_time?: string;
    company_id?: number;
    content?: string;
    deal?: Record<string, any>;
    deal_id?: number;
    id?: number;
    last_update_user_id?: number;
    lead_id?: string;
    object_id?: string;
    object_type?: string;
    org_id?: number;
    organization?: Record<string, any>;
    person?: Record<string, any>;
    person_id?: number;
    pinned_to_deal_flag?: boolean;
    pinned_to_organization_flag?: boolean;
    pinned_to_person_flag?: boolean;
    pinned_to_project_flag?: boolean;
    pinned_to_task_flag?: boolean;
    project?: Record<string, any>;
    project_id?: number;
    task?: Record<string, any>;
    task_id?: number;
    update_time?: string;
    updater_id?: number;
    user?: Record<string, any>;
    user_id?: number;
    uuid?: string;
}
export interface NoteLoadMatch {
    comment_id?: string;
    id: number;
}
export interface NoteListMatch {
    deal_id?: number;
    end_date?: string;
    lead_id?: string;
    limit?: number;
    org_id?: number;
    person_id?: number;
    pinned_to_deal_flag?: number;
    pinned_to_lead_flag?: number;
    pinned_to_organization_flag?: number;
    pinned_to_person_flag?: number;
    pinned_to_project_flag?: number;
    pinned_to_task_flag?: number;
    project_id?: number;
    sort?: string;
    start?: number;
    start_date?: string;
    task_id?: number;
    updated_since?: string;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface NoteCreateData {
    active_flag?: boolean;
    add_time?: string;
    company_id?: number;
    content?: string;
    deal?: Record<string, any>;
    deal_id?: number;
    id?: number;
    last_update_user_id?: number;
    lead_id?: string;
    object_id?: string;
    object_type?: string;
    org_id?: number;
    organization?: Record<string, any>;
    person?: Record<string, any>;
    person_id?: number;
    pinned_to_deal_flag?: boolean;
    pinned_to_organization_flag?: boolean;
    pinned_to_person_flag?: boolean;
    pinned_to_project_flag?: boolean;
    pinned_to_task_flag?: boolean;
    project?: Record<string, any>;
    project_id?: number;
    task?: Record<string, any>;
    task_id?: number;
    update_time?: string;
    updater_id?: number;
    user?: Record<string, any>;
    user_id?: number;
    uuid?: string;
    $action?: string;
    [action: string]: any;
}
export interface NoteUpdateData {
    comment_id?: string;
    id: number;
    active_flag?: boolean;
    add_time?: string;
    company_id?: number;
    content?: string;
    deal?: Record<string, any>;
    deal_id?: number;
    last_update_user_id?: number;
    lead_id?: string;
    object_id?: string;
    object_type?: string;
    org_id?: number;
    organization?: Record<string, any>;
    person?: Record<string, any>;
    person_id?: number;
    pinned_to_deal_flag?: boolean;
    pinned_to_organization_flag?: boolean;
    pinned_to_person_flag?: boolean;
    pinned_to_project_flag?: boolean;
    pinned_to_task_flag?: boolean;
    project?: Record<string, any>;
    project_id?: number;
    task?: Record<string, any>;
    task_id?: number;
    update_time?: string;
    updater_id?: number;
    user?: Record<string, any>;
    user_id?: number;
    uuid?: string;
}
export interface NoteRemoveMatch {
    comment_id?: string;
    id: number;
}
export interface NoteField {
    additional_data?: Record<string, any>;
    data?: any[];
    success?: boolean;
}
export interface NoteFieldListMatch {
    additional_data?: Record<string, any>;
    data?: any[];
    success?: boolean;
}
export interface Oauth {
}
export interface OauthLoadMatch {
    client_id: string;
    redirect_uri: string;
    state?: string;
    $action?: string;
    [action: string]: any;
}
export interface OauthCreateData {
    $action?: string;
    [action: string]: any;
}
export interface Organization {
    id?: string;
}
export interface OrganizationListMatch {
    id: number;
    all_change?: string;
    item?: string;
    limit?: number;
    start?: number;
    sort?: string;
    include_body?: number;
    cursor?: string;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationCreateData {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationUpdateData {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationRemoveMatch {
    follower_id: number;
    id: number;
}
export interface OrganizationField {
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface OrganizationFieldLoadMatch {
    id: number;
}
export interface OrganizationFieldListMatch {
    limit?: number;
    start?: number;
}
export interface OrganizationFieldCreateData {
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface OrganizationFieldUpdateData {
    id: number;
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface OrganizationFieldRemoveMatch {
    id: number;
}
export interface OrganizationRelationship {
    additional_data?: Record<string, any>;
    data?: any;
    id?: string;
    org_id?: number;
    rel_linked_org_id: number;
    rel_owner_org_id: number;
    related_objects?: Record<string, any>;
    success?: boolean;
    type: string;
}
export interface OrganizationRelationshipLoadMatch {
    id: number;
    org_id?: number;
}
export interface OrganizationRelationshipListMatch {
    org_id: number;
}
export interface OrganizationRelationshipCreateData {
    additional_data?: Record<string, any>;
    data?: any;
    id?: string;
    org_id?: number;
    rel_linked_org_id: number;
    rel_owner_org_id: number;
    related_objects?: Record<string, any>;
    success?: boolean;
    type: string;
}
export interface OrganizationRelationshipUpdateData {
    id: number;
    additional_data?: Record<string, any>;
    data?: any;
    org_id?: number;
    rel_linked_org_id?: number;
    rel_owner_org_id?: number;
    related_objects?: Record<string, any>;
    success?: boolean;
    type?: string;
}
export interface OrganizationRelationshipRemoveMatch {
    id: number;
}
export interface PermissionSet {
    app?: string;
    assignment_count?: number;
    contents?: any[];
    data?: any[];
    description?: string;
    id?: string;
    name?: string;
    success?: boolean;
    type?: string;
}
export interface PermissionSetLoadMatch {
    id: string;
}
export interface PermissionSetListMatch {
    app?: string;
    $action?: string;
    [action: string]: any;
}
export interface Person {
    id?: string;
}
export interface PersonListMatch {
    id: number;
    all_change?: string;
    item?: string;
    limit?: number;
    start?: number;
    sort?: string;
    include_body?: number;
    cursor?: string;
    $action?: string;
    [action: string]: any;
}
export interface PersonCreateData {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface PersonUpdateData {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface PersonRemoveMatch {
    follower_id: number;
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface PersonField {
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface PersonFieldLoadMatch {
    id: number;
}
export interface PersonFieldListMatch {
    limit?: number;
    start?: number;
}
export interface PersonFieldCreateData {
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: string;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface PersonFieldUpdateData {
    id: number;
    add_visible_flag?: boolean;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface PersonFieldRemoveMatch {
    id: number;
}
export interface Pipeline {
    id?: string;
}
export interface PipelineLoadMatch {
    id: number;
    end_date: string;
    start_date: string;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface PipelineListMatch {
    id: number;
    everyone?: number;
    filter_id?: number;
    get_summary?: number;
    limit?: number;
    stage_id?: number;
    start?: number;
    totals_convert_currency?: string;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface Product {
    id?: string;
}
export interface ProductListMatch {
    id: number;
    limit?: number;
    start?: number;
    status?: string;
    sort?: string;
    $action?: string;
    [action: string]: any;
}
export interface ProductCreateData {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface ProductRemoveMatch {
    follower_id: number;
    id: number;
}
export interface ProductField {
    data?: Record<string, any>;
    field_type: string;
    id?: string;
    name: string;
    options?: any[];
    success?: boolean;
}
export interface ProductFieldLoadMatch {
    id: number;
}
export interface ProductFieldListMatch {
    limit?: number;
    start?: number;
}
export interface ProductFieldCreateData {
    data?: Record<string, any>;
    field_type: string;
    id?: string;
    name: string;
    options?: any[];
    success?: boolean;
}
export interface ProductFieldUpdateData {
    id: number;
    data?: Record<string, any>;
    field_type?: string;
    name?: string;
    options?: any[];
    success?: boolean;
}
export interface ProductFieldRemoveMatch {
    id: number;
}
export interface Project {
    additional_data?: Record<string, any>;
    data?: any;
    group_id?: number;
    id?: number;
    phase_id?: number;
    success?: boolean;
}
export interface ProjectLoadMatch {
    id: number;
}
export interface ProjectListMatch {
    cursor?: string;
    filter_id?: number;
    include_archived?: boolean;
    limit?: number;
    phase_id?: number;
    status?: string;
    $action?: string;
    [action: string]: any;
}
export interface ProjectCreateData {
    additional_data?: Record<string, any>;
    data?: any;
    group_id?: number;
    id?: number;
    phase_id?: number;
    success?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface ProjectUpdateData {
    activity_id?: number;
    id: number;
    task_id?: number;
    additional_data?: Record<string, any>;
    data?: any;
    group_id?: number;
    phase_id?: number;
    success?: boolean;
}
export interface ProjectRemoveMatch {
    id: number;
}
export interface ProjectBoard {
    add_time?: string;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: number;
    name?: string;
    order_nr?: number;
    success?: boolean;
    update_time?: string;
}
export interface ProjectBoardLoadMatch {
    id: number;
}
export interface ProjectBoardListMatch {
    add_time?: string;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: number;
    name?: string;
    order_nr?: number;
    success?: boolean;
    update_time?: string;
}
export interface ProjectPhase {
    add_time?: string;
    additional_data?: Record<string, any>;
    board_id?: number;
    data?: Record<string, any>;
    id?: number;
    name?: string;
    order_nr?: number;
    success?: boolean;
    update_time?: string;
}
export interface ProjectPhaseLoadMatch {
    id: number;
}
export interface ProjectPhaseListMatch {
    board_id: number;
}
export interface ProjectTemplate {
    add_time?: string;
    additional_data?: Record<string, any>;
    data?: any;
    description?: string;
    id?: number;
    owner_id?: number;
    projects_board_id?: number;
    success?: boolean;
    title?: string;
    update_time?: string;
}
export interface ProjectTemplateLoadMatch {
    id: number;
}
export interface ProjectTemplateListMatch {
    cursor?: string;
    limit?: number;
}
export interface Recent {
    additional_data?: Record<string, any>;
    data?: any[];
    success?: boolean;
}
export interface RecentListMatch {
    item?: string;
    limit?: number;
    since_timestamp: string;
    start?: number;
}
export interface Role {
    additional_data?: Record<string, any>;
    data?: any;
    id?: string;
    name: string;
    parent_role_id?: number;
    success?: boolean;
}
export interface RoleLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface RoleListMatch {
    limit?: number;
    start?: number;
    $action?: string;
    [action: string]: any;
}
export interface RoleCreateData {
    additional_data?: Record<string, any>;
    data?: any;
    id?: string;
    name: string;
    parent_role_id?: number;
    success?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface RoleUpdateData {
    id: number;
    additional_data?: Record<string, any>;
    data?: any;
    name?: string;
    parent_role_id?: number;
    success?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface RoleRemoveMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface Stage {
    id?: string;
}
export interface StageListMatch {
    id: number;
    everyone?: number;
    filter_id?: number;
    limit?: number;
    start?: number;
    user_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface Task {
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: number;
    success?: boolean;
}
export interface TaskLoadMatch {
    id: number;
}
export interface TaskListMatch {
    assignee_id?: number;
    cursor?: string;
    done?: number;
    limit?: number;
    parent_task_id?: number;
    project_id?: number;
}
export interface TaskCreateData {
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    id?: number;
    success?: boolean;
}
export interface TaskUpdateData {
    id: number;
    additional_data?: Record<string, any>;
    data?: Record<string, any>;
    success?: boolean;
}
export interface TaskRemoveMatch {
    id: number;
}
export interface User {
    access?: any[];
    active_flag?: boolean;
    data?: Record<string, any>;
    email: string;
    id?: string;
    success?: boolean;
}
export interface UserLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface UserListMatch {
    access?: any[];
    active_flag?: boolean;
    data?: Record<string, any>;
    email?: string;
    id?: string;
    success?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface UserCreateData {
    access?: any[];
    active_flag?: boolean;
    data?: Record<string, any>;
    email: string;
    id?: string;
    success?: boolean;
}
export interface UserUpdateData {
    id: number;
    access?: any[];
    active_flag?: boolean;
    data?: Record<string, any>;
    email?: string;
    success?: boolean;
}
export interface UserConnection {
    data?: Record<string, any>;
    success?: boolean;
}
export interface UserConnectionLoadMatch {
    data?: Record<string, any>;
    success?: boolean;
}
export interface UserSetting {
    data?: Record<string, any>;
    success?: boolean;
}
export interface UserSettingLoadMatch {
    data?: Record<string, any>;
    success?: boolean;
}
export interface Webhook {
    data?: any[];
    event_action: string;
    event_object: string;
    http_auth_password?: string;
    http_auth_user?: string;
    id?: string;
    name: string;
    subscription_url: string;
    user_id?: number;
    version?: string;
}
export interface WebhookListMatch {
    data?: any[];
    event_action?: string;
    event_object?: string;
    http_auth_password?: string;
    http_auth_user?: string;
    id?: string;
    name?: string;
    subscription_url?: string;
    user_id?: number;
    version?: string;
}
export interface WebhookCreateData {
    data?: any[];
    event_action: string;
    event_object: string;
    http_auth_password?: string;
    http_auth_user?: string;
    id?: string;
    name: string;
    subscription_url: string;
    user_id?: number;
    version?: string;
}
export interface WebhookRemoveMatch {
    id: number;
}
