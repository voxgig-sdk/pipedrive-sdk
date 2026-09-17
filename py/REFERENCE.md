# Pipedrive Python SDK Reference

Complete API reference for the Pipedrive Python SDK.


## PipedriveSDK

### Constructor

```python
from pipedrive_sdk import PipedriveSDK

client = PipedriveSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PipedriveSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = PipedriveSDK.test()
```


### Instance Methods

#### `ActivityField(data=None)`

Create a new `ActivityFieldEntity` instance. Pass `None` for no initial data.

#### `ActivityType(data=None)`

Create a new `ActivityTypeEntity` instance. Pass `None` for no initial data.

#### `Billing(data=None)`

Create a new `BillingEntity` instance. Pass `None` for no initial data.

#### `CallLog(data=None)`

Create a new `CallLogEntity` instance. Pass `None` for no initial data.

#### `Channel(data=None)`

Create a new `ChannelEntity` instance. Pass `None` for no initial data.

#### `Currency(data=None)`

Create a new `CurrencyEntity` instance. Pass `None` for no initial data.

#### `Deal(data=None)`

Create a new `DealEntity` instance. Pass `None` for no initial data.

#### `DealField(data=None)`

Create a new `DealFieldEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `Filter(data=None)`

Create a new `FilterEntity` instance. Pass `None` for no initial data.

#### `Goal(data=None)`

Create a new `GoalEntity` instance. Pass `None` for no initial data.

#### `Lead(data=None)`

Create a new `LeadEntity` instance. Pass `None` for no initial data.

#### `LeadField(data=None)`

Create a new `LeadFieldEntity` instance. Pass `None` for no initial data.

#### `LeadLabel(data=None)`

Create a new `LeadLabelEntity` instance. Pass `None` for no initial data.

#### `LeadSource(data=None)`

Create a new `LeadSourceEntity` instance. Pass `None` for no initial data.

#### `LegacyTeam(data=None)`

Create a new `LegacyTeamEntity` instance. Pass `None` for no initial data.

#### `Mailbox(data=None)`

Create a new `MailboxEntity` instance. Pass `None` for no initial data.

#### `Meeting(data=None)`

Create a new `MeetingEntity` instance. Pass `None` for no initial data.

#### `Note(data=None)`

Create a new `NoteEntity` instance. Pass `None` for no initial data.

#### `NoteField(data=None)`

Create a new `NoteFieldEntity` instance. Pass `None` for no initial data.

#### `Oauth(data=None)`

Create a new `OauthEntity` instance. Pass `None` for no initial data.

#### `Organization(data=None)`

Create a new `OrganizationEntity` instance. Pass `None` for no initial data.

#### `OrganizationField(data=None)`

Create a new `OrganizationFieldEntity` instance. Pass `None` for no initial data.

#### `OrganizationRelationship(data=None)`

Create a new `OrganizationRelationshipEntity` instance. Pass `None` for no initial data.

#### `PermissionSet(data=None)`

Create a new `PermissionSetEntity` instance. Pass `None` for no initial data.

#### `Person(data=None)`

Create a new `PersonEntity` instance. Pass `None` for no initial data.

#### `PersonField(data=None)`

Create a new `PersonFieldEntity` instance. Pass `None` for no initial data.

#### `Pipeline(data=None)`

Create a new `PipelineEntity` instance. Pass `None` for no initial data.

#### `Product(data=None)`

Create a new `ProductEntity` instance. Pass `None` for no initial data.

#### `ProductField(data=None)`

Create a new `ProductFieldEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `ProjectBoard(data=None)`

Create a new `ProjectBoardEntity` instance. Pass `None` for no initial data.

#### `ProjectPhase(data=None)`

Create a new `ProjectPhaseEntity` instance. Pass `None` for no initial data.

#### `ProjectTemplate(data=None)`

Create a new `ProjectTemplateEntity` instance. Pass `None` for no initial data.

#### `Recent(data=None)`

Create a new `RecentEntity` instance. Pass `None` for no initial data.

#### `Role(data=None)`

Create a new `RoleEntity` instance. Pass `None` for no initial data.

#### `Stage(data=None)`

Create a new `StageEntity` instance. Pass `None` for no initial data.

#### `Task(data=None)`

Create a new `TaskEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserConnection(data=None)`

Create a new `UserConnectionEntity` instance. Pass `None` for no initial data.

#### `UserSetting(data=None)`

Create a new `UserSettingEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActivityFieldEntity

```python
activity_field = client.ActivityField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No | The additional data of the list |
| `data` | `list` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActivityField().list()
for activity_field in results:
    print(activity_field)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActivityTypeEntity

```python
activity_type = client.ActivityType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `str` | No | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `list` | No | The array of activity types |
| `icon_key` | `str` | Yes | Icon graphic to use for representing this activity type |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the activity type |
| `order_nr` | `int` | No | An order number for this activity type. |
| `success` | `bool` | No | If the response is successful or not |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `color` | - | - | - | - |
| `data` | - | - | - | - |
| `icon_key` | - | - | Yes | - |
| `id` | - | - | - | - |
| `name` | - | - | Yes | - |
| `order_nr` | - | - | - | - |
| `success` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ActivityType().create({
    "icon_key": "example_icon_key",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActivityType().list()
for activity_type in results:
    print(activity_type)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ActivityType().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ActivityType().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillingEntity

```python
billing = client.Billing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | An array of add-ons that the company has. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Billing().list()
for billing in results:
    print(billing)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallLogEntity

```python
call_log = client.CallLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_id` | `int` | No | If specified, this activity will be converted into a call log, with the information provided. |
| `company_id` | `int` | No | The company ID of the owner of the call log |
| `deal_id` | `int` | No | The ID of the deal this call is associated with. |
| `duration` | `str` | No | The duration of the call in seconds |
| `end_time` | `str` | Yes | The date and time of the end of the call in UTC. |
| `from_phone_number` | `str` | No | The number that made the call |
| `has_recording` | `bool` | No | If the call log has an audio recording attached, the value should be true |
| `id` | `str` | No | The call log ID, generated when the call log was created |
| `lead_id` | `str` | No | The ID of the lead in the UUID format this call is associated with. |
| `note` | `str` | No | The note for the call log in HTML format |
| `org_id` | `int` | No | The ID of the organization this call is associated with |
| `outcome` | `str` | Yes | Describes the outcome of the call |
| `person_id` | `int` | No | The ID of the person this call is associated with |
| `start_time` | `str` | Yes | The date and time of the start of the call in UTC. |
| `subject` | `str` | No | The name of the activity this call is attached to |
| `to_phone_number` | `str` | Yes | The number called |
| `user_id` | `int` | No | The ID of the owner of the call log. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CallLog().create({
    "end_time": "example_end_time",  # str
    "outcome": "example_outcome",  # str
    "start_time": "example_start_time",  # str
    "to_phone_number": "example_to_phone_number",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CallLog().list()
for call_log in results:
    print(call_log)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CallLog().load({"id": "call_log_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CallLog().remove({"id": "call_log_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChannelEntity

```python
channel = client.Channel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `list` | No | The list of attachments available in the message |
| `avatar_url` | `str` | No | The URL for an icon that represents your channel |
| `channel_id` | `str` | Yes | The channel ID as in the provider |
| `conversation_id` | `str` | Yes | The ID of the conversation |
| `conversation_link` | `str` | No | A URL that can open the conversation in the provider's side |
| `created_at` | `str` | No | The date and time when your channel was created in the API |
| `id` | `str` | No | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `marketplace_client_id` | `str` | No | The client_id of your app in Pipedrive marketplace |
| `message` | `str` | Yes | The body of the message |
| `name` | `str` | No | The name of the channel |
| `pd_company_id` | `int` | No | The ID of the user's company in Pipedrive |
| `pd_user_id` | `int` | No | The ID of the user in Pipedrive |
| `provider_channel_id` | `str` | No | The channel ID you specified while creating the channel |
| `provider_type` | `str` | No | Value of the provider_type sent to this endpoint |
| `reply_by` | `str` | No | The date and time when the message can no longer receive a reply, in UTC. |
| `sender_id` | `str` | Yes | The ID of the provider's user that sent the message |
| `status` | `str` | Yes | The status of the message |
| `template_support` | `bool` | No | Value of the template_support sent to this endpoint |

### Field Usage by Operation

| Field | create | remove |
| --- | --- | --- |
| `attachments` | - | - |
| `avatar_url` | - | - |
| `channel_id` | - | - |
| `conversation_id` | - | - |
| `conversation_link` | - | - |
| `created_at` | Yes | - |
| `id` | Yes | - |
| `marketplace_client_id` | - | - |
| `message` | - | - |
| `name` | Yes | - |
| `pd_company_id` | - | - |
| `pd_user_id` | - | - |
| `provider_channel_id` | Yes | - |
| `provider_type` | - | - |
| `reply_by` | - | - |
| `sender_id` | - | - |
| `status` | - | - |
| `template_support` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Channel().create({
    "channel_id": "example_channel_id",  # str
    "conversation_id": "example_conversation_id",  # str
    "message": "example_message",  # str
    "sender_id": "example_sender_id",  # str
    "status": "example_status",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Channel().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CurrencyEntity

```python
currency = client.Currency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `bool` | No | Whether the currency is active or not |
| `code` | `str` | No | The code of the currency |
| `decimal_points` | `int` | No | The amount of decimal points of the currency |
| `id` | `int` | No | The ID of the currency |
| `is_custom_flag` | `bool` | No | Whether the currency is a custom one or not |
| `name` | `str` | No | The name of the currency |
| `symbol` | `str` | No | The symbol of the currency |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Currency().list()
for currency in results:
    print(currency)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CurrencyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DealEntity

```python
deal = client.Deal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deals` | `list` | No |  |
| `id` | `str` | No |  |
| `period_end` | `str` | No | The end date and time of the period |
| `period_start` | `str` | No | The start date and time of the period |
| `total_count` | `int` | No | The total number of deals |
| `total_currency_converted_value` | `float` | No | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `str` | No | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `float` | No | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `str` | No | The total weighted value of deals formatted with the company default currency. |
| `totals` | `dict` | No | The total values of deals for the given period |
| `values_total` | `dict` | No | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `dict` | No | The total weighted values of the deals grouped by deal currency. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Deal().create({
    "id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Deal().list()
for deal in results:
    print(deal)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Deal().load({"amount": 1, "field_key": "field_key", "interval": "interval", "start_date": "start_date"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Deal().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Deal().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DealEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DealFieldEntity

```python
deal_field = client.DealField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `dict` | No | The additional data of the list |
| `data` | `dict` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No | The name of the field |
| `options` | `list` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DealField().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DealField().list()
for deal_field in results:
    print(deal_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DealField().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DealField().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DealField().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DealFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `bool` | No | Whether the user is active or not. |
| `activity_id` | `int` | No | The ID of the activity to associate the file with |
| `add_time` | `str` | No | The date and time when the file was added/created. |
| `cid` | `str` | No | The ID of the inline attachment |
| `deal_id` | `int` | No | The ID of the deal to associate the file with |
| `deal_name` | `str` | No | The name of the deal associated with the file |
| `description` | `str` | No | The description of the file |
| `file_name` | `str` | No | The original name of the file |
| `file_size` | `int` | No | The size of the file |
| `id` | `int` | No | The ID of the file |
| `inline_flag` | `bool` | No | Whether the file was uploaded as inline or not |
| `lead_id` | `str` | No | The ID of the lead to associate the file with |
| `lead_name` | `str` | No | The name of the lead associated with the file |
| `mail_message_id` | `str` | No | The ID of the mail message to associate the file with |
| `mail_template_id` | `str` | No | The ID of the mail template to associate the file with |
| `name` | `str` | No | The visible name of the file |
| `org_id` | `int` | No | The ID of the organization to associate the file with |
| `org_name` | `str` | No | The name of the organization associated with the file |
| `person_id` | `int` | No | The ID of the person to associate the file with |
| `person_name` | `str` | No | The name of the person associated with the file |
| `product_id` | `int` | No | The ID of the product to associate the file with |
| `product_name` | `str` | No | The name of the product associated with the file |
| `project_id` | `int` | No | The ID of the project to associate the file with |
| `project_name` | `str` | No | The name of the project associated with the file |
| `remote_id` | `str` | No | The ID of the remote item |
| `remote_location` | `str` | No | The location type to send the file to. |
| `s3_bucket` | `str` | No | The location of the cloud storage |
| `update_time` | `str` | No | The last updated date and time of the file. |
| `url` | `str` | No | The URL of the download file |
| `user_id` | `int` | No | The ID of the user to associate the file with |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.File().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.File().list()
for file in results:
    print(file)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.File().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.File().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.File().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FilterEntity

```python
filter = client.Filter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `dict` | Yes | The conditions of the filter as a JSON object. |
| `data` | `dict` | No | The filter object including conditions |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the filter |
| `success` | `bool` | No | If the response is successful or not |
| `type` | `str` | Yes | The type of filter to create |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `conditions` | - | - | - | - | - |
| `data` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `success` | - | - | - | - | - |
| `type` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Filter().create({
    "conditions": {},  # dict
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Filter().list()
for filter in results:
    print(filter)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Filter().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Filter().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Filter().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FilterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GoalEntity

```python
goal = client.Goal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | Yes | Who this goal is assigned to. |
| `duration` | `dict` | Yes | The date when the goal starts and ends. |
| `expected_outcome` | `dict` | Yes | The expected outcome of the goal. |
| `goal` | `dict` | No |  |
| `id` | `str` | No |  |
| `interval` | `str` | Yes | The interval of the goal |
| `title` | `str` | No | The title of the goal |
| `type` | `dict` | Yes | The type of the goal. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `assignee` | - | - | Yes | - |
| `duration` | - | - | Yes | - |
| `expected_outcome` | - | - | Yes | - |
| `goal` | - | - | - | - |
| `id` | - | - | - | - |
| `interval` | - | - | Yes | - |
| `title` | - | - | - | - |
| `type` | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Goal().create({
    "assignee": {},  # dict
    "duration": {},  # dict
    "expected_outcome": {},  # dict
    "interval": "example_interval",  # str
    "type": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Goal().load()
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Goal().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Goal().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GoalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LeadEntity

```python
lead = client.Lead()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `str` | No | The date and time of when the lead was created. |
| `cc_email` | `str` | No | The BCC email of the lead |
| `channel` | `int` | No | The ID of your Marketing channel this Lead was created from. |
| `channel_id` | `str` | No | The optional ID to further distinguish the Marketing channel. |
| `creator_id` | `int` | No | The ID of the user who created the lead |
| `expected_close_date` | `str` | No | The date of when the deal which will be created from the lead is expected to be closed. |
| `id` | `str` | No | The unique ID of the lead in the UUID format |
| `is_archived` | `bool` | No | A flag indicating whether the lead is archived or not |
| `label_ids` | `list` | No | The IDs of the lead labels which are associated with the lead |
| `next_activity_id` | `int` | No | The ID of the next activity associated with the lead |
| `organization_id` | `int` | No | The ID of an organization which this lead is linked to |
| `origin` | `str` | No | The way this Lead was created. |
| `origin_id` | `str` | No | The optional ID to further distinguish the origin of the lead - e.g. |
| `owner_id` | `int` | No | The ID of the user who owns the lead |
| `person_id` | `int` | No | The ID of a person which this lead is linked to |
| `source_deal_id` | `int` | No | The ID of the deal if the lead was converted from a deal. |
| `source_name` | `str` | No | Defines where the lead comes from. |
| `title` | `str` | No | The title of the lead |
| `update_time` | `str` | No | The date and time of when the lead was last updated. |
| `value` | `dict` | Yes | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | `str` | No | The visibility of the lead. |
| `was_seen` | `bool` | No | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `add_time` | - | - | - | - | - |
| `cc_email` | - | - | - | - | - |
| `channel` | - | - | - | - | - |
| `channel_id` | - | - | - | - | - |
| `creator_id` | - | - | - | - | - |
| `expected_close_date` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `is_archived` | - | - | - | - | - |
| `label_ids` | - | - | - | - | - |
| `next_activity_id` | - | - | - | - | - |
| `organization_id` | - | - | - | - | - |
| `origin` | - | - | - | - | - |
| `origin_id` | - | - | - | - | - |
| `owner_id` | - | - | - | - | - |
| `person_id` | - | - | - | - | - |
| `source_deal_id` | - | - | - | - | - |
| `source_name` | - | - | - | - | - |
| `title` | - | - | Yes | - | - |
| `update_time` | - | - | - | - | - |
| `value` | - | - | - | - | - |
| `visible_to` | - | - | - | - | - |
| `was_seen` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Lead().create({
    "value": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Lead().list()
for lead in results:
    print(lead)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Lead().load({"id": "lead_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Lead().remove({"id": "lead_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Lead().update({
    "id": "lead_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LeadFieldEntity

```python
lead_field = client.LeadField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No | The additional data of the list |
| `data` | `list` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LeadField().list()
for lead_field in results:
    print(lead_field)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LeadLabelEntity

```python
lead_label = client.LeadLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `str` | No | The date and time of when the lead label was created. |
| `color` | `str` | No | The color of the label. |
| `id` | `str` | No | The unique ID of the lead label |
| `name` | `str` | No | The name of the lead label |
| `update_time` | `str` | No | The date and time of when the lead label was last updated. |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `add_time` | - | - | - | - |
| `color` | - | Yes | - | - |
| `id` | - | - | - | - |
| `name` | - | Yes | - | - |
| `update_time` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LeadLabel().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LeadLabel().list()
for lead_label in results:
    print(lead_label)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LeadLabel().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LeadLabel().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadLabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LeadSourceEntity

```python
lead_source = client.LeadSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | No | The unique name of a lead source |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LeadSource().list()
for lead_source in results:
    print(lead_source)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadSourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LegacyTeamEntity

```python
legacy_team = client.LegacyTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `description` | `str` | No | The team description |
| `id` | `str` | No |  |
| `manager_id` | `int` | Yes | The team manager ID |
| `name` | `str` | Yes | The team name |
| `success` | `bool` | No | If the response is successful or not |
| `users` | `list` | No | The list of user IDs |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LegacyTeam().create({
    "manager_id": 1,  # int
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LegacyTeam().list()
for legacy_team in results:
    print(legacy_team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LegacyTeam().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LegacyTeam().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LegacyTeam().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LegacyTeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MailboxEntity

```python
mailbox = client.Mailbox()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No | The mail thread object |
| `id` | `str` | No |  |
| `service` | `str` | No | The service name of the response. |
| `statusCode` | `int` | No | The email service specific status code and it is returned through the response body. |
| `statusText` | `str` | No | The status text of the response. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Mailbox().list({"mail_thread_id": 1})
for mailbox in results:
    print(mailbox)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Mailbox().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Mailbox().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Mailbox().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MailboxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MeetingEntity

```python
meeting = client.Meeting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Meeting().create({
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Meeting().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeetingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NoteEntity

```python
note = client.Note()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `bool` | No | Whether the note is active or deleted |
| `add_time` | `str` | No | The creation date and time of the note |
| `company_id` | `int` | No | The ID of the company |
| `content` | `str` | No | The content of the note in HTML format. |
| `deal` | `dict` | No |  |
| `deal_id` | `int` | No | The ID of the deal the note is attached to |
| `id` | `int` | No | The ID of the note |
| `last_update_user_id` | `int` | No | The ID of the user who last updated the note |
| `lead_id` | `str` | No | The ID of the lead the note is attached to |
| `object_id` | `str` | No | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `str` | No | The type of object that the comment is attached to, will be "note" |
| `org_id` | `int` | No | The ID of the organization the note is attached to |
| `organization` | `dict` | No | The organization the note is attached to |
| `person` | `dict` | No | The person the note is attached to |
| `person_id` | `int` | No | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `bool` | No | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `bool` | No | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `bool` | No | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `bool` | No | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `bool` | No | If true, the results are filtered by note to task pinning state |
| `project` | `dict` | No | The project the note is attached to |
| `project_id` | `int` | No | The ID of the project the note is attached to |
| `task` | `dict` | No | The task the note is attached to |
| `task_id` | `int` | No | The ID of the task the note is attached to |
| `update_time` | `str` | No | The creation date and time of the note |
| `updater_id` | `int` | No | The ID of the user who last updated the comment |
| `user` | `dict` | No | The user who created the note |
| `user_id` | `int` | No | The ID of the user who created the comment |
| `uuid` | `str` | No | The ID of the note |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active_flag` | - | - | - | - | - |
| `add_time` | - | - | - | - | - |
| `company_id` | - | - | - | - | - |
| `content` | - | - | - | Yes | - |
| `deal` | - | - | - | - | - |
| `deal_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_update_user_id` | - | - | - | - | - |
| `lead_id` | - | - | - | - | - |
| `object_id` | - | - | - | - | - |
| `object_type` | - | - | - | - | - |
| `org_id` | - | - | - | - | - |
| `organization` | - | - | - | - | - |
| `person` | - | - | - | - | - |
| `person_id` | - | - | - | - | - |
| `pinned_to_deal_flag` | - | - | - | - | - |
| `pinned_to_organization_flag` | - | - | - | - | - |
| `pinned_to_person_flag` | - | - | - | - | - |
| `pinned_to_project_flag` | - | - | - | - | - |
| `pinned_to_task_flag` | - | - | - | - | - |
| `project` | - | - | - | - | - |
| `project_id` | - | - | - | - | - |
| `task` | - | - | - | - | - |
| `task_id` | - | - | - | - | - |
| `update_time` | - | - | - | - | - |
| `updater_id` | - | - | - | - | - |
| `user` | - | - | - | - | - |
| `user_id` | - | - | - | - | - |
| `uuid` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Note().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Note().list()
for note in results:
    print(note)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Note().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Note().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Note().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NoteFieldEntity

```python
note_field = client.NoteField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No | The additional data of the list |
| `data` | `list` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NoteField().list()
for note_field in results:
    print(note_field)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NoteFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OauthEntity

```python
oauth = client.Oauth()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Oauth().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Oauth().load({"client_id": "client_id", "redirect_uri": "redirect_uri"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OauthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationEntity

```python
organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Organization().create({
    "id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Organization().list({"id": 1})
for organization in results:
    print(organization)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Organization().remove({"follower_id": 1, "id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Organization().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationFieldEntity

```python
organization_field = client.OrganizationField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `dict` | No | The additional data of the list |
| `data` | `dict` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No | The name of the field |
| `options` | `list` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationField().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationField().list()
for organization_field in results:
    print(organization_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationField().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OrganizationField().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationField().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationRelationshipEntity

```python
organization_relationship = client.OrganizationRelationship()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No | The additional data of the list |
| `data` | `Any` | No | The array of organization relationships |
| `id` | `str` | No |  |
| `org_id` | `int` | No | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `int` | Yes | The linked organization in the relationship. |
| `rel_owner_org_id` | `int` | Yes | The owner of the relationship. |
| `related_objects` | `dict` | No |  |
| `success` | `bool` | No | If the response is successful or not |
| `type` | `str` | Yes | The type of organization relationship |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `additional_data` | - | - | - | - | - |
| `data` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `org_id` | - | - | - | - | - |
| `rel_linked_org_id` | - | - | - | Yes | - |
| `rel_owner_org_id` | - | - | - | Yes | - |
| `related_objects` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `type` | - | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationRelationship().create({
    "rel_linked_org_id": 1,  # int
    "rel_owner_org_id": 1,  # int
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationRelationship().list({"org_id": 1})
for organization_relationship in results:
    print(organization_relationship)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationRelationship().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OrganizationRelationship().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationRelationship().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationRelationshipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PermissionSetEntity

```python
permission_set = client.PermissionSet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `str` | No | The app that permission set belongs to |
| `assignment_count` | `int` | No | The number of users assigned to this permission set |
| `contents` | `list` | No | A permission assigned to this permission set |
| `data` | `list` | No | The array of permission set |
| `description` | `str` | No | The description of the permission set |
| `id` | `str` | No | The ID of user permission set |
| `name` | `str` | No | The name of the permission set |
| `success` | `bool` | No | If the response is successful or not |
| `type` | `str` | No | The type of permission set |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PermissionSet().list()
for permission_set in results:
    print(permission_set)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PermissionSet().load({"id": "permission_set_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PermissionSetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PersonEntity

```python
person = client.Person()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Person().create({
    "id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Person().list({"id": 1})
for person in results:
    print(person)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Person().remove({"follower_id": 1, "id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Person().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PersonFieldEntity

```python
person_field = client.PersonField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `dict` | No | The additional data of the list |
| `data` | `dict` | No |  |
| `id` | `str` | No |  |
| `name` | `str` | No | The name of the field |
| `options` | `list` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PersonField().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PersonField().list()
for person_field in results:
    print(person_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PersonField().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PersonField().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PersonField().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PipelineEntity

```python
pipeline = client.Pipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Pipeline().list({"id": 1})
for pipeline in results:
    print(pipeline)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Pipeline().load({"id": 1, "end_date": "end_date", "start_date": "start_date"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PipelineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductEntity

```python
product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Product().create({
    "id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Product().list({"id": 1})
for product in results:
    print(product)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Product().remove({"follower_id": 1, "id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductFieldEntity

```python
product_field = client.ProductField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No |  |
| `field_type` | `str` | Yes | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the field |
| `options` | `list` | No | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `success` | `bool` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `data` | - | - | - | - | - |
| `field_type` | - | Yes | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `options` | - | - | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProductField().create({
    "field_type": "example_field_type",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProductField().list()
for product_field in results:
    print(product_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProductField().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProductField().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProductField().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No |  |
| `data` | `Any` | No |  |
| `group_id` | `float` | No | The ID of a group on a project board |
| `id` | `int` | No | The ID of the project, generated when the task was created |
| `phase_id` | `float` | No | The ID of a phase on a project board |
| `success` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Project().list()
for project in results:
    print(project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Project().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectBoardEntity

```python
project_board = client.ProjectBoard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `str` | No | The creation date and time of the board in UTC. |
| `additional_data` | `dict` | No |  |
| `data` | `dict` | No |  |
| `id` | `int` | No | The ID of the project board |
| `name` | `str` | No | Name of a project board |
| `order_nr` | `float` | No | The order of a board |
| `success` | `bool` | No |  |
| `update_time` | `str` | No | The update date and time of the board in UTC. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectBoard().list()
for project_board in results:
    print(project_board)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectBoard().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBoardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectPhaseEntity

```python
project_phase = client.ProjectPhase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `str` | No | The creation date and time of the board in UTC. |
| `additional_data` | `dict` | No |  |
| `board_id` | `float` | No | The ID of the project board this phase is linked to |
| `data` | `dict` | No |  |
| `id` | `int` | No | The ID of the project phase |
| `name` | `str` | No | Name of a project phase |
| `order_nr` | `float` | No | The order of a phase |
| `success` | `bool` | No |  |
| `update_time` | `str` | No | The update date and time of the board in UTC. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectPhase().list({"board_id": 1})
for project_phase in results:
    print(project_phase)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectPhase().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectPhaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectTemplateEntity

```python
project_template = client.ProjectTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `str` | No | The creation date and time of the template in UTC. |
| `additional_data` | `dict` | No |  |
| `data` | `Any` | No |  |
| `description` | `str` | No | The description of a template |
| `id` | `float` | No | The ID of a template |
| `owner_id` | `float` | No | The ID of a template owner |
| `projects_board_id` | `float` | No | The ID of the project board this template is associated with |
| `success` | `bool` | No |  |
| `title` | `str` | No | The title of a template |
| `update_time` | `str` | No | The update date and time of the template in UTC. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectTemplate().list()
for project_template in results:
    print(project_template)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectTemplate().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RecentEntity

```python
recent = client.Recent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No |  |
| `data` | `list` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Recent().list({"since_timestamp": "example"})
for recent in results:
    print(recent)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RoleEntity

```python
role = client.Role()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No | The additional data in the role |
| `data` | `Any` | No | The details of the sub-role |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the role |
| `parent_role_id` | `int` | No | The ID of the parent role |
| `success` | `bool` | No | If the response is successful or not |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `additional_data` | - | - | - | - | - |
| `data` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `parent_role_id` | - | - | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Role().create({
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Role().list()
for role in results:
    print(role)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Role().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Role().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Role().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StageEntity

```python
stage = client.Stage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Stage().list({"id": 1})
for stage in results:
    print(stage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaskEntity

```python
task = client.Task()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `dict` | No |  |
| `data` | `dict` | No |  |
| `id` | `int` | No | The ID of the task, generated when the task was created |
| `success` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Task().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Task().list()
for task in results:
    print(task)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Task().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Task().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Task().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaskEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `list` | No | The access given to the user. |
| `active_flag` | `bool` | No | Whether the user is active or not. |
| `data` | `dict` | No |  |
| `email` | `str` | Yes | The email of the user |
| `id` | `str` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `access` | - | - | - | - |
| `active_flag` | - | - | - | Yes |
| `data` | - | - | - | - |
| `email` | - | - | - | - |
| `id` | - | - | - | - |
| `success` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.User().create({
    "email": "example_email",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.User().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.User().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserConnectionEntity

```python
user_connection = client.UserConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No | The object of UserConnections |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserConnection().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserSettingEntity

```python
user_setting = client.UserSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserSetting().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | The array of Webhooks |
| `event_action` | `str` | Yes | The type of action to receive notifications about. |
| `event_object` | `str` | Yes | The type of object to receive notifications about. |
| `http_auth_password` | `str` | No | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `http_auth_user` | `str` | No | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The webhook's name |
| `subscription_url` | `str` | Yes | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `user_id` | `int` | No | The ID of the user that this webhook will be authorized with. |
| `version` | `str` | No | The webhook's version. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
    "event_action": "example_event_action",  # str
    "event_object": "example_event_object",  # str
    "name": "example_name",  # str
    "subscription_url": "example_subscription_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Webhook().list()
for webhook in results:
    print(webhook)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```python
client = PipedriveSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

