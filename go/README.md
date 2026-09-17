# Pipedrive Golang SDK



The Golang SDK for the Pipedrive API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.ActivityField(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/pipedrive-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/pipedrive-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/pipedrive-sdk/go=../pipedrive-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/pipedrive-sdk/go"
)

func main() {
    client := sdk.NewPipedriveSDK(map[string]any{
        "apikey": os.Getenv("PIPEDRIVE_APIKEY"),
    })

    // List activityField records — the value is the array of records itself.
    activityFields, err := client.ActivityField(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range activityFields.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
mailboxs, err := client.Mailbox(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = mailboxs
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

mailbox, err := client.Mailbox(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(mailbox) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewPipedriveSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewPipedriveSDK

```go
func NewPipedriveSDK(options map[string]any) *PipedriveSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *PipedriveSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### PipedriveSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `ActivityField` | `(data map[string]any) PipedriveEntity` | Create an ActivityField entity instance. |
| `ActivityType` | `(data map[string]any) PipedriveEntity` | Create an ActivityType entity instance. |
| `Billing` | `(data map[string]any) PipedriveEntity` | Create a Billing entity instance. |
| `CallLog` | `(data map[string]any) PipedriveEntity` | Create a CallLog entity instance. |
| `Channel` | `(data map[string]any) PipedriveEntity` | Create a Channel entity instance. |
| `Currency` | `(data map[string]any) PipedriveEntity` | Create a Currency entity instance. |
| `Deal` | `(data map[string]any) PipedriveEntity` | Create a Deal entity instance. |
| `DealField` | `(data map[string]any) PipedriveEntity` | Create a DealField entity instance. |
| `File` | `(data map[string]any) PipedriveEntity` | Create a File entity instance. |
| `Filter` | `(data map[string]any) PipedriveEntity` | Create a Filter entity instance. |
| `Goal` | `(data map[string]any) PipedriveEntity` | Create a Goal entity instance. |
| `Lead` | `(data map[string]any) PipedriveEntity` | Create a Lead entity instance. |
| `LeadField` | `(data map[string]any) PipedriveEntity` | Create a LeadField entity instance. |
| `LeadLabel` | `(data map[string]any) PipedriveEntity` | Create a LeadLabel entity instance. |
| `LeadSource` | `(data map[string]any) PipedriveEntity` | Create a LeadSource entity instance. |
| `LegacyTeam` | `(data map[string]any) PipedriveEntity` | Create a LegacyTeam entity instance. |
| `Mailbox` | `(data map[string]any) PipedriveEntity` | Create a Mailbox entity instance. |
| `Meeting` | `(data map[string]any) PipedriveEntity` | Create a Meeting entity instance. |
| `Note` | `(data map[string]any) PipedriveEntity` | Create a Note entity instance. |
| `NoteField` | `(data map[string]any) PipedriveEntity` | Create a NoteField entity instance. |
| `Oauth` | `(data map[string]any) PipedriveEntity` | Create an Oauth entity instance. |
| `Organization` | `(data map[string]any) PipedriveEntity` | Create an Organization entity instance. |
| `OrganizationField` | `(data map[string]any) PipedriveEntity` | Create an OrganizationField entity instance. |
| `OrganizationRelationship` | `(data map[string]any) PipedriveEntity` | Create an OrganizationRelationship entity instance. |
| `PermissionSet` | `(data map[string]any) PipedriveEntity` | Create a PermissionSet entity instance. |
| `Person` | `(data map[string]any) PipedriveEntity` | Create a Person entity instance. |
| `PersonField` | `(data map[string]any) PipedriveEntity` | Create a PersonField entity instance. |
| `Pipeline` | `(data map[string]any) PipedriveEntity` | Create a Pipeline entity instance. |
| `Product` | `(data map[string]any) PipedriveEntity` | Create a Product entity instance. |
| `ProductField` | `(data map[string]any) PipedriveEntity` | Create a ProductField entity instance. |
| `Project` | `(data map[string]any) PipedriveEntity` | Create a Project entity instance. |
| `ProjectBoard` | `(data map[string]any) PipedriveEntity` | Create a ProjectBoard entity instance. |
| `ProjectPhase` | `(data map[string]any) PipedriveEntity` | Create a ProjectPhase entity instance. |
| `ProjectTemplate` | `(data map[string]any) PipedriveEntity` | Create a ProjectTemplate entity instance. |
| `Recent` | `(data map[string]any) PipedriveEntity` | Create a Recent entity instance. |
| `Role` | `(data map[string]any) PipedriveEntity` | Create a Role entity instance. |
| `Stage` | `(data map[string]any) PipedriveEntity` | Create a Stage entity instance. |
| `Task` | `(data map[string]any) PipedriveEntity` | Create a Task entity instance. |
| `User` | `(data map[string]any) PipedriveEntity` | Create an User entity instance. |
| `UserConnection` | `(data map[string]any) PipedriveEntity` | Create an UserConnection entity instance. |
| `UserSetting` | `(data map[string]any) PipedriveEntity` | Create an UserSetting entity instance. |
| `Webhook` | `(data map[string]any) PipedriveEntity` | Create a Webhook entity instance. |

### Entity interface (PipedriveEntity)

All entities implement the `PipedriveEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    activityField, err := client.ActivityField(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // activityField is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### ActivityField

| Field | Description |
| --- | --- |
| `"additional_data"` | The additional data of the list |
| `"data"` |  |
| `"success"` | If the response is successful or not |

Operations: List.

API path: `/activityFields`

#### ActivityType

| Field | Description |
| --- | --- |
| `"color"` | A designated color for the activity type in 6-character HEX format (e.g. |
| `"data"` | The array of activity types |
| `"icon_key"` | Icon graphic to use for representing this activity type |
| `"id"` |  |
| `"name"` | The name of the activity type |
| `"order_nr"` | An order number for this activity type. |
| `"success"` | If the response is successful or not |

Operations: Create, List, Remove, Update.

API path: `/activityTypes`

#### Billing

| Field | Description |
| --- | --- |
| `"data"` | An array of add-ons that the company has. |
| `"success"` | If the response is successful or not |

Operations: List.

API path: `/billing/subscriptions/addons`

#### CallLog

| Field | Description |
| --- | --- |
| `"activity_id"` | If specified, this activity will be converted into a call log, with the information provided. |
| `"company_id"` | The company ID of the owner of the call log |
| `"deal_id"` | The ID of the deal this call is associated with. |
| `"duration"` | The duration of the call in seconds |
| `"end_time"` | The date and time of the end of the call in UTC. |
| `"from_phone_number"` | The number that made the call |
| `"has_recording"` | If the call log has an audio recording attached, the value should be true |
| `"id"` | The call log ID, generated when the call log was created |
| `"lead_id"` | The ID of the lead in the UUID format this call is associated with. |
| `"note"` | The note for the call log in HTML format |
| `"org_id"` | The ID of the organization this call is associated with |
| `"outcome"` | Describes the outcome of the call |
| `"person_id"` | The ID of the person this call is associated with |
| `"start_time"` | The date and time of the start of the call in UTC. |
| `"subject"` | The name of the activity this call is attached to |
| `"to_phone_number"` | The number called |
| `"user_id"` | The ID of the owner of the call log. |

Operations: Create, List, Load, Remove.

API path: `/callLogs/{id}/recordings`

#### Channel

| Field | Description |
| --- | --- |
| `"attachments"` | The list of attachments available in the message |
| `"avatar_url"` | The URL for an icon that represents your channel |
| `"channel_id"` | The channel ID as in the provider |
| `"conversation_id"` | The ID of the conversation |
| `"conversation_link"` | A URL that can open the conversation in the provider's side |
| `"created_at"` | The date and time when your channel was created in the API |
| `"id"` | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `"marketplace_client_id"` | The client_id of your app in Pipedrive marketplace |
| `"message"` | The body of the message |
| `"name"` | The name of the channel |
| `"pd_company_id"` | The ID of the user's company in Pipedrive |
| `"pd_user_id"` | The ID of the user in Pipedrive |
| `"provider_channel_id"` | The channel ID you specified while creating the channel |
| `"provider_type"` | Value of the provider_type sent to this endpoint |
| `"reply_by"` | The date and time when the message can no longer receive a reply, in UTC. |
| `"sender_id"` | The ID of the provider's user that sent the message |
| `"status"` | The status of the message |
| `"template_support"` | Value of the template_support sent to this endpoint |

Operations: Create, Remove.

API path: `/channels`

#### Currency

| Field | Description |
| --- | --- |
| `"active_flag"` | Whether the currency is active or not |
| `"code"` | The code of the currency |
| `"decimal_points"` | The amount of decimal points of the currency |
| `"id"` | The ID of the currency |
| `"is_custom_flag"` | Whether the currency is a custom one or not |
| `"name"` | The name of the currency |
| `"symbol"` | The symbol of the currency |

Operations: List.

API path: `/currencies`

#### Deal

| Field | Description |
| --- | --- |
| `"deals"` |  |
| `"id"` |  |
| `"period_end"` | The end date and time of the period |
| `"period_start"` | The start date and time of the period |
| `"total_count"` | The total number of deals |
| `"total_currency_converted_value"` | The total value of deals converted into the company default currency |
| `"total_currency_converted_value_formatted"` | The total converted value of deals formatted with the company default currency. |
| `"total_weighted_currency_converted_value"` | The total weighted value of deals converted into the company default currency |
| `"total_weighted_currency_converted_value_formatted"` | The total weighted value of deals formatted with the company default currency. |
| `"totals"` | The total values of deals for the given period |
| `"values_total"` | The total values of the deals grouped by deal currency |
| `"weighted_values_total"` | The total weighted values of the deals grouped by deal currency. |

Operations: Create, List, Load, Remove, Update.

API path: `/deals/{id}/duplicate`

#### DealField

| Field | Description |
| --- | --- |
| `"add_visible_flag"` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `"additional_data"` | The additional data of the list |
| `"data"` |  |
| `"id"` |  |
| `"name"` | The name of the field |
| `"options"` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `"success"` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/dealFields`

#### File

| Field | Description |
| --- | --- |
| `"active_flag"` | Whether the user is active or not. |
| `"activity_id"` | The ID of the activity to associate the file with |
| `"add_time"` | The date and time when the file was added/created. |
| `"cid"` | The ID of the inline attachment |
| `"deal_id"` | The ID of the deal to associate the file with |
| `"deal_name"` | The name of the deal associated with the file |
| `"description"` | The description of the file |
| `"file_name"` | The original name of the file |
| `"file_size"` | The size of the file |
| `"id"` | The ID of the file |
| `"inline_flag"` | Whether the file was uploaded as inline or not |
| `"lead_id"` | The ID of the lead to associate the file with |
| `"lead_name"` | The name of the lead associated with the file |
| `"mail_message_id"` | The ID of the mail message to associate the file with |
| `"mail_template_id"` | The ID of the mail template to associate the file with |
| `"name"` | The visible name of the file |
| `"org_id"` | The ID of the organization to associate the file with |
| `"org_name"` | The name of the organization associated with the file |
| `"person_id"` | The ID of the person to associate the file with |
| `"person_name"` | The name of the person associated with the file |
| `"product_id"` | The ID of the product to associate the file with |
| `"product_name"` | The name of the product associated with the file |
| `"project_id"` | The ID of the project to associate the file with |
| `"project_name"` | The name of the project associated with the file |
| `"remote_id"` | The ID of the remote item |
| `"remote_location"` | The location type to send the file to. |
| `"s3_bucket"` | The location of the cloud storage |
| `"update_time"` | The last updated date and time of the file. |
| `"url"` | The URL of the download file |
| `"user_id"` | The ID of the user to associate the file with |

Operations: Create, List, Load, Remove, Update.

API path: `/files`

#### Filter

| Field | Description |
| --- | --- |
| `"conditions"` | The conditions of the filter as a JSON object. |
| `"data"` | The filter object including conditions |
| `"id"` |  |
| `"name"` | The name of the filter |
| `"success"` | If the response is successful or not |
| `"type"` | The type of filter to create |

Operations: Create, List, Load, Remove, Update.

API path: `/filters`

#### Goal

| Field | Description |
| --- | --- |
| `"assignee"` | Who this goal is assigned to. |
| `"duration"` | The date when the goal starts and ends. |
| `"expected_outcome"` | The expected outcome of the goal. |
| `"goal"` |  |
| `"id"` |  |
| `"interval"` | The interval of the goal |
| `"title"` | The title of the goal |
| `"type"` | The type of the goal. |

Operations: Create, Load, Remove, Update.

API path: `/goals`

#### Lead

| Field | Description |
| --- | --- |
| `"add_time"` | The date and time of when the lead was created. |
| `"cc_email"` | The BCC email of the lead |
| `"channel"` | The ID of your Marketing channel this Lead was created from. |
| `"channel_id"` | The optional ID to further distinguish the Marketing channel. |
| `"creator_id"` | The ID of the user who created the lead |
| `"expected_close_date"` | The date of when the deal which will be created from the lead is expected to be closed. |
| `"id"` | The unique ID of the lead in the UUID format |
| `"is_archived"` | A flag indicating whether the lead is archived or not |
| `"label_ids"` | The IDs of the lead labels which are associated with the lead |
| `"next_activity_id"` | The ID of the next activity associated with the lead |
| `"organization_id"` | The ID of an organization which this lead is linked to |
| `"origin"` | The way this Lead was created. |
| `"origin_id"` | The optional ID to further distinguish the origin of the lead - e.g. |
| `"owner_id"` | The ID of the user who owns the lead |
| `"person_id"` | The ID of a person which this lead is linked to |
| `"source_deal_id"` | The ID of the deal if the lead was converted from a deal. |
| `"source_name"` | Defines where the lead comes from. |
| `"title"` | The title of the lead |
| `"update_time"` | The date and time of when the lead was last updated. |
| `"value"` | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `"visible_to"` | The visibility of the lead. |
| `"was_seen"` | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

Operations: Create, List, Load, Remove, Update.

API path: `/leads`

#### LeadField

| Field | Description |
| --- | --- |
| `"additional_data"` | The additional data of the list |
| `"data"` |  |
| `"success"` | If the response is successful or not |

Operations: List.

API path: `/leadFields`

#### LeadLabel

| Field | Description |
| --- | --- |
| `"add_time"` | The date and time of when the lead label was created. |
| `"color"` | The color of the label. |
| `"id"` | The unique ID of the lead label |
| `"name"` | The name of the lead label |
| `"update_time"` | The date and time of when the lead label was last updated. |

Operations: Create, List, Remove, Update.

API path: `/leadLabels`

#### LeadSource

| Field | Description |
| --- | --- |
| `"name"` | The unique name of a lead source |

Operations: List.

API path: `/leadSources`

#### LegacyTeam

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"description"` | The team description |
| `"id"` |  |
| `"manager_id"` | The team manager ID |
| `"name"` | The team name |
| `"success"` | If the response is successful or not |
| `"users"` | The list of user IDs |

Operations: Create, List, Load, Remove, Update.

API path: `/legacyTeams/{id}/users`

#### Mailbox

| Field | Description |
| --- | --- |
| `"data"` | The mail thread object |
| `"id"` |  |
| `"service"` | The service name of the response. |
| `"statusCode"` | The email service specific status code and it is returned through the response body. |
| `"statusText"` | The status text of the response. |
| `"success"` | If the response is successful or not |

Operations: List, Load, Remove, Update.

API path: `/mailbox/mailThreads`

#### Meeting

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Remove.

API path: `/meetings/userProviderLinks`

#### Note

| Field | Description |
| --- | --- |
| `"active_flag"` | Whether the note is active or deleted |
| `"add_time"` | The creation date and time of the note |
| `"company_id"` | The ID of the company |
| `"content"` | The content of the note in HTML format. |
| `"deal"` |  |
| `"deal_id"` | The ID of the deal the note is attached to |
| `"id"` | The ID of the note |
| `"last_update_user_id"` | The ID of the user who last updated the note |
| `"lead_id"` | The ID of the lead the note is attached to |
| `"object_id"` | The ID of the object that the comment is attached to, will be the id of the note |
| `"object_type"` | The type of object that the comment is attached to, will be "note" |
| `"org_id"` | The ID of the organization the note is attached to |
| `"organization"` | The organization the note is attached to |
| `"person"` | The person the note is attached to |
| `"person_id"` | The ID of the person the note is attached to |
| `"pinned_to_deal_flag"` | If true, the results are filtered by note to deal pinning state |
| `"pinned_to_organization_flag"` | If true, the results are filtered by note to organization pinning state |
| `"pinned_to_person_flag"` | If true, the results are filtered by note to person pinning state |
| `"pinned_to_project_flag"` | If true, the results are filtered by note to project pinning state |
| `"pinned_to_task_flag"` | If true, the results are filtered by note to task pinning state |
| `"project"` | The project the note is attached to |
| `"project_id"` | The ID of the project the note is attached to |
| `"task"` | The task the note is attached to |
| `"task_id"` | The ID of the task the note is attached to |
| `"update_time"` | The creation date and time of the note |
| `"updater_id"` | The ID of the user who last updated the comment |
| `"user"` | The user who created the note |
| `"user_id"` | The ID of the user who created the comment |
| `"uuid"` | The ID of the note |

Operations: Create, List, Load, Remove, Update.

API path: `/notes/{id}/comments`

#### NoteField

| Field | Description |
| --- | --- |
| `"additional_data"` | The additional data of the list |
| `"data"` |  |
| `"success"` | If the response is successful or not |

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
| `"id"` |  |

Operations: Create, List, Remove, Update.

API path: `/organizations/{id}/followers`

#### OrganizationField

| Field | Description |
| --- | --- |
| `"add_visible_flag"` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `"additional_data"` | The additional data of the list |
| `"data"` |  |
| `"id"` |  |
| `"name"` | The name of the field |
| `"options"` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `"success"` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/organizationFields`

#### OrganizationRelationship

| Field | Description |
| --- | --- |
| `"additional_data"` | The additional data of the list |
| `"data"` | The array of organization relationships |
| `"id"` |  |
| `"org_id"` | The ID of the base organization for the returned calculated values |
| `"rel_linked_org_id"` | The linked organization in the relationship. |
| `"rel_owner_org_id"` | The owner of the relationship. |
| `"related_objects"` |  |
| `"success"` | If the response is successful or not |
| `"type"` | The type of organization relationship |

Operations: Create, List, Load, Remove, Update.

API path: `/organizationRelationships`

#### PermissionSet

| Field | Description |
| --- | --- |
| `"app"` | The app that permission set belongs to |
| `"assignment_count"` | The number of users assigned to this permission set |
| `"contents"` | A permission assigned to this permission set |
| `"data"` | The array of permission set |
| `"description"` | The description of the permission set |
| `"id"` | The ID of user permission set |
| `"name"` | The name of the permission set |
| `"success"` | If the response is successful or not |
| `"type"` | The type of permission set |

Operations: List, Load.

API path: `/permissionSets/{id}/assignments`

#### Person

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, List, Remove, Update.

API path: `/persons/{id}/followers`

#### PersonField

| Field | Description |
| --- | --- |
| `"add_visible_flag"` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `"additional_data"` | The additional data of the list |
| `"data"` |  |
| `"id"` |  |
| `"name"` | The name of the field |
| `"options"` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `"success"` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/personFields`

#### Pipeline

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List, Load.

API path: `/pipelines/{id}/deals`

#### Product

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, List, Remove.

API path: `/products/{id}/followers`

#### ProductField

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"field_type"` | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `"id"` |  |
| `"name"` | The name of the field |
| `"options"` | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/productFields`

#### Project

| Field | Description |
| --- | --- |
| `"additional_data"` |  |
| `"data"` |  |
| `"group_id"` | The ID of a group on a project board |
| `"id"` | The ID of the project, generated when the task was created |
| `"phase_id"` | The ID of a phase on a project board |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/projects/{id}/archive`

#### ProjectBoard

| Field | Description |
| --- | --- |
| `"add_time"` | The creation date and time of the board in UTC. |
| `"additional_data"` |  |
| `"data"` |  |
| `"id"` | The ID of the project board |
| `"name"` | Name of a project board |
| `"order_nr"` | The order of a board |
| `"success"` |  |
| `"update_time"` | The update date and time of the board in UTC. |

Operations: List, Load.

API path: `/projects/boards`

#### ProjectPhase

| Field | Description |
| --- | --- |
| `"add_time"` | The creation date and time of the board in UTC. |
| `"additional_data"` |  |
| `"board_id"` | The ID of the project board this phase is linked to |
| `"data"` |  |
| `"id"` | The ID of the project phase |
| `"name"` | Name of a project phase |
| `"order_nr"` | The order of a phase |
| `"success"` |  |
| `"update_time"` | The update date and time of the board in UTC. |

Operations: List, Load.

API path: `/projects/phases`

#### ProjectTemplate

| Field | Description |
| --- | --- |
| `"add_time"` | The creation date and time of the template in UTC. |
| `"additional_data"` |  |
| `"data"` |  |
| `"description"` | The description of a template |
| `"id"` | The ID of a template |
| `"owner_id"` | The ID of a template owner |
| `"projects_board_id"` | The ID of the project board this template is associated with |
| `"success"` |  |
| `"title"` | The title of a template |
| `"update_time"` | The update date and time of the template in UTC. |

Operations: List, Load.

API path: `/projectTemplates`

#### Recent

| Field | Description |
| --- | --- |
| `"additional_data"` |  |
| `"data"` |  |
| `"success"` | If the response is successful or not |

Operations: List.

API path: `/recents`

#### Role

| Field | Description |
| --- | --- |
| `"additional_data"` | The additional data in the role |
| `"data"` | The details of the sub-role |
| `"id"` |  |
| `"name"` | The name of the role |
| `"parent_role_id"` | The ID of the parent role |
| `"success"` | If the response is successful or not |

Operations: Create, List, Load, Remove, Update.

API path: `/roles/{id}/assignments`

#### Stage

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/stages/{id}/deals`

#### Task

| Field | Description |
| --- | --- |
| `"additional_data"` |  |
| `"data"` |  |
| `"id"` | The ID of the task, generated when the task was created |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/tasks`

#### User

| Field | Description |
| --- | --- |
| `"access"` | The access given to the user. |
| `"active_flag"` | Whether the user is active or not. |
| `"data"` |  |
| `"email"` | The email of the user |
| `"id"` |  |
| `"success"` | If the response is successful or not |

Operations: Create, List, Load, Update.

API path: `/users`

#### UserConnection

| Field | Description |
| --- | --- |
| `"data"` | The object of UserConnections |
| `"success"` | If the response is successful or not |

Operations: Load.

API path: `/userConnections`

#### UserSetting

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"success"` | If the response is successful or not |

Operations: Load.

API path: `/userSettings`

#### Webhook

| Field | Description |
| --- | --- |
| `"data"` | The array of Webhooks |
| `"event_action"` | The type of action to receive notifications about. |
| `"event_object"` | The type of object to receive notifications about. |
| `"http_auth_password"` | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `"http_auth_user"` | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `"id"` |  |
| `"name"` | The webhook's name |
| `"subscription_url"` | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `"user_id"` | The ID of the user that this webhook will be authorized with. |
| `"version"` | The webhook's version. |

Operations: Create, List, Remove.

API path: `/webhooks`



## Entities


### ActivityField

Create an instance: `activityField := client.ActivityField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` | The additional data of the list |
| `data` | `[]any` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```go
activityFields, err := client.ActivityField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activityFields) // the array of records
```


### ActivityType

Create an instance: `activityType := client.ActivityType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `string` | A designated color for the activity type in 6-character HEX format (e.g. |
| `data` | `[]any` | The array of activity types |
| `icon_key` | `string` | Icon graphic to use for representing this activity type |
| `id` | `string` |  |
| `name` | `string` | The name of the activity type |
| `order_nr` | `int` | An order number for this activity type. |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```go
activityTypes, err := client.ActivityType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activityTypes) // the array of records
```

#### Example: Create

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


### Billing

Create an instance: `billing := client.Billing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | An array of add-ons that the company has. |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```go
billings, err := client.Billing(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billings) // the array of records
```


### CallLog

Create an instance: `callLog := client.CallLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_id` | `int` | If specified, this activity will be converted into a call log, with the information provided. |
| `company_id` | `int` | The company ID of the owner of the call log |
| `deal_id` | `int` | The ID of the deal this call is associated with. |
| `duration` | `string` | The duration of the call in seconds |
| `end_time` | `string` | The date and time of the end of the call in UTC. |
| `from_phone_number` | `string` | The number that made the call |
| `has_recording` | `bool` | If the call log has an audio recording attached, the value should be true |
| `id` | `string` | The call log ID, generated when the call log was created |
| `lead_id` | `string` | The ID of the lead in the UUID format this call is associated with. |
| `note` | `string` | The note for the call log in HTML format |
| `org_id` | `int` | The ID of the organization this call is associated with |
| `outcome` | `string` | Describes the outcome of the call |
| `person_id` | `int` | The ID of the person this call is associated with |
| `start_time` | `string` | The date and time of the start of the call in UTC. |
| `subject` | `string` | The name of the activity this call is attached to |
| `to_phone_number` | `string` | The number called |
| `user_id` | `int` | The ID of the owner of the call log. |

#### Example: Load

```go
callLog, err := client.CallLog(nil).Load(map[string]any{"id": "call_log_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(callLog) // the loaded record
```

#### Example: List

```go
callLogs, err := client.CallLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(callLogs) // the array of records
```

#### Example: Create

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


### Channel

Create an instance: `channel := client.Channel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `[]any` | The list of attachments available in the message |
| `avatar_url` | `string` | The URL for an icon that represents your channel |
| `channel_id` | `string` | The channel ID as in the provider |
| `conversation_id` | `string` | The ID of the conversation |
| `conversation_link` | `string` | A URL that can open the conversation in the provider's side |
| `created_at` | `string` | The date and time when your channel was created in the API |
| `id` | `string` | The unique channel ID used internally in omnichannel-api and the frontend of the extension |
| `marketplace_client_id` | `string` | The client_id of your app in Pipedrive marketplace |
| `message` | `string` | The body of the message |
| `name` | `string` | The name of the channel |
| `pd_company_id` | `int` | The ID of the user's company in Pipedrive |
| `pd_user_id` | `int` | The ID of the user in Pipedrive |
| `provider_channel_id` | `string` | The channel ID you specified while creating the channel |
| `provider_type` | `string` | Value of the provider_type sent to this endpoint |
| `reply_by` | `string` | The date and time when the message can no longer receive a reply, in UTC. |
| `sender_id` | `string` | The ID of the provider's user that sent the message |
| `status` | `string` | The status of the message |
| `template_support` | `bool` | Value of the template_support sent to this endpoint |

#### Example: Create

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


### Currency

Create an instance: `currency := client.Currency(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `bool` | Whether the currency is active or not |
| `code` | `string` | The code of the currency |
| `decimal_points` | `int` | The amount of decimal points of the currency |
| `id` | `int` | The ID of the currency |
| `is_custom_flag` | `bool` | Whether the currency is a custom one or not |
| `name` | `string` | The name of the currency |
| `symbol` | `string` | The symbol of the currency |

#### Example: List

```go
currencys, err := client.Currency(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(currencys) // the array of records
```


### Deal

Create an instance: `deal := client.Deal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deals` | `[]any` |  |
| `id` | `string` |  |
| `period_end` | `string` | The end date and time of the period |
| `period_start` | `string` | The start date and time of the period |
| `total_count` | `int` | The total number of deals |
| `total_currency_converted_value` | `float64` | The total value of deals converted into the company default currency |
| `total_currency_converted_value_formatted` | `string` | The total converted value of deals formatted with the company default currency. |
| `total_weighted_currency_converted_value` | `float64` | The total weighted value of deals converted into the company default currency |
| `total_weighted_currency_converted_value_formatted` | `string` | The total weighted value of deals formatted with the company default currency. |
| `totals` | `map[string]any` | The total values of deals for the given period |
| `values_total` | `map[string]any` | The total values of the deals grouped by deal currency |
| `weighted_values_total` | `map[string]any` | The total weighted values of the deals grouped by deal currency. |

#### Example: Load

```go
deal, err := client.Deal(nil).Load(map[string]any{"amount": 1, "field_key": "field_key", "interval": "interval", "start_date": "start_date"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deal) // the loaded record
```

#### Example: List

```go
deals, err := client.Deal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deals) // the array of records
```

#### Example: Create

```go
result, err := client.Deal(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DealField

Create an instance: `dealField := client.DealField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `bool` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `map[string]any` | The additional data of the list |
| `data` | `map[string]any` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `[]any` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
dealField, err := client.DealField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dealField) // the loaded record
```

#### Example: List

```go
dealFields, err := client.DealField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dealFields) // the array of records
```

#### Example: Create

```go
result, err := client.DealField(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `bool` | Whether the user is active or not. |
| `activity_id` | `int` | The ID of the activity to associate the file with |
| `add_time` | `string` | The date and time when the file was added/created. |
| `cid` | `string` | The ID of the inline attachment |
| `deal_id` | `int` | The ID of the deal to associate the file with |
| `deal_name` | `string` | The name of the deal associated with the file |
| `description` | `string` | The description of the file |
| `file_name` | `string` | The original name of the file |
| `file_size` | `int` | The size of the file |
| `id` | `int` | The ID of the file |
| `inline_flag` | `bool` | Whether the file was uploaded as inline or not |
| `lead_id` | `string` | The ID of the lead to associate the file with |
| `lead_name` | `string` | The name of the lead associated with the file |
| `mail_message_id` | `string` | The ID of the mail message to associate the file with |
| `mail_template_id` | `string` | The ID of the mail template to associate the file with |
| `name` | `string` | The visible name of the file |
| `org_id` | `int` | The ID of the organization to associate the file with |
| `org_name` | `string` | The name of the organization associated with the file |
| `person_id` | `int` | The ID of the person to associate the file with |
| `person_name` | `string` | The name of the person associated with the file |
| `product_id` | `int` | The ID of the product to associate the file with |
| `product_name` | `string` | The name of the product associated with the file |
| `project_id` | `int` | The ID of the project to associate the file with |
| `project_name` | `string` | The name of the project associated with the file |
| `remote_id` | `string` | The ID of the remote item |
| `remote_location` | `string` | The location type to send the file to. |
| `s3_bucket` | `string` | The location of the cloud storage |
| `update_time` | `string` | The last updated date and time of the file. |
| `url` | `string` | The URL of the download file |
| `user_id` | `int` | The ID of the user to associate the file with |

#### Example: Load

```go
file, err := client.File(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(file) // the loaded record
```

#### Example: List

```go
files, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(files) // the array of records
```

#### Example: Create

```go
result, err := client.File(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Filter

Create an instance: `filter := client.Filter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `map[string]any` | The conditions of the filter as a JSON object. |
| `data` | `map[string]any` | The filter object including conditions |
| `id` | `string` |  |
| `name` | `string` | The name of the filter |
| `success` | `bool` | If the response is successful or not |
| `type` | `string` | The type of filter to create |

#### Example: Load

```go
filter, err := client.Filter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(filter) // the loaded record
```

#### Example: List

```go
filters, err := client.Filter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(filters) // the array of records
```

#### Example: Create

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


### Goal

Create an instance: `goal := client.Goal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` | Who this goal is assigned to. |
| `duration` | `map[string]any` | The date when the goal starts and ends. |
| `expected_outcome` | `map[string]any` | The expected outcome of the goal. |
| `goal` | `map[string]any` |  |
| `id` | `string` |  |
| `interval` | `string` | The interval of the goal |
| `title` | `string` | The title of the goal |
| `type` | `map[string]any` | The type of the goal. |

#### Example: Load

```go
goal, err := client.Goal(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(goal) // the loaded record
```

#### Example: Create

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


### Lead

Create an instance: `lead := client.Lead(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The date and time of when the lead was created. |
| `cc_email` | `string` | The BCC email of the lead |
| `channel` | `int` | The ID of your Marketing channel this Lead was created from. |
| `channel_id` | `string` | The optional ID to further distinguish the Marketing channel. |
| `creator_id` | `int` | The ID of the user who created the lead |
| `expected_close_date` | `string` | The date of when the deal which will be created from the lead is expected to be closed. |
| `id` | `string` | The unique ID of the lead in the UUID format |
| `is_archived` | `bool` | A flag indicating whether the lead is archived or not |
| `label_ids` | `[]any` | The IDs of the lead labels which are associated with the lead |
| `next_activity_id` | `int` | The ID of the next activity associated with the lead |
| `organization_id` | `int` | The ID of an organization which this lead is linked to |
| `origin` | `string` | The way this Lead was created. |
| `origin_id` | `string` | The optional ID to further distinguish the origin of the lead - e.g. |
| `owner_id` | `int` | The ID of the user who owns the lead |
| `person_id` | `int` | The ID of a person which this lead is linked to |
| `source_deal_id` | `int` | The ID of the deal if the lead was converted from a deal. |
| `source_name` | `string` | Defines where the lead comes from. |
| `title` | `string` | The title of the lead |
| `update_time` | `string` | The date and time of when the lead was last updated. |
| `value` | `map[string]any` | The potential value of the lead represented by a JSON object: `{ "amount": 200, "currency": "EUR" }`. |
| `visible_to` | `string` | The visibility of the lead. |
| `was_seen` | `bool` | A flag indicating whether the lead was seen by someone in the Pipedrive UI |

#### Example: Load

```go
lead, err := client.Lead(nil).Load(map[string]any{"id": "lead_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(lead) // the loaded record
```

#### Example: List

```go
leads, err := client.Lead(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(leads) // the array of records
```

#### Example: Create

```go
result, err := client.Lead(nil).Create(map[string]any{
    "value": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LeadField

Create an instance: `leadField := client.LeadField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` | The additional data of the list |
| `data` | `[]any` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```go
leadFields, err := client.LeadField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(leadFields) // the array of records
```


### LeadLabel

Create an instance: `leadLabel := client.LeadLabel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The date and time of when the lead label was created. |
| `color` | `string` | The color of the label. |
| `id` | `string` | The unique ID of the lead label |
| `name` | `string` | The name of the lead label |
| `update_time` | `string` | The date and time of when the lead label was last updated. |

#### Example: List

```go
leadLabels, err := client.LeadLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(leadLabels) // the array of records
```

#### Example: Create

```go
result, err := client.LeadLabel(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LeadSource

Create an instance: `leadSource := client.LeadSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The unique name of a lead source |

#### Example: List

```go
leadSources, err := client.LeadSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(leadSources) // the array of records
```


### LegacyTeam

Create an instance: `legacyTeam := client.LegacyTeam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `description` | `string` | The team description |
| `id` | `string` |  |
| `manager_id` | `int` | The team manager ID |
| `name` | `string` | The team name |
| `success` | `bool` | If the response is successful or not |
| `users` | `[]any` | The list of user IDs |

#### Example: Load

```go
legacyTeam, err := client.LegacyTeam(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(legacyTeam) // the loaded record
```

#### Example: List

```go
legacyTeams, err := client.LegacyTeam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(legacyTeams) // the array of records
```

#### Example: Create

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


### Mailbox

Create an instance: `mailbox := client.Mailbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` | The mail thread object |
| `id` | `string` |  |
| `service` | `string` | The service name of the response. |
| `statusCode` | `int` | The email service specific status code and it is returned through the response body. |
| `statusText` | `string` | The status text of the response. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
mailbox, err := client.Mailbox(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mailbox) // the loaded record
```

#### Example: List

```go
mailboxs, err := client.Mailbox(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(mailboxs) // the array of records
```


### Meeting

Create an instance: `meeting := client.Meeting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.Meeting(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Note

Create an instance: `note := client.Note(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_flag` | `bool` | Whether the note is active or deleted |
| `add_time` | `string` | The creation date and time of the note |
| `company_id` | `int` | The ID of the company |
| `content` | `string` | The content of the note in HTML format. |
| `deal` | `map[string]any` |  |
| `deal_id` | `int` | The ID of the deal the note is attached to |
| `id` | `int` | The ID of the note |
| `last_update_user_id` | `int` | The ID of the user who last updated the note |
| `lead_id` | `string` | The ID of the lead the note is attached to |
| `object_id` | `string` | The ID of the object that the comment is attached to, will be the id of the note |
| `object_type` | `string` | The type of object that the comment is attached to, will be "note" |
| `org_id` | `int` | The ID of the organization the note is attached to |
| `organization` | `map[string]any` | The organization the note is attached to |
| `person` | `map[string]any` | The person the note is attached to |
| `person_id` | `int` | The ID of the person the note is attached to |
| `pinned_to_deal_flag` | `bool` | If true, the results are filtered by note to deal pinning state |
| `pinned_to_organization_flag` | `bool` | If true, the results are filtered by note to organization pinning state |
| `pinned_to_person_flag` | `bool` | If true, the results are filtered by note to person pinning state |
| `pinned_to_project_flag` | `bool` | If true, the results are filtered by note to project pinning state |
| `pinned_to_task_flag` | `bool` | If true, the results are filtered by note to task pinning state |
| `project` | `map[string]any` | The project the note is attached to |
| `project_id` | `int` | The ID of the project the note is attached to |
| `task` | `map[string]any` | The task the note is attached to |
| `task_id` | `int` | The ID of the task the note is attached to |
| `update_time` | `string` | The creation date and time of the note |
| `updater_id` | `int` | The ID of the user who last updated the comment |
| `user` | `map[string]any` | The user who created the note |
| `user_id` | `int` | The ID of the user who created the comment |
| `uuid` | `string` | The ID of the note |

#### Example: Load

```go
note, err := client.Note(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(note) // the loaded record
```

#### Example: List

```go
notes, err := client.Note(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(notes) // the array of records
```

#### Example: Create

```go
result, err := client.Note(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### NoteField

Create an instance: `noteField := client.NoteField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` | The additional data of the list |
| `data` | `[]any` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```go
noteFields, err := client.NoteField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(noteFields) // the array of records
```


### Oauth

Create an instance: `oauth := client.Oauth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
oauth, err := client.Oauth(nil).Load(map[string]any{"client_id": "client_id", "redirect_uri": "redirect_uri"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(oauth) // the loaded record
```

#### Example: Create

```go
result, err := client.Oauth(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Organization

Create an instance: `organization := client.Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
organizations, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizations) // the array of records
```

#### Example: Create

```go
result, err := client.Organization(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationField

Create an instance: `organizationField := client.OrganizationField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `bool` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `map[string]any` | The additional data of the list |
| `data` | `map[string]any` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `[]any` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
organizationField, err := client.OrganizationField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationField) // the loaded record
```

#### Example: List

```go
organizationFields, err := client.OrganizationField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationFields) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationField(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationRelationship

Create an instance: `organizationRelationship := client.OrganizationRelationship(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` | The additional data of the list |
| `data` | `any` | The array of organization relationships |
| `id` | `string` |  |
| `org_id` | `int` | The ID of the base organization for the returned calculated values |
| `rel_linked_org_id` | `int` | The linked organization in the relationship. |
| `rel_owner_org_id` | `int` | The owner of the relationship. |
| `related_objects` | `map[string]any` |  |
| `success` | `bool` | If the response is successful or not |
| `type` | `string` | The type of organization relationship |

#### Example: Load

```go
organizationRelationship, err := client.OrganizationRelationship(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationRelationship) // the loaded record
```

#### Example: List

```go
organizationRelationships, err := client.OrganizationRelationship(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationRelationships) // the array of records
```

#### Example: Create

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


### PermissionSet

Create an instance: `permissionSet := client.PermissionSet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `string` | The app that permission set belongs to |
| `assignment_count` | `int` | The number of users assigned to this permission set |
| `contents` | `[]any` | A permission assigned to this permission set |
| `data` | `[]any` | The array of permission set |
| `description` | `string` | The description of the permission set |
| `id` | `string` | The ID of user permission set |
| `name` | `string` | The name of the permission set |
| `success` | `bool` | If the response is successful or not |
| `type` | `string` | The type of permission set |

#### Example: Load

```go
permissionSet, err := client.PermissionSet(nil).Load(map[string]any{"id": "permission_set_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(permissionSet) // the loaded record
```

#### Example: List

```go
permissionSets, err := client.PermissionSet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(permissionSets) // the array of records
```


### Person

Create an instance: `person := client.Person(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
persons, err := client.Person(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(persons) // the array of records
```

#### Example: Create

```go
result, err := client.Person(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PersonField

Create an instance: `personField := client.PersonField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_visible_flag` | `bool` | Whether the field is available in 'add new' modal or not (both in web and mobile app) |
| `additional_data` | `map[string]any` | The additional data of the list |
| `data` | `map[string]any` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `[]any` | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
personField, err := client.PersonField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(personField) // the loaded record
```

#### Example: List

```go
personFields, err := client.PersonField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(personFields) // the array of records
```

#### Example: Create

```go
result, err := client.PersonField(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Pipeline

Create an instance: `pipeline := client.Pipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
pipeline, err := client.Pipeline(nil).Load(map[string]any{"id": 1, "end_date": "end_date", "start_date": "start_date"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pipeline) // the loaded record
```

#### Example: List

```go
pipelines, err := client.Pipeline(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pipelines) // the array of records
```


### Product

Create an instance: `product := client.Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
products, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(products) // the array of records
```

#### Example: Create

```go
result, err := client.Product(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProductField

Create an instance: `productField := client.ProductField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `field_type` | `string` | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (… |
| `id` | `string` |  |
| `name` | `string` | The name of the field |
| `options` | `[]any` | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]` |
| `success` | `bool` |  |

#### Example: Load

```go
productField, err := client.ProductField(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(productField) // the loaded record
```

#### Example: List

```go
productFields, err := client.ProductField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(productFields) // the array of records
```

#### Example: Create

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


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` |  |
| `data` | `any` |  |
| `group_id` | `float64` | The ID of a group on a project board |
| `id` | `int` | The ID of the project, generated when the task was created |
| `phase_id` | `float64` | The ID of a phase on a project board |
| `success` | `bool` |  |

#### Example: Load

```go
project, err := client.Project(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(project) // the loaded record
```

#### Example: List

```go
projects, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projects) // the array of records
```

#### Example: Create

```go
result, err := client.Project(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectBoard

Create an instance: `projectBoard := client.ProjectBoard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the board in UTC. |
| `additional_data` | `map[string]any` |  |
| `data` | `map[string]any` |  |
| `id` | `int` | The ID of the project board |
| `name` | `string` | Name of a project board |
| `order_nr` | `float64` | The order of a board |
| `success` | `bool` |  |
| `update_time` | `string` | The update date and time of the board in UTC. |

#### Example: Load

```go
projectBoard, err := client.ProjectBoard(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectBoard) // the loaded record
```

#### Example: List

```go
projectBoards, err := client.ProjectBoard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectBoards) // the array of records
```


### ProjectPhase

Create an instance: `projectPhase := client.ProjectPhase(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the board in UTC. |
| `additional_data` | `map[string]any` |  |
| `board_id` | `float64` | The ID of the project board this phase is linked to |
| `data` | `map[string]any` |  |
| `id` | `int` | The ID of the project phase |
| `name` | `string` | Name of a project phase |
| `order_nr` | `float64` | The order of a phase |
| `success` | `bool` |  |
| `update_time` | `string` | The update date and time of the board in UTC. |

#### Example: Load

```go
projectPhase, err := client.ProjectPhase(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectPhase) // the loaded record
```

#### Example: List

```go
projectPhases, err := client.ProjectPhase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectPhases) // the array of records
```


### ProjectTemplate

Create an instance: `projectTemplate := client.ProjectTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_time` | `string` | The creation date and time of the template in UTC. |
| `additional_data` | `map[string]any` |  |
| `data` | `any` |  |
| `description` | `string` | The description of a template |
| `id` | `float64` | The ID of a template |
| `owner_id` | `float64` | The ID of a template owner |
| `projects_board_id` | `float64` | The ID of the project board this template is associated with |
| `success` | `bool` |  |
| `title` | `string` | The title of a template |
| `update_time` | `string` | The update date and time of the template in UTC. |

#### Example: Load

```go
projectTemplate, err := client.ProjectTemplate(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectTemplate) // the loaded record
```

#### Example: List

```go
projectTemplates, err := client.ProjectTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectTemplates) // the array of records
```


### Recent

Create an instance: `recent := client.Recent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` |  |
| `data` | `[]any` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: List

```go
recents, err := client.Recent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(recents) // the array of records
```


### Role

Create an instance: `role := client.Role(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` | The additional data in the role |
| `data` | `any` | The details of the sub-role |
| `id` | `string` |  |
| `name` | `string` | The name of the role |
| `parent_role_id` | `int` | The ID of the parent role |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
role, err := client.Role(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(role) // the loaded record
```

#### Example: List

```go
roles, err := client.Role(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(roles) // the array of records
```

#### Example: Create

```go
result, err := client.Role(nil).Create(map[string]any{
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Stage

Create an instance: `stage := client.Stage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
stages, err := client.Stage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(stages) // the array of records
```


### Task

Create an instance: `task := client.Task(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additional_data` | `map[string]any` |  |
| `data` | `map[string]any` |  |
| `id` | `int` | The ID of the task, generated when the task was created |
| `success` | `bool` |  |

#### Example: Load

```go
task, err := client.Task(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(task) // the loaded record
```

#### Example: List

```go
tasks, err := client.Task(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tasks) // the array of records
```

#### Example: Create

```go
result, err := client.Task(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `[]any` | The access given to the user. |
| `active_flag` | `bool` | Whether the user is active or not. |
| `data` | `map[string]any` |  |
| `email` | `string` | The email of the user |
| `id` | `string` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```

#### Example: Create

```go
result, err := client.User(nil).Create(map[string]any{
    "email": "example_email",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UserConnection

Create an instance: `userConnection := client.UserConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` | The object of UserConnections |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
userConnection, err := client.UserConnection(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userConnection) // the loaded record
```


### UserSetting

Create an instance: `userSetting := client.UserSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `success` | `bool` | If the response is successful or not |

#### Example: Load

```go
userSetting, err := client.UserSetting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userSetting) // the loaded record
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | The array of Webhooks |
| `event_action` | `string` | The type of action to receive notifications about. |
| `event_object` | `string` | The type of object to receive notifications about. |
| `http_auth_password` | `string` | The HTTP basic auth password of the subscription URL endpoint (if required) |
| `http_auth_user` | `string` | The HTTP basic auth username of the subscription URL endpoint (if required) |
| `id` | `string` |  |
| `name` | `string` | The webhook's name |
| `subscription_url` | `string` | A full, valid, publicly accessible URL which determines where to send the notifications. |
| `user_id` | `int` | The ID of the user that this webhook will be authorized with. |
| `version` | `string` | The webhook's version. |

#### Example: List

```go
webhooks, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooks) // the array of records
```

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/pipedrive-sdk/go/
├── pipedrive.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/pipedrive-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
mailbox := client.Mailbox(nil)
mailbox.List(nil, nil)

// mailbox.Data() now returns the mailbox data from the last list
// mailbox.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
