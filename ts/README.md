# Pipedrive TypeScript SDK



The TypeScript SDK for the Pipedrive API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.ActivityField()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/pipedrive-sdk/releases](https://github.com/voxgig-sdk/pipedrive-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { PipedriveSDK } from '@voxgig-sdk/pipedrive'

const client = new PipedriveSDK({
  apikey: process.env.PIPEDRIVE_APIKEY,
  secret: process.env.PIPEDRIVE_SECRET,
})
```

### 2. List activityfield records

`list()` resolves to an array of ActivityField ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const activityfields = await client.ActivityField().list()

for (const activityfield of activityfields) {
  console.log(activityfield)
}
```

### 3. Load a deal

Deal is nested under amount, so provide the `amount`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const deal = await client.Deal().load({
    amount: 1,
    field_key: 'example_field_key',
    interval: 'example_interval',
    start_date: 'example_start_date',
  })
  console.log(deal)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const mailboxs = await client.Mailbox().list()
  console.log(mailboxs)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = PipedriveSDK.test()

const mailbox = await client.Mailbox().list()
// mailbox is the entity, populated with mock response data
// — call mailbox.data() for the record itself
console.log(mailbox)
```

You can also use the instance method:

```ts
const client = new PipedriveSDK({ apikey: '...', secret: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Mailbox()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new PipedriveSDK({
  apikey: '...',
  secret: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
PIPEDRIVE_TEST_LIVE=TRUE
PIPEDRIVE_APIKEY=<your-key>
PIPEDRIVE_SECRET=<your-secret>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### PipedriveSDK

#### Constructor

```ts
new PipedriveSDK(options?: {
  apikey?: string
  secret?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `secret` | `string` | API secret for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `ActivityField(data?)` | `ActivityFieldEntity` | Create an ActivityField entity instance. |
| `ActivityType(data?)` | `ActivityTypeEntity` | Create an ActivityType entity instance. |
| `Billing(data?)` | `BillingEntity` | Create a Billing entity instance. |
| `CallLog(data?)` | `CallLogEntity` | Create a CallLog entity instance. |
| `Channel(data?)` | `ChannelEntity` | Create a Channel entity instance. |
| `Currency(data?)` | `CurrencyEntity` | Create a Currency entity instance. |
| `Deal(data?)` | `DealEntity` | Create a Deal entity instance. |
| `DealField(data?)` | `DealFieldEntity` | Create a DealField entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `Filter(data?)` | `FilterEntity` | Create a Filter entity instance. |
| `Goal(data?)` | `GoalEntity` | Create a Goal entity instance. |
| `Lead(data?)` | `LeadEntity` | Create a Lead entity instance. |
| `LeadField(data?)` | `LeadFieldEntity` | Create a LeadField entity instance. |
| `LeadLabel(data?)` | `LeadLabelEntity` | Create a LeadLabel entity instance. |
| `LeadSource(data?)` | `LeadSourceEntity` | Create a LeadSource entity instance. |
| `LegacyTeam(data?)` | `LegacyTeamEntity` | Create a LegacyTeam entity instance. |
| `Mailbox(data?)` | `MailboxEntity` | Create a Mailbox entity instance. |
| `Meeting(data?)` | `MeetingEntity` | Create a Meeting entity instance. |
| `Note(data?)` | `NoteEntity` | Create a Note entity instance. |
| `NoteField(data?)` | `NoteFieldEntity` | Create a NoteField entity instance. |
| `Oauth(data?)` | `OauthEntity` | Create an Oauth entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationField(data?)` | `OrganizationFieldEntity` | Create an OrganizationField entity instance. |
| `OrganizationRelationship(data?)` | `OrganizationRelationshipEntity` | Create an OrganizationRelationship entity instance. |
| `PermissionSet(data?)` | `PermissionSetEntity` | Create a PermissionSet entity instance. |
| `Person(data?)` | `PersonEntity` | Create a Person entity instance. |
| `PersonField(data?)` | `PersonFieldEntity` | Create a PersonField entity instance. |
| `Pipeline(data?)` | `PipelineEntity` | Create a Pipeline entity instance. |
| `Product(data?)` | `ProductEntity` | Create a Product entity instance. |
| `ProductField(data?)` | `ProductFieldEntity` | Create a ProductField entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `ProjectBoard(data?)` | `ProjectBoardEntity` | Create a ProjectBoard entity instance. |
| `ProjectPhase(data?)` | `ProjectPhaseEntity` | Create a ProjectPhase entity instance. |
| `ProjectTemplate(data?)` | `ProjectTemplateEntity` | Create a ProjectTemplate entity instance. |
| `Recent(data?)` | `RecentEntity` | Create a Recent entity instance. |
| `Role(data?)` | `RoleEntity` | Create a Role entity instance. |
| `Stage(data?)` | `StageEntity` | Create a Stage entity instance. |
| `Task(data?)` | `TaskEntity` | Create a Task entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserConnection(data?)` | `UserConnectionEntity` | Create an UserConnection entity instance. |
| `UserSetting(data?)` | `UserSettingEntity` | Create an UserSetting entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `tester(testopts?, sdkopts?)` | `PipedriveSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `PipedriveSDK.test(testopts?, sdkopts?)` | `PipedriveSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): PipedriveSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### ActivityField

| Field | Description |
| --- | --- |
| `additional_data` | The additional data of the list |
| `data` |  |
| `success` | If the response is successful or not |

Operations: list.

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

Operations: create, list, remove, update.

API path: `/activityTypes`

#### Billing

| Field | Description |
| --- | --- |
| `data` | An array of add-ons that the company has. |
| `success` | If the response is successful or not |

Operations: list.

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

Operations: create, list, load, remove.

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

Operations: create, remove.

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

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/leads`

#### LeadField

| Field | Description |
| --- | --- |
| `additional_data` | The additional data of the list |
| `data` |  |
| `success` | If the response is successful or not |

Operations: list.

API path: `/leadFields`

#### LeadLabel

| Field | Description |
| --- | --- |
| `add_time` | The date and time of when the lead label was created. |
| `color` | The color of the label. |
| `id` | The unique ID of the lead label |
| `name` | The name of the lead label |
| `update_time` | The date and time of when the lead label was last updated. |

Operations: create, list, remove, update.

API path: `/leadLabels`

#### LeadSource

| Field | Description |
| --- | --- |
| `name` | The unique name of a lead source |

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: list, load, remove, update.

API path: `/mailbox/mailThreads`

#### Meeting

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, remove.

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

Operations: create, list, load, remove, update.

API path: `/notes/{id}/comments`

#### NoteField

| Field | Description |
| --- | --- |
| `additional_data` | The additional data of the list |
| `data` |  |
| `success` | If the response is successful or not |

Operations: list.

API path: `/noteFields`

#### Oauth

| Field | Description |
| --- | --- |

Operations: create, load.

API path: `/oauth/token`

#### Organization

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: list, load.

API path: `/permissionSets/{id}/assignments`

#### Person

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/personFields`

#### Pipeline

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list, load.

API path: `/pipelines/{id}/deals`

#### Product

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, remove.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: list, load.

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

Operations: list, load.

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

Operations: list, load.

API path: `/projectTemplates`

#### Recent

| Field | Description |
| --- | --- |
| `additional_data` |  |
| `data` |  |
| `success` | If the response is successful or not |

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `/roles/{id}/assignments`

#### Stage

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/stages/{id}/deals`

#### Task

| Field | Description |
| --- | --- |
| `additional_data` |  |
| `data` |  |
| `id` | The ID of the task, generated when the task was created |
| `success` |  |

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

API path: `/users`

#### UserConnection

| Field | Description |
| --- | --- |
| `data` | The object of UserConnections |
| `success` | If the response is successful or not |

Operations: load.

API path: `/userConnections`

#### UserSetting

| Field | Description |
| --- | --- |
| `data` |  |
| `success` | If the response is successful or not |

Operations: load.

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

Operations: create, list, remove.

API path: `/webhooks`



## Entities


### ActivityField

Create an instance: `const activity_field = client.ActivityField()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `Record<string, any>` | The additional data of the list |
| `data` | `any[]` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```ts
const activity_fields = await client.ActivityField().list()
```


### ActivityType

Create an instance: `const activity_type = client.ActivityType()`

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
| `data` | `any[]` | The array of activity types |
| `icon_key` | `string` | Icon graphic to use for representing this activity type |
| `id` | `string` |  |
| `name` | `string` | The name of the activity type |
| `order_nr` | `number` | An order number for this activity type. |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```ts
const activity_types = await client.ActivityType().list()
```

#### Example: Create

```ts
const activity_type = await client.ActivityType().create({
  icon_key: 'example_icon_key',
  name: 'example_name',
})
```


### Billing

Create an instance: `const billing = client.Billing()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | An array of add-ons that the company has. |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```ts
const billings = await client.Billing().list()
```


### CallLog

Create an instance: `const call_log = client.CallLog()`

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

```ts
const call_log = await client.CallLog().load({ id: 'call_log_id' })
```

#### Example: List

```ts
const call_logs = await client.CallLog().list()
```

#### Example: Create

```ts
const call_log = await client.CallLog().create({
  end_time: 'example_end_time',
  outcome: 'example_outcome',
  start_time: 'example_start_time',
  to_phone_number: 'example_to_phone_number',
})
```


### Channel

Create an instance: `const channel = client.Channel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `any[]` | The list of attachments available in the message |
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

```ts
const channel = await client.Channel().create({
  channel_id: 'example_channel_id',
  conversation_id: 'example_conversation_id',
  message: 'example_message',
  sender_id: 'example_sender_id',
  status: 'example_status',
})
```


### Currency

Create an instance: `const currency = client.Currency()`

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

```ts
const currencys = await client.Currency().list()
```


### Deal

Create an instance: `const deal = client.Deal()`

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
| `deals` | `any[]` |  |
| `id` | `string` |  |
| `period_end` | `string` | The end date and time of the period |
| `period_start` | `string` | The start date and time of the period |
| `total_count` | `number` | The total number of deals |
| `total_currency_converted_value` | `number` | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `string` | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `number` | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `string` | The total weighted value of deals formatted with the company default currency. |
| `totals` | `Record<string, any>` | The total values of deals for the given period |
| `values_total` | `Record<string, any>` | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `Record<string, any>` | The total weighted values of the deals grouped by deal currency. |

#### Example: Load

```ts
const deal = await client.Deal().load({ amount: 1, field_key: 'field_key', interval: 'interval', start_date: 'start_date' })
```

#### Example: List

```ts
const deals = await client.Deal().list()
```

#### Example: Create

```ts
const deal = await client.Deal().create({
  id: 1,
})
```


### DealField

Create an instance: `const deal_field = client.DealField()`

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
| `additional_data` | `Record<string, any>` | The additional data of the list |
| `data` | `Record<string, any>` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `any[]` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const deal_field = await client.DealField().load({ id: 1 })
```

#### Example: List

```ts
const deal_fields = await client.DealField().list()
```

#### Example: Create

```ts
const deal_field = await client.DealField().create({
})
```


### File

Create an instance: `const file = client.File()`

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

```ts
const file = await client.File().load({ id: 1 })
```

#### Example: List

```ts
const files = await client.File().list()
```

#### Example: Create

```ts
const file = await client.File().create({
})
```


### Filter

Create an instance: `const filter = client.Filter()`

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
| `conditions` | `Record<string, any>` | The conditions of the filter as a JSON object. |
| `data` | `Record<string, any>` | The filter object including conditions |
| `id` | `string` |  |
| `name` | `string` | The name of the filter |
| `success` | `boolean` | If the response is successful or not |
| `type` | `string` | The type of filter to create |

#### Example: Load

```ts
const filter = await client.Filter().load({ id: 1 })
```

#### Example: List

```ts
const filters = await client.Filter().list()
```

#### Example: Create

```ts
const filter = await client.Filter().create({
  conditions: {},
  name: 'example_name',
  type: 'example_type',
})
```


### Goal

Create an instance: `const goal = client.Goal()`

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
| `assignee` | `Record<string, any>` | Who this goal is assigned to. |
| `duration` | `Record<string, any>` | The date when the goal starts and ends. |
| `expected_outcome` | `Record<string, any>` | The expected outcome of the goal. |
| `goal` | `Record<string, any>` |  |
| `id` | `string` |  |
| `interval` | `string` | The interval of the goal |
| `title` | `string` | The title of the goal |
| `type` | `Record<string, any>` | The type of the goal. |

#### Example: Load

```ts
const goal = await client.Goal().load()
```

#### Example: Create

```ts
const goal = await client.Goal().create({
  assignee: {},
  duration: {},
  expected_outcome: {},
  interval: 'example_interval',
  type: {},
})
```


### Lead

Create an instance: `const lead = client.Lead()`

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
| `label_ids` | `any[]` | The IDs of the lead labels which are associated with the lead |
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
| `value` | `Record<string, any>` | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | `string` | The visibility of the lead. |
| `was_seen` | `boolean` | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

#### Example: Load

```ts
const lead = await client.Lead().load({ id: 'lead_id' })
```

#### Example: List

```ts
const leads = await client.Lead().list()
```

#### Example: Create

```ts
const lead = await client.Lead().create({
  value: {},
})
```


### LeadField

Create an instance: `const lead_field = client.LeadField()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `Record<string, any>` | The additional data of the list |
| `data` | `any[]` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```ts
const lead_fields = await client.LeadField().list()
```


### LeadLabel

Create an instance: `const lead_label = client.LeadLabel()`

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

```ts
const lead_labels = await client.LeadLabel().list()
```

#### Example: Create

```ts
const lead_label = await client.LeadLabel().create({
})
```


### LeadSource

Create an instance: `const lead_source = client.LeadSource()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The unique name of a lead source |

#### Example: List

```ts
const lead_sources = await client.LeadSource().list()
```


### LegacyTeam

Create an instance: `const legacy_team = client.LegacyTeam()`

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
| `data` | `any[]` |  |
| `description` | `string` | The team description |
| `id` | `string` |  |
| `manager_id` | `number` | The team manager ID |
| `name` | `string` | The team name |
| `success` | `boolean` | If the response is successful or not |
| `users` | `any[]` | The list of user IDs |

#### Example: Load

```ts
const legacy_team = await client.LegacyTeam().load({ id: 1 })
```

#### Example: List

```ts
const legacy_teams = await client.LegacyTeam().list()
```

#### Example: Create

```ts
const legacy_team = await client.LegacyTeam().create({
  manager_id: 1,
  name: 'example_name',
})
```


### Mailbox

Create an instance: `const mailbox = client.Mailbox()`

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
| `data` | `Record<string, any>` | The mail thread object |
| `id` | `string` |  |
| `service` | `string` | The service name of the response. |
| `statusCode` | `number` | The email service specific status code and it is returned through the response body. |
| `statusText` | `string` | The status text of the response. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const mailbox = await client.Mailbox().load({ id: 1 })
```

#### Example: List

```ts
const mailboxs = await client.Mailbox().list({ mail_thread_id: 1 })
```


### Meeting

Create an instance: `const meeting = client.Meeting()`

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

```ts
const meeting = await client.Meeting().create({
})
```


### Note

Create an instance: `const note = client.Note()`

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
| `deal` | `Record<string, any>` |  |
| `deal_id` | `number` | The ID of the deal the note is attached to |
| `id` | `number` | The ID of the note |
| `last_update_user_id` | `number` | The ID of the user who last updated the note |
| `lead_id` | `string` | The ID of the lead the note is attached to |
| `object_id` | `string` | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `string` | The type of object that the comment is attached to, will be "note" |
| `org_id` | `number` | The ID of the organization the note is attached to |
| `organization` | `Record<string, any>` | The organization the note is attached to |
| `person` | `Record<string, any>` | The person the note is attached to |
| `person_id` | `number` | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `boolean` | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `boolean` | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `boolean` | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `boolean` | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `boolean` | If true, the results are filtered by note to task pinning state |
| `project` | `Record<string, any>` | The project the note is attached to |
| `project_id` | `number` | The ID of the project the note is attached to |
| `task` | `Record<string, any>` | The task the note is attached to |
| `task_id` | `number` | The ID of the task the note is attached to |
| `update_time` | `string` | The creation date and time of the note |
| `updater_id` | `number` | The ID of the user who last updated the comment |
| `user` | `Record<string, any>` | The user who created the note |
| `user_id` | `number` | The ID of the user who created the comment |
| `uuid` | `string` | The ID of the note |

#### Example: Load

```ts
const note = await client.Note().load({ id: 1 })
```

#### Example: List

```ts
const notes = await client.Note().list()
```

#### Example: Create

```ts
const note = await client.Note().create({
})
```


### NoteField

Create an instance: `const note_field = client.NoteField()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `Record<string, any>` | The additional data of the list |
| `data` | `any[]` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```ts
const note_fields = await client.NoteField().list()
```


### Oauth

Create an instance: `const oauth = client.Oauth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const oauth = await client.Oauth().load({ client_id: 'client_id', redirect_uri: 'redirect_uri' })
```

#### Example: Create

```ts
const oauth = await client.Oauth().create({
})
```


### Organization

Create an instance: `const organization = client.Organization()`

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

```ts
const organizations = await client.Organization().list({ id: 1 })
```

#### Example: Create

```ts
const organization = await client.Organization().create({
  id: 1,
})
```


### OrganizationField

Create an instance: `const organization_field = client.OrganizationField()`

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
| `additional_data` | `Record<string, any>` | The additional data of the list |
| `data` | `Record<string, any>` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `any[]` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const organization_field = await client.OrganizationField().load({ id: 1 })
```

#### Example: List

```ts
const organization_fields = await client.OrganizationField().list()
```

#### Example: Create

```ts
const organization_field = await client.OrganizationField().create({
})
```


### OrganizationRelationship

Create an instance: `const organization_relationship = client.OrganizationRelationship()`

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
| `additional_data` | `Record<string, any>` | The additional data of the list |
| `data` | `any` | The array of organization relationships |
| `id` | `string` |  |
| `org_id` | `number` | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `number` | The linked organization in the relationship. |
| `rel_owner_org_id` | `number` | The owner of the relationship. |
| `related_objects` | `Record<string, any>` |  |
| `success` | `boolean` | If the response is successful or not |
| `type` | `string` | The type of organization relationship |

#### Example: Load

```ts
const organization_relationship = await client.OrganizationRelationship().load({ id: 1 })
```

#### Example: List

```ts
const organization_relationships = await client.OrganizationRelationship().list({ org_id: 1 })
```

#### Example: Create

```ts
const organization_relationship = await client.OrganizationRelationship().create({
  rel_linked_org_id: 1,
  rel_owner_org_id: 1,
  type: 'example_type',
})
```


### PermissionSet

Create an instance: `const permission_set = client.PermissionSet()`

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
| `contents` | `any[]` | A permission assigned to this permission set |
| `data` | `any[]` | The array of permission set |
| `description` | `string` | The description of the permission set |
| `id` | `string` | The ID of user permission set |
| `name` | `string` | The name of the permission set |
| `success` | `boolean` | If the response is successful or not |
| `type` | `string` | The type of permission set |

#### Example: Load

```ts
const permission_set = await client.PermissionSet().load({ id: 'permission_set_id' })
```

#### Example: List

```ts
const permission_sets = await client.PermissionSet().list()
```


### Person

Create an instance: `const person = client.Person()`

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

```ts
const persons = await client.Person().list({ id: 1 })
```

#### Example: Create

```ts
const person = await client.Person().create({
  id: 1,
})
```


### PersonField

Create an instance: `const person_field = client.PersonField()`

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
| `additional_data` | `Record<string, any>` | The additional data of the list |
| `data` | `Record<string, any>` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `any[]` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const person_field = await client.PersonField().load({ id: 1 })
```

#### Example: List

```ts
const person_fields = await client.PersonField().list()
```

#### Example: Create

```ts
const person_field = await client.PersonField().create({
})
```


### Pipeline

Create an instance: `const pipeline = client.Pipeline()`

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

```ts
const pipeline = await client.Pipeline().load({ id: 1, end_date: 'end_date', start_date: 'start_date' })
```

#### Example: List

```ts
const pipelines = await client.Pipeline().list({ id: 1 })
```


### Product

Create an instance: `const product = client.Product()`

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

```ts
const products = await client.Product().list({ id: 1 })
```

#### Example: Create

```ts
const product = await client.Product().create({
  id: 1,
})
```


### ProductField

Create an instance: `const product_field = client.ProductField()`

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
| `data` | `Record<string, any>` |  |
| `field_type` | `string` | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `any[]` | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `success` | `boolean` |  |

#### Example: Load

```ts
const product_field = await client.ProductField().load({ id: 1 })
```

#### Example: List

```ts
const product_fields = await client.ProductField().list()
```

#### Example: Create

```ts
const product_field = await client.ProductField().create({
  field_type: 'example_field_type',
  name: 'example_name',
})
```


### Project

Create an instance: `const project = client.Project()`

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
| `additional_data` | `Record<string, any>` |  |
| `data` | `any` |  |
| `group_id` | `number` | The ID of a group on a project board |
| `id` | `number` | The ID of the project, generated when the task was created |
| `phase_id` | `number` | The ID of a phase on a project board |
| `success` | `boolean` |  |

#### Example: Load

```ts
const project = await client.Project().load({ id: 1 })
```

#### Example: List

```ts
const projects = await client.Project().list()
```

#### Example: Create

```ts
const project = await client.Project().create({
})
```


### ProjectBoard

Create an instance: `const project_board = client.ProjectBoard()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the board in UTC. |
| `additional_data` | `Record<string, any>` |  |
| `data` | `Record<string, any>` |  |
| `id` | `number` | The ID of the project board |
| `name` | `string` | Name of a project board |
| `order_nr` | `number` | The order of a board |
| `success` | `boolean` |  |
| `update_time` | `string` | The update date and time of the board in UTC. |

#### Example: Load

```ts
const project_board = await client.ProjectBoard().load({ id: 1 })
```

#### Example: List

```ts
const project_boards = await client.ProjectBoard().list()
```


### ProjectPhase

Create an instance: `const project_phase = client.ProjectPhase()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the board in UTC. |
| `additional_data` | `Record<string, any>` |  |
| `board_id` | `number` | The ID of the project board this phase is linked to |
| `data` | `Record<string, any>` |  |
| `id` | `number` | The ID of the project phase |
| `name` | `string` | Name of a project phase |
| `order_nr` | `number` | The order of a phase |
| `success` | `boolean` |  |
| `update_time` | `string` | The update date and time of the board in UTC. |

#### Example: Load

```ts
const project_phase = await client.ProjectPhase().load({ id: 1 })
```

#### Example: List

```ts
const project_phases = await client.ProjectPhase().list({ board_id: 1 })
```


### ProjectTemplate

Create an instance: `const project_template = client.ProjectTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the template in UTC. |
| `additional_data` | `Record<string, any>` |  |
| `data` | `any` |  |
| `description` | `string` | The description of a template |
| `id` | `number` | The ID of a template |
| `owner_id` | `number` | The ID of a template owner |
| `projects_board_id` | `number` | The ID of the project board this template is associated with |
| `success` | `boolean` |  |
| `title` | `string` | The title of a template |
| `update_time` | `string` | The update date and time of the template in UTC. |

#### Example: Load

```ts
const project_template = await client.ProjectTemplate().load({ id: 1 })
```

#### Example: List

```ts
const project_templates = await client.ProjectTemplate().list()
```


### Recent

Create an instance: `const recent = client.Recent()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `Record<string, any>` |  |
| `data` | `any[]` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: List

```ts
const recents = await client.Recent().list({ since_timestamp: "example" })
```


### Role

Create an instance: `const role = client.Role()`

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
| `additional_data` | `Record<string, any>` | The additional data in the role |
| `data` | `any` | The details of the sub-role |
| `id` | `string` |  |
| `name` | `string` | The name of the role |
| `parent_role_id` | `number` | The ID of the parent role |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const role = await client.Role().load({ id: 1 })
```

#### Example: List

```ts
const roles = await client.Role().list()
```

#### Example: Create

```ts
const role = await client.Role().create({
  name: 'example_name',
})
```


### Stage

Create an instance: `const stage = client.Stage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const stages = await client.Stage().list({ id: 1 })
```


### Task

Create an instance: `const task = client.Task()`

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
| `additional_data` | `Record<string, any>` |  |
| `data` | `Record<string, any>` |  |
| `id` | `number` | The ID of the task, generated when the task was created |
| `success` | `boolean` |  |

#### Example: Load

```ts
const task = await client.Task().load({ id: 1 })
```

#### Example: List

```ts
const tasks = await client.Task().list()
```

#### Example: Create

```ts
const task = await client.Task().create({
})
```


### User

Create an instance: `const user = client.User()`

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
| `access` | `any[]` | The access given to the user. |
| `active_flag` | `boolean` | Whether the user is active or not. |
| `data` | `Record<string, any>` |  |
| `email` | `string` | The email of the user |
| `id` | `string` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const user = await client.User().load({ id: 1 })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
  email: 'example_email',
})
```


### UserConnection

Create an instance: `const user_connection = client.UserConnection()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` | The object of UserConnections |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const user_connection = await client.UserConnection().load()
```


### UserSetting

Create an instance: `const user_setting = client.UserSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `success` | `boolean` | If the response is successful or not |

#### Example: Load

```ts
const user_setting = await client.UserSetting().load()
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | The array of Webhooks |
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

```ts
const webhooks = await client.Webhook().list()
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  event_action: 'example_event_action',
  event_object: 'example_event_object',
  name: 'example_name',
  subscription_url: 'example_subscription_url',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
pipedrive/
├── src/
│   ├── PipedriveSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { PipedriveSDK } from '@voxgig-sdk/pipedrive'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const mailbox = client.Mailbox()
await mailbox.list()

// mailbox.data() now returns the mailbox data from the last `list`
// mailbox.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
