# Pipedrive Lua SDK Reference

Complete API reference for the Pipedrive Lua SDK.


## PipedriveSDK

### Constructor

```lua
local sdk = require("pipedrive_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ActivityField(data)`

Create a new `ActivityField` entity instance. Pass `nil` for no initial data.

#### `ActivityType(data)`

Create a new `ActivityType` entity instance. Pass `nil` for no initial data.

#### `Billing(data)`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `CallLog(data)`

Create a new `CallLog` entity instance. Pass `nil` for no initial data.

#### `Channel(data)`

Create a new `Channel` entity instance. Pass `nil` for no initial data.

#### `Currency(data)`

Create a new `Currency` entity instance. Pass `nil` for no initial data.

#### `Deal(data)`

Create a new `Deal` entity instance. Pass `nil` for no initial data.

#### `DealField(data)`

Create a new `DealField` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Filter(data)`

Create a new `Filter` entity instance. Pass `nil` for no initial data.

#### `Goal(data)`

Create a new `Goal` entity instance. Pass `nil` for no initial data.

#### `Lead(data)`

Create a new `Lead` entity instance. Pass `nil` for no initial data.

#### `LeadField(data)`

Create a new `LeadField` entity instance. Pass `nil` for no initial data.

#### `LeadLabel(data)`

Create a new `LeadLabel` entity instance. Pass `nil` for no initial data.

#### `LeadSource(data)`

Create a new `LeadSource` entity instance. Pass `nil` for no initial data.

#### `LegacyTeam(data)`

Create a new `LegacyTeam` entity instance. Pass `nil` for no initial data.

#### `Mailbox(data)`

Create a new `Mailbox` entity instance. Pass `nil` for no initial data.

#### `Meeting(data)`

Create a new `Meeting` entity instance. Pass `nil` for no initial data.

#### `Note(data)`

Create a new `Note` entity instance. Pass `nil` for no initial data.

#### `NoteField(data)`

Create a new `NoteField` entity instance. Pass `nil` for no initial data.

#### `Oauth(data)`

Create a new `Oauth` entity instance. Pass `nil` for no initial data.

#### `Organization(data)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationField(data)`

Create a new `OrganizationField` entity instance. Pass `nil` for no initial data.

#### `OrganizationRelationship(data)`

Create a new `OrganizationRelationship` entity instance. Pass `nil` for no initial data.

#### `PermissionSet(data)`

Create a new `PermissionSet` entity instance. Pass `nil` for no initial data.

#### `Person(data)`

Create a new `Person` entity instance. Pass `nil` for no initial data.

#### `PersonField(data)`

Create a new `PersonField` entity instance. Pass `nil` for no initial data.

#### `Pipeline(data)`

Create a new `Pipeline` entity instance. Pass `nil` for no initial data.

#### `Product(data)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductField(data)`

Create a new `ProductField` entity instance. Pass `nil` for no initial data.

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectBoard(data)`

Create a new `ProjectBoard` entity instance. Pass `nil` for no initial data.

#### `ProjectPhase(data)`

Create a new `ProjectPhase` entity instance. Pass `nil` for no initial data.

#### `ProjectTemplate(data)`

Create a new `ProjectTemplate` entity instance. Pass `nil` for no initial data.

#### `Recent(data)`

Create a new `Recent` entity instance. Pass `nil` for no initial data.

#### `Role(data)`

Create a new `Role` entity instance. Pass `nil` for no initial data.

#### `Stage(data)`

Create a new `Stage` entity instance. Pass `nil` for no initial data.

#### `Task(data)`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserConnection(data)`

Create a new `UserConnection` entity instance. Pass `nil` for no initial data.

#### `UserSetting(data)`

Create a new `UserSetting` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActivityFieldEntity

```lua
local activity_field = client:ActivityField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No | The additional data of the list |
| `data` | `table` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActivityField():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActivityTypeEntity

```lua
local activity_type = client:ActivityType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `table` | No | The array of activity types |
| `icon_key` | `string` | Yes | Icon graphic to use for representing this activity type |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the activity type |
| `order_nr` | `number` | No | An order number for this activity type. |
| `success` | `boolean` | No | If the response is successful or not |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ActivityType():create({
  icon_key = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActivityType():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ActivityType():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ActivityType():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillingEntity

```lua
local billing = client:Billing(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | An array of add-ons that the company has. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Billing():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallLogEntity

```lua
local call_log = client:CallLog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_id` | `number` | No | If specified, this activity will be converted into a call log, with the information provided. |
| `company_id` | `number` | No | The company ID of the owner of the call log |
| `deal_id` | `number` | No | The ID of the deal this call is associated with. |
| `duration` | `string` | No | The duration of the call in seconds |
| `end_time` | `string` | Yes | The date and time of the end of the call in UTC. |
| `from_phone_number` | `string` | No | The number that made the call |
| `has_recording` | `boolean` | No | If the call log has an audio recording attached, the value should be true |
| `id` | `string` | No | The call log ID, generated when the call log was created |
| `lead_id` | `string` | No | The ID of the lead in the UUID format this call is associated with. |
| `note` | `string` | No | The note for the call log in HTML format |
| `org_id` | `number` | No | The ID of the organization this call is associated with |
| `outcome` | `string` | Yes | Describes the outcome of the call |
| `person_id` | `number` | No | The ID of the person this call is associated with |
| `start_time` | `string` | Yes | The date and time of the start of the call in UTC. |
| `subject` | `string` | No | The name of the activity this call is attached to |
| `to_phone_number` | `string` | Yes | The number called |
| `user_id` | `number` | No | The ID of the owner of the call log. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CallLog():create({
  end_time = --[[ string ]],
  outcome = --[[ string ]],
  start_time = --[[ string ]],
  to_phone_number = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CallLog():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CallLog():load({ id = "call_log_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CallLog():remove({ id = "call_log_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChannelEntity

```lua
local channel = client:Channel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `table` | No | The list of attachments available in the message |
| `avatar_url` | `string` | No | The URL for an icon that represents your channel |
| `channel_id` | `string` | Yes | The channel ID as in the provider |
| `conversation_id` | `string` | Yes | The ID of the conversation |
| `conversation_link` | `string` | No | A URL that can open the conversation in the provider's side |
| `created_at` | `string` | No | The date and time when your channel was created in the API |
| `id` | `string` | No | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `marketplace_client_id` | `string` | No | The client_id of your app in Pipedrive marketplace |
| `message` | `string` | Yes | The body of the message |
| `name` | `string` | No | The name of the channel |
| `pd_company_id` | `number` | No | The ID of the user's company in Pipedrive |
| `pd_user_id` | `number` | No | The ID of the user in Pipedrive |
| `provider_channel_id` | `string` | No | The channel ID you specified while creating the channel |
| `provider_type` | `string` | No | Value of the provider_type sent to this endpoint |
| `reply_by` | `string` | No | The date and time when the message can no longer receive a reply, in UTC. |
| `sender_id` | `string` | Yes | The ID of the provider's user that sent the message |
| `status` | `string` | Yes | The status of the message |
| `template_support` | `boolean` | No | Value of the template_support sent to this endpoint |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Channel():create({
  channel_id = --[[ string ]],
  conversation_id = --[[ string ]],
  message = --[[ string ]],
  sender_id = --[[ string ]],
  status = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Channel():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CurrencyEntity

```lua
local currency = client:Currency(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `boolean` | No | Whether the currency is active or not |
| `code` | `string` | No | The code of the currency |
| `decimal_points` | `number` | No | The amount of decimal points of the currency |
| `id` | `number` | No | The ID of the currency |
| `is_custom_flag` | `boolean` | No | Whether the currency is a custom one or not |
| `name` | `string` | No | The name of the currency |
| `symbol` | `string` | No | The symbol of the currency |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Currency():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CurrencyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DealEntity

```lua
local deal = client:Deal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deals` | `table` | No |  |
| `id` | `string` | No |  |
| `period_end` | `string` | No | The end date and time of the period |
| `period_start` | `string` | No | The start date and time of the period |
| `total_count` | `number` | No | The total number of deals |
| `total_currency_converted_value` | `number` | No | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `string` | No | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `number` | No | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `string` | No | The total weighted value of deals formatted with the company default currency. |
| `totals` | `table` | No | The total values of deals for the given period |
| `values_total` | `table` | No | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `table` | No | The total weighted values of the deals grouped by deal currency. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Deal():create({
  id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Deal():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Deal():load({ amount = 1, field_key = "field_key", interval = "interval", start_date = "start_date" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Deal():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Deal():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DealEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DealFieldEntity

```lua
local deal_field = client:DealField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `boolean` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `table` | No | The additional data of the list |
| `data` | `table` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `table` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DealField():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DealField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DealField():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DealField():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DealField():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DealFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `boolean` | No | Whether the user is active or not. |
| `activity_id` | `number` | No | The ID of the activity to associate the file with |
| `add_time` | `string` | No | The date and time when the file was added/created. |
| `cid` | `string` | No | The ID of the inline attachment |
| `deal_id` | `number` | No | The ID of the deal to associate the file with |
| `deal_name` | `string` | No | The name of the deal associated with the file |
| `description` | `string` | No | The description of the file |
| `file_name` | `string` | No | The original name of the file |
| `file_size` | `number` | No | The size of the file |
| `id` | `number` | No | The ID of the file |
| `inline_flag` | `boolean` | No | Whether the file was uploaded as inline or not |
| `lead_id` | `string` | No | The ID of the lead to associate the file with |
| `lead_name` | `string` | No | The name of the lead associated with the file |
| `mail_message_id` | `string` | No | The ID of the mail message to associate the file with |
| `mail_template_id` | `string` | No | The ID of the mail template to associate the file with |
| `name` | `string` | No | The visible name of the file |
| `org_id` | `number` | No | The ID of the organization to associate the file with |
| `org_name` | `string` | No | The name of the organization associated with the file |
| `person_id` | `number` | No | The ID of the person to associate the file with |
| `person_name` | `string` | No | The name of the person associated with the file |
| `product_id` | `number` | No | The ID of the product to associate the file with |
| `product_name` | `string` | No | The name of the product associated with the file |
| `project_id` | `number` | No | The ID of the project to associate the file with |
| `project_name` | `string` | No | The name of the project associated with the file |
| `remote_id` | `string` | No | The ID of the remote item |
| `remote_location` | `string` | No | The location type to send the file to. |
| `s3_bucket` | `string` | No | The location of the cloud storage |
| `update_time` | `string` | No | The last updated date and time of the file. |
| `url` | `string` | No | The URL of the download file |
| `user_id` | `number` | No | The ID of the user to associate the file with |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:File():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:File():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:File():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:File():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:File():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FilterEntity

```lua
local filter = client:Filter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `table` | Yes | The conditions of the filter as a JSON object. |
| `data` | `table` | No | The filter object including conditions |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the filter |
| `success` | `boolean` | No | If the response is successful or not |
| `type` | `string` | Yes | The type of filter to create |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Filter():create({
  conditions = --[[ table ]],
  name = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Filter():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Filter():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Filter():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Filter():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FilterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GoalEntity

```lua
local goal = client:Goal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `table` | Yes | Who this goal is assigned to. |
| `duration` | `table` | Yes | The date when the goal starts and ends. |
| `expected_outcome` | `table` | Yes | The expected outcome of the goal. |
| `goal` | `table` | No |  |
| `id` | `string` | No |  |
| `interval` | `string` | Yes | The interval of the goal |
| `title` | `string` | No | The title of the goal |
| `type` | `table` | Yes | The type of the goal. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Goal():create({
  assignee = --[[ table ]],
  duration = --[[ table ]],
  expected_outcome = --[[ table ]],
  interval = --[[ string ]],
  type = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Goal():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Goal():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Goal():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GoalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LeadEntity

```lua
local lead = client:Lead(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The date and time of when the lead was created. |
| `cc_email` | `string` | No | The BCC email of the lead |
| `channel` | `number` | No | The ID of your Marketing channel this Lead was created from. |
| `channel_id` | `string` | No | The optional ID to further distinguish the Marketing channel. |
| `creator_id` | `number` | No | The ID of the user who created the lead |
| `expected_close_date` | `string` | No | The date of when the deal which will be created from the lead is expected to be closed. |
| `id` | `string` | No | The unique ID of the lead in the UUID format |
| `is_archived` | `boolean` | No | A flag indicating whether the lead is archived or not |
| `label_ids` | `table` | No | The IDs of the lead labels which are associated with the lead |
| `next_activity_id` | `number` | No | The ID of the next activity associated with the lead |
| `organization_id` | `number` | No | The ID of an organization which this lead is linked to |
| `origin` | `string` | No | The way this Lead was created. |
| `origin_id` | `string` | No | The optional ID to further distinguish the origin of the lead - e.g. |
| `owner_id` | `number` | No | The ID of the user who owns the lead |
| `person_id` | `number` | No | The ID of a person which this lead is linked to |
| `source_deal_id` | `number` | No | The ID of the deal if the lead was converted from a deal. |
| `source_name` | `string` | No | Defines where the lead comes from. |
| `title` | `string` | No | The title of the lead |
| `update_time` | `string` | No | The date and time of when the lead was last updated. |
| `value` | `table` | Yes | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | `string` | No | The visibility of the lead. |
| `was_seen` | `boolean` | No | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Lead():create({
  value = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Lead():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Lead():load({ id = "lead_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Lead():remove({ id = "lead_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Lead():update({
  id = "lead_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LeadFieldEntity

```lua
local lead_field = client:LeadField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No | The additional data of the list |
| `data` | `table` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LeadField():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LeadLabelEntity

```lua
local lead_label = client:LeadLabel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The date and time of when the lead label was created. |
| `color` | `string` | No | The color of the label. |
| `id` | `string` | No | The unique ID of the lead label |
| `name` | `string` | No | The name of the lead label |
| `update_time` | `string` | No | The date and time of when the lead label was last updated. |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `add_time` | - | - | - | - |
| `color` | - | Yes | - | - |
| `id` | - | - | - | - |
| `name` | - | Yes | - | - |
| `update_time` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LeadLabel():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LeadLabel():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LeadLabel():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LeadLabel():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadLabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LeadSourceEntity

```lua
local lead_source = client:LeadSource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | The unique name of a lead source |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LeadSource():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LeadSourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LegacyTeamEntity

```lua
local legacy_team = client:LegacyTeam(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `description` | `string` | No | The team description |
| `id` | `string` | No |  |
| `manager_id` | `number` | Yes | The team manager ID |
| `name` | `string` | Yes | The team name |
| `success` | `boolean` | No | If the response is successful or not |
| `users` | `table` | No | The list of user IDs |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LegacyTeam():create({
  manager_id = --[[ number ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LegacyTeam():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LegacyTeam():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LegacyTeam():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LegacyTeam():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LegacyTeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MailboxEntity

```lua
local mailbox = client:Mailbox(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | The mail thread object |
| `id` | `string` | No |  |
| `service` | `string` | No | The service name of the response. |
| `statusCode` | `number` | No | The email service specific status code and it is returned through the response body. |
| `statusText` | `string` | No | The status text of the response. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Mailbox():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Mailbox():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Mailbox():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Mailbox():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MailboxEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MeetingEntity

```lua
local meeting = client:Meeting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Meeting():create({
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Meeting():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NoteEntity

```lua
local note = client:Note(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `boolean` | No | Whether the note is active or deleted |
| `add_time` | `string` | No | The creation date and time of the note |
| `company_id` | `number` | No | The ID of the company |
| `content` | `string` | No | The content of the note in HTML format. |
| `deal` | `table` | No |  |
| `deal_id` | `number` | No | The ID of the deal the note is attached to |
| `id` | `number` | No | The ID of the note |
| `last_update_user_id` | `number` | No | The ID of the user who last updated the note |
| `lead_id` | `string` | No | The ID of the lead the note is attached to |
| `object_id` | `string` | No | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `string` | No | The type of object that the comment is attached to, will be "note" |
| `org_id` | `number` | No | The ID of the organization the note is attached to |
| `organization` | `table` | No | The organization the note is attached to |
| `person` | `table` | No | The person the note is attached to |
| `person_id` | `number` | No | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `boolean` | No | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `boolean` | No | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `boolean` | No | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `boolean` | No | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `boolean` | No | If true, the results are filtered by note to task pinning state |
| `project` | `table` | No | The project the note is attached to |
| `project_id` | `number` | No | The ID of the project the note is attached to |
| `task` | `table` | No | The task the note is attached to |
| `task_id` | `number` | No | The ID of the task the note is attached to |
| `update_time` | `string` | No | The creation date and time of the note |
| `updater_id` | `number` | No | The ID of the user who last updated the comment |
| `user` | `table` | No | The user who created the note |
| `user_id` | `number` | No | The ID of the user who created the comment |
| `uuid` | `string` | No | The ID of the note |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Note():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Note():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Note():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Note():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Note():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NoteFieldEntity

```lua
local note_field = client:NoteField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No | The additional data of the list |
| `data` | `table` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NoteField():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NoteFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OauthEntity

```lua
local oauth = client:Oauth(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Oauth():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Oauth():load({ client_id = "client_id", redirect_uri = "redirect_uri" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OauthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationEntity

```lua
local organization = client:Organization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Organization():create({
  id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Organization():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Organization():remove({ follower_id = 1, id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Organization():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationFieldEntity

```lua
local organization_field = client:OrganizationField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `boolean` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `table` | No | The additional data of the list |
| `data` | `table` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `table` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationField():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationField():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OrganizationField():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationField():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationRelationshipEntity

```lua
local organization_relationship = client:OrganizationRelationship(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No | The additional data of the list |
| `data` | `any` | No | The array of organization relationships |
| `id` | `string` | No |  |
| `org_id` | `number` | No | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `number` | Yes | The linked organization in the relationship. |
| `rel_owner_org_id` | `number` | Yes | The owner of the relationship. |
| `related_objects` | `table` | No |  |
| `success` | `boolean` | No | If the response is successful or not |
| `type` | `string` | Yes | The type of organization relationship |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationRelationship():create({
  rel_linked_org_id = --[[ number ]],
  rel_owner_org_id = --[[ number ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationRelationship():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationRelationship():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OrganizationRelationship():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationRelationship():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationRelationshipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PermissionSetEntity

```lua
local permission_set = client:PermissionSet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `string` | No | The app that permission set belongs to |
| `assignment_count` | `number` | No | The number of users assigned to this permission set |
| `contents` | `table` | No | A permission assigned to this permission set |
| `data` | `table` | No | The array of permission set |
| `description` | `string` | No | The description of the permission set |
| `id` | `string` | No | The ID of user permission set |
| `name` | `string` | No | The name of the permission set |
| `success` | `boolean` | No | If the response is successful or not |
| `type` | `string` | No | The type of permission set |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PermissionSet():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PermissionSet():load({ id = "permission_set_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PermissionSetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PersonEntity

```lua
local person = client:Person(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Person():create({
  id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Person():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Person():remove({ follower_id = 1, id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Person():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PersonFieldEntity

```lua
local person_field = client:PersonField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `boolean` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `table` | No | The additional data of the list |
| `data` | `table` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `table` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PersonField():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PersonField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PersonField():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PersonField():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PersonField():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PipelineEntity

```lua
local pipeline = client:Pipeline(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Pipeline():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Pipeline():load({ id = 1, end_date = "end_date", start_date = "start_date" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PipelineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductEntity

```lua
local product = client:Product(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Product():create({
  id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Product():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Product():remove({ follower_id = 1, id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductFieldEntity

```lua
local product_field = client:ProductField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `field_type` | `string` | Yes | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the field |
| `options` | `table` | No | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `success` | `boolean` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProductField():create({
  field_type = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProductField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProductField():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProductField():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProductField():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntity

```lua
local project = client:Project(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No |  |
| `data` | `any` | No |  |
| `group_id` | `number` | No | The ID of a group on a project board |
| `id` | `number` | No | The ID of the project, generated when the task was created |
| `phase_id` | `number` | No | The ID of a phase on a project board |
| `success` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Project():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Project():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Project():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Project():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectBoardEntity

```lua
local project_board = client:ProjectBoard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `table` | No |  |
| `data` | `table` | No |  |
| `id` | `number` | No | The ID of the project board |
| `name` | `string` | No | Name of a project board |
| `order_nr` | `number` | No | The order of a board |
| `success` | `boolean` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectBoard():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectBoard():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBoardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectPhaseEntity

```lua
local project_phase = client:ProjectPhase(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `table` | No |  |
| `board_id` | `number` | No | The ID of the project board this phase is linked to |
| `data` | `table` | No |  |
| `id` | `number` | No | The ID of the project phase |
| `name` | `string` | No | Name of a project phase |
| `order_nr` | `number` | No | The order of a phase |
| `success` | `boolean` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectPhase():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectPhase():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectPhaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectTemplateEntity

```lua
local project_template = client:ProjectTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the template in UTC. |
| `additional_data` | `table` | No |  |
| `data` | `any` | No |  |
| `description` | `string` | No | The description of a template |
| `id` | `number` | No | The ID of a template |
| `owner_id` | `number` | No | The ID of a template owner |
| `projects_board_id` | `number` | No | The ID of the project board this template is associated with |
| `success` | `boolean` | No |  |
| `title` | `string` | No | The title of a template |
| `update_time` | `string` | No | The update date and time of the template in UTC. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectTemplate():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RecentEntity

```lua
local recent = client:Recent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No |  |
| `data` | `table` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Recent():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RoleEntity

```lua
local role = client:Role(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No | The additional data in the role |
| `data` | `any` | No | The details of the sub-role |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the role |
| `parent_role_id` | `number` | No | The ID of the parent role |
| `success` | `boolean` | No | If the response is successful or not |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Role():create({
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Role():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Role():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Role():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Role():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StageEntity

```lua
local stage = client:Stage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Stage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaskEntity

```lua
local task = client:Task(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `table` | No |  |
| `data` | `table` | No |  |
| `id` | `number` | No | The ID of the task, generated when the task was created |
| `success` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Task():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Task():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Task():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Task():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Task():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `table` | No | The access given to the user. |
| `active_flag` | `boolean` | No | Whether the user is active or not. |
| `data` | `table` | No |  |
| `email` | `string` | Yes | The email of the user |
| `id` | `string` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:User():create({
  email = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:User():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserConnectionEntity

```lua
local user_connection = client:UserConnection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | The object of UserConnections |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserConnection():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserSettingEntity

```lua
local user_setting = client:UserSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserSetting():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | The array of Webhooks |
| `event_action` | `string` | Yes | The type of action to receive notifications about. |
| `event_object` | `string` | Yes | The type of object to receive notifications about. |
| `http_auth_password` | `string` | No | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `http_auth_user` | `string` | No | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The webhook's name |
| `subscription_url` | `string` | Yes | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `user_id` | `number` | No | The ID of the user that this webhook will be authorized with. |
| `version` | `string` | No | The webhook's version. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  event_action = --[[ string ]],
  event_object = --[[ string ]],
  name = --[[ string ]],
  subscription_url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Webhook():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

