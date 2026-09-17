# Pipedrive PHP SDK Reference

Complete API reference for the Pipedrive PHP SDK.


## PipedriveSDK

### Constructor

```php
require_once __DIR__ . '/pipedrive_sdk.php';

$client = new PipedriveSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PipedriveSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = PipedriveSDK::test();
```


### Instance Methods

#### `ActivityField($data = null)`

Create a new `ActivityFieldEntity` instance. Pass `null` for no initial data.

#### `ActivityType($data = null)`

Create a new `ActivityTypeEntity` instance. Pass `null` for no initial data.

#### `Billing($data = null)`

Create a new `BillingEntity` instance. Pass `null` for no initial data.

#### `CallLog($data = null)`

Create a new `CallLogEntity` instance. Pass `null` for no initial data.

#### `Channel($data = null)`

Create a new `ChannelEntity` instance. Pass `null` for no initial data.

#### `Currency($data = null)`

Create a new `CurrencyEntity` instance. Pass `null` for no initial data.

#### `Deal($data = null)`

Create a new `DealEntity` instance. Pass `null` for no initial data.

#### `DealField($data = null)`

Create a new `DealFieldEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `Filter($data = null)`

Create a new `FilterEntity` instance. Pass `null` for no initial data.

#### `Goal($data = null)`

Create a new `GoalEntity` instance. Pass `null` for no initial data.

#### `Lead($data = null)`

Create a new `LeadEntity` instance. Pass `null` for no initial data.

#### `LeadField($data = null)`

Create a new `LeadFieldEntity` instance. Pass `null` for no initial data.

#### `LeadLabel($data = null)`

Create a new `LeadLabelEntity` instance. Pass `null` for no initial data.

#### `LeadSource($data = null)`

Create a new `LeadSourceEntity` instance. Pass `null` for no initial data.

#### `LegacyTeam($data = null)`

Create a new `LegacyTeamEntity` instance. Pass `null` for no initial data.

#### `Mailbox($data = null)`

Create a new `MailboxEntity` instance. Pass `null` for no initial data.

#### `Meeting($data = null)`

Create a new `MeetingEntity` instance. Pass `null` for no initial data.

#### `Note($data = null)`

Create a new `NoteEntity` instance. Pass `null` for no initial data.

#### `NoteField($data = null)`

Create a new `NoteFieldEntity` instance. Pass `null` for no initial data.

#### `Oauth($data = null)`

Create a new `OauthEntity` instance. Pass `null` for no initial data.

#### `Organization($data = null)`

Create a new `OrganizationEntity` instance. Pass `null` for no initial data.

#### `OrganizationField($data = null)`

Create a new `OrganizationFieldEntity` instance. Pass `null` for no initial data.

#### `OrganizationRelationship($data = null)`

Create a new `OrganizationRelationshipEntity` instance. Pass `null` for no initial data.

#### `PermissionSet($data = null)`

Create a new `PermissionSetEntity` instance. Pass `null` for no initial data.

#### `Person($data = null)`

Create a new `PersonEntity` instance. Pass `null` for no initial data.

#### `PersonField($data = null)`

Create a new `PersonFieldEntity` instance. Pass `null` for no initial data.

#### `Pipeline($data = null)`

Create a new `PipelineEntity` instance. Pass `null` for no initial data.

#### `Product($data = null)`

Create a new `ProductEntity` instance. Pass `null` for no initial data.

#### `ProductField($data = null)`

Create a new `ProductFieldEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `ProjectBoard($data = null)`

Create a new `ProjectBoardEntity` instance. Pass `null` for no initial data.

#### `ProjectPhase($data = null)`

Create a new `ProjectPhaseEntity` instance. Pass `null` for no initial data.

#### `ProjectTemplate($data = null)`

Create a new `ProjectTemplateEntity` instance. Pass `null` for no initial data.

#### `Recent($data = null)`

Create a new `RecentEntity` instance. Pass `null` for no initial data.

#### `Role($data = null)`

Create a new `RoleEntity` instance. Pass `null` for no initial data.

#### `Stage($data = null)`

Create a new `StageEntity` instance. Pass `null` for no initial data.

#### `Task($data = null)`

Create a new `TaskEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserConnection($data = null)`

Create a new `UserConnectionEntity` instance. Pass `null` for no initial data.

#### `UserSetting($data = null)`

Create a new `UserSettingEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): PipedriveUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActivityFieldEntity

```php
$activity_field = $client->ActivityField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No | The additional data of the list |
| `data` | `array` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActivityField()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityFieldEntity`

Create a new `ActivityFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActivityTypeEntity

```php
$activity_type = $client->ActivityType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `array` | No | The array of activity types |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ActivityType()->create([
  "icon_key" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActivityType()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ActivityType()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ActivityType()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityTypeEntity`

Create a new `ActivityTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillingEntity

```php
$billing = $client->Billing();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | An array of add-ons that the company has. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Billing()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillingEntity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallLogEntity

```php
$call_log = $client->CallLog();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CallLog()->create([
  "end_time" => null, // string
  "outcome" => null, // string
  "start_time" => null, // string
  "to_phone_number" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CallLog()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CallLog()->load(["id" => "call_log_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CallLog()->remove(["id" => "call_log_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallLogEntity`

Create a new `CallLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChannelEntity

```php
$channel = $client->Channel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `array` | No | The list of attachments available in the message |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Channel()->create([
  "channel_id" => null, // string
  "conversation_id" => null, // string
  "message" => null, // string
  "sender_id" => null, // string
  "status" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Channel()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChannelEntity`

Create a new `ChannelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CurrencyEntity

```php
$currency = $client->Currency();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Currency()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CurrencyEntity`

Create a new `CurrencyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DealEntity

```php
$deal = $client->Deal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deals` | `array` | No |  |
| `id` | `string` | No |  |
| `period_end` | `string` | No | The end date and time of the period |
| `period_start` | `string` | No | The start date and time of the period |
| `total_count` | `int` | No | The total number of deals |
| `total_currency_converted_value` | `float` | No | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `string` | No | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `float` | No | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `string` | No | The total weighted value of deals formatted with the company default currency. |
| `totals` | `array` | No | The total values of deals for the given period |
| `values_total` | `array` | No | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `array` | No | The total weighted values of the deals grouped by deal currency. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Deal()->create([
  "id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Deal()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Deal()->load(["amount" => 1, "field_key" => "field_key", "interval" => "interval", "start_date" => "start_date"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Deal()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Deal()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DealEntity`

Create a new `DealEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DealFieldEntity

```php
$deal_field = $client->DealField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `array` | No | The additional data of the list |
| `data` | `array` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `array` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DealField()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DealField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DealField()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DealField()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DealField()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DealFieldEntity`

Create a new `DealFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->File()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->File()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->File()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->File()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->File()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FilterEntity

```php
$filter = $client->Filter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `array` | Yes | The conditions of the filter as a JSON object. |
| `data` | `array` | No | The filter object including conditions |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Filter()->create([
  "conditions" => null, // array
  "name" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Filter()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Filter()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Filter()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Filter()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FilterEntity`

Create a new `FilterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GoalEntity

```php
$goal = $client->Goal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes | Who this goal is assigned to. |
| `duration` | `array` | Yes | The date when the goal starts and ends. |
| `expected_outcome` | `array` | Yes | The expected outcome of the goal. |
| `goal` | `array` | No |  |
| `id` | `string` | No |  |
| `interval` | `string` | Yes | The interval of the goal |
| `title` | `string` | No | The title of the goal |
| `type` | `array` | Yes | The type of the goal. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Goal()->create([
  "assignee" => null, // array
  "duration" => null, // array
  "expected_outcome" => null, // array
  "interval" => null, // string
  "type" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Goal()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Goal()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Goal()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GoalEntity`

Create a new `GoalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LeadEntity

```php
$lead = $client->Lead();
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
| `label_ids` | `array` | No | The IDs of the lead labels which are associated with the lead |
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
| `value` | `array` | Yes | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Lead()->create([
  "value" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Lead()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Lead()->load(["id" => "lead_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Lead()->remove(["id" => "lead_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Lead()->update([
  "id" => "lead_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LeadEntity`

Create a new `LeadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LeadFieldEntity

```php
$lead_field = $client->LeadField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No | The additional data of the list |
| `data` | `array` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LeadField()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LeadFieldEntity`

Create a new `LeadFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LeadLabelEntity

```php
$lead_label = $client->LeadLabel();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LeadLabel()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LeadLabel()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LeadLabel()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LeadLabel()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LeadLabelEntity`

Create a new `LeadLabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LeadSourceEntity

```php
$lead_source = $client->LeadSource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | The unique name of a lead source |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LeadSource()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LeadSourceEntity`

Create a new `LeadSourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LegacyTeamEntity

```php
$legacy_team = $client->LegacyTeam();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `description` | `string` | No | The team description |
| `id` | `string` | No |  |
| `manager_id` | `int` | Yes | The team manager ID |
| `name` | `string` | Yes | The team name |
| `success` | `bool` | No | If the response is successful or not |
| `users` | `array` | No | The list of user IDs |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LegacyTeam()->create([
  "manager_id" => null, // int
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LegacyTeam()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LegacyTeam()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LegacyTeam()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LegacyTeam()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LegacyTeamEntity`

Create a new `LegacyTeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MailboxEntity

```php
$mailbox = $client->Mailbox();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | The mail thread object |
| `id` | `string` | No |  |
| `service` | `string` | No | The service name of the response. |
| `statusCode` | `int` | No | The email service specific status code and it is returned through the response body. |
| `statusText` | `string` | No | The status text of the response. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Mailbox()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Mailbox()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Mailbox()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Mailbox()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MailboxEntity`

Create a new `MailboxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MeetingEntity

```php
$meeting = $client->Meeting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Meeting()->create([
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Meeting()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MeetingEntity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NoteEntity

```php
$note = $client->Note();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_flag` | `bool` | No | Whether the note is active or deleted |
| `add_time` | `string` | No | The creation date and time of the note |
| `company_id` | `int` | No | The ID of the company |
| `content` | `string` | No | The content of the note in HTML format. |
| `deal` | `array` | No |  |
| `deal_id` | `int` | No | The ID of the deal the note is attached to |
| `id` | `int` | No | The ID of the note |
| `last_update_user_id` | `int` | No | The ID of the user who last updated the note |
| `lead_id` | `string` | No | The ID of the lead the note is attached to |
| `object_id` | `string` | No | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `string` | No | The type of object that the comment is attached to, will be "note" |
| `org_id` | `int` | No | The ID of the organization the note is attached to |
| `organization` | `array` | No | The organization the note is attached to |
| `person` | `array` | No | The person the note is attached to |
| `person_id` | `int` | No | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `bool` | No | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `bool` | No | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `bool` | No | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `bool` | No | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `bool` | No | If true, the results are filtered by note to task pinning state |
| `project` | `array` | No | The project the note is attached to |
| `project_id` | `int` | No | The ID of the project the note is attached to |
| `task` | `array` | No | The task the note is attached to |
| `task_id` | `int` | No | The ID of the task the note is attached to |
| `update_time` | `string` | No | The creation date and time of the note |
| `updater_id` | `int` | No | The ID of the user who last updated the comment |
| `user` | `array` | No | The user who created the note |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Note()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Note()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Note()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Note()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Note()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NoteEntity`

Create a new `NoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NoteFieldEntity

```php
$note_field = $client->NoteField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No | The additional data of the list |
| `data` | `array` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NoteField()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NoteFieldEntity`

Create a new `NoteFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OauthEntity

```php
$oauth = $client->Oauth();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Oauth()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Oauth()->load(["client_id" => "client_id", "redirect_uri" => "redirect_uri"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OauthEntity`

Create a new `OauthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationEntity

```php
$organization = $client->Organization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Organization()->create([
  "id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Organization()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->remove(["follower_id" => 1, "id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Organization()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationEntity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationFieldEntity

```php
$organization_field = $client->OrganizationField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `array` | No | The additional data of the list |
| `data` | `array` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `array` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationField()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationField()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationField()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationField()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationFieldEntity`

Create a new `OrganizationFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationRelationshipEntity

```php
$organization_relationship = $client->OrganizationRelationship();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No | The additional data of the list |
| `data` | `mixed` | No | The array of organization relationships |
| `id` | `string` | No |  |
| `org_id` | `int` | No | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `int` | Yes | The linked organization in the relationship. |
| `rel_owner_org_id` | `int` | Yes | The owner of the relationship. |
| `related_objects` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationRelationship()->create([
  "rel_linked_org_id" => null, // int
  "rel_owner_org_id" => null, // int
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationRelationship()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationRelationship()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationRelationship()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationRelationship()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationRelationshipEntity`

Create a new `OrganizationRelationshipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PermissionSetEntity

```php
$permission_set = $client->PermissionSet();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `string` | No | The app that permission set belongs to |
| `assignment_count` | `int` | No | The number of users assigned to this permission set |
| `contents` | `array` | No | A permission assigned to this permission set |
| `data` | `array` | No | The array of permission set |
| `description` | `string` | No | The description of the permission set |
| `id` | `string` | No | The ID of user permission set |
| `name` | `string` | No | The name of the permission set |
| `success` | `bool` | No | If the response is successful or not |
| `type` | `string` | No | The type of permission set |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PermissionSet()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PermissionSet()->load(["id" => "permission_set_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PermissionSetEntity`

Create a new `PermissionSetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PersonEntity

```php
$person = $client->Person();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Person()->create([
  "id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Person()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Person()->remove(["follower_id" => 1, "id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Person()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PersonEntity`

Create a new `PersonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PersonFieldEntity

```php
$person_field = $client->PersonField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_visible_flag` | `bool` | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `array` | No | The additional data of the list |
| `data` | `array` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | The name of the field |
| `options` | `array` | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PersonField()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PersonField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PersonField()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PersonField()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PersonField()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PersonFieldEntity`

Create a new `PersonFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PipelineEntity

```php
$pipeline = $client->Pipeline();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Pipeline()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Pipeline()->load(["id" => 1, "end_date" => "end_date", "start_date" => "start_date"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PipelineEntity`

Create a new `PipelineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductEntity

```php
$product = $client->Product();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Product()->create([
  "id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Product()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Product()->remove(["follower_id" => 1, "id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductEntity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductFieldEntity

```php
$product_field = $client->ProductField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `field_type` | `string` | Yes | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the field |
| `options` | `array` | No | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProductField()->create([
  "field_type" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProductField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProductField()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProductField()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProductField()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductFieldEntity`

Create a new `ProductFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No |  |
| `data` | `mixed` | No |  |
| `group_id` | `float` | No | The ID of a group on a project board |
| `id` | `int` | No | The ID of the project, generated when the task was created |
| `phase_id` | `float` | No | The ID of a phase on a project board |
| `success` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Project()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectBoardEntity

```php
$project_board = $client->ProjectBoard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `array` | No |  |
| `data` | `array` | No |  |
| `id` | `int` | No | The ID of the project board |
| `name` | `string` | No | Name of a project board |
| `order_nr` | `float` | No | The order of a board |
| `success` | `bool` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectBoard()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectBoard()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectBoardEntity`

Create a new `ProjectBoardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectPhaseEntity

```php
$project_phase = $client->ProjectPhase();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the board in UTC. |
| `additional_data` | `array` | No |  |
| `board_id` | `float` | No | The ID of the project board this phase is linked to |
| `data` | `array` | No |  |
| `id` | `int` | No | The ID of the project phase |
| `name` | `string` | No | Name of a project phase |
| `order_nr` | `float` | No | The order of a phase |
| `success` | `bool` | No |  |
| `update_time` | `string` | No | The update date and time of the board in UTC. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectPhase()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectPhase()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectPhaseEntity`

Create a new `ProjectPhaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectTemplateEntity

```php
$project_template = $client->ProjectTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_time` | `string` | No | The creation date and time of the template in UTC. |
| `additional_data` | `array` | No |  |
| `data` | `mixed` | No |  |
| `description` | `string` | No | The description of a template |
| `id` | `float` | No | The ID of a template |
| `owner_id` | `float` | No | The ID of a template owner |
| `projects_board_id` | `float` | No | The ID of the project board this template is associated with |
| `success` | `bool` | No |  |
| `title` | `string` | No | The title of a template |
| `update_time` | `string` | No | The update date and time of the template in UTC. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectTemplate()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectTemplateEntity`

Create a new `ProjectTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RecentEntity

```php
$recent = $client->Recent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No |  |
| `data` | `array` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Recent()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RecentEntity`

Create a new `RecentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RoleEntity

```php
$role = $client->Role();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No | The additional data in the role |
| `data` | `mixed` | No | The details of the sub-role |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Role()->create([
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Role()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Role()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Role()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Role()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RoleEntity`

Create a new `RoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StageEntity

```php
$stage = $client->Stage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Stage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StageEntity`

Create a new `StageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaskEntity

```php
$task = $client->Task();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additional_data` | `array` | No |  |
| `data` | `array` | No |  |
| `id` | `int` | No | The ID of the task, generated when the task was created |
| `success` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Task()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Task()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Task()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Task()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Task()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaskEntity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `array` | No | The access given to the user. |
| `active_flag` | `bool` | No | Whether the user is active or not. |
| `data` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->User()->create([
  "email" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->User()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserConnectionEntity

```php
$user_connection = $client->UserConnection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | The object of UserConnections |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserConnection()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserConnectionEntity`

Create a new `UserConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserSettingEntity

```php
$user_setting = $client->UserSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `success` | `bool` | No | If the response is successful or not |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserSetting()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserSettingEntity`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | The array of Webhooks |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
  "event_action" => null, // string
  "event_object" => null, // string
  "name" => null, // string
  "subscription_url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Webhook()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new PipedriveSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

