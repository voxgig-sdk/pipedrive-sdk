# Pipedrive Golang SDK Reference

Complete API reference for the Pipedrive Golang SDK.


## PipedriveSDK

### Constructor

```go
func NewPipedriveSDK(options map[string]any) *PipedriveSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *PipedriveSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *PipedriveSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `ActivityField(data map[string]any) PipedriveEntity`

Create a new `ActivityField` entity instance. Pass `nil` for no initial data.

#### `ActivityType(data map[string]any) PipedriveEntity`

Create a new `ActivityType` entity instance. Pass `nil` for no initial data.

#### `Billing(data map[string]any) PipedriveEntity`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `CallLog(data map[string]any) PipedriveEntity`

Create a new `CallLog` entity instance. Pass `nil` for no initial data.

#### `Channel(data map[string]any) PipedriveEntity`

Create a new `Channel` entity instance. Pass `nil` for no initial data.

#### `Currency(data map[string]any) PipedriveEntity`

Create a new `Currency` entity instance. Pass `nil` for no initial data.

#### `Deal(data map[string]any) PipedriveEntity`

Create a new `Deal` entity instance. Pass `nil` for no initial data.

#### `DealField(data map[string]any) PipedriveEntity`

Create a new `DealField` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) PipedriveEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Filter(data map[string]any) PipedriveEntity`

Create a new `Filter` entity instance. Pass `nil` for no initial data.

#### `Goal(data map[string]any) PipedriveEntity`

Create a new `Goal` entity instance. Pass `nil` for no initial data.

#### `Lead(data map[string]any) PipedriveEntity`

Create a new `Lead` entity instance. Pass `nil` for no initial data.

#### `LeadField(data map[string]any) PipedriveEntity`

Create a new `LeadField` entity instance. Pass `nil` for no initial data.

#### `LeadLabel(data map[string]any) PipedriveEntity`

Create a new `LeadLabel` entity instance. Pass `nil` for no initial data.

#### `LeadSource(data map[string]any) PipedriveEntity`

Create a new `LeadSource` entity instance. Pass `nil` for no initial data.

#### `LegacyTeam(data map[string]any) PipedriveEntity`

Create a new `LegacyTeam` entity instance. Pass `nil` for no initial data.

#### `Mailbox(data map[string]any) PipedriveEntity`

Create a new `Mailbox` entity instance. Pass `nil` for no initial data.

#### `Meeting(data map[string]any) PipedriveEntity`

Create a new `Meeting` entity instance. Pass `nil` for no initial data.

#### `Note(data map[string]any) PipedriveEntity`

Create a new `Note` entity instance. Pass `nil` for no initial data.

#### `NoteField(data map[string]any) PipedriveEntity`

Create a new `NoteField` entity instance. Pass `nil` for no initial data.

#### `Oauth(data map[string]any) PipedriveEntity`

Create a new `Oauth` entity instance. Pass `nil` for no initial data.

#### `Organization(data map[string]any) PipedriveEntity`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationField(data map[string]any) PipedriveEntity`

Create a new `OrganizationField` entity instance. Pass `nil` for no initial data.

#### `OrganizationRelationship(data map[string]any) PipedriveEntity`

Create a new `OrganizationRelationship` entity instance. Pass `nil` for no initial data.

#### `PermissionSet(data map[string]any) PipedriveEntity`

Create a new `PermissionSet` entity instance. Pass `nil` for no initial data.

#### `Person(data map[string]any) PipedriveEntity`

Create a new `Person` entity instance. Pass `nil` for no initial data.

#### `PersonField(data map[string]any) PipedriveEntity`

Create a new `PersonField` entity instance. Pass `nil` for no initial data.

#### `Pipeline(data map[string]any) PipedriveEntity`

Create a new `Pipeline` entity instance. Pass `nil` for no initial data.

#### `Product(data map[string]any) PipedriveEntity`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductField(data map[string]any) PipedriveEntity`

Create a new `ProductField` entity instance. Pass `nil` for no initial data.

#### `Project(data map[string]any) PipedriveEntity`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectBoard(data map[string]any) PipedriveEntity`

Create a new `ProjectBoard` entity instance. Pass `nil` for no initial data.

#### `ProjectPhase(data map[string]any) PipedriveEntity`

Create a new `ProjectPhase` entity instance. Pass `nil` for no initial data.

#### `ProjectTemplate(data map[string]any) PipedriveEntity`

Create a new `ProjectTemplate` entity instance. Pass `nil` for no initial data.

#### `Recent(data map[string]any) PipedriveEntity`

Create a new `Recent` entity instance. Pass `nil` for no initial data.

#### `Role(data map[string]any) PipedriveEntity`

Create a new `Role` entity instance. Pass `nil` for no initial data.

#### `Stage(data map[string]any) PipedriveEntity`

Create a new `Stage` entity instance. Pass `nil` for no initial data.

#### `Task(data map[string]any) PipedriveEntity`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) PipedriveEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserConnection(data map[string]any) PipedriveEntity`

Create a new `UserConnection` entity instance. Pass `nil` for no initial data.

#### `UserSetting(data map[string]any) PipedriveEntity`

Create a new `UserSetting` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) PipedriveEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActivityFieldEntity

```go
activityField := client.ActivityField(nil)
fmt.Println(activityField.GetName()) // "activity_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No | The additional data of the list |
| `data` | `[]any` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActivityField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActivityTypeEntity

```go
activityType := client.ActivityType(nil)
fmt.Println(activityType.GetName()) // "activity_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `[]any` | No | The array of activity types |
| `icon_key` | `string` | Yes | Icon graphic to use for representing this activity type |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the activity type |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActivityType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ActivityType(nil).Create(map[string]any{
    "icon_key": "example_icon_key",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ActivityType(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ActivityType(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillingEntity

```go
billing := client.Billing(nil)
fmt.Println(billing.GetName()) // "billing"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No | An array of add-ons that the company has. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Billing(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CallLogEntity

```go
callLog := client.CallLog(nil)
fmt.Println(callLog.GetName()) // "call_log"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_id` | `int` | No | If specified, this activity will be converted into a call log, with the information provided. |
| `company_id` | `int` | No | The company ID of the owner of the call log |
| `deal_id` | `int` | No | The ID of the deal this call is associated with. |
| `duration` | `string` | No | The duration of the call in seconds |
| `end_time` | `string` | Yes | The date and time of the end of the call in UTC. |
| `from_phone_number` | `string` | No | The number that made the call |
| `has_recording` | `bool` | No | If the call log has an audio recording attached, the value should be true |
| `id` | `string` | No | The call log ID, generated when the call log was created |
| `lead_id` | `string` | No | The ID of the lead in the UUID format this call is associated with. |
| `note` | `string` | No | The note for the call log in HTML format |
| `org_id` | `int` | No | The ID of the organization this call is associated with |
| `outcome` | `string` | Yes | Describes the outcome of the call |
| `person_id` | `int` | No | The ID of the person this call is associated with |
| `start_time` | `string` | Yes | The date and time of the start of the call in UTC. |
| `subject` | `string` | No | The name of the activity this call is attached to |
| `to_phone_number` | `string` | Yes | The number called |
| `user_id` | `int` | No | The ID of the owner of the call log. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CallLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CallLog(nil).Load(map[string]any{"id": "call_log_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CallLog(nil).Create(map[string]any{
    "end_time": "example_end_time",
    "outcome": "example_outcome",
    "start_time": "example_start_time",
    "to_phone_number": "example_to_phone_number",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CallLog(nil).Remove(map[string]any{"id": "call_log_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChannelEntity

```go
channel := client.Channel(nil)
fmt.Println(channel.GetName()) // "channel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `[]any` | No | The list of attachments available in the message |
| `avatar_url` | `string` | No | The URL for an icon that represents your channel |
| `channel_id` | `string` | Yes | The channel ID as in the provider |
| `conversation_id` | `string` | Yes | The ID of the conversation |
| `conversation_link` | `string` | No | A URL that can open the conversation in the provider's side |
| `created_at` | `string` | No | The date and time when your channel was created in the API |
| `id` | `string` | No | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `marketplace_client_id` | `string` | No | The client_id of your app in Pipedrive marketplace |
| `message` | `string` | Yes | The body of the message |
| `name` | `string` | No | The name of the channel |
| `pd_company_id` | `int` | No | The ID of the user's company in Pipedrive |
| `pd_user_id` | `int` | No | The ID of the user in Pipedrive |
| `provider_channel_id` | `string` | No | The channel ID you specified while creating the channel |
| `provider_type` | `string` | No | Value of the provider_type sent to this endpoint |
| `reply_by` | `string` | No | The date and time when the message can no longer receive a reply, in UTC. |
| `sender_id` | `string` | Yes | The ID of the provider's user that sent the message |
| `status` | `string` | Yes | The status of the message |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Channel(nil).Create(map[string]any{
    "channel_id": "example_channel_id",
    "conversation_id": "example_conversation_id",
    "message": "example_message",
    "sender_id": "example_sender_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Channel(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CurrencyEntity

```go
currency := client.Currency(nil)
fmt.Println(currency.GetName()) // "currency"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `bool` | No | Whether the currency is active or not |
| `code` | `string` | No | The code of the currency |
| `decimal_points` | `int` | No | The amount of decimal points of the currency |
| `id` | `int` | No | The ID of the currency |
| `is_custom_flag` | `bool` | No | Whether the currency is a custom one or not |
| `name` | `string` | No | The name of the currency |
| `symbol` | `string` | No | The symbol of the currency |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Currency(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CurrencyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DealEntity

```go
deal := client.Deal(nil)
fmt.Println(deal.GetName()) // "deal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deals` | `[]any` | No |  |
| `id` | `string` | No |  |
| `period_end` | `string` | No | The end date and time of the period |
| `period_start` | `string` | No | The start date and time of the period |
| `total_count` | `int` | No | The total number of deals |
| `total_currency_converted_value` | `float64` | No | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `string` | No | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `float64` | No | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `string` | No | The total weighted value of deals formatted with the company default currency. |
| `totals` | `map[string]any` | No | The total values of deals for the given period |
| `values_total` | `map[string]any` | No | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `map[string]any` | No | The total weighted values of the deals grouped by deal currency. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Deal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Deal(nil).Load(map[string]any{"amount": 1, "field_key": "field_key", "interval": "interval", "start_date": "start_date"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Deal(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Deal(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Deal(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DealEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DealFieldEntity

```go
dealField := client.DealField(nil)
fmt.Println(dealField.GetName()) // "deal_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `map[string]any` | No | The additional data of the list |
| `data` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `[]any` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DealField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DealField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DealField(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DealField(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DealField(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DealFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `bool` | No | Whether the user is active or not. |
| `activity_id` | `int` | No | The ID of the activity to associate the file with |
| `add_time` | `string` | No | The date and time when the file was added/created. |
| `cid` | `string` | No | The ID of the inline attachment |
| `deal_id` | `int` | No | The ID of the deal to associate the file with |
| `deal_name` | `string` | No | The name of the deal associated with the file |
| `description` | `string` | No | The description of the file |
| `file_name` | `string` | No | The original name of the file |
| `file_size` | `int` | No | The size of the file |
| `id` | `int` | No | The ID of the file |
| `inline_flag` | `bool` | No | Whether the file was uploaded as inline or not |
| `lead_id` | `string` | No | The ID of the lead to associate the file with |
| `lead_name` | `string` | No | The name of the lead associated with the file |
| `mail_message_id` | `string` | No | The ID of the mail message to associate the file with |
| `mail_template_id` | `string` | No | The ID of the mail template to associate the file with |
| `name` | `string` | No | The visible name of the file |
| `org_id` | `int` | No | The ID of the organization to associate the file with |
| `org_name` | `string` | No | The name of the organization associated with the file |
| `person_id` | `int` | No | The ID of the person to associate the file with |
| `person_name` | `string` | No | The name of the person associated with the file |
| `product_id` | `int` | No | The ID of the product to associate the file with |
| `product_name` | `string` | No | The name of the product associated with the file |
| `project_id` | `int` | No | The ID of the project to associate the file with |
| `project_name` | `string` | No | The name of the project associated with the file |
| `remote_id` | `string` | No | The ID of the remote item |
| `remote_location` | `string` | No | The location type to send the file to. |
| `s3_bucket` | `string` | No | The location of the cloud storage |
| `update_time` | `string` | No | The last updated date and time of the file. |
| `url` | `string` | No | The URL of the download file |
| `user_id` | `int` | No | The ID of the user to associate the file with |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.File(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.File(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.File(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.File(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FilterEntity

```go
filter := client.Filter(nil)
fmt.Println(filter.GetName()) // "filter"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `map[string]any` | Yes | The conditions of the filter as a JSON object. |
| `data` | `map[string]any` | No | The filter object including conditions |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the filter |
| `success` | `bool` | No | If the response is successful or not |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Filter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Filter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Filter(nil).Create(map[string]any{
    "conditions": map[string]any{},
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Filter(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Filter(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FilterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GoalEntity

```go
goal := client.Goal(nil)
fmt.Println(goal.GetName()) // "goal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `map[string]any` | Yes | Who this goal is assigned to. |
| `duration` | `map[string]any` | Yes | The date when the goal starts and ends. |
| `expected_outcome` | `map[string]any` | Yes | The expected outcome of the goal. |
| `goal` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `interval` | `string` | Yes | The interval of the goal |
| `title` | `string` | No | The title of the goal |
| `type` | `map[string]any` | Yes | The type of the goal. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Goal(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Goal(nil).Create(map[string]any{
    "assignee": map[string]any{},
    "duration": map[string]any{},
    "expected_outcome": map[string]any{},
    "interval": "example_interval",
    "type": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Goal(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Goal(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GoalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LeadEntity

```go
lead := client.Lead(nil)
fmt.Println(lead.GetName()) // "lead"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The date and time of when the lead was created. |
| `cc_email` | `string` | No | The BCC email of the lead |
| `channel` | `int` | No | The ID of your Marketing channel this Lead was created from. |
| `channel_id` | `string` | No | The optional ID to further distinguish the Marketing channel. |
| `creator_id` | `int` | No | The ID of the user who created the lead |
| `expected_close_date` | `string` | No | The date of when the deal which will be created from the lead is expected to be closed. |
| `id` | `string` | No | The unique ID of the lead in the UUID format |
| `is_archived` | `bool` | No | A flag indicating whether the lead is archived or not |
| `label_ids` | `[]any` | No | The IDs of the lead labels which are associated with the lead |
| `next_activity_id` | `int` | No | The ID of the next activity associated with the lead |
| `organization_id` | `int` | No | The ID of an organization which this lead is linked to |
| `origin` | `string` | No | The way this Lead was created. |
| `origin_id` | `string` | No | The optional ID to further distinguish the origin of the lead - e.g. |
| `owner_id` | `int` | No | The ID of the user who owns the lead |
| `person_id` | `int` | No | The ID of a person which this lead is linked to |
| `source_deal_id` | `int` | No | The ID of the deal if the lead was converted from a deal. |
| `source_name` | `string` | No | Defines where the lead comes from. |
| `title` | `string` | No | The title of the lead |
| `update_time` | `string` | No | The date and time of when the lead was last updated. |
| `value` | `map[string]any` | Yes | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | `string` | No | The visibility of the lead. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Lead(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Lead(nil).Load(map[string]any{"id": "lead_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Lead(nil).Create(map[string]any{
    "value": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Lead(nil).Update(map[string]any{
    "id": "lead_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Lead(nil).Remove(map[string]any{"id": "lead_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LeadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LeadFieldEntity

```go
leadField := client.LeadField(nil)
fmt.Println(leadField.GetName()) // "lead_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No | The additional data of the list |
| `data` | `[]any` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LeadField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LeadFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LeadLabelEntity

```go
leadLabel := client.LeadLabel(nil)
fmt.Println(leadLabel.GetName()) // "lead_label"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LeadLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LeadLabel(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LeadLabel(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LeadLabel(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LeadLabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LeadSourceEntity

```go
leadSource := client.LeadSource(nil)
fmt.Println(leadSource.GetName()) // "lead_source"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | The unique name of a lead source |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LeadSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LeadSourceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LegacyTeamEntity

```go
legacyTeam := client.LegacyTeam(nil)
fmt.Println(legacyTeam.GetName()) // "legacy_team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `description` | `string` | No | The team description |
| `id` | `string` | No |  |
| `manager_id` | `int` | Yes | The team manager ID |
| `name` | `string` | Yes | The team name |
| `success` | `bool` | No | If the response is successful or not |
| `users` | `[]any` | No | The list of user IDs |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LegacyTeam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LegacyTeam(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LegacyTeam(nil).Create(map[string]any{
    "manager_id": 1,
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LegacyTeam(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LegacyTeam(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LegacyTeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MailboxEntity

```go
mailbox := client.Mailbox(nil)
fmt.Println(mailbox.GetName()) // "mailbox"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No | The mail thread object |
| `id` | `string` | No |  |
| `service` | `string` | No | The service name of the response. |
| `statusCode` | `int` | No | The email service specific status code and it is returned through the response body. |
| `statusText` | `string` | No | The status text of the response. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Mailbox(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Mailbox(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Mailbox(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Mailbox(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MailboxEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MeetingEntity

```go
meeting := client.Meeting(nil)
fmt.Println(meeting.GetName()) // "meeting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Meeting(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Meeting(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NoteEntity

```go
note := client.Note(nil)
fmt.Println(note.GetName()) // "note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `bool` | No | Whether the note is active or deleted |
| `add_time` | `string` | No | The creation date and time of the note |
| `company_id` | `int` | No | The ID of the company |
| `content` | `string` | No | The content of the note in HTML format. |
| `deal` | `map[string]any` | No |  |
| `deal_id` | `int` | No | The ID of the deal the note is attached to |
| `id` | `int` | No | The ID of the note |
| `last_update_user_id` | `int` | No | The ID of the user who last updated the note |
| `lead_id` | `string` | No | The ID of the lead the note is attached to |
| `object_id` | `string` | No | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `string` | No | The type of object that the comment is attached to, will be "note" |
| `org_id` | `int` | No | The ID of the organization the note is attached to |
| `organization` | `map[string]any` | No | The organization the note is attached to |
| `person` | `map[string]any` | No | The person the note is attached to |
| `person_id` | `int` | No | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `bool` | No | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `bool` | No | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `bool` | No | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `bool` | No | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `bool` | No | If true, the results are filtered by note to task pinning state |
| `project` | `map[string]any` | No | The project the note is attached to |
| `project_id` | `int` | No | The ID of the project the note is attached to |
| `task` | `map[string]any` | No | The task the note is attached to |
| `task_id` | `int` | No | The ID of the task the note is attached to |
| `update_time` | `string` | No | The creation date and time of the note |
| `updater_id` | `int` | No | The ID of the user who last updated the comment |
| `user` | `map[string]any` | No | The user who created the note |
| `user_id` | `int` | No | The ID of the user who created the comment |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Note(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Note(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Note(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Note(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Note(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NoteFieldEntity

```go
noteField := client.NoteField(nil)
fmt.Println(noteField.GetName()) // "note_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No | The additional data of the list |
| `data` | `[]any` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NoteField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NoteFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OauthEntity

```go
oauth := client.Oauth(nil)
fmt.Println(oauth.GetName()) // "oauth"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Oauth(nil).Load(map[string]any{"client_id": "client_id", "redirect_uri": "redirect_uri"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Oauth(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OauthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationEntity

```go
organization := client.Organization(nil)
fmt.Println(organization.GetName()) // "organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Organization(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Organization(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Organization(nil).Remove(map[string]any{"follower_id": 1, "id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationFieldEntity

```go
organizationField := client.OrganizationField(nil)
fmt.Println(organizationField.GetName()) // "organization_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `map[string]any` | No | The additional data of the list |
| `data` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `[]any` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationField(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationField(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OrganizationField(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationRelationshipEntity

```go
organizationRelationship := client.OrganizationRelationship(nil)
fmt.Println(organizationRelationship.GetName()) // "organization_relationship"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No | The additional data of the list |
| `data` | `any` | No | The array of organization relationships |
| `id` | `string` | No |  |
| `org_id` | `int` | No | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `int` | Yes | The linked organization in the relationship. |
| `rel_owner_org_id` | `int` | Yes | The owner of the relationship. |
| `related_objects` | `map[string]any` | No |  |
| `success` | `bool` | No | If the response is successful or not |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationRelationship(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationRelationship(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationRelationship(nil).Create(map[string]any{
    "rel_linked_org_id": 1,
    "rel_owner_org_id": 1,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationRelationship(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OrganizationRelationship(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationRelationshipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PermissionSetEntity

```go
permissionSet := client.PermissionSet(nil)
fmt.Println(permissionSet.GetName()) // "permission_set"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `string` | No | The app that permission set belongs to |
| `assignment_count` | `int` | No | The number of users assigned to this permission set |
| `contents` | `[]any` | No | A permission assigned to this permission set |
| `data` | `[]any` | No | The array of permission set |
| `description` | `string` | No | The description of the permission set |
| `id` | `string` | No | The ID of user permission set |
| `name` | `string` | No | The name of the permission set |
| `success` | `bool` | No | If the response is successful or not |
| `type` | `string` | No | The type of permission set |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PermissionSet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PermissionSet(nil).Load(map[string]any{"id": "permission_set_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PermissionSetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PersonEntity

```go
person := client.Person(nil)
fmt.Println(person.GetName()) // "person"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Person(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Person(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Person(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Person(nil).Remove(map[string]any{"follower_id": 1, "id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PersonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PersonFieldEntity

```go
personField := client.PersonField(nil)
fmt.Println(personField.GetName()) // "person_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `map[string]any` | No | The additional data of the list |
| `data` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `[]any` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PersonField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PersonField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PersonField(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PersonField(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PersonField(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PersonFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PipelineEntity

```go
pipeline := client.Pipeline(nil)
fmt.Println(pipeline.GetName()) // "pipeline"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Pipeline(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Pipeline(nil).Load(map[string]any{"id": 1, "end_date": "end_date", "start_date": "start_date"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PipelineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductEntity

```go
product := client.Product(nil)
fmt.Println(product.GetName()) // "product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Product(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Product(nil).Remove(map[string]any{"follower_id": 1, "id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductFieldEntity

```go
productField := client.ProductField(nil)
fmt.Println(productField.GetName()) // "product_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No |  |
| `field_type` | `string` | Yes | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the field |
| `options` | `[]any` | No | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProductField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProductField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProductField(nil).Create(map[string]any{
    "field_type": "example_field_type",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProductField(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProductField(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntity

```go
project := client.Project(nil)
fmt.Println(project.GetName()) // "project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No |  |
| `data` | `any` | No |  |
| `group_id` | `float64` | No | The ID of a group on a project board |
| `id` | `int` | No | The ID of the project, generated when the task was created |
| `phase_id` | `float64` | No | The ID of a phase on a project board |
| `success` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Project(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Project(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Project(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Project(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectBoardEntity

```go
projectBoard := client.ProjectBoard(nil)
fmt.Println(projectBoard.GetName()) // "project_board"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `map[string]any` | No |  |
| `data` | `map[string]any` | No |  |
| `id` | `int` | No | The ID of the project board |
| `name` | `string` | No | Name of a project board |
| `order_nr` | `float64` | No | The order of a board |
| `success` | `bool` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectBoard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectBoard(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectBoardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectPhaseEntity

```go
projectPhase := client.ProjectPhase(nil)
fmt.Println(projectPhase.GetName()) // "project_phase"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `map[string]any` | No |  |
| `board_id` | `float64` | No | The ID of the project board this phase is linked to |
| `data` | `map[string]any` | No |  |
| `id` | `int` | No | The ID of the project phase |
| `name` | `string` | No | Name of a project phase |
| `order_nr` | `float64` | No | The order of a phase |
| `success` | `bool` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectPhase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectPhase(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectPhaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectTemplateEntity

```go
projectTemplate := client.ProjectTemplate(nil)
fmt.Println(projectTemplate.GetName()) // "project_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the template in UTC. |
| `additional_data` | `map[string]any` | No |  |
| `data` | `any` | No |  |
| `description` | `string` | No | The description of a template |
| `id` | `float64` | No | The ID of a template |
| `owner_id` | `float64` | No | The ID of a template owner |
| `projects_board_id` | `float64` | No | The ID of the project board this template is associated with |
| `success` | `bool` | No |  |
| `title` | `string` | No | The title of a template |
| `update_time` | `string` | No | The update date and time of the template in UTC. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectTemplate(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RecentEntity

```go
recent := client.Recent(nil)
fmt.Println(recent.GetName()) // "recent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No |  |
| `data` | `[]any` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Recent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RoleEntity

```go
role := client.Role(nil)
fmt.Println(role.GetName()) // "role"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No | The additional data in the role |
| `data` | `any` | No | The details of the sub-role |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the role |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Role(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Role(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Role(nil).Create(map[string]any{
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Role(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Role(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RoleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StageEntity

```go
stage := client.Stage(nil)
fmt.Println(stage.GetName()) // "stage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Stage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TaskEntity

```go
task := client.Task(nil)
fmt.Println(task.GetName()) // "task"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `map[string]any` | No |  |
| `data` | `map[string]any` | No |  |
| `id` | `int` | No | The ID of the task, generated when the task was created |
| `success` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Task(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Task(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Task(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Task(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Task(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `[]any` | No | The access given to the user. |
| `active_flag` | `bool` | No | Whether the user is active or not. |
| `data` | `map[string]any` | No |  |
| `email` | `string` | Yes | The email of the user |
| `id` | `string` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.User(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.User(nil).Create(map[string]any{
    "email": "example_email",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.User(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserConnectionEntity

```go
userConnection := client.UserConnection(nil)
fmt.Println(userConnection.GetName()) // "user_connection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No | The object of UserConnections |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserConnection(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserSettingEntity

```go
userSetting := client.UserSetting(nil)
fmt.Println(userSetting.GetName()) // "user_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserSetting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No | The array of Webhooks |
| `event_action` | `string` | Yes | The type of action to receive notifications about. |
| `event_object` | `string` | Yes | The type of object to receive notifications about. |
| `http_auth_password` | `string` | No | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `http_auth_user` | `string` | No | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The webhook's name |
| `subscription_url` | `string` | Yes | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `user_id` | `int` | No | The ID of the user that this webhook will be authorized with. |
| `version` | `string` | No | The webhook's version. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "event_action": "example_event_action",
    "event_object": "example_event_object",
    "name": "example_name",
    "subscription_url": "example_subscription_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewPipedriveSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

