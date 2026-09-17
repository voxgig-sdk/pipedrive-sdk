# Pipedrive Lua SDK



The Lua SDK for the Pipedrive API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:ActivityField()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/pipedrive-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("pipedrive_sdk")

local client = sdk.new({
  apikey = os.getenv("PIPEDRIVE_APIKEY"),
})
```

### 2. List activityfield records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local activityfields, err = client:ActivityField():list()
if err then error(err) end

for _, item in ipairs(activityfields) do
  print(item["additional_data"])
end
```

### 3. Load a deal

Deal is nested under amount, so provide the `amount`.

```lua
local deal, err = client:Deal():load({ amount = 1, field_key = "example_field_key", interval = "example_interval", start_date = "example_start_date" })
if err then error(err) end
print(deal)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local mailboxs, err = client:Mailbox():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Mailbox():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
PIPEDRIVE_TEST_LIVE=TRUE
PIPEDRIVE_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### PipedriveSDK

```lua
local sdk = require("pipedrive_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### PipedriveSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `ActivityField` | `(data) -> ActivityFieldEntity` | Create an ActivityField entity instance. |
| `ActivityType` | `(data) -> ActivityTypeEntity` | Create an ActivityType entity instance. |
| `Billing` | `(data) -> BillingEntity` | Create a Billing entity instance. |
| `CallLog` | `(data) -> CallLogEntity` | Create a CallLog entity instance. |
| `Channel` | `(data) -> ChannelEntity` | Create a Channel entity instance. |
| `Currency` | `(data) -> CurrencyEntity` | Create a Currency entity instance. |
| `Deal` | `(data) -> DealEntity` | Create a Deal entity instance. |
| `DealField` | `(data) -> DealFieldEntity` | Create a DealField entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Filter` | `(data) -> FilterEntity` | Create a Filter entity instance. |
| `Goal` | `(data) -> GoalEntity` | Create a Goal entity instance. |
| `Lead` | `(data) -> LeadEntity` | Create a Lead entity instance. |
| `LeadField` | `(data) -> LeadFieldEntity` | Create a LeadField entity instance. |
| `LeadLabel` | `(data) -> LeadLabelEntity` | Create a LeadLabel entity instance. |
| `LeadSource` | `(data) -> LeadSourceEntity` | Create a LeadSource entity instance. |
| `LegacyTeam` | `(data) -> LegacyTeamEntity` | Create a LegacyTeam entity instance. |
| `Mailbox` | `(data) -> MailboxEntity` | Create a Mailbox entity instance. |
| `Meeting` | `(data) -> MeetingEntity` | Create a Meeting entity instance. |
| `Note` | `(data) -> NoteEntity` | Create a Note entity instance. |
| `NoteField` | `(data) -> NoteFieldEntity` | Create a NoteField entity instance. |
| `Oauth` | `(data) -> OauthEntity` | Create an Oauth entity instance. |
| `Organization` | `(data) -> OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationField` | `(data) -> OrganizationFieldEntity` | Create an OrganizationField entity instance. |
| `OrganizationRelationship` | `(data) -> OrganizationRelationshipEntity` | Create an OrganizationRelationship entity instance. |
| `PermissionSet` | `(data) -> PermissionSetEntity` | Create a PermissionSet entity instance. |
| `Person` | `(data) -> PersonEntity` | Create a Person entity instance. |
| `PersonField` | `(data) -> PersonFieldEntity` | Create a PersonField entity instance. |
| `Pipeline` | `(data) -> PipelineEntity` | Create a Pipeline entity instance. |
| `Product` | `(data) -> ProductEntity` | Create a Product entity instance. |
| `ProductField` | `(data) -> ProductFieldEntity` | Create a ProductField entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |
| `ProjectBoard` | `(data) -> ProjectBoardEntity` | Create a ProjectBoard entity instance. |
| `ProjectPhase` | `(data) -> ProjectPhaseEntity` | Create a ProjectPhase entity instance. |
| `ProjectTemplate` | `(data) -> ProjectTemplateEntity` | Create a ProjectTemplate entity instance. |
| `Recent` | `(data) -> RecentEntity` | Create a Recent entity instance. |
| `Role` | `(data) -> RoleEntity` | Create a Role entity instance. |
| `Stage` | `(data) -> StageEntity` | Create a Stage entity instance. |
| `Task` | `(data) -> TaskEntity` | Create a Task entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserConnection` | `(data) -> UserConnectionEntity` | Create an UserConnection entity instance. |
| `UserSetting` | `(data) -> UserSettingEntity` | Create an UserSetting entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local call_log, err = client:CallLog():load({ id = "example_id" })
    if err then error(err) end
    -- call_log is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### ActivityField

| Field | Description |
| --- | --- |
| `additional_data` | The additional data of the list |
| `data` |  |
| `success` | If the response is successful or not |

Operations: List.

API path: `/activityFields`

#### ActivityType

| Field | Description |
| --- | --- |
| `color` | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | The array of activity types |
| `icon_key` | Icon graphic to use for representing this activity type |
| `id` |  |
| `name` | The name of the activity type |
| `order_nr` | An order number for this activity type. |
| `success` | If the response is successful or not |

Operations: Create, List, Remove, Update.

API path: `/activityTypes`

#### Billing

| Field | Description |
| --- | --- |
| `data` | An array of add-ons that the company has. |
| `success` | If the response is successful or not |

Operations: List.

API path: `/billing/subscriptions/addons`

#### CallLog

| Field | Description |
| --- | --- |
| `activity_id` | If specified, this activity will be converted into a call log, with the information provided. |
| `company_id` | The company ID of the owner of the call log |
| `deal_id` | The ID of the deal this call is associated with. |
| `duration` | The duration of the call in seconds |
| `end_time` | The date and time of the end of the call in UTC. |
| `from_phone_number` | The number that made the call |
| `has_recording` | If the call log has an audio recording attached, the value should be true |
| `id` | The call log ID, generated when the call log was created |
| `lead_id` | The ID of the lead in the UUID format this call is associated with. |
| `note` | The note for the call log in HTML format |
| `org_id` | The ID of the organization this call is associated with |
| `outcome` | Describes the outcome of the call |
| `person_id` | The ID of the person this call is associated with |
| `start_time` | The date and time of the start of the call in UTC. |
| `subject` | The name of the activity this call is attached to |
| `to_phone_number` | The number called |
| `user_id` | The ID of the owner of the call log. |

Operations: Create, List, Load, Remove.

API path: `/callLogs/{id}/recordings`

#### Channel

| Field | Description |
| --- | --- |
| `attachments` | The list of attachments available in the message |
| `avatar_url` | The URL for an icon that represents your channel |
| `channel_id` | The channel ID as in the provider |
| `conversation_id` | The ID of the conversation |
| `conversation_link` | A URL that can open the conversation in the provider's side |
| `created_at` | The date and time when your channel was created in the API |
| `id` | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `marketplace_client_id` | The client_id of your app in Pipedrive marketplace |
| `message` | The body of the message |
| `name` | The name of the channel |
| `pd_company_id` | The ID of the user's company in Pipedrive |
| `pd_user_id` | The ID of the user in Pipedrive |
| `provider_channel_id` | The channel ID you specified while creating the channel |
| `provider_type` | Value of the provider_type sent to this endpoint |
| `reply_by` | The date and time when the message can no longer receive a reply, in UTC. |
| `sender_id` | The ID of the provider's user that sent the message |
| `status` | The status of the message |
| `template_support` | Value of the template_support sent to this endpoint |

Operations: Create, Remove.

API path: `/channels`

#### Currency

| Field | Description |
| --- | --- |
| `active_flag` | Whether the currency is active or not |
| `code` | The code of the currency |
| `decimal_points` | The amount of decimal points of the currency |
| `id` | The ID of the currency |
| `is_custom_flag` | Whether the currency is a custom one or not |
| `name` | The name of the currency |
| `symbol` | The symbol of the currency |

Operations: List.

API path: `/currencies`

#### Deal

| Field | Description |
| --- | --- |
| `deals` |  |
| `id` |  |
| `period_end` | The end date and time of the period |
| `period_start` | The start date and time of the period |
| `total_count` | The total number of deals |
| `total_currency_converted_value` | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | The total weighted value of deals formatted with the company default currency. |
| `totals` | The total values of deals for the given period |
| `values_total` | The total values of the deals grouped by deal currency |
| `weighted_values_total` | The total weighted values of the deals grouped by deal currency. |

Operations: Create, List, Load, Remove, Update.

API path: `/deals/{id}/duplicate`

#### DealField

| Field | Description |
| --- | --- |
| `add_visible_flag` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | The additional data of the list |
| `data` |  |
| `id` |  |
| `name` | The name of the field |
| `options` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/dealFields`

#### File

| Field | Description |
| --- | --- |
| `active_flag` | Whether the user is active or not. |
| `activity_id` | The ID of the activity to associate the file with |
| `add_time` | The date and time when the file was added/created. |
| `cid` | The ID of the inline attachment |
| `deal_id` | The ID of the deal to associate the file with |
| `deal_name` | The name of the deal associated with the file |
| `description` | The description of the file |
| `file_name` | The original name of the file |
| `file_size` | The size of the file |
| `id` | The ID of the file |
| `inline_flag` | Whether the file was uploaded as inline or not |
| `lead_id` | The ID of the lead to associate the file with |
| `lead_name` | The name of the lead associated with the file |
| `mail_message_id` | The ID of the mail message to associate the file with |
| `mail_template_id` | The ID of the mail template to associate the file with |
| `name` | The visible name of the file |
| `org_id` | The ID of the organization to associate the file with |
| `org_name` | The name of the organization associated with the file |
| `person_id` | The ID of the person to associate the file with |
| `person_name` | The name of the person associated with the file |
| `product_id` | The ID of the product to associate the file with |
| `product_name` | The name of the product associated with the file |
| `project_id` | The ID of the project to associate the file with |
| `project_name` | The name of the project associated with the file |
| `remote_id` | The ID of the remote item |
| `remote_location` | The location type to send the file to. |
| `s3_bucket` | The location of the cloud storage |
| `update_time` | The last updated date and time of the file. |
| `url` | The URL of the download file |
| `user_id` | The ID of the user to associate the file with |

Operations: Create, List, Load, Remove, Update.

API path: `/files`

#### Filter

| Field | Description |
| --- | --- |
| `conditions` | The conditions of the filter as a JSON object. |
| `data` | The filter object including conditions |
| `id` |  |
| `name` | The name of the filter |
| `success` | If the response is successful or not |
| `type` | The type of filter to create |

Operations: Create, List, Load, Remove, Update.

API path: `/filters`

#### Goal

| Field | Description |
| --- | --- |
| `assignee` | Who this goal is assigned to. |
| `duration` | The date when the goal starts and ends. |
| `expected_outcome` | The expected outcome of the goal. |
| `goal` |  |
| `id` |  |
| `interval` | The interval of the goal |
| `title` | The title of the goal |
| `type` | The type of the goal. |

Operations: Create, Load, Remove, Update.

API path: `/goals`

#### Lead

| Field | Description |
| --- | --- |
| `add_time` | The date and time of when the lead was created. |
| `cc_email` | The BCC email of the lead |
| `channel` | The ID of your Marketing channel this Lead was created from. |
| `channel_id` | The optional ID to further distinguish the Marketing channel. |
| `creator_id` | The ID of the user who created the lead |
| `expected_close_date` | The date of when the deal which will be created from the lead is expected to be closed. |
| `id` | The unique ID of the lead in the UUID format |
| `is_archived` | A flag indicating whether the lead is archived or not |
| `label_ids` | The IDs of the lead labels which are associated with the lead |
| `next_activity_id` | The ID of the next activity associated with the lead |
| `organization_id` | The ID of an organization which this lead is linked to |
| `origin` | The way this Lead was created. |
| `origin_id` | The optional ID to further distinguish the origin of the lead - e.g. |
| `owner_id` | The ID of the user who owns the lead |
| `person_id` | The ID of a person which this lead is linked to |
| `source_deal_id` | The ID of the deal if the lead was converted from a deal. |
| `source_name` | Defines where the lead comes from. |
| `title` | The title of the lead |
| `update_time` | The date and time of when the lead was last updated. |
| `value` | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | The visibility of the lead. |
| `was_seen` | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

Operations: Create, List, Load, Remove, Update.

API path: `/leads`

#### LeadField

| Field | Description |
| --- | --- |
| `additional_data` | The additional data of the list |
| `data` |  |
| `success` | If the response is successful or not |

Operations: List.

API path: `/leadFields`

#### LeadLabel

| Field | Description |
| --- | --- |
| `add_time` | The date and time of when the lead label was created. |
| `color` | The color of the label. |
| `id` | The unique ID of the lead label |
| `name` | The name of the lead label |
| `update_time` | The date and time of when the lead label was last updated. |

Operations: Create, List, Remove, Update.

API path: `/leadLabels`

#### LeadSource

| Field | Description |
| --- | --- |
| `name` | The unique name of a lead source |

Operations: List.

API path: `/leadSources`

#### LegacyTeam

| Field | Description |
| --- | --- |
| `data` |  |
| `description` | The team description |
| `id` |  |
| `manager_id` | The team manager ID |
| `name` | The team name |
| `success` | If the response is successful or not |
| `users` | The list of user IDs |

Operations: Create, List, Load, Remove, Update.

API path: `/legacyTeams/{id}/users`

#### Mailbox

| Field | Description |
| --- | --- |
| `data` | The mail thread object |
| `id` |  |
| `service` | The service name of the response. |
| `statusCode` | The email service specific status code and it is returned through the response body. |
| `statusText` | The status text of the response. |
| `success` | If the response is successful or not |

Operations: List, Load, Remove, Update.

API path: `/mailbox/mailThreads`

#### Meeting

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Remove.

API path: `/meetings/userProviderLinks`

#### Note

| Field | Description |
| --- | --- |
| `active_flag` | Whether the note is active or deleted |
| `add_time` | The creation date and time of the note |
| `company_id` | The ID of the company |
| `content` | The content of the note in HTML format. |
| `deal` |  |
| `deal_id` | The ID of the deal the note is attached to |
| `id` | The ID of the note |
| `last_update_user_id` | The ID of the user who last updated the note |
| `lead_id` | The ID of the lead the note is attached to |
| `object_id` | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | The type of object that the comment is attached to, will be "note" |
| `org_id` | The ID of the organization the note is attached to |
| `organization` | The organization the note is attached to |
| `person` | The person the note is attached to |
| `person_id` | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | If true, the results are filtered by note to task pinning state |
| `project` | The project the note is attached to |
| `project_id` | The ID of the project the note is attached to |
| `task` | The task the note is attached to |
| `task_id` | The ID of the task the note is attached to |
| `update_time` | The creation date and time of the note |
| `updater_id` | The ID of the user who last updated the comment |
| `user` | The user who created the note |
| `user_id` | The ID of the user who created the comment |
| `uuid` | The ID of the note |

Operations: Create, List, Load, Remove, Update.

API path: `/notes/{id}/comments`

#### NoteField

| Field | Description |
| --- | --- |
| `additional_data` | The additional data of the list |
| `data` |  |
| `success` | If the response is successful or not |

Operations: List.

API path: `/noteFields`

#### Oauth

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/oauth/token`

#### Organization

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, List, Remove, Update.

API path: `/organizations/{id}/followers`

#### OrganizationField

| Field | Description |
| --- | --- |
| `add_visible_flag` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | The additional data of the list |
| `data` |  |
| `id` |  |
| `name` | The name of the field |
| `options` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/organizationFields`

#### OrganizationRelationship

| Field | Description |
| --- | --- |
| `additional_data` | The additional data of the list |
| `data` | The array of organization relationships |
| `id` |  |
| `org_id` | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | The linked organization in the relationship. |
| `rel_owner_org_id` | The owner of the relationship. |
| `related_objects` |  |
| `success` | If the response is successful or not |
| `type` | The type of organization relationship |

Operations: Create, List, Load, Remove, Update.

API path: `/organizationRelationships`

#### PermissionSet

| Field | Description |
| --- | --- |
| `app` | The app that permission set belongs to |
| `assignment_count` | The number of users assigned to this permission set |
| `contents` | A permission assigned to this permission set |
| `data` | The array of permission set |
| `description` | The description of the permission set |
| `id` | The ID of user permission set |
| `name` | The name of the permission set |
| `success` | If the response is successful or not |
| `type` | The type of permission set |

Operations: List, Load.

API path: `/permissionSets/{id}/assignments`

#### Person

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, List, Remove, Update.

API path: `/persons/{id}/followers`

#### PersonField

| Field | Description |
| --- | --- |
| `add_visible_flag` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | The additional data of the list |
| `data` |  |
| `id` |  |
| `name` | The name of the field |
| `options` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/personFields`

#### Pipeline

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List, Load.

API path: `/pipelines/{id}/deals`

#### Product

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, List, Remove.

API path: `/products/{id}/followers`

#### ProductField

| Field | Description |
| --- | --- |
| `data` |  |
| `field_type` | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` |  |
| `name` | The name of the field |
| `options` | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `success` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/productFields`

#### Project

| Field | Description |
| --- | --- |
| `additional_data` |  |
| `data` |  |
| `group_id` | The ID of a group on a project board |
| `id` | The ID of the project, generated when the task was created |
| `phase_id` | The ID of a phase on a project board |
| `success` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/projects/{id}/archive`

#### ProjectBoard

| Field | Description |
| --- | --- |
| `add_time` | The creation date and time of the board in UTC. |
| `additional_data` |  |
| `data` |  |
| `id` | The ID of the project board |
| `name` | Name of a project board |
| `order_nr` | The order of a board |
| `success` |  |
| `update_time` | The update date and time of the board in UTC. |

Operations: List, Load.

API path: `/projects/boards`

#### ProjectPhase

| Field | Description |
| --- | --- |
| `add_time` | The creation date and time of the board in UTC. |
| `additional_data` |  |
| `board_id` | The ID of the project board this phase is linked to |
| `data` |  |
| `id` | The ID of the project phase |
| `name` | Name of a project phase |
| `order_nr` | The order of a phase |
| `success` |  |
| `update_time` | The update date and time of the board in UTC. |

Operations: List, Load.

API path: `/projects/phases`

#### ProjectTemplate

| Field | Description |
| --- | --- |
| `add_time` | The creation date and time of the template in UTC. |
| `additional_data` |  |
| `data` |  |
| `description` | The description of a template |
| `id` | The ID of a template |
| `owner_id` | The ID of a template owner |
| `projects_board_id` | The ID of the project board this template is associated with |
| `success` |  |
| `title` | The title of a template |
| `update_time` | The update date and time of the template in UTC. |

Operations: List, Load.

API path: `/projectTemplates`

#### Recent

| Field | Description |
| --- | --- |
| `additional_data` |  |
| `data` |  |
| `success` | If the response is successful or not |

Operations: List.

API path: `/recents`

#### Role

| Field | Description |
| --- | --- |
| `additional_data` | The additional data in the role |
| `data` | The details of the sub-role |
| `id` |  |
| `name` | The name of the role |
| `parent_role_id` | The ID of the parent role |
| `success` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/roles/{id}/assignments`

#### Stage

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/stages/{id}/deals`

#### Task

| Field | Description |
| --- | --- |
| `additional_data` |  |
| `data` |  |
| `id` | The ID of the task, generated when the task was created |
| `success` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/tasks`

#### User

| Field | Description |
| --- | --- |
| `access` | The access given to the user. |
| `active_flag` | Whether the user is active or not. |
| `data` |  |
| `email` | The email of the user |
| `id` |  |
| `success` | If the response is successful or not |

Operations: Create, List, Load, Update.

API path: `/users`

#### UserConnection

| Field | Description |
| --- | --- |
| `data` | The object of UserConnections |
| `success` | If the response is successful or not |

Operations: Load.

API path: `/userConnections`

#### UserSetting

| Field | Description |
| --- | --- |
| `data` |  |
| `success` | If the response is successful or not |

Operations: Load.

API path: `/userSettings`

#### Webhook

| Field | Description |
| --- | --- |
| `data` | The array of Webhooks |
| `event_action` | The type of action to receive notifications about. |
| `event_object` | The type of object to receive notifications about. |
| `http_auth_password` | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `http_auth_user` | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `id` |  |
| `name` | The webhook's name |
| `subscription_url` | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `user_id` | The ID of the user that this webhook will be authorized with. |
| `version` | The webhook's version. |

Operations: Create, List, Remove.

API path: `/webhooks`



## Entities


### ActivityField

Create an instance: `local activity_field = client:ActivityField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` | The additional data of the list |
| `data` | `table` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```lua
local activity_fields, err = client:ActivityField():list()
```


### ActivityType

Create an instance: `local activity_type = client:ActivityType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `string` | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `table` | The array of activity types |
| `icon_key` | `string` | Icon graphic to use for representing this activity type |
| `id` | `string` |  |
| `name` | `string` | The name of the activity type |
| `order_nr` | `number` | An order number for this activity type. |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```lua
local activity_types, err = client:ActivityType():list()
```

#### Example: Create

```lua
local activity_type, err = client:ActivityType():create({
  icon_key = "example_icon_key", -- string
  name = "example_name", -- string
})
```


### Billing

Create an instance: `local billing = client:Billing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | An array of add-ons that the company has. |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```lua
local billings, err = client:Billing():list()
```


### CallLog

Create an instance: `local call_log = client:CallLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_id` | `number` | If specified, this activity will be converted into a call log, with the information provided. |
| `company_id` | `number` | The company ID of the owner of the call log |
| `deal_id` | `number` | The ID of the deal this call is associated with. |
| `duration` | `string` | The duration of the call in seconds |
| `end_time` | `string` | The date and time of the end of the call in UTC. |
| `from_phone_number` | `string` | The number that made the call |
| `has_recording` | `boolean` | If the call log has an audio recording attached, the value should be true |
| `id` | `string` | The call log ID, generated when the call log was created |
| `lead_id` | `string` | The ID of the lead in the UUID format this call is associated with. |
| `note` | `string` | The note for the call log in HTML format |
| `org_id` | `number` | The ID of the organization this call is associated with |
| `outcome` | `string` | Describes the outcome of the call |
| `person_id` | `number` | The ID of the person this call is associated with |
| `start_time` | `string` | The date and time of the start of the call in UTC. |
| `subject` | `string` | The name of the activity this call is attached to |
| `to_phone_number` | `string` | The number called |
| `user_id` | `number` | The ID of the owner of the call log. |

#### Example: Load

```lua
local call_log, err = client:CallLog():load({ id = "call_log_id" })
```

#### Example: List

```lua
local call_logs, err = client:CallLog():list()
```

#### Example: Create

```lua
local call_log, err = client:CallLog():create({
  end_time = "example_end_time", -- string
  outcome = "example_outcome", -- string
  start_time = "example_start_time", -- string
  to_phone_number = "example_to_phone_number", -- string
})
```


### Channel

Create an instance: `local channel = client:Channel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `table` | The list of attachments available in the message |
| `avatar_url` | `string` | The URL for an icon that represents your channel |
| `channel_id` | `string` | The channel ID as in the provider |
| `conversation_id` | `string` | The ID of the conversation |
| `conversation_link` | `string` | A URL that can open the conversation in the provider's side |
| `created_at` | `string` | The date and time when your channel was created in the API |
| `id` | `string` | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `marketplace_client_id` | `string` | The client_id of your app in Pipedrive marketplace |
| `message` | `string` | The body of the message |
| `name` | `string` | The name of the channel |
| `pd_company_id` | `number` | The ID of the user's company in Pipedrive |
| `pd_user_id` | `number` | The ID of the user in Pipedrive |
| `provider_channel_id` | `string` | The channel ID you specified while creating the channel |
| `provider_type` | `string` | Value of the provider_type sent to this endpoint |
| `reply_by` | `string` | The date and time when the message can no longer receive a reply, in UTC. |
| `sender_id` | `string` | The ID of the provider's user that sent the message |
| `status` | `string` | The status of the message |
| `template_support` | `boolean` | Value of the template_support sent to this endpoint |

#### Example: Create

```lua
local channel, err = client:Channel():create({
  channel_id = "example_channel_id", -- string
  conversation_id = "example_conversation_id", -- string
  message = "example_message", -- string
  sender_id = "example_sender_id", -- string
  status = "example_status", -- string
})
```


### Currency

Create an instance: `local currency = client:Currency(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `boolean` | Whether the currency is active or not |
| `code` | `string` | The code of the currency |
| `decimal_points` | `number` | The amount of decimal points of the currency |
| `id` | `number` | The ID of the currency |
| `is_custom_flag` | `boolean` | Whether the currency is a custom one or not |
| `name` | `string` | The name of the currency |
| `symbol` | `string` | The symbol of the currency |

#### Example: List

```lua
local currencys, err = client:Currency():list()
```


### Deal

Create an instance: `local deal = client:Deal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deals` | `table` |  |
| `id` | `string` |  |
| `period_end` | `string` | The end date and time of the period |
| `period_start` | `string` | The start date and time of the period |
| `total_count` | `number` | The total number of deals |
| `total_currency_converted_value` | `number` | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `string` | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `number` | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `string` | The total weighted value of deals formatted with the company default currency. |
| `totals` | `table` | The total values of deals for the given period |
| `values_total` | `table` | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `table` | The total weighted values of the deals grouped by deal currency. |

#### Example: Load

```lua
local deal, err = client:Deal():load({ amount = 1, field_key = "field_key", interval = "interval", start_date = "start_date" })
```

#### Example: List

```lua
local deals, err = client:Deal():list()
```

#### Example: Create

```lua
local deal, err = client:Deal():create({
  id = 1, -- number
})
```


### DealField

Create an instance: `local deal_field = client:DealField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `boolean` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `table` | The additional data of the list |
| `data` | `table` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `table` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local deal_field, err = client:DealField():load({ id = 1 })
```

#### Example: List

```lua
local deal_fields, err = client:DealField():list()
```

#### Example: Create

```lua
local deal_field, err = client:DealField():create({
})
```


### File

Create an instance: `local file = client:File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `boolean` | Whether the user is active or not. |
| `activity_id` | `number` | The ID of the activity to associate the file with |
| `add_time` | `string` | The date and time when the file was added/created. |
| `cid` | `string` | The ID of the inline attachment |
| `deal_id` | `number` | The ID of the deal to associate the file with |
| `deal_name` | `string` | The name of the deal associated with the file |
| `description` | `string` | The description of the file |
| `file_name` | `string` | The original name of the file |
| `file_size` | `number` | The size of the file |
| `id` | `number` | The ID of the file |
| `inline_flag` | `boolean` | Whether the file was uploaded as inline or not |
| `lead_id` | `string` | The ID of the lead to associate the file with |
| `lead_name` | `string` | The name of the lead associated with the file |
| `mail_message_id` | `string` | The ID of the mail message to associate the file with |
| `mail_template_id` | `string` | The ID of the mail template to associate the file with |
| `name` | `string` | The visible name of the file |
| `org_id` | `number` | The ID of the organization to associate the file with |
| `org_name` | `string` | The name of the organization associated with the file |
| `person_id` | `number` | The ID of the person to associate the file with |
| `person_name` | `string` | The name of the person associated with the file |
| `product_id` | `number` | The ID of the product to associate the file with |
| `product_name` | `string` | The name of the product associated with the file |
| `project_id` | `number` | The ID of the project to associate the file with |
| `project_name` | `string` | The name of the project associated with the file |
| `remote_id` | `string` | The ID of the remote item |
| `remote_location` | `string` | The location type to send the file to. |
| `s3_bucket` | `string` | The location of the cloud storage |
| `update_time` | `string` | The last updated date and time of the file. |
| `url` | `string` | The URL of the download file |
| `user_id` | `number` | The ID of the user to associate the file with |

#### Example: Load

```lua
local file, err = client:File():load({ id = 1 })
```

#### Example: List

```lua
local files, err = client:File():list()
```

#### Example: Create

```lua
local file, err = client:File():create({
})
```


### Filter

Create an instance: `local filter = client:Filter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `table` | The conditions of the filter as a JSON object. |
| `data` | `table` | The filter object including conditions |
| `id` | `string` |  |
| `name` | `string` | The name of the filter |
| `success` | `boolean` | If the response is successful or not |
| `type` | `string` | The type of filter to create |

#### Example: Load

```lua
local filter, err = client:Filter():load({ id = 1 })
```

#### Example: List

```lua
local filters, err = client:Filter():list()
```

#### Example: Create

```lua
local filter, err = client:Filter():create({
  conditions = {}, -- table
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### Goal

Create an instance: `local goal = client:Goal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `table` | Who this goal is assigned to. |
| `duration` | `table` | The date when the goal starts and ends. |
| `expected_outcome` | `table` | The expected outcome of the goal. |
| `goal` | `table` |  |
| `id` | `string` |  |
| `interval` | `string` | The interval of the goal |
| `title` | `string` | The title of the goal |
| `type` | `table` | The type of the goal. |

#### Example: Load

```lua
local goal, err = client:Goal():load()
```

#### Example: Create

```lua
local goal, err = client:Goal():create({
  assignee = {}, -- table
  duration = {}, -- table
  expected_outcome = {}, -- table
  interval = "example_interval", -- string
  type = {}, -- table
})
```


### Lead

Create an instance: `local lead = client:Lead(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The date and time of when the lead was created. |
| `cc_email` | `string` | The BCC email of the lead |
| `channel` | `number` | The ID of your Marketing channel this Lead was created from. |
| `channel_id` | `string` | The optional ID to further distinguish the Marketing channel. |
| `creator_id` | `number` | The ID of the user who created the lead |
| `expected_close_date` | `string` | The date of when the deal which will be created from the lead is expected to be closed. |
| `id` | `string` | The unique ID of the lead in the UUID format |
| `is_archived` | `boolean` | A flag indicating whether the lead is archived or not |
| `label_ids` | `table` | The IDs of the lead labels which are associated with the lead |
| `next_activity_id` | `number` | The ID of the next activity associated with the lead |
| `organization_id` | `number` | The ID of an organization which this lead is linked to |
| `origin` | `string` | The way this Lead was created. |
| `origin_id` | `string` | The optional ID to further distinguish the origin of the lead - e.g. |
| `owner_id` | `number` | The ID of the user who owns the lead |
| `person_id` | `number` | The ID of a person which this lead is linked to |
| `source_deal_id` | `number` | The ID of the deal if the lead was converted from a deal. |
| `source_name` | `string` | Defines where the lead comes from. |
| `title` | `string` | The title of the lead |
| `update_time` | `string` | The date and time of when the lead was last updated. |
| `value` | `table` | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | `string` | The visibility of the lead. |
| `was_seen` | `boolean` | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

#### Example: Load

```lua
local lead, err = client:Lead():load({ id = "lead_id" })
```

#### Example: List

```lua
local leads, err = client:Lead():list()
```

#### Example: Create

```lua
local lead, err = client:Lead():create({
  value = {}, -- table
})
```


### LeadField

Create an instance: `local lead_field = client:LeadField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` | The additional data of the list |
| `data` | `table` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```lua
local lead_fields, err = client:LeadField():list()
```


### LeadLabel

Create an instance: `local lead_label = client:LeadLabel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The date and time of when the lead label was created. |
| `color` | `string` | The color of the label. |
| `id` | `string` | The unique ID of the lead label |
| `name` | `string` | The name of the lead label |
| `update_time` | `string` | The date and time of when the lead label was last updated. |

#### Example: List

```lua
local lead_labels, err = client:LeadLabel():list()
```

#### Example: Create

```lua
local lead_label, err = client:LeadLabel():create({
})
```


### LeadSource

Create an instance: `local lead_source = client:LeadSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The unique name of a lead source |

#### Example: List

```lua
local lead_sources, err = client:LeadSource():list()
```


### LegacyTeam

Create an instance: `local legacy_team = client:LegacyTeam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `description` | `string` | The team description |
| `id` | `string` |  |
| `manager_id` | `number` | The team manager ID |
| `name` | `string` | The team name |
| `success` | `boolean` | If the response is successful or not |
| `users` | `table` | The list of user IDs |

#### Example: Load

```lua
local legacy_team, err = client:LegacyTeam():load({ id = 1 })
```

#### Example: List

```lua
local legacy_teams, err = client:LegacyTeam():list()
```

#### Example: Create

```lua
local legacy_team, err = client:LegacyTeam():create({
  manager_id = 1, -- number
  name = "example_name", -- string
})
```


### Mailbox

Create an instance: `local mailbox = client:Mailbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | The mail thread object |
| `id` | `string` |  |
| `service` | `string` | The service name of the response. |
| `statusCode` | `number` | The email service specific status code and it is returned through the response body. |
| `statusText` | `string` | The status text of the response. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local mailbox, err = client:Mailbox():load({ id = 1 })
```

#### Example: List

```lua
local mailboxs, err = client:Mailbox():list()
```


### Meeting

Create an instance: `local meeting = client:Meeting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```lua
local meeting, err = client:Meeting():create({
})
```


### Note

Create an instance: `local note = client:Note(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `boolean` | Whether the note is active or deleted |
| `add_time` | `string` | The creation date and time of the note |
| `company_id` | `number` | The ID of the company |
| `content` | `string` | The content of the note in HTML format. |
| `deal` | `table` |  |
| `deal_id` | `number` | The ID of the deal the note is attached to |
| `id` | `number` | The ID of the note |
| `last_update_user_id` | `number` | The ID of the user who last updated the note |
| `lead_id` | `string` | The ID of the lead the note is attached to |
| `object_id` | `string` | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `string` | The type of object that the comment is attached to, will be "note" |
| `org_id` | `number` | The ID of the organization the note is attached to |
| `organization` | `table` | The organization the note is attached to |
| `person` | `table` | The person the note is attached to |
| `person_id` | `number` | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `boolean` | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `boolean` | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `boolean` | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `boolean` | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `boolean` | If true, the results are filtered by note to task pinning state |
| `project` | `table` | The project the note is attached to |
| `project_id` | `number` | The ID of the project the note is attached to |
| `task` | `table` | The task the note is attached to |
| `task_id` | `number` | The ID of the task the note is attached to |
| `update_time` | `string` | The creation date and time of the note |
| `updater_id` | `number` | The ID of the user who last updated the comment |
| `user` | `table` | The user who created the note |
| `user_id` | `number` | The ID of the user who created the comment |
| `uuid` | `string` | The ID of the note |

#### Example: Load

```lua
local note, err = client:Note():load({ id = 1 })
```

#### Example: List

```lua
local notes, err = client:Note():list()
```

#### Example: Create

```lua
local note, err = client:Note():create({
})
```


### NoteField

Create an instance: `local note_field = client:NoteField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` | The additional data of the list |
| `data` | `table` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```lua
local note_fields, err = client:NoteField():list()
```


### Oauth

Create an instance: `local oauth = client:Oauth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local oauth, err = client:Oauth():load({ client_id = "client_id", redirect_uri = "redirect_uri" })
```

#### Example: Create

```lua
local oauth, err = client:Oauth():create({
})
```


### Organization

Create an instance: `local organization = client:Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local organizations, err = client:Organization():list()
```

#### Example: Create

```lua
local organization, err = client:Organization():create({
  id = 1, -- number
})
```


### OrganizationField

Create an instance: `local organization_field = client:OrganizationField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `boolean` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `table` | The additional data of the list |
| `data` | `table` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `table` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local organization_field, err = client:OrganizationField():load({ id = 1 })
```

#### Example: List

```lua
local organization_fields, err = client:OrganizationField():list()
```

#### Example: Create

```lua
local organization_field, err = client:OrganizationField():create({
})
```


### OrganizationRelationship

Create an instance: `local organization_relationship = client:OrganizationRelationship(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` | The additional data of the list |
| `data` | `any` | The array of organization relationships |
| `id` | `string` |  |
| `org_id` | `number` | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `number` | The linked organization in the relationship. |
| `rel_owner_org_id` | `number` | The owner of the relationship. |
| `related_objects` | `table` |  |
| `success` | `boolean` | If the response is successful or not |
| `type` | `string` | The type of organization relationship |

#### Example: Load

```lua
local organization_relationship, err = client:OrganizationRelationship():load({ id = 1 })
```

#### Example: List

```lua
local organization_relationships, err = client:OrganizationRelationship():list()
```

#### Example: Create

```lua
local organization_relationship, err = client:OrganizationRelationship():create({
  rel_linked_org_id = 1, -- number
  rel_owner_org_id = 1, -- number
  type = "example_type", -- string
})
```


### PermissionSet

Create an instance: `local permission_set = client:PermissionSet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `string` | The app that permission set belongs to |
| `assignment_count` | `number` | The number of users assigned to this permission set |
| `contents` | `table` | A permission assigned to this permission set |
| `data` | `table` | The array of permission set |
| `description` | `string` | The description of the permission set |
| `id` | `string` | The ID of user permission set |
| `name` | `string` | The name of the permission set |
| `success` | `boolean` | If the response is successful or not |
| `type` | `string` | The type of permission set |

#### Example: Load

```lua
local permission_set, err = client:PermissionSet():load({ id = "permission_set_id" })
```

#### Example: List

```lua
local permission_sets, err = client:PermissionSet():list()
```


### Person

Create an instance: `local person = client:Person(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local persons, err = client:Person():list()
```

#### Example: Create

```lua
local person, err = client:Person():create({
  id = 1, -- number
})
```


### PersonField

Create an instance: `local person_field = client:PersonField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `boolean` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `table` | The additional data of the list |
| `data` | `table` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `table` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local person_field, err = client:PersonField():load({ id = 1 })
```

#### Example: List

```lua
local person_fields, err = client:PersonField():list()
```

#### Example: Create

```lua
local person_field, err = client:PersonField():create({
})
```


### Pipeline

Create an instance: `local pipeline = client:Pipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local pipeline, err = client:Pipeline():load({ id = 1, end_date = "end_date", start_date = "start_date" })
```

#### Example: List

```lua
local pipelines, err = client:Pipeline():list()
```


### Product

Create an instance: `local product = client:Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local products, err = client:Product():list()
```

#### Example: Create

```lua
local product, err = client:Product():create({
  id = 1, -- number
})
```


### ProductField

Create an instance: `local product_field = client:ProductField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `field_type` | `string` | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `table` | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `success` | `boolean` |  |

#### Example: Load

```lua
local product_field, err = client:ProductField():load({ id = 1 })
```

#### Example: List

```lua
local product_fields, err = client:ProductField():list()
```

#### Example: Create

```lua
local product_field, err = client:ProductField():create({
  field_type = "example_field_type", -- string
  name = "example_name", -- string
})
```


### Project

Create an instance: `local project = client:Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` |  |
| `data` | `any` |  |
| `group_id` | `number` | The ID of a group on a project board |
| `id` | `number` | The ID of the project, generated when the task was created |
| `phase_id` | `number` | The ID of a phase on a project board |
| `success` | `boolean` |  |

#### Example: Load

```lua
local project, err = client:Project():load({ id = 1 })
```

#### Example: List

```lua
local projects, err = client:Project():list()
```

#### Example: Create

```lua
local project, err = client:Project():create({
})
```


### ProjectBoard

Create an instance: `local project_board = client:ProjectBoard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the board in UTC. |
| `additional_data` | `table` |  |
| `data` | `table` |  |
| `id` | `number` | The ID of the project board |
| `name` | `string` | Name of a project board |
| `order_nr` | `number` | The order of a board |
| `success` | `boolean` |  |
| `update_time` | `string` | The update date and time of the board in UTC. |

#### Example: Load

```lua
local project_board, err = client:ProjectBoard():load({ id = 1 })
```

#### Example: List

```lua
local project_boards, err = client:ProjectBoard():list()
```


### ProjectPhase

Create an instance: `local project_phase = client:ProjectPhase(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the board in UTC. |
| `additional_data` | `table` |  |
| `board_id` | `number` | The ID of the project board this phase is linked to |
| `data` | `table` |  |
| `id` | `number` | The ID of the project phase |
| `name` | `string` | Name of a project phase |
| `order_nr` | `number` | The order of a phase |
| `success` | `boolean` |  |
| `update_time` | `string` | The update date and time of the board in UTC. |

#### Example: Load

```lua
local project_phase, err = client:ProjectPhase():load({ id = 1 })
```

#### Example: List

```lua
local project_phases, err = client:ProjectPhase():list()
```


### ProjectTemplate

Create an instance: `local project_template = client:ProjectTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the template in UTC. |
| `additional_data` | `table` |  |
| `data` | `any` |  |
| `description` | `string` | The description of a template |
| `id` | `number` | The ID of a template |
| `owner_id` | `number` | The ID of a template owner |
| `projects_board_id` | `number` | The ID of the project board this template is associated with |
| `success` | `boolean` |  |
| `title` | `string` | The title of a template |
| `update_time` | `string` | The update date and time of the template in UTC. |

#### Example: Load

```lua
local project_template, err = client:ProjectTemplate():load({ id = 1 })
```

#### Example: List

```lua
local project_templates, err = client:ProjectTemplate():list()
```


### Recent

Create an instance: `local recent = client:Recent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` |  |
| `data` | `table` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```lua
local recents, err = client:Recent():list()
```


### Role

Create an instance: `local role = client:Role(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` | The additional data in the role |
| `data` | `any` | The details of the sub-role |
| `id` | `string` |  |
| `name` | `string` | The name of the role |
| `parent_role_id` | `number` | The ID of the parent role |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local role, err = client:Role():load({ id = 1 })
```

#### Example: List

```lua
local roles, err = client:Role():list()
```

#### Example: Create

```lua
local role, err = client:Role():create({
  name = "example_name", -- string
})
```


### Stage

Create an instance: `local stage = client:Stage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local stages, err = client:Stage():list()
```


### Task

Create an instance: `local task = client:Task(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `table` |  |
| `data` | `table` |  |
| `id` | `number` | The ID of the task, generated when the task was created |
| `success` | `boolean` |  |

#### Example: Load

```lua
local task, err = client:Task():load({ id = 1 })
```

#### Example: List

```lua
local tasks, err = client:Task():list()
```

#### Example: Create

```lua
local task, err = client:Task():create({
})
```


### User

Create an instance: `local user = client:User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `table` | The access given to the user. |
| `active_flag` | `boolean` | Whether the user is active or not. |
| `data` | `table` |  |
| `email` | `string` | The email of the user |
| `id` | `string` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local user, err = client:User():load({ id = 1 })
```

#### Example: List

```lua
local users, err = client:User():list()
```

#### Example: Create

```lua
local user, err = client:User():create({
  email = "example_email", -- string
})
```


### UserConnection

Create an instance: `local user_connection = client:UserConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | The object of UserConnections |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local user_connection, err = client:UserConnection():load()
```


### UserSetting

Create an instance: `local user_setting = client:UserSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```lua
local user_setting, err = client:UserSetting():load()
```


### Webhook

Create an instance: `local webhook = client:Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | The array of Webhooks |
| `event_action` | `string` | The type of action to receive notifications about. |
| `event_object` | `string` | The type of object to receive notifications about. |
| `http_auth_password` | `string` | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `http_auth_user` | `string` | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `id` | `string` |  |
| `name` | `string` | The webhook's name |
| `subscription_url` | `string` | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `user_id` | `number` | The ID of the user that this webhook will be authorized with. |
| `version` | `string` | The webhook's version. |

#### Example: List

```lua
local webhooks, err = client:Webhook():list()
```

#### Example: Create

```lua
local webhook, err = client:Webhook():create({
  event_action = "example_event_action", -- string
  event_object = "example_event_object", -- string
  name = "example_name", -- string
  subscription_url = "example_subscription_url", -- string
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

1 field is carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes it with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `recent` | `data` | 12 | 1 level |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── pipedrive_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`pipedrive_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local mailbox = client:Mailbox()
mailbox:list()

-- mailbox:data_get() now returns the mailbox data from the last list
-- mailbox:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
