# Pipedrive JavaScript SDK Reference

Complete API reference for the Pipedrive JavaScript SDK.


## PipedriveSDK

### Constructor

```ts
new PipedriveSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PipedriveSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = PipedriveSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `PipedriveSDK` instance in test mode.


### Instance Methods

#### `ActivityField(data?: object)`

Create a new `ActivityField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityFieldEntity` instance.

#### `ActivityType(data?: object)`

Create a new `ActivityType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityTypeEntity` instance.

#### `Billing(data?: object)`

Create a new `Billing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingEntity` instance.

#### `CallLog(data?: object)`

Create a new `CallLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallLogEntity` instance.

#### `Channel(data?: object)`

Create a new `Channel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChannelEntity` instance.

#### `Currency(data?: object)`

Create a new `Currency` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CurrencyEntity` instance.

#### `Deal(data?: object)`

Create a new `Deal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DealEntity` instance.

#### `DealField(data?: object)`

Create a new `DealField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DealFieldEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `Filter(data?: object)`

Create a new `Filter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FilterEntity` instance.

#### `Goal(data?: object)`

Create a new `Goal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GoalEntity` instance.

#### `Lead(data?: object)`

Create a new `Lead` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LeadEntity` instance.

#### `LeadField(data?: object)`

Create a new `LeadField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LeadFieldEntity` instance.

#### `LeadLabel(data?: object)`

Create a new `LeadLabel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LeadLabelEntity` instance.

#### `LeadSource(data?: object)`

Create a new `LeadSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LeadSourceEntity` instance.

#### `LegacyTeam(data?: object)`

Create a new `LegacyTeam` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LegacyTeamEntity` instance.

#### `Mailbox(data?: object)`

Create a new `Mailbox` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MailboxEntity` instance.

#### `Meeting(data?: object)`

Create a new `Meeting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MeetingEntity` instance.

#### `Note(data?: object)`

Create a new `Note` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NoteEntity` instance.

#### `NoteField(data?: object)`

Create a new `NoteField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NoteFieldEntity` instance.

#### `Oauth(data?: object)`

Create a new `Oauth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OauthEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `OrganizationField(data?: object)`

Create a new `OrganizationField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationFieldEntity` instance.

#### `OrganizationRelationship(data?: object)`

Create a new `OrganizationRelationship` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationRelationshipEntity` instance.

#### `PermissionSet(data?: object)`

Create a new `PermissionSet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PermissionSetEntity` instance.

#### `Person(data?: object)`

Create a new `Person` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonEntity` instance.

#### `PersonField(data?: object)`

Create a new `PersonField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonFieldEntity` instance.

#### `Pipeline(data?: object)`

Create a new `Pipeline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PipelineEntity` instance.

#### `Product(data?: object)`

Create a new `Product` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductEntity` instance.

#### `ProductField(data?: object)`

Create a new `ProductField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductFieldEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectBoard(data?: object)`

Create a new `ProjectBoard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectBoardEntity` instance.

#### `ProjectPhase(data?: object)`

Create a new `ProjectPhase` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectPhaseEntity` instance.

#### `ProjectTemplate(data?: object)`

Create a new `ProjectTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectTemplateEntity` instance.

#### `Recent(data?: object)`

Create a new `Recent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecentEntity` instance.

#### `Role(data?: object)`

Create a new `Role` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RoleEntity` instance.

#### `Stage(data?: object)`

Create a new `Stage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StageEntity` instance.

#### `Task(data?: object)`

Create a new `Task` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaskEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserConnection(data?: object)`

Create a new `UserConnection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserConnectionEntity` instance.

#### `UserSetting(data?: object)`

Create a new `UserSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserSettingEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `PipedriveSDK.test()`.

**Returns:** `PipedriveSDK` instance in test mode.


---

## ActivityFieldEntity

```ts
const activity_field = client.ActivityField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No | The additional data of the list |
| `data` | `Array` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActivityField().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActivityTypeEntity

```ts
const activity_type = client.ActivityType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `Array` | No | The array of activity types |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ActivityType().create({
  icon_key: 'example_icon_key',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActivityType().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ActivityType().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ActivityType().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingEntity

```ts
const billing = client.Billing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No | An array of add-ons that the company has. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Billing().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallLogEntity

```ts
const call_log = client.CallLog()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CallLog().create({
  end_time: 'example_end_time',
  outcome: 'example_outcome',
  start_time: 'example_start_time',
  to_phone_number: 'example_to_phone_number',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CallLog().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CallLog().load({ id: 'call_log_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CallLog().remove({ id: 'call_log_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChannelEntity

```ts
const channel = client.Channel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `Array` | No | The list of attachments available in the message |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Channel().create({
  channel_id: 'example_channel_id',
  conversation_id: 'example_conversation_id',
  message: 'example_message',
  sender_id: 'example_sender_id',
  status: 'example_status',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Channel().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CurrencyEntity

```ts
const currency = client.Currency()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Currency().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CurrencyEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DealEntity

```ts
const deal = client.Deal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deals` | `Array` | No |  |
| `id` | `string` | No |  |
| `period_end` | `string` | No | The end date and time of the period |
| `period_start` | `string` | No | The start date and time of the period |
| `total_count` | `number` | No | The total number of deals |
| `total_currency_converted_value` | `number` | No | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `string` | No | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `number` | No | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `string` | No | The total weighted value of deals formatted with the company default currency. |
| `totals` | `Object` | No | The total values of deals for the given period |
| `values_total` | `Object` | No | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `Object` | No | The total weighted values of the deals grouped by deal currency. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Deal().create({
  id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Deal().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Deal().load({ amount: 1, field_key: 'field_key', interval: 'interval', start_date: 'start_date' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Deal().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Deal().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DealEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DealFieldEntity

```ts
const deal_field = client.DealField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `boolean` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `Object` | No | The additional data of the list |
| `data` | `Object` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `Array` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DealField().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DealField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DealField().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DealField().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DealField().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DealFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.File().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.File().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.File().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.File().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.File().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FilterEntity

```ts
const filter = client.Filter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `Object` | Yes | The conditions of the filter as a JSON object. |
| `data` | `Object` | No | The filter object including conditions |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Filter().create({
  conditions: {},
  name: 'example_name',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Filter().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Filter().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Filter().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Filter().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FilterEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GoalEntity

```ts
const goal = client.Goal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Object` | Yes | Who this goal is assigned to. |
| `duration` | `Object` | Yes | The date when the goal starts and ends. |
| `expected_outcome` | `Object` | Yes | The expected outcome of the goal. |
| `goal` | `Object` | No |  |
| `id` | `string` | No |  |
| `interval` | `string` | Yes | The interval of the goal |
| `title` | `string` | No | The title of the goal |
| `type` | `Object` | Yes | The type of the goal. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Goal().create({
  assignee: {},
  duration: {},
  expected_outcome: {},
  interval: 'example_interval',
  type: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Goal().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Goal().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Goal().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GoalEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LeadEntity

```ts
const lead = client.Lead()
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
| `label_ids` | `Array` | No | The IDs of the lead labels which are associated with the lead |
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
| `value` | `Object` | Yes | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Lead().create({
  value: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Lead().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Lead().load({ id: 'lead_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Lead().remove({ id: 'lead_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Lead().update({
  id: 'lead_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LeadEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LeadFieldEntity

```ts
const lead_field = client.LeadField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No | The additional data of the list |
| `data` | `Array` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LeadField().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LeadFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LeadLabelEntity

```ts
const lead_label = client.LeadLabel()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LeadLabel().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LeadLabel().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LeadLabel().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LeadLabel().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LeadLabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LeadSourceEntity

```ts
const lead_source = client.LeadSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | The unique name of a lead source |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LeadSource().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LeadSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LegacyTeamEntity

```ts
const legacy_team = client.LegacyTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `description` | `string` | No | The team description |
| `id` | `string` | No |  |
| `manager_id` | `number` | Yes | The team manager ID |
| `name` | `string` | Yes | The team name |
| `success` | `boolean` | No | If the response is successful or not |
| `users` | `Array` | No | The list of user IDs |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LegacyTeam().create({
  manager_id: 1,
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LegacyTeam().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LegacyTeam().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LegacyTeam().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LegacyTeam().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LegacyTeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MailboxEntity

```ts
const mailbox = client.Mailbox()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Object` | No | The mail thread object |
| `id` | `string` | No |  |
| `service` | `string` | No | The service name of the response. |
| `statusCode` | `number` | No | The email service specific status code and it is returned through the response body. |
| `statusText` | `string` | No | The status text of the response. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Mailbox().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Mailbox().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Mailbox().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Mailbox().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MailboxEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MeetingEntity

```ts
const meeting = client.Meeting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Meeting().create({
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Meeting().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MeetingEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NoteEntity

```ts
const note = client.Note()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `boolean` | No | Whether the note is active or deleted |
| `add_time` | `string` | No | The creation date and time of the note |
| `company_id` | `number` | No | The ID of the company |
| `content` | `string` | No | The content of the note in HTML format. |
| `deal` | `Object` | No |  |
| `deal_id` | `number` | No | The ID of the deal the note is attached to |
| `id` | `number` | No | The ID of the note |
| `last_update_user_id` | `number` | No | The ID of the user who last updated the note |
| `lead_id` | `string` | No | The ID of the lead the note is attached to |
| `object_id` | `string` | No | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `string` | No | The type of object that the comment is attached to, will be "note" |
| `org_id` | `number` | No | The ID of the organization the note is attached to |
| `organization` | `Object` | No | The organization the note is attached to |
| `person` | `Object` | No | The person the note is attached to |
| `person_id` | `number` | No | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `boolean` | No | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `boolean` | No | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `boolean` | No | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `boolean` | No | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `boolean` | No | If true, the results are filtered by note to task pinning state |
| `project` | `Object` | No | The project the note is attached to |
| `project_id` | `number` | No | The ID of the project the note is attached to |
| `task` | `Object` | No | The task the note is attached to |
| `task_id` | `number` | No | The ID of the task the note is attached to |
| `update_time` | `string` | No | The creation date and time of the note |
| `updater_id` | `number` | No | The ID of the user who last updated the comment |
| `user` | `Object` | No | The user who created the note |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Note().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Note().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Note().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Note().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Note().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NoteFieldEntity

```ts
const note_field = client.NoteField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No | The additional data of the list |
| `data` | `Array` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NoteField().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NoteFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OauthEntity

```ts
const oauth = client.Oauth()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Oauth().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Oauth().load({ client_id: 'client_id', redirect_uri: 'redirect_uri' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OauthEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Organization().create({
  id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Organization().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Organization().remove({ follower_id: 1, id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Organization().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationFieldEntity

```ts
const organization_field = client.OrganizationField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `boolean` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `Object` | No | The additional data of the list |
| `data` | `Object` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `Array` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationField().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationField().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OrganizationField().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationField().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationRelationshipEntity

```ts
const organization_relationship = client.OrganizationRelationship()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No | The additional data of the list |
| `data` | `*` | No | The array of organization relationships |
| `id` | `string` | No |  |
| `org_id` | `number` | No | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `number` | Yes | The linked organization in the relationship. |
| `rel_owner_org_id` | `number` | Yes | The owner of the relationship. |
| `related_objects` | `Object` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationRelationship().create({
  rel_linked_org_id: 1,
  rel_owner_org_id: 1,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationRelationship().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationRelationship().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OrganizationRelationship().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationRelationship().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationRelationshipEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PermissionSetEntity

```ts
const permission_set = client.PermissionSet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `string` | No | The app that permission set belongs to |
| `assignment_count` | `number` | No | The number of users assigned to this permission set |
| `contents` | `Array` | No | A permission assigned to this permission set |
| `data` | `Array` | No | The array of permission set |
| `description` | `string` | No | The description of the permission set |
| `id` | `string` | No | The ID of user permission set |
| `name` | `string` | No | The name of the permission set |
| `success` | `boolean` | No | If the response is successful or not |
| `type` | `string` | No | The type of permission set |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PermissionSet().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PermissionSet().load({ id: 'permission_set_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PermissionSetEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonEntity

```ts
const person = client.Person()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Person().create({
  id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Person().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Person().remove({ follower_id: 1, id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Person().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonFieldEntity

```ts
const person_field = client.PersonField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `boolean` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `Object` | No | The additional data of the list |
| `data` | `Object` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `Array` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PersonField().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PersonField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PersonField().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PersonField().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PersonField().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PipelineEntity

```ts
const pipeline = client.Pipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Pipeline().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Pipeline().load({ id: 1, end_date: 'end_date', start_date: 'start_date' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PipelineEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductEntity

```ts
const product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Product().create({
  id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Product().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Product().remove({ follower_id: 1, id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductFieldEntity

```ts
const product_field = client.ProductField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Object` | No |  |
| `field_type` | `string` | Yes | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the field |
| `options` | `Array` | No | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProductField().create({
  field_type: 'example_field_type',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProductField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProductField().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProductField().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProductField().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No |  |
| `data` | `*` | No |  |
| `group_id` | `number` | No | The ID of a group on a project board |
| `id` | `number` | No | The ID of the project, generated when the task was created |
| `phase_id` | `number` | No | The ID of a phase on a project board |
| `success` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Project().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectBoardEntity

```ts
const project_board = client.ProjectBoard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `Object` | No |  |
| `data` | `Object` | No |  |
| `id` | `number` | No | The ID of the project board |
| `name` | `string` | No | Name of a project board |
| `order_nr` | `number` | No | The order of a board |
| `success` | `boolean` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectBoard().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectBoard().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectBoardEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectPhaseEntity

```ts
const project_phase = client.ProjectPhase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `Object` | No |  |
| `board_id` | `number` | No | The ID of the project board this phase is linked to |
| `data` | `Object` | No |  |
| `id` | `number` | No | The ID of the project phase |
| `name` | `string` | No | Name of a project phase |
| `order_nr` | `number` | No | The order of a phase |
| `success` | `boolean` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectPhase().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectPhase().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectPhaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectTemplateEntity

```ts
const project_template = client.ProjectTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the template in UTC. |
| `additional_data` | `Object` | No |  |
| `data` | `*` | No |  |
| `description` | `string` | No | The description of a template |
| `id` | `number` | No | The ID of a template |
| `owner_id` | `number` | No | The ID of a template owner |
| `projects_board_id` | `number` | No | The ID of the project board this template is associated with |
| `success` | `boolean` | No |  |
| `title` | `string` | No | The title of a template |
| `update_time` | `string` | No | The update date and time of the template in UTC. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectTemplate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectTemplate().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecentEntity

```ts
const recent = client.Recent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No |  |
| `data` | `Array` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Recent().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecentEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RoleEntity

```ts
const role = client.Role()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No | The additional data in the role |
| `data` | `*` | No | The details of the sub-role |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Role().create({
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Role().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Role().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Role().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Role().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StageEntity

```ts
const stage = client.Stage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Stage().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StageEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaskEntity

```ts
const task = client.Task()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `Object` | No |  |
| `data` | `Object` | No |  |
| `id` | `number` | No | The ID of the task, generated when the task was created |
| `success` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Task().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Task().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Task().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Task().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Task().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `Array` | No | The access given to the user. |
| `active_flag` | `boolean` | No | Whether the user is active or not. |
| `data` | `Object` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.User().create({
  email: 'example_email',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.User().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserConnectionEntity

```ts
const user_connection = client.UserConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Object` | No | The object of UserConnections |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserConnection().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserSettingEntity

```ts
const user_setting = client.UserSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Object` | No |  |
| `success` | `boolean` | No | If the response is successful or not |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserSetting().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No | The array of Webhooks |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
  event_action: 'example_event_action',
  event_object: 'example_event_object',
  name: 'example_name',
  subscription_url: 'example_subscription_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Webhook().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `PipedriveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new PipedriveSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

