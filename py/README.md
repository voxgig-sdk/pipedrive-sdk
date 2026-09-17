# Pipedrive Python SDK



The Python SDK for the Pipedrive API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ActivityField()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/pipedrive-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from pipedrive_sdk import PipedriveSDK

client = PipedriveSDK({
    "apikey": os.environ.get("PIPEDRIVE_APIKEY"),
})
```

### 2. List activityfield records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    activityfields = client.ActivityField().list()
    for activityfield in activityfields:
        print(activityfield)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a deal

Deal is nested under amount, so provide the `amount`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    deal = client.Deal().load({"amount": 1, "field_key": "example_field_key", "interval": "example_interval", "start_date": "example_start_date"})
    print(deal)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    mailboxs = client.Mailbox().list()
    print(mailboxs)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = PipedriveSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
mailbox = client.Mailbox().list()
# mailbox contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = PipedriveSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### PipedriveSDK

```python
from pipedrive_sdk import PipedriveSDK

client = PipedriveSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = PipedriveSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### PipedriveSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `activity_field = client.ActivityField()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` | The additional data of the list |
| `data` | `list` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```python
activity_fields = client.ActivityField().list()
```


### ActivityType

Create an instance: `activity_type = client.ActivityType()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `str` | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `list` | The array of activity types |
| `icon_key` | `str` | Icon graphic to use for representing this activity type |
| `id` | `str` |  |
| `name` | `str` | The name of the activity type |
| `order_nr` | `int` | An order number for this activity type. |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```python
activity_types = client.ActivityType().list()
```

#### Example: Create

```python
activity_type = client.ActivityType().create({
    "icon_key": "example_icon_key",  # str
    "name": "example_name",  # str
})
```


### Billing

Create an instance: `billing = client.Billing()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` | An array of add-ons that the company has. |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```python
billings = client.Billing().list()
```


### CallLog

Create an instance: `call_log = client.CallLog()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_id` | `int` | If specified, this activity will be converted into a call log, with the information provided. |
| `company_id` | `int` | The company ID of the owner of the call log |
| `deal_id` | `int` | The ID of the deal this call is associated with. |
| `duration` | `str` | The duration of the call in seconds |
| `end_time` | `str` | The date and time of the end of the call in UTC. |
| `from_phone_number` | `str` | The number that made the call |
| `has_recording` | `bool` | If the call log has an audio recording attached, the value should be true |
| `id` | `str` | The call log ID, generated when the call log was created |
| `lead_id` | `str` | The ID of the lead in the UUID format this call is associated with. |
| `note` | `str` | The note for the call log in HTML format |
| `org_id` | `int` | The ID of the organization this call is associated with |
| `outcome` | `str` | Describes the outcome of the call |
| `person_id` | `int` | The ID of the person this call is associated with |
| `start_time` | `str` | The date and time of the start of the call in UTC. |
| `subject` | `str` | The name of the activity this call is attached to |
| `to_phone_number` | `str` | The number called |
| `user_id` | `int` | The ID of the owner of the call log. |

#### Example: Load

```python
call_log = client.CallLog().load({"id": "call_log_id"})
```

#### Example: List

```python
call_logs = client.CallLog().list()
```

#### Example: Create

```python
call_log = client.CallLog().create({
    "end_time": "example_end_time",  # str
    "outcome": "example_outcome",  # str
    "start_time": "example_start_time",  # str
    "to_phone_number": "example_to_phone_number",  # str
})
```


### Channel

Create an instance: `channel = client.Channel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `list` | The list of attachments available in the message |
| `avatar_url` | `str` | The URL for an icon that represents your channel |
| `channel_id` | `str` | The channel ID as in the provider |
| `conversation_id` | `str` | The ID of the conversation |
| `conversation_link` | `str` | A URL that can open the conversation in the provider's side |
| `created_at` | `str` | The date and time when your channel was created in the API |
| `id` | `str` | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `marketplace_client_id` | `str` | The client_id of your app in Pipedrive marketplace |
| `message` | `str` | The body of the message |
| `name` | `str` | The name of the channel |
| `pd_company_id` | `int` | The ID of the user's company in Pipedrive |
| `pd_user_id` | `int` | The ID of the user in Pipedrive |
| `provider_channel_id` | `str` | The channel ID you specified while creating the channel |
| `provider_type` | `str` | Value of the provider_type sent to this endpoint |
| `reply_by` | `str` | The date and time when the message can no longer receive a reply, in UTC. |
| `sender_id` | `str` | The ID of the provider's user that sent the message |
| `status` | `str` | The status of the message |
| `template_support` | `bool` | Value of the template_support sent to this endpoint |

#### Example: Create

```python
channel = client.Channel().create({
    "channel_id": "example_channel_id",  # str
    "conversation_id": "example_conversation_id",  # str
    "message": "example_message",  # str
    "sender_id": "example_sender_id",  # str
    "status": "example_status",  # str
})
```


### Currency

Create an instance: `currency = client.Currency()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `bool` | Whether the currency is active or not |
| `code` | `str` | The code of the currency |
| `decimal_points` | `int` | The amount of decimal points of the currency |
| `id` | `int` | The ID of the currency |
| `is_custom_flag` | `bool` | Whether the currency is a custom one or not |
| `name` | `str` | The name of the currency |
| `symbol` | `str` | The symbol of the currency |

#### Example: List

```python
currencys = client.Currency().list()
```


### Deal

Create an instance: `deal = client.Deal()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deals` | `list` |  |
| `id` | `str` |  |
| `period_end` | `str` | The end date and time of the period |
| `period_start` | `str` | The start date and time of the period |
| `total_count` | `int` | The total number of deals |
| `total_currency_converted_value` | `float` | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `str` | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `float` | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `str` | The total weighted value of deals formatted with the company default currency. |
| `totals` | `dict` | The total values of deals for the given period |
| `values_total` | `dict` | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `dict` | The total weighted values of the deals grouped by deal currency. |

#### Example: Load

```python
deal = client.Deal().load({"amount": 1, "field_key": "field_key", "interval": "interval", "start_date": "start_date"})
```

#### Example: List

```python
deals = client.Deal().list()
```

#### Example: Create

```python
deal = client.Deal().create({
    "id": 1,  # int
})
```


### DealField

Create an instance: `deal_field = client.DealField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `bool` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `dict` | The additional data of the list |
| `data` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` | The name of the field |
| `options` | `list` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
deal_field = client.DealField().load({"id": 1})
```

#### Example: List

```python
deal_fields = client.DealField().list()
```

#### Example: Create

```python
deal_field = client.DealField().create({
})
```


### File

Create an instance: `file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `bool` | Whether the user is active or not. |
| `activity_id` | `int` | The ID of the activity to associate the file with |
| `add_time` | `str` | The date and time when the file was added/created. |
| `cid` | `str` | The ID of the inline attachment |
| `deal_id` | `int` | The ID of the deal to associate the file with |
| `deal_name` | `str` | The name of the deal associated with the file |
| `description` | `str` | The description of the file |
| `file_name` | `str` | The original name of the file |
| `file_size` | `int` | The size of the file |
| `id` | `int` | The ID of the file |
| `inline_flag` | `bool` | Whether the file was uploaded as inline or not |
| `lead_id` | `str` | The ID of the lead to associate the file with |
| `lead_name` | `str` | The name of the lead associated with the file |
| `mail_message_id` | `str` | The ID of the mail message to associate the file with |
| `mail_template_id` | `str` | The ID of the mail template to associate the file with |
| `name` | `str` | The visible name of the file |
| `org_id` | `int` | The ID of the organization to associate the file with |
| `org_name` | `str` | The name of the organization associated with the file |
| `person_id` | `int` | The ID of the person to associate the file with |
| `person_name` | `str` | The name of the person associated with the file |
| `product_id` | `int` | The ID of the product to associate the file with |
| `product_name` | `str` | The name of the product associated with the file |
| `project_id` | `int` | The ID of the project to associate the file with |
| `project_name` | `str` | The name of the project associated with the file |
| `remote_id` | `str` | The ID of the remote item |
| `remote_location` | `str` | The location type to send the file to. |
| `s3_bucket` | `str` | The location of the cloud storage |
| `update_time` | `str` | The last updated date and time of the file. |
| `url` | `str` | The URL of the download file |
| `user_id` | `int` | The ID of the user to associate the file with |

#### Example: Load

```python
file = client.File().load({"id": 1})
```

#### Example: List

```python
files = client.File().list()
```

#### Example: Create

```python
file = client.File().create({
})
```


### Filter

Create an instance: `filter = client.Filter()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `dict` | The conditions of the filter as a JSON object. |
| `data` | `dict` | The filter object including conditions |
| `id` | `str` |  |
| `name` | `str` | The name of the filter |
| `success` | `bool` | If the response is successful or not |
| `type` | `str` | The type of filter to create |

#### Example: Load

```python
filter = client.Filter().load({"id": 1})
```

#### Example: List

```python
filters = client.Filter().list()
```

#### Example: Create

```python
filter = client.Filter().create({
    "conditions": {},  # dict
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```


### Goal

Create an instance: `goal = client.Goal()`

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
| `assignee` | `dict` | Who this goal is assigned to. |
| `duration` | `dict` | The date when the goal starts and ends. |
| `expected_outcome` | `dict` | The expected outcome of the goal. |
| `goal` | `dict` |  |
| `id` | `str` |  |
| `interval` | `str` | The interval of the goal |
| `title` | `str` | The title of the goal |
| `type` | `dict` | The type of the goal. |

#### Example: Load

```python
goal = client.Goal().load()
```

#### Example: Create

```python
goal = client.Goal().create({
    "assignee": {},  # dict
    "duration": {},  # dict
    "expected_outcome": {},  # dict
    "interval": "example_interval",  # str
    "type": {},  # dict
})
```


### Lead

Create an instance: `lead = client.Lead()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `str` | The date and time of when the lead was created. |
| `cc_email` | `str` | The BCC email of the lead |
| `channel` | `int` | The ID of your Marketing channel this Lead was created from. |
| `channel_id` | `str` | The optional ID to further distinguish the Marketing channel. |
| `creator_id` | `int` | The ID of the user who created the lead |
| `expected_close_date` | `str` | The date of when the deal which will be created from the lead is expected to be closed. |
| `id` | `str` | The unique ID of the lead in the UUID format |
| `is_archived` | `bool` | A flag indicating whether the lead is archived or not |
| `label_ids` | `list` | The IDs of the lead labels which are associated with the lead |
| `next_activity_id` | `int` | The ID of the next activity associated with the lead |
| `organization_id` | `int` | The ID of an organization which this lead is linked to |
| `origin` | `str` | The way this Lead was created. |
| `origin_id` | `str` | The optional ID to further distinguish the origin of the lead - e.g. |
| `owner_id` | `int` | The ID of the user who owns the lead |
| `person_id` | `int` | The ID of a person which this lead is linked to |
| `source_deal_id` | `int` | The ID of the deal if the lead was converted from a deal. |
| `source_name` | `str` | Defines where the lead comes from. |
| `title` | `str` | The title of the lead |
| `update_time` | `str` | The date and time of when the lead was last updated. |
| `value` | `dict` | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | `str` | The visibility of the lead. |
| `was_seen` | `bool` | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

#### Example: Load

```python
lead = client.Lead().load({"id": "lead_id"})
```

#### Example: List

```python
leads = client.Lead().list()
```

#### Example: Create

```python
lead = client.Lead().create({
    "value": {},  # dict
})
```


### LeadField

Create an instance: `lead_field = client.LeadField()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` | The additional data of the list |
| `data` | `list` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```python
lead_fields = client.LeadField().list()
```


### LeadLabel

Create an instance: `lead_label = client.LeadLabel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `str` | The date and time of when the lead label was created. |
| `color` | `str` | The color of the label. |
| `id` | `str` | The unique ID of the lead label |
| `name` | `str` | The name of the lead label |
| `update_time` | `str` | The date and time of when the lead label was last updated. |

#### Example: List

```python
lead_labels = client.LeadLabel().list()
```

#### Example: Create

```python
lead_label = client.LeadLabel().create({
})
```


### LeadSource

Create an instance: `lead_source = client.LeadSource()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `str` | The unique name of a lead source |

#### Example: List

```python
lead_sources = client.LeadSource().list()
```


### LegacyTeam

Create an instance: `legacy_team = client.LegacyTeam()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `description` | `str` | The team description |
| `id` | `str` |  |
| `manager_id` | `int` | The team manager ID |
| `name` | `str` | The team name |
| `success` | `bool` | If the response is successful or not |
| `users` | `list` | The list of user IDs |

#### Example: Load

```python
legacy_team = client.LegacyTeam().load({"id": 1})
```

#### Example: List

```python
legacy_teams = client.LegacyTeam().list()
```

#### Example: Create

```python
legacy_team = client.LegacyTeam().create({
    "manager_id": 1,  # int
    "name": "example_name",  # str
})
```


### Mailbox

Create an instance: `mailbox = client.Mailbox()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` | The mail thread object |
| `id` | `str` |  |
| `service` | `str` | The service name of the response. |
| `statusCode` | `int` | The email service specific status code and it is returned through the response body. |
| `statusText` | `str` | The status text of the response. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
mailbox = client.Mailbox().load({"id": 1})
```

#### Example: List

```python
mailboxs = client.Mailbox().list({"mail_thread_id": 1})
```


### Meeting

Create an instance: `meeting = client.Meeting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
meeting = client.Meeting().create({
})
```


### Note

Create an instance: `note = client.Note()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `bool` | Whether the note is active or deleted |
| `add_time` | `str` | The creation date and time of the note |
| `company_id` | `int` | The ID of the company |
| `content` | `str` | The content of the note in HTML format. |
| `deal` | `dict` |  |
| `deal_id` | `int` | The ID of the deal the note is attached to |
| `id` | `int` | The ID of the note |
| `last_update_user_id` | `int` | The ID of the user who last updated the note |
| `lead_id` | `str` | The ID of the lead the note is attached to |
| `object_id` | `str` | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `str` | The type of object that the comment is attached to, will be "note" |
| `org_id` | `int` | The ID of the organization the note is attached to |
| `organization` | `dict` | The organization the note is attached to |
| `person` | `dict` | The person the note is attached to |
| `person_id` | `int` | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `bool` | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `bool` | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `bool` | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `bool` | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `bool` | If true, the results are filtered by note to task pinning state |
| `project` | `dict` | The project the note is attached to |
| `project_id` | `int` | The ID of the project the note is attached to |
| `task` | `dict` | The task the note is attached to |
| `task_id` | `int` | The ID of the task the note is attached to |
| `update_time` | `str` | The creation date and time of the note |
| `updater_id` | `int` | The ID of the user who last updated the comment |
| `user` | `dict` | The user who created the note |
| `user_id` | `int` | The ID of the user who created the comment |
| `uuid` | `str` | The ID of the note |

#### Example: Load

```python
note = client.Note().load({"id": 1})
```

#### Example: List

```python
notes = client.Note().list()
```

#### Example: Create

```python
note = client.Note().create({
})
```


### NoteField

Create an instance: `note_field = client.NoteField()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` | The additional data of the list |
| `data` | `list` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```python
note_fields = client.NoteField().list()
```


### Oauth

Create an instance: `oauth = client.Oauth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
oauth = client.Oauth().load({"client_id": "client_id", "redirect_uri": "redirect_uri"})
```

#### Example: Create

```python
oauth = client.Oauth().create({
})
```


### Organization

Create an instance: `organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
organizations = client.Organization().list({"id": 1})
```

#### Example: Create

```python
organization = client.Organization().create({
    "id": 1,  # int
})
```


### OrganizationField

Create an instance: `organization_field = client.OrganizationField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `bool` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `dict` | The additional data of the list |
| `data` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` | The name of the field |
| `options` | `list` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
organization_field = client.OrganizationField().load({"id": 1})
```

#### Example: List

```python
organization_fields = client.OrganizationField().list()
```

#### Example: Create

```python
organization_field = client.OrganizationField().create({
})
```


### OrganizationRelationship

Create an instance: `organization_relationship = client.OrganizationRelationship()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` | The additional data of the list |
| `data` | `Any` | The array of organization relationships |
| `id` | `str` |  |
| `org_id` | `int` | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `int` | The linked organization in the relationship. |
| `rel_owner_org_id` | `int` | The owner of the relationship. |
| `related_objects` | `dict` |  |
| `success` | `bool` | If the response is successful or not |
| `type` | `str` | The type of organization relationship |

#### Example: Load

```python
organization_relationship = client.OrganizationRelationship().load({"id": 1})
```

#### Example: List

```python
organization_relationships = client.OrganizationRelationship().list({"org_id": 1})
```

#### Example: Create

```python
organization_relationship = client.OrganizationRelationship().create({
    "rel_linked_org_id": 1,  # int
    "rel_owner_org_id": 1,  # int
    "type": "example_type",  # str
})
```


### PermissionSet

Create an instance: `permission_set = client.PermissionSet()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `str` | The app that permission set belongs to |
| `assignment_count` | `int` | The number of users assigned to this permission set |
| `contents` | `list` | A permission assigned to this permission set |
| `data` | `list` | The array of permission set |
| `description` | `str` | The description of the permission set |
| `id` | `str` | The ID of user permission set |
| `name` | `str` | The name of the permission set |
| `success` | `bool` | If the response is successful or not |
| `type` | `str` | The type of permission set |

#### Example: Load

```python
permission_set = client.PermissionSet().load({"id": "permission_set_id"})
```

#### Example: List

```python
permission_sets = client.PermissionSet().list()
```


### Person

Create an instance: `person = client.Person()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
persons = client.Person().list({"id": 1})
```

#### Example: Create

```python
person = client.Person().create({
    "id": 1,  # int
})
```


### PersonField

Create an instance: `person_field = client.PersonField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `bool` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `dict` | The additional data of the list |
| `data` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` | The name of the field |
| `options` | `list` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
person_field = client.PersonField().load({"id": 1})
```

#### Example: List

```python
person_fields = client.PersonField().list()
```

#### Example: Create

```python
person_field = client.PersonField().create({
})
```


### Pipeline

Create an instance: `pipeline = client.Pipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
pipeline = client.Pipeline().load({"id": 1, "end_date": "end_date", "start_date": "start_date"})
```

#### Example: List

```python
pipelines = client.Pipeline().list({"id": 1})
```


### Product

Create an instance: `product = client.Product()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
products = client.Product().list({"id": 1})
```

#### Example: Create

```python
product = client.Product().create({
    "id": 1,  # int
})
```


### ProductField

Create an instance: `product_field = client.ProductField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `field_type` | `str` | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `str` |  |
| `name` | `str` | The name of the field |
| `options` | `list` | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `success` | `bool` |  |

#### Example: Load

```python
product_field = client.ProductField().load({"id": 1})
```

#### Example: List

```python
product_fields = client.ProductField().list()
```

#### Example: Create

```python
product_field = client.ProductField().create({
    "field_type": "example_field_type",  # str
    "name": "example_name",  # str
})
```


### Project

Create an instance: `project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` |  |
| `data` | `Any` |  |
| `group_id` | `float` | The ID of a group on a project board |
| `id` | `int` | The ID of the project, generated when the task was created |
| `phase_id` | `float` | The ID of a phase on a project board |
| `success` | `bool` |  |

#### Example: Load

```python
project = client.Project().load({"id": 1})
```

#### Example: List

```python
projects = client.Project().list()
```

#### Example: Create

```python
project = client.Project().create({
})
```


### ProjectBoard

Create an instance: `project_board = client.ProjectBoard()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `str` | The creation date and time of the board in UTC. |
| `additional_data` | `dict` |  |
| `data` | `dict` |  |
| `id` | `int` | The ID of the project board |
| `name` | `str` | Name of a project board |
| `order_nr` | `float` | The order of a board |
| `success` | `bool` |  |
| `update_time` | `str` | The update date and time of the board in UTC. |

#### Example: Load

```python
project_board = client.ProjectBoard().load({"id": 1})
```

#### Example: List

```python
project_boards = client.ProjectBoard().list()
```


### ProjectPhase

Create an instance: `project_phase = client.ProjectPhase()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `str` | The creation date and time of the board in UTC. |
| `additional_data` | `dict` |  |
| `board_id` | `float` | The ID of the project board this phase is linked to |
| `data` | `dict` |  |
| `id` | `int` | The ID of the project phase |
| `name` | `str` | Name of a project phase |
| `order_nr` | `float` | The order of a phase |
| `success` | `bool` |  |
| `update_time` | `str` | The update date and time of the board in UTC. |

#### Example: Load

```python
project_phase = client.ProjectPhase().load({"id": 1})
```

#### Example: List

```python
project_phases = client.ProjectPhase().list({"board_id": 1})
```


### ProjectTemplate

Create an instance: `project_template = client.ProjectTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `str` | The creation date and time of the template in UTC. |
| `additional_data` | `dict` |  |
| `data` | `Any` |  |
| `description` | `str` | The description of a template |
| `id` | `float` | The ID of a template |
| `owner_id` | `float` | The ID of a template owner |
| `projects_board_id` | `float` | The ID of the project board this template is associated with |
| `success` | `bool` |  |
| `title` | `str` | The title of a template |
| `update_time` | `str` | The update date and time of the template in UTC. |

#### Example: Load

```python
project_template = client.ProjectTemplate().load({"id": 1})
```

#### Example: List

```python
project_templates = client.ProjectTemplate().list()
```


### Recent

Create an instance: `recent = client.Recent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` |  |
| `data` | `list` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```python
recents = client.Recent().list({"since_timestamp": "example"})
```


### Role

Create an instance: `role = client.Role()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` | The additional data in the role |
| `data` | `Any` | The details of the sub-role |
| `id` | `str` |  |
| `name` | `str` | The name of the role |
| `parent_role_id` | `int` | The ID of the parent role |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
role = client.Role().load({"id": 1})
```

#### Example: List

```python
roles = client.Role().list()
```

#### Example: Create

```python
role = client.Role().create({
    "name": "example_name",  # str
})
```


### Stage

Create an instance: `stage = client.Stage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
stages = client.Stage().list({"id": 1})
```


### Task

Create an instance: `task = client.Task()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `dict` |  |
| `data` | `dict` |  |
| `id` | `int` | The ID of the task, generated when the task was created |
| `success` | `bool` |  |

#### Example: Load

```python
task = client.Task().load({"id": 1})
```

#### Example: List

```python
tasks = client.Task().list()
```

#### Example: Create

```python
task = client.Task().create({
})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `list` | The access given to the user. |
| `active_flag` | `bool` | Whether the user is active or not. |
| `data` | `dict` |  |
| `email` | `str` | The email of the user |
| `id` | `str` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
user = client.User().load({"id": 1})
```

#### Example: List

```python
users = client.User().list()
```

#### Example: Create

```python
user = client.User().create({
    "email": "example_email",  # str
})
```


### UserConnection

Create an instance: `user_connection = client.UserConnection()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` | The object of UserConnections |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
user_connection = client.UserConnection().load()
```


### UserSetting

Create an instance: `user_setting = client.UserSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```python
user_setting = client.UserSetting().load()
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` | The array of Webhooks |
| `event_action` | `str` | The type of action to receive notifications about. |
| `event_object` | `str` | The type of object to receive notifications about. |
| `http_auth_password` | `str` | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `http_auth_user` | `str` | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `id` | `str` |  |
| `name` | `str` | The webhook's name |
| `subscription_url` | `str` | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `user_id` | `int` | The ID of the user that this webhook will be authorized with. |
| `version` | `str` | The webhook's version. |

#### Example: List

```python
webhooks = client.Webhook().list()
```

#### Example: Create

```python
webhook = client.Webhook().create({
    "event_action": "example_event_action",  # str
    "event_object": "example_event_object",  # str
    "name": "example_name",  # str
    "subscription_url": "example_subscription_url",  # str
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

Features are the extension mechanism. A feature is a Python class
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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── pipedrive_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`pipedrive_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
mailbox = client.Mailbox()
mailbox.list()

# mailbox.data_get() now returns the mailbox data from the last list
# mailbox.match_get() returns the last match criteria
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
