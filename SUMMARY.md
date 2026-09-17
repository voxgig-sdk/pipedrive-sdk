# Pipedrive API v1

The Pipedrive API v1.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 42 entities and 213 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [ActivityField](docs/api/activity_field.html)

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `additional_data`: The additional data of the list
- `success`: If the response is successful or not

### [ActivityType](docs/api/activity_type.html)

Results: The activity type was successfully created; A list of activity types; The activity type was successfully deleted; The activity type was successfully updated.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `color`: A designated color for the activity type in 6-character HEX format (for example `FFFFFF` for white, `000000` for black)
- `data`: The array of activity types
- `icon_key`: Icon graphic to use for representing this activity type
- `name`: The name of the activity type
- `order_nr`: An order number for the activity type. Order numbers should be used to order the types in the activity type selections.

### [Billing](docs/api/billing.html)

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `data`: An array of add-ons that the company has.
- `success`: If the response is successful or not

### [CallLog](docs/api/call_log.html)

Results: The audio recording was successfully added to the log.; The call log was successfully created.; A list of call logs.; The requested call log object.; The call log was successfully deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `activity_id`: If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don&#39;t need to specify `deal_id`, `person_id` or `org_id`, as they will be ignored in favor of the values already available in the activity. The `activity_id` must refer to a `call` type activity.
- `company_id`: The company ID of the owner of the call log
- `deal_id`: The ID of the deal this call is associated with. A call log can be associated with either a deal or a lead, but not both at once.
- `duration`: The duration of the call in seconds
- `end_time`: The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.

### [Channel](docs/api/channel.html)

Results: The channel registered; The message was registered in the conversation; The conversation was deleted; The channel was deleted.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `attachments`: The list of attachments available in the message
- `avatar_url`: The URL for an icon that represents your channel
- `channel_id`: The channel ID as in the provider
- `conversation_id`: The ID of the conversation
- `conversation_link`: A URL that can open the conversation in the provider&#39;s side

### [Currency](docs/api/currency.html)

Results: The list of supported currencies.

SDK operations: `list`.

Key fields to recognise:

- `active_flag`: Whether the currency is active or not
- `code`: The code of the currency
- `decimal_points`: The amount of decimal points of the currency
- `id`: The ID of the currency
- `is_custom_flag`: Whether the currency is a custom one or not

### [Deal](docs/api/deal.html)

Results: Duplicate a deal; Add a follower to a deal; Add new participant to the deal; Get all archived deals; Get the deal updates; Success; Get changelog of a deal; Get all deal participants by the DealID; Get participant changelogs for a given deal; Get open and won deals, grouped by the defined interval of time; Get the summary of not archived deals; Get the summary of archived deals; Delete a participant from a deal; Delete a follower from a deal; Merges a deal with another deal.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `period_end`: The end date and time of the period
- `period_start`: The start date and time of the period
- `total_count`: The total number of deals
- `total_currency_converted_value`: The total value of deals converted into the company default currency
- `total_currency_converted_value_formatted`: The total converted value of deals formatted with the company default currency. for example US$5,100.96

### [DealField](docs/api/deal_field.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `add_visible_flag`: Not used
- `additional_data`: The additional data of the list
- `name`: The name of the field
- `options`: The options of the field. When there are no options, `null` is returned.
- `success`: If the response is successful or not

### [File](docs/api/file.html)

Results: Add a file from computer or Google Drive and associate it with deal, person, organization, activity or product; Creates a new empty file in the remote location (googledrive) that will be linked to the item you supply - deal, person or organization; Links an existing remote file (googledrive) to the item you supply - deal, person, organization; Get data about all files uploaded to Pipedrive; Get data about one specific file uploaded to Pipedrive; success; Delete a file from Pipedrive; Update file name and description.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `active_flag`: Whether the user is active or not. false = Not activated, true = Activated
- `activity_id`: The ID of the activity to associate the file with
- `add_time`: The date and time when the file was added/created. Format: YYYY-MM-DD HH:MM:SS
- `cid`: The ID of the inline attachment
- `deal_id`: The ID of the deal to associate the file with

### [Filter](docs/api/filter.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `conditions`: The conditions object of a filter
- `data`: The array of filters
- `name`: The name of the filter
- `success`: If the response is successful or not
- `type`: The type of filter to create

### [Goal](docs/api/goal.html)

Results: Successful response containing payload in the `data.goal` object; Successful response with id &#39;success&#39; field only.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `assignee`: Who the goal is assigned to
- `duration`: The duration of the goal
- `expected_outcome`: The expected outcome of the goal
- `interval`: The interval of the goal
- `title`: The title of the goal

### [Lead](docs/api/lead.html)

Results: Successful response containing payload in the `data` field; Lists users permitted to access a lead; Success; Successful response with id value only. Used in DELETE calls.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `add_time`: The date and time of when the lead was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
- `cc_email`: The BCC email of the lead
- `channel`: The ID of your Marketing channel this Lead was created from. Recognized Marketing channels can be configured in your &lt;a href=&quot;https://app.pipedrive.com/settings/fields&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;Company settings&lt;/a&gt;.
- `channel_id`: The optional ID to further distinguish the Marketing channel.
- `creator_id`: The ID of the user who created the lead

### [LeadField](docs/api/lead_field.html)

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `additional_data`: The additional data of the list
- `success`: If the response is successful or not

### [LeadLabel](docs/api/lead_label.html)

Results: Successful response containing payload in the `data` field; Successful response with id value only. Used in DELETE calls.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `add_time`: The date and time of when the lead label was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
- `color`: The color of the label. Only a subset of colors can be used.
- `id`: The unique ID of the lead label
- `name`: The name of the lead label
- `update_time`: The date and time of when the lead label was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

### [LeadSource](docs/api/lead_source.html)

Results: The successful response containing payload in the `data` field.

SDK operations: `list`.

Key fields to recognise:

- `name`: The unique name of a lead source

### [LegacyTeam](docs/api/legacy_team.html)

Results: A list of user IDs within a team; The team data; The list of team objects.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: The team description
- `manager_id`: The team manager ID
- `name`: The team name
- `success`: If the response is successful or not
- `users`: The list of user IDs

### [Mailbox](docs/api/mailbox.html)

Results: Get mail threads; Get mail messages from thread; The mail messages that are being synced with Pipedrive; Marks mail thread as deleted; Updates the properties of a mail thread.

SDK operations: `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `data`: The array of mail threads
- `service`: The service name of the response.
- `statusCode`: The email service specific status code and it is returned through the response body.
- `statusText`: The status text of the response.
- `success`: If the response is successful or not

### [Meeting](docs/api/meeting.html)

Results: User provider link was successfully created; User provider link successfully removed.

SDK operations: `create`, `remove`.

### [Note](docs/api/note.html)

Results: Add, update or get a comment; Add, update or get a note; Get all notes; Get all comments; Delete a comment; Delete a note.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `active_flag`: Whether the note is active or deleted
- `add_time`: The creation date and time of the note
- `company_id`: The ID of the company
- `content`: The content of the note in HTML format. Subject to sanitization on the back-end.
- `deal_id`: The ID of the deal the note is attached to

### [NoteField](docs/api/note_field.html)

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `additional_data`: The additional data of the list
- `success`: If the response is successful or not

### [Oauth](docs/api/oauth.html)

Results: Returns user Oauth2 tokens.; Authorize user in the app.

SDK operations: `create`, `load`.

### [Organization](docs/api/organization.html)

Results: Success; Get the organization updates; Get changelog of an organization.

SDK operations: `create`, `list`, `remove`, `update`.

### [OrganizationField](docs/api/organization_field.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `add_visible_flag`: Not used
- `additional_data`: The additional data of the list
- `name`: The name of the field
- `options`: The options of the field. When there are no options, `null` is returned.
- `success`: If the response is successful or not

### [OrganizationRelationship](docs/api/organization_relationship.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `additional_data`: The additional data of the list
- `data`: The array of organization relationships
- `org_id`: The ID of the base organization for the returned calculated values
- `rel_linked_org_id`: The linked organization in the relationship.
- `rel_owner_org_id`: The owner of the relationship.

### [PermissionSet](docs/api/permission_set.html)

Results: The assignments of a specific user ID; Get all permissions; The permission set of a specific user ID.

SDK operations: `list`, `load`.

Key fields to recognise:

- `app`: The app that permission set belongs to
- `assignment_count`: The number of users assigned to this permission set
- `contents`: A permission assigned to this permission set
- `data`: An array of the assignments of the user
- `description`: The description of the permission set

### [Person](docs/api/person.html)

Results: Success; Get the person updates; Get changelog of a person.

SDK operations: `create`, `list`, `remove`, `update`.

### [PersonField](docs/api/person_field.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `add_visible_flag`: Not used
- `additional_data`: The additional data of the list
- `name`: The name of the field
- `options`: The options of the field. When there are no options, `null` is returned.
- `success`: If the response is successful or not

### [Pipeline](docs/api/pipeline.html)

Results: Get deals in a stage; Get pipeline deals conversion rates.

SDK operations: `list`, `load`.

### [Product](docs/api/product.html)

Results: Adds a follower to a product; The data of deals that have a product attached; Success; Lists the followers of a product; Lists users permitted to access a product; Deletes a follower from a product.

SDK operations: `create`, `list`, `remove`.

### [ProductField](docs/api/product_field.html)

Results: Get the data for a single product field; Get data about all product fields; Delete a product field; Mark multiple product fields as deleted.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `field_type`: The type of the field&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;`varchar`&lt;/td&gt;&lt;td&gt;Text (up to 255 characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`varchar_auto`&lt;/td&gt;&lt;td&gt;Autocomplete text (up to 255 characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`text`&lt;/td&gt;&lt;td&gt;Long text (up to 65k characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`double`&lt;/td&gt;&lt;td&gt;Numeric value&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`monetary`&lt;/td&gt;&lt;td&gt;Monetary field (has a numeric value and a currency value)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`date`&lt;/td&gt;&lt;td&gt;Date (format YYYY-MM-DD)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`set`&lt;/td&gt;&lt;td&gt;Options field with a possibility of having multiple chosen options&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`enum`&lt;/td&gt;&lt;td&gt;Options field with a single possible chosen option&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`user`&lt;/td&gt;&lt;td&gt;User field (contains a user ID of another Pipedrive user)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`org`&lt;/td&gt;&lt;td&gt;Organization field (contains an organization ID which is stored on the same account)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`people`&lt;/td&gt;&lt;td&gt;Person field (contains a product ID which is stored on the same account)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`phone`&lt;/td&gt;&lt;td&gt;Phone field (up to 255 numbers and/or characters)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`time`&lt;/td&gt;&lt;td&gt;Time field (format HH:MM:SS)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`timerange`&lt;/td&gt;&lt;td&gt;Time-range field (has a start time and end time value, both HH:MM:SS)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`daterange`&lt;/td&gt;&lt;td&gt;Date-range field (has a start date and end date value, both YYYY-MM-DD)&lt;/td&gt;&lt;tr&gt;&lt;td&gt;`address`&lt;/td&gt;&lt;td&gt;Address field&lt;/dd&gt;&lt;/table&gt;
- `name`: The name of the field
- `options`: When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:&lt;/br&gt;`[&#123;&quot;label&quot;:&quot;red&quot;&#125;, &#123;&quot;label&quot;:&quot;blue&quot;&#125;, &#123;&quot;label&quot;:&quot;lilac&quot;&#125;]`

### [Project](docs/api/project.html)

Results: Updated project.; Created project.; A list of projects.; A collection of activities; Get a project groups.; Get a project plan.; A list of tasks.; Get a project.; Delete a project.; Updated activity in plan.; Updated task in plan.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `group_id`: The ID of the board this project is associated with. If null then plan item is not in any group.
- `id`: The ID of the project, generated when the task was created
- `phase_id`: The ID of the phase this project is associated with

### [ProjectBoard](docs/api/project_board.html)

Results: A list of project board.; Get a project board.

SDK operations: `list`, `load`.

Key fields to recognise:

- `add_time`: The creation date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
- `id`: The ID of the project board
- `name`: Name of a project board
- `order_nr`: The order of a board
- `update_time`: The update date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.

### [ProjectPhase](docs/api/project_phase.html)

Results: A list of project phases.; Get a project phase.

SDK operations: `list`, `load`.

Key fields to recognise:

- `add_time`: The creation date and time of the board in UTC. Format: YYYY-MM-DD HH:MM:SS.
- `board_id`: The ID of the project board this phase is linked to
- `id`: The ID of the project phase
- `name`: Name of a project phase
- `order_nr`: The order of a phase

### [ProjectTemplate](docs/api/project_template.html)

Results: A list of project template.; Get a project template.

SDK operations: `list`, `load`.

Key fields to recognise:

- `add_time`: The creation date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.
- `description`: The description of a template
- `id`: The ID of a template
- `owner_id`: The ID of a template owner
- `projects_board_id`: The ID of the project board this template is associated with

### [Recent](docs/api/recent.html)

Results: List of items changed since &quot;since_timestamp&quot;.

SDK operations: `list`.

Key fields to recognise:

- `success`: If the response is successful or not

### [Role](docs/api/role.html)

Results: Add assignment for a role; List role settings; Add a role; List assignments for a role; Get all roles; Get either visible or hidden pipeline ids for a role; Get one role; Delete a role; Delete assignment from a role; Update role details; Update pipeline visibility for a role.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `additional_data`: The additional data in the role list
- `data`: The response data
- `name`: The name of the role
- `parent_role_id`: The ID of the parent role
- `success`: If the response is successful or not

### [Stage](docs/api/stage.html)

Results: Get deals in a stage.

SDK operations: `list`.

### [Task](docs/api/task.html)

Results: Created task.; A list of tasks.; Get a task.; Deleted task.; Updated task.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: The ID of the task, generated when the task was created

### [User](docs/api/user.html)

Results: The data of the user; List assignments for a role; The list of user objects; The list of user IDs; The list of user permissions; List role settings; The data of the logged in user.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `access`: The access given to the user.
- `active_flag`: Boolean that indicates whether the user is activated
- `email`: The user email
- `success`: If the response is successful or not

### [UserConnection](docs/api/user_connection.html)

Results: The data of user connections.

SDK operations: `load`.

Key fields to recognise:

- `data`: The object of UserConnections
- `success`: If the response is successful or not

### [UserSetting](docs/api/user_setting.html)

Results: The list of user settings.

SDK operations: `load`.

Key fields to recognise:

- `success`: If the response is successful or not

### [Webhook](docs/api/webhook.html)

Results: The created webhook object; The list of webhooks objects from the logged in company and user; The webhook deletion success response.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `data`: The array of Webhooks
- `event_action`: The Webhook action
- `event_object`: The Webhook object
- `http_auth_password`: The password of the `subscription_url` of the Webhook
- `http_auth_user`: The username of the `subscription_url` of the Webhook

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [ActivityField](docs/api/activity_field.html) | `list` | `GET /activityFields` | Required |
| [ActivityType](docs/api/activity_type.html) | `create` | `POST /activityTypes` | Required |
| [ActivityType](docs/api/activity_type.html) | `list` | `GET /activityTypes` | Required |
| [ActivityType](docs/api/activity_type.html) | `remove` | `DELETE /activityTypes/{id}` | Required |
| [ActivityType](docs/api/activity_type.html) | `update` | `PUT /activityTypes/{id}` | Required |
| [Billing](docs/api/billing.html) | `list` | `GET /billing/subscriptions/addons` | Required |
| [CallLog](docs/api/call_log.html) | `create` | `POST /callLogs/{id}/recordings` | Required |
| [CallLog](docs/api/call_log.html) | `create` | `POST /callLogs` | Required |
| [CallLog](docs/api/call_log.html) | `list` | `GET /callLogs` | Required |
| [CallLog](docs/api/call_log.html) | `load` | `GET /callLogs/{id}` | Required |
| [CallLog](docs/api/call_log.html) | `remove` | `DELETE /callLogs/{id}` | Required |
| [Channel](docs/api/channel.html) | `create` | `POST /channels` | Required |
| [Channel](docs/api/channel.html) | `create` | `POST /channels/messages/receive` | Required |
| [Channel](docs/api/channel.html) | `remove` | `DELETE /channels/{channel-id}/conversations/{conversation-id}` | Required |
| [Channel](docs/api/channel.html) | `remove` | `DELETE /channels/{id}` | Required |
| [Currency](docs/api/currency.html) | `list` | `GET /currencies` | Required |
| [Deal](docs/api/deal.html) | `create` | `POST /deals/{id}/duplicate` | Required |
| [Deal](docs/api/deal.html) | `create` | `POST /deals/{id}/followers` | Required |
| [Deal](docs/api/deal.html) | `create` | `POST /deals/{id}/participants` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/archived` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/{id}/flow` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/{id}/files` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/{id}/mailMessages` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/{id}/changelog` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/{id}/participants` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/{id}/participantsChangelog` | Required |
| [Deal](docs/api/deal.html) | `list` | `GET /deals/{id}/followers` | Required |
| [Deal](docs/api/deal.html) | `load` | `GET /deals/timeline` | Required |
| [Deal](docs/api/deal.html) | `load` | `GET /deals/timeline/archived` | Required |
| [Deal](docs/api/deal.html) | `load` | `GET /deals/summary` | Required |
| [Deal](docs/api/deal.html) | `load` | `GET /deals/summary/archived` | Required |
| [Deal](docs/api/deal.html) | `load` | `GET /deals/{id}/permittedUsers` | Required |
| [Deal](docs/api/deal.html) | `remove` | `DELETE /deals/{id}/participants/{deal_participant_id}` | Required |
| [Deal](docs/api/deal.html) | `remove` | `DELETE /deals/{id}/followers/{follower_id}` | Required |
| [Deal](docs/api/deal.html) | `update` | `PUT /deals/{id}/merge` | Required |
| [DealField](docs/api/deal_field.html) | `create` | `POST /dealFields` | Required |
| [DealField](docs/api/deal_field.html) | `list` | `GET /dealFields` | Required |
| [DealField](docs/api/deal_field.html) | `load` | `GET /dealFields/{id}` | Required |
| [DealField](docs/api/deal_field.html) | `remove` | `DELETE /dealFields/{id}` | Required |
| [DealField](docs/api/deal_field.html) | `remove` | `DELETE /dealFields` | Required |
| [DealField](docs/api/deal_field.html) | `update` | `PUT /dealFields/{id}` | Required |
| [File](docs/api/file.html) | `create` | `POST /files` | Required |
| [File](docs/api/file.html) | `create` | `POST /files/remote` | Required |
| [File](docs/api/file.html) | `create` | `POST /files/remoteLink` | Required |
| [File](docs/api/file.html) | `list` | `GET /files` | Required |
| [File](docs/api/file.html) | `load` | `GET /files/{id}` | Required |
| [File](docs/api/file.html) | `load` | `GET /files/{id}/download` | Required |
| [File](docs/api/file.html) | `remove` | `DELETE /files/{id}` | Required |
| [File](docs/api/file.html) | `update` | `PUT /files/{id}` | Required |
| [Filter](docs/api/filter.html) | `create` | `POST /filters` | Required |
| [Filter](docs/api/filter.html) | `list` | `GET /filters` | Required |
| [Filter](docs/api/filter.html) | `load` | `GET /filters/{id}` | Required |
| [Filter](docs/api/filter.html) | `load` | `GET /filters/helpers` | Required |
| [Filter](docs/api/filter.html) | `remove` | `DELETE /filters/{id}` | Required |
| [Filter](docs/api/filter.html) | `remove` | `DELETE /filters` | Required |
| [Filter](docs/api/filter.html) | `update` | `PUT /filters/{id}` | Required |
| [Goal](docs/api/goal.html) | `create` | `POST /goals` | Required |
| [Goal](docs/api/goal.html) | `load` | `GET /goals/find` | Required |
| [Goal](docs/api/goal.html) | `load` | `GET /goals/{id}/results` | Required |
| [Goal](docs/api/goal.html) | `remove` | `DELETE /goals/{id}` | Required |
| [Goal](docs/api/goal.html) | `update` | `PUT /goals/{id}` | Required |
| [Lead](docs/api/lead.html) | `create` | `POST /leads` | Required |
| [Lead](docs/api/lead.html) | `list` | `GET /leads` | Required |
| [Lead](docs/api/lead.html) | `list` | `GET /leads/archived` | Required |
| [Lead](docs/api/lead.html) | `list` | `GET /leads/{id}/permittedUsers` | Required |
| [Lead](docs/api/lead.html) | `load` | `GET /leads/search` | Required |
| [Lead](docs/api/lead.html) | `load` | `GET /leads/{id}` | Required |
| [Lead](docs/api/lead.html) | `remove` | `DELETE /leads/{id}` | Required |
| [Lead](docs/api/lead.html) | `update` | `PATCH /leads/{id}` | Required |
| [LeadField](docs/api/lead_field.html) | `list` | `GET /leadFields` | Required |
| [LeadLabel](docs/api/lead_label.html) | `create` | `POST /leadLabels` | Required |
| [LeadLabel](docs/api/lead_label.html) | `list` | `GET /leadLabels` | Required |
| [LeadLabel](docs/api/lead_label.html) | `remove` | `DELETE /leadLabels/{id}` | Required |
| [LeadLabel](docs/api/lead_label.html) | `update` | `PATCH /leadLabels/{id}` | Required |
| [LeadSource](docs/api/lead_source.html) | `list` | `GET /leadSources` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `create` | `POST /legacyTeams/{id}/users` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `create` | `POST /legacyTeams` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `list` | `GET /legacyTeams` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `list` | `GET /legacyTeams/{id}/users` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `load` | `GET /legacyTeams/user/{id}` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `load` | `GET /legacyTeams/{id}` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `remove` | `DELETE /legacyTeams/{id}/users` | Required |
| [LegacyTeam](docs/api/legacy_team.html) | `update` | `PUT /legacyTeams/{id}` | Required |
| [Mailbox](docs/api/mailbox.html) | `list` | `GET /mailbox/mailThreads` | Required |
| [Mailbox](docs/api/mailbox.html) | `list` | `GET /mailbox/mailThreads/{id}/mailMessages` | Required |
| [Mailbox](docs/api/mailbox.html) | `load` | `GET /mailbox/mailMessages/{id}` | Required |
| [Mailbox](docs/api/mailbox.html) | `load` | `GET /mailbox/mailThreads/{id}` | Required |
| [Mailbox](docs/api/mailbox.html) | `remove` | `DELETE /mailbox/mailThreads/{id}` | Required |
| [Mailbox](docs/api/mailbox.html) | `update` | `PUT /mailbox/mailThreads/{id}` | Required |
| [Meeting](docs/api/meeting.html) | `create` | `POST /meetings/userProviderLinks` | Required |
| [Meeting](docs/api/meeting.html) | `remove` | `DELETE /meetings/userProviderLinks/{id}` | Required |
| [Note](docs/api/note.html) | `create` | `POST /notes/{id}/comments` | Required |
| [Note](docs/api/note.html) | `create` | `POST /notes` | Required |
| [Note](docs/api/note.html) | `list` | `GET /notes` | Required |
| [Note](docs/api/note.html) | `list` | `GET /notes/{id}/comments` | Required |
| [Note](docs/api/note.html) | `load` | `GET /notes/{id}/comments/{commentId}` | Required |
| [Note](docs/api/note.html) | `load` | `GET /notes/{id}` | Required |
| [Note](docs/api/note.html) | `remove` | `DELETE /notes/{id}/comments/{commentId}` | Required |
| [Note](docs/api/note.html) | `remove` | `DELETE /notes/{id}` | Required |
| [Note](docs/api/note.html) | `update` | `PUT /notes/{id}/comments/{commentId}` | Required |
| [Note](docs/api/note.html) | `update` | `PUT /notes/{id}` | Required |
| [NoteField](docs/api/note_field.html) | `list` | `GET /noteFields` | Required |
| [Oauth](docs/api/oauth.html) | `create` | `POST /oauth/token` | Required |
| [Oauth](docs/api/oauth.html) | `create` | `POST /oauth/token/` | Required |
| [Oauth](docs/api/oauth.html) | `load` | `GET /oauth/authorize` | See reference |
| [Organization](docs/api/organization.html) | `create` | `POST /organizations/{id}/followers` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{id}/flow` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{id}/files` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{id}/mailMessages` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{id}/changelog` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{id}/followers` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{id}/permittedUsers` | Required |
| [Organization](docs/api/organization.html) | `remove` | `DELETE /organizations/{id}/followers/{follower_id}` | Required |
| [Organization](docs/api/organization.html) | `update` | `PUT /organizations/{id}/merge` | Required |
| [OrganizationField](docs/api/organization_field.html) | `create` | `POST /organizationFields` | Required |
| [OrganizationField](docs/api/organization_field.html) | `list` | `GET /organizationFields` | Required |
| [OrganizationField](docs/api/organization_field.html) | `load` | `GET /organizationFields/{id}` | Required |
| [OrganizationField](docs/api/organization_field.html) | `remove` | `DELETE /organizationFields/{id}` | Required |
| [OrganizationField](docs/api/organization_field.html) | `remove` | `DELETE /organizationFields` | Required |
| [OrganizationField](docs/api/organization_field.html) | `update` | `PUT /organizationFields/{id}` | Required |
| [OrganizationRelationship](docs/api/organization_relationship.html) | `create` | `POST /organizationRelationships` | Required |
| [OrganizationRelationship](docs/api/organization_relationship.html) | `list` | `GET /organizationRelationships` | Required |
| [OrganizationRelationship](docs/api/organization_relationship.html) | `load` | `GET /organizationRelationships/{id}` | Required |
| [OrganizationRelationship](docs/api/organization_relationship.html) | `remove` | `DELETE /organizationRelationships/{id}` | Required |
| [OrganizationRelationship](docs/api/organization_relationship.html) | `update` | `PUT /organizationRelationships/{id}` | Required |
| [PermissionSet](docs/api/permission_set.html) | `list` | `GET /permissionSets/{id}/assignments` | Required |
| [PermissionSet](docs/api/permission_set.html) | `list` | `GET /permissionSets` | Required |
| [PermissionSet](docs/api/permission_set.html) | `load` | `GET /permissionSets/{id}` | Required |
| [Person](docs/api/person.html) | `create` | `POST /persons/{id}/followers` | Required |
| [Person](docs/api/person.html) | `create` | `POST /persons/{id}/picture` | Required |
| [Person](docs/api/person.html) | `list` | `GET /persons/{id}/flow` | Required |
| [Person](docs/api/person.html) | `list` | `GET /persons/{id}/files` | Required |
| [Person](docs/api/person.html) | `list` | `GET /persons/{id}/mailMessages` | Required |
| [Person](docs/api/person.html) | `list` | `GET /persons/{id}/changelog` | Required |
| [Person](docs/api/person.html) | `list` | `GET /persons/{id}/products` | Required |
| [Person](docs/api/person.html) | `list` | `GET /persons/{id}/followers` | Required |
| [Person](docs/api/person.html) | `list` | `GET /persons/{id}/permittedUsers` | Required |
| [Person](docs/api/person.html) | `remove` | `DELETE /persons/{id}/followers/{follower_id}` | Required |
| [Person](docs/api/person.html) | `remove` | `DELETE /persons/{id}/picture` | Required |
| [Person](docs/api/person.html) | `update` | `PUT /persons/{id}/merge` | Required |
| [PersonField](docs/api/person_field.html) | `create` | `POST /personFields` | Required |
| [PersonField](docs/api/person_field.html) | `list` | `GET /personFields` | Required |
| [PersonField](docs/api/person_field.html) | `load` | `GET /personFields/{id}` | Required |
| [PersonField](docs/api/person_field.html) | `remove` | `DELETE /personFields/{id}` | Required |
| [PersonField](docs/api/person_field.html) | `remove` | `DELETE /personFields` | Required |
| [PersonField](docs/api/person_field.html) | `update` | `PUT /personFields/{id}` | Required |
| [Pipeline](docs/api/pipeline.html) | `list` | `GET /pipelines/{id}/deals` | Required |
| [Pipeline](docs/api/pipeline.html) | `load` | `GET /pipelines/{id}/conversion_statistics` | Required |
| [Pipeline](docs/api/pipeline.html) | `load` | `GET /pipelines/{id}/movement_statistics` | Required |
| [Product](docs/api/product.html) | `create` | `POST /products/{id}/followers` | Required |
| [Product](docs/api/product.html) | `list` | `GET /products/{id}/deals` | Required |
| [Product](docs/api/product.html) | `list` | `GET /products/{id}/files` | Required |
| [Product](docs/api/product.html) | `list` | `GET /products/{id}/followers` | Required |
| [Product](docs/api/product.html) | `list` | `GET /products/{id}/permittedUsers` | Required |
| [Product](docs/api/product.html) | `remove` | `DELETE /products/{id}/followers/{follower_id}` | Required |
| [ProductField](docs/api/product_field.html) | `create` | `POST /productFields` | Required |
| [ProductField](docs/api/product_field.html) | `list` | `GET /productFields` | Required |
| [ProductField](docs/api/product_field.html) | `load` | `GET /productFields/{id}` | Required |
| [ProductField](docs/api/product_field.html) | `remove` | `DELETE /productFields/{id}` | Required |
| [ProductField](docs/api/product_field.html) | `remove` | `DELETE /productFields` | Required |
| [ProductField](docs/api/product_field.html) | `update` | `PUT /productFields/{id}` | Required |
| [Project](docs/api/project.html) | `create` | `POST /projects/{id}/archive` | Required |
| [Project](docs/api/project.html) | `create` | `POST /projects` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects/{id}/activities` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects/{id}/groups` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects/{id}/plan` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects/{id}/tasks` | Required |
| [Project](docs/api/project.html) | `load` | `GET /projects/{id}` | Required |
| [Project](docs/api/project.html) | `remove` | `DELETE /projects/{id}` | Required |
| [Project](docs/api/project.html) | `update` | `PUT /projects/{id}/plan/activities/{activityId}` | Required |
| [Project](docs/api/project.html) | `update` | `PUT /projects/{id}/plan/tasks/{taskId}` | Required |
| [Project](docs/api/project.html) | `update` | `PUT /projects/{id}` | Required |
| [ProjectBoard](docs/api/project_board.html) | `list` | `GET /projects/boards` | Required |
| [ProjectBoard](docs/api/project_board.html) | `load` | `GET /projects/boards/{id}` | Required |
| [ProjectPhase](docs/api/project_phase.html) | `list` | `GET /projects/phases` | Required |
| [ProjectPhase](docs/api/project_phase.html) | `load` | `GET /projects/phases/{id}` | Required |
| [ProjectTemplate](docs/api/project_template.html) | `list` | `GET /projectTemplates` | Required |
| [ProjectTemplate](docs/api/project_template.html) | `load` | `GET /projectTemplates/{id}` | Required |
| [Recent](docs/api/recent.html) | `list` | `GET /recents` | Required |
| [Role](docs/api/role.html) | `create` | `POST /roles/{id}/assignments` | Required |
| [Role](docs/api/role.html) | `create` | `POST /roles/{id}/settings` | Required |
| [Role](docs/api/role.html) | `create` | `POST /roles` | Required |
| [Role](docs/api/role.html) | `list` | `GET /roles/{id}/assignments` | Required |
| [Role](docs/api/role.html) | `list` | `GET /roles` | Required |
| [Role](docs/api/role.html) | `load` | `GET /roles/{id}/pipelines` | Required |
| [Role](docs/api/role.html) | `load` | `GET /roles/{id}` | Required |
| [Role](docs/api/role.html) | `load` | `GET /roles/{id}/settings` | Required |
| [Role](docs/api/role.html) | `remove` | `DELETE /roles/{id}` | Required |
| [Role](docs/api/role.html) | `remove` | `DELETE /roles/{id}/assignments` | Required |
| [Role](docs/api/role.html) | `update` | `PUT /roles/{id}` | Required |
| [Role](docs/api/role.html) | `update` | `PUT /roles/{id}/pipelines` | Required |
| [Stage](docs/api/stage.html) | `list` | `GET /stages/{id}/deals` | Required |
| [Task](docs/api/task.html) | `create` | `POST /tasks` | Required |
| [Task](docs/api/task.html) | `list` | `GET /tasks` | Required |
| [Task](docs/api/task.html) | `load` | `GET /tasks/{id}` | Required |
| [Task](docs/api/task.html) | `remove` | `DELETE /tasks/{id}` | Required |
| [Task](docs/api/task.html) | `update` | `PUT /tasks/{id}` | Required |
| [User](docs/api/user.html) | `create` | `POST /users` | Required |
| [User](docs/api/user.html) | `list` | `GET /users/{id}/roleAssignments` | Required |
| [User](docs/api/user.html) | `list` | `GET /users/find` | Required |
| [User](docs/api/user.html) | `list` | `GET /users/{id}/followers` | Required |
| [User](docs/api/user.html) | `list` | `GET /users` | Required |
| [User](docs/api/user.html) | `load` | `GET /users/{id}` | Required |
| [User](docs/api/user.html) | `load` | `GET /users/{id}/permissions` | Required |
| [User](docs/api/user.html) | `load` | `GET /users/{id}/roleSettings` | Required |
| [User](docs/api/user.html) | `load` | `GET /users/me` | Required |
| [User](docs/api/user.html) | `update` | `PUT /users/{id}` | Required |
| [UserConnection](docs/api/user_connection.html) | `load` | `GET /userConnections` | Required |
| [UserSetting](docs/api/user_setting.html) | `load` | `GET /userSettings` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `list` | `GET /webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /webhooks/{id}` | Required |

## Connect to the API

- API server: `https://api.pipedrive.com/v1`

The default credential is sent in the `Authorization` header with the `Basic` prefix.

Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic &lt;base64(client_id:client_secret)&gt;`.

For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `pipedrive_list`: List records for an entity. Supported entities: `activity_field`, `activity_type`, `billing`, `call_log`, `currency`, `deal`, `deal_field`, `file`, `filter`, `lead`, `lead_field`, `lead_label`, `lead_source`, `legacy_team`, `mailbox`, `note`, `note_field`, `organization`, `organization_field`, `organization_relationship`, `permission_set`, `person`, `person_field`, `pipeline`, `product`, `product_field`, `project`, `project_board`, `project_phase`, `project_template`, `recent`, `role`, `stage`, `task`, `user`, `webhook`.
- `pipedrive_load`: Load one record for an entity. Supported entities: `call_log`, `deal`, `deal_field`, `file`, `filter`, `goal`, `lead`, `legacy_team`, `mailbox`, `note`, `oauth`, `organization_field`, `organization_relationship`, `permission_set`, `person_field`, `pipeline`, `product_field`, `project`, `project_board`, `project_phase`, `project_template`, `role`, `task`, `user`, `user_connection`, `user_setting`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

