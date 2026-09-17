
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Pipedrive',
        slug: "pipedrive",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.pipedrive.com/v1",

    auth: {
      prefix: 'Basic',
      basic: true,
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        activity_field: {
        },
  
        activity_type: {
        },
  
        billing: {
        },
  
        call_log: {
        },
  
        channel: {
        },
  
        currency: {
        },
  
        deal: {
        },
  
        deal_field: {
        },
  
        file: {
        },
  
        filter: {
        },
  
        goal: {
        },
  
        lead: {
        },
  
        lead_field: {
        },
  
        lead_label: {
        },
  
        lead_source: {
        },
  
        legacy_team: {
        },
  
        mailbox: {
        },
  
        meeting: {
        },
  
        note: {
        },
  
        note_field: {
        },
  
        oauth: {
        },
  
        organization: {
        },
  
        organization_field: {
        },
  
        organization_relationship: {
        },
  
        permission_set: {
        },
  
        person: {
        },
  
        person_field: {
        },
  
        pipeline: {
        },
  
        product: {
        },
  
        product_field: {
        },
  
        project: {
        },
  
        project_board: {
        },
  
        project_phase: {
        },
  
        project_template: {
        },
  
        recent: {
        },
  
        role: {
        },
  
        stage: {
        },
  
        task: {
        },
  
        user: {
        },
  
        user_connection: {
        },
  
        user_setting: {
        },
  
        webhook: {
        },
  
    }
  }


  entity = {
    "activity_field": {
      "fields": [
        {
          "name": "additional_data",
          "short": "The additional data of the list",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "activity_field",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/activityFields",
              "segments": [
                {
                  "lit": "activityFields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "activityFields"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "activity_type": {
      "fields": [
        {
          "name": "color",
          "short": "A designated color for the activity type in 6-character HEX format (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "data",
          "short": "The array of activity types",
          "type": "`$ARRAY`"
        },
        {
          "name": "icon_key",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Icon graphic to use for representing this activity type",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the activity type",
          "type": "`$STRING`"
        },
        {
          "name": "order_nr",
          "short": "An order number for this activity type.",
          "type": "`$INTEGER`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "activity_type",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/activityTypes",
              "segments": [
                {
                  "lit": "activityTypes"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "activityTypes"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/activityTypes",
              "segments": [
                {
                  "lit": "activityTypes"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "activityTypes"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/activityTypes/{id}",
              "segments": [
                {
                  "lit": "activityTypes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "activityTypes",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/activityTypes/{id}",
              "segments": [
                {
                  "lit": "activityTypes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "activityTypes",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "billing": {
      "fields": [
        {
          "name": "data",
          "short": "An array of add-ons that the company has.",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "billing",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/billing/subscriptions/addons",
              "segments": [
                {
                  "lit": "billing"
                },
                {
                  "lit": "subscriptions"
                },
                {
                  "lit": "addons"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "billing",
                "subscriptions",
                "addons"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "call_log": {
      "fields": [
        {
          "name": "activity_id",
          "short": "If specified, this activity will be converted into a call log, with the information provided.",
          "type": "`$INTEGER`"
        },
        {
          "name": "company_id",
          "short": "The company ID of the owner of the call log",
          "type": "`$INTEGER`"
        },
        {
          "name": "deal_id",
          "short": "The ID of the deal this call is associated with.",
          "type": "`$INTEGER`"
        },
        {
          "name": "duration",
          "short": "The duration of the call in seconds",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "end_time",
          "req": true,
          "short": "The date and time of the end of the call in UTC.",
          "type": "`$STRING`"
        },
        {
          "name": "from_phone_number",
          "short": "The number that made the call",
          "type": "`$STRING`"
        },
        {
          "name": "has_recording",
          "short": "If the call log has an audio recording attached, the value should be true",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "short": "The call log ID, generated when the call log was created",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "lead_id",
          "short": "The ID of the lead in the UUID format this call is associated with.",
          "type": "`$STRING`"
        },
        {
          "name": "note",
          "short": "The note for the call log in HTML format",
          "type": "`$STRING`"
        },
        {
          "name": "org_id",
          "short": "The ID of the organization this call is associated with",
          "type": "`$INTEGER`"
        },
        {
          "name": "outcome",
          "req": true,
          "short": "Describes the outcome of the call",
          "type": "`$STRING`"
        },
        {
          "name": "person_id",
          "short": "The ID of the person this call is associated with",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "start_time",
          "req": true,
          "short": "The date and time of the start of the call in UTC.",
          "type": "`$STRING`"
        },
        {
          "name": "subject",
          "short": "The name of the activity this call is attached to",
          "type": "`$STRING`"
        },
        {
          "name": "to_phone_number",
          "req": true,
          "short": "The number called",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "The ID of the owner of the call log.",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "call_log",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "3cde3b05035cae14dcfc172bd8000d08",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/callLogs/{id}/recordings",
              "segments": [
                {
                  "lit": "callLogs"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "recordings"
                }
              ],
              "select": {
                "$action": "recording",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "callLogs",
                "{id}",
                "recordings"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/callLogs",
              "segments": [
                {
                  "lit": "callLogs"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "callLogs"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/callLogs",
              "segments": [
                {
                  "lit": "callLogs"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "callLogs"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "3cde3b05035cae14dcfc172bd8000d08",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/callLogs/{id}",
              "segments": [
                {
                  "lit": "callLogs"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "callLogs",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "3cde3b05035cae14dcfc172bd8000d08",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/callLogs/{id}",
              "segments": [
                {
                  "lit": "callLogs"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "callLogs",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "channel": {
      "fields": [
        {
          "name": "attachments",
          "short": "The list of attachments available in the message",
          "type": "`$ARRAY`"
        },
        {
          "format": "url",
          "name": "avatar_url",
          "short": "The URL for an icon that represents your channel",
          "type": "`$STRING`"
        },
        {
          "name": "channel_id",
          "req": true,
          "short": "The channel ID as in the provider",
          "type": "`$STRING`"
        },
        {
          "name": "conversation_id",
          "req": true,
          "short": "The ID of the conversation",
          "type": "`$STRING`"
        },
        {
          "format": "url",
          "name": "conversation_link",
          "short": "A URL that can open the conversation in the provider's side",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The date and time when your channel was created in the API",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The unique channel ID used internally in omnichannel-api and the frontend of the extension",
          "type": "`$STRING`"
        },
        {
          "name": "marketplace_client_id",
          "short": "The client_id of your app in Pipedrive marketplace",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "req": true,
          "short": "The body of the message",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the channel",
          "type": "`$STRING`"
        },
        {
          "name": "pd_company_id",
          "short": "The ID of the user's company in Pipedrive",
          "type": "`$INTEGER`"
        },
        {
          "name": "pd_user_id",
          "short": "The ID of the user in Pipedrive",
          "type": "`$INTEGER`"
        },
        {
          "format": "string",
          "name": "provider_channel_id",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The channel ID you specified while creating the channel",
          "type": "`$STRING`"
        },
        {
          "name": "provider_type",
          "short": "Value of the provider_type sent to this endpoint",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "reply_by",
          "short": "The date and time when the message can no longer receive a reply, in UTC.",
          "type": "`$STRING`"
        },
        {
          "name": "sender_id",
          "req": true,
          "short": "The ID of the provider's user that sent the message",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The status of the message",
          "type": "`$STRING`"
        },
        {
          "name": "template_support",
          "short": "Value of the template_support sent to this endpoint",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "channel",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/channels",
              "segments": [
                {
                  "lit": "channels"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "channels"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/channels/messages/receive",
              "segments": [
                {
                  "lit": "channels"
                },
                {
                  "lit": "messages"
                },
                {
                  "lit": "receive"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "channels",
                "messages",
                "receive"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "conversation_id",
                    "orig": "conversation_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "channel_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/channels/{channel-id}/conversations/{conversation-id}",
              "rename": {
                "param": {
                  "channel-id": "id",
                  "conversation-id": "conversation_id"
                }
              },
              "segments": [
                {
                  "lit": "channels"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "conversations"
                },
                {
                  "var": "conversation_id"
                }
              ],
              "select": {
                "exist": [
                  "conversation_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "channels",
                "{id}",
                "conversations",
                "{conversation_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/channels/{id}",
              "segments": [
                {
                  "lit": "channels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "channels",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "conversation"
          ]
        ]
      }
    },
    "currency": {
      "fields": [
        {
          "name": "active_flag",
          "short": "Whether the currency is active or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "code",
          "short": "The code of the currency",
          "type": "`$STRING`"
        },
        {
          "name": "decimal_points",
          "short": "The amount of decimal points of the currency",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "short": "The ID of the currency",
          "type": "`$INTEGER`"
        },
        {
          "name": "is_custom_flag",
          "short": "Whether the currency is a custom one or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "short": "The name of the currency",
          "type": "`$STRING`"
        },
        {
          "name": "symbol",
          "short": "The symbol of the currency",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "currency",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "term",
                    "orig": "term",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/currencies",
              "segments": [
                {
                  "lit": "currencies"
                }
              ],
              "select": {
                "exist": [
                  "term"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "currencies"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "deal": {
      "fields": [
        {
          "name": "deals",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "period_end",
          "short": "The end date and time of the period",
          "type": "`$STRING`"
        },
        {
          "name": "period_start",
          "short": "The start date and time of the period",
          "type": "`$STRING`"
        },
        {
          "name": "total_count",
          "short": "The total number of deals",
          "type": "`$INTEGER`"
        },
        {
          "name": "total_currency_converted_value",
          "short": "The total value of deals converted into the company default currency",
          "type": "`$NUMBER`"
        },
        {
          "name": "total_currency_converted_value_formatted",
          "short": "The total converted value of deals formatted with the company default currency.",
          "type": "`$STRING`"
        },
        {
          "name": "total_weighted_currency_converted_value",
          "short": "The total weighted value of deals converted into the company default currency",
          "type": "`$NUMBER`"
        },
        {
          "name": "total_weighted_currency_converted_value_formatted",
          "short": "The total weighted value of deals formatted with the company default currency.",
          "type": "`$STRING`"
        },
        {
          "name": "totals",
          "short": "The total values of deals for the given period",
          "type": "`$OBJECT`"
        },
        {
          "name": "values_total",
          "short": "The total values of the deals grouped by deal currency",
          "type": "`$OBJECT`"
        },
        {
          "name": "weighted_values_total",
          "short": "The total weighted values of the deals grouped by deal currency.",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "deal",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/deals/{id}/duplicate",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "select": {
                "$action": "duplicate",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "{id}",
                "duplicate"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/deals/{id}/followers",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "{id}",
                "followers"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/deals/{id}/participants",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "participants"
                }
              ],
              "select": {
                "$action": "participant",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "participants"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "owned_by_you",
                    "orig": "owned_by_you",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "person_id",
                    "orig": "person_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "pipeline_id",
                    "orig": "pipeline_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "product_id",
                    "orig": "product_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "stage_id",
                    "orig": "stage_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "all_not_deleted",
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/archived",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "lit": "archived"
                }
              ],
              "select": {
                "$action": "archived",
                "exist": [
                  "filter_id",
                  "limit",
                  "org_id",
                  "owned_by_you",
                  "person_id",
                  "pipeline_id",
                  "product_id",
                  "sort",
                  "stage_id",
                  "start",
                  "status",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "archived"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "all_change",
                    "orig": "all_change",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "item",
                    "orig": "item",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/flow",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "flow"
                }
              ],
              "select": {
                "$action": "flow",
                "exist": [
                  "all_change",
                  "id",
                  "item",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "flow"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/files",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "files"
                }
              ],
              "select": {
                "$action": "file",
                "exist": [
                  "id",
                  "limit",
                  "sort",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "files"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "include_body",
                    "orig": "include_body",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/mailMessages",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "mailMessages"
                }
              ],
              "select": {
                "$action": "mail_message",
                "exist": [
                  "id",
                  "include_body",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "mailMessages"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/changelog",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "changelog"
                }
              ],
              "select": {
                "$action": "changelog",
                "exist": [
                  "cursor",
                  "id",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "changelog"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/participants",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "participants"
                }
              ],
              "select": {
                "$action": "participant",
                "exist": [
                  "id",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "participants"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/participantsChangelog",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "participantsChangelog"
                }
              ],
              "select": {
                "$action": "participants_changelog",
                "exist": [
                  "cursor",
                  "id",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "participantsChangelog"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/followers",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "followers"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "exclude_deal",
                    "orig": "exclude_deal",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "field_key",
                    "orig": "field_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "interval",
                    "orig": "interval",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "pipeline_id",
                    "orig": "pipeline_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "totals_convert_currency",
                    "orig": "totals_convert_currency",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/timeline",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "lit": "timeline"
                }
              ],
              "select": {
                "$action": "timeline",
                "exist": [
                  "amount",
                  "exclude_deal",
                  "field_key",
                  "filter_id",
                  "interval",
                  "pipeline_id",
                  "start_date",
                  "totals_convert_currency",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "timeline"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "exclude_deal",
                    "orig": "exclude_deal",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "field_key",
                    "orig": "field_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "interval",
                    "orig": "interval",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "pipeline_id",
                    "orig": "pipeline_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "totals_convert_currency",
                    "orig": "totals_convert_currency",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/timeline/archived",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "lit": "timeline"
                },
                {
                  "lit": "archived"
                }
              ],
              "select": {
                "exist": [
                  "amount",
                  "exclude_deal",
                  "field_key",
                  "filter_id",
                  "interval",
                  "pipeline_id",
                  "start_date",
                  "totals_convert_currency",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "timeline",
                "archived"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "pipeline_id",
                    "orig": "pipeline_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "stage_id",
                    "orig": "stage_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/summary",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "lit": "summary"
                }
              ],
              "select": {
                "$action": "summary",
                "exist": [
                  "filter_id",
                  "pipeline_id",
                  "stage_id",
                  "status",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "summary"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "pipeline_id",
                    "orig": "pipeline_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "stage_id",
                    "orig": "stage_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/summary/archived",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "lit": "summary"
                },
                {
                  "lit": "archived"
                }
              ],
              "select": {
                "exist": [
                  "filter_id",
                  "pipeline_id",
                  "stage_id",
                  "status",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "summary",
                "archived"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/deals/{id}/permittedUsers",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permittedUsers"
                }
              ],
              "select": {
                "$action": "permitted_user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "deals",
                "{id}",
                "permittedUsers"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "deal_participant_id",
                    "orig": "deal_participant_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/deals/{id}/participants/{deal_participant_id}",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "participants"
                },
                {
                  "var": "deal_participant_id"
                }
              ],
              "select": {
                "exist": [
                  "deal_participant_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "{id}",
                "participants",
                "{deal_participant_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "follower_id",
                    "orig": "follower_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/deals/{id}/followers/{follower_id}",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                },
                {
                  "var": "follower_id"
                }
              ],
              "select": {
                "exist": [
                  "follower_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "{id}",
                "followers",
                "{follower_id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/deals/{id}/merge",
              "segments": [
                {
                  "lit": "deals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "merge"
                }
              ],
              "select": {
                "$action": "merge",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "deals",
                "{id}",
                "merge"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "follower"
          ],
          [
            "participant"
          ]
        ]
      }
    },
    "deal_field": {
      "fields": [
        {
          "name": "add_visible_flag",
          "short": "Whether the field is available in 'add new' modal or not (both in web and mobile app)",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "additional_data",
          "short": "The additional data of the list",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the field",
          "type": "`$STRING`"
        },
        {
          "name": "options",
          "short": "When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects.",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "deal_field",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/dealFields",
              "segments": [
                {
                  "lit": "dealFields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "dealFields"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/dealFields",
              "segments": [
                {
                  "lit": "dealFields"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "dealFields"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/dealFields/{id}",
              "segments": [
                {
                  "lit": "dealFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "dealFields",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/dealFields/{id}",
              "segments": [
                {
                  "lit": "dealFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "dealFields",
                "{id}"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/dealFields",
              "segments": [
                {
                  "lit": "dealFields"
                }
              ],
              "select": {
                "exist": [
                  "ids"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "dealFields"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/dealFields/{id}",
              "segments": [
                {
                  "lit": "dealFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "dealFields",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "file": {
      "fields": [
        {
          "name": "active_flag",
          "short": "Whether the user is active or not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "activity_id",
          "short": "The ID of the activity to associate the file with",
          "type": "`$INTEGER`"
        },
        {
          "name": "add_time",
          "short": "The date and time when the file was added/created.",
          "type": "`$STRING`"
        },
        {
          "name": "cid",
          "short": "The ID of the inline attachment",
          "type": "`$STRING`"
        },
        {
          "name": "deal_id",
          "short": "The ID of the deal to associate the file with",
          "type": "`$INTEGER`"
        },
        {
          "name": "deal_name",
          "short": "The name of the deal associated with the file",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "The description of the file",
          "type": "`$STRING`"
        },
        {
          "name": "file_name",
          "short": "The original name of the file",
          "type": "`$STRING`"
        },
        {
          "name": "file_size",
          "short": "The size of the file",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "short": "The ID of the file",
          "type": "`$INTEGER`"
        },
        {
          "name": "inline_flag",
          "short": "Whether the file was uploaded as inline or not",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "uuid",
          "name": "lead_id",
          "short": "The ID of the lead to associate the file with",
          "type": "`$STRING`"
        },
        {
          "name": "lead_name",
          "short": "The name of the lead associated with the file",
          "type": "`$STRING`"
        },
        {
          "name": "mail_message_id",
          "short": "The ID of the mail message to associate the file with",
          "type": "`$STRING`"
        },
        {
          "name": "mail_template_id",
          "short": "The ID of the mail template to associate the file with",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The visible name of the file",
          "type": "`$STRING`"
        },
        {
          "name": "org_id",
          "short": "The ID of the organization to associate the file with",
          "type": "`$INTEGER`"
        },
        {
          "name": "org_name",
          "short": "The name of the organization associated with the file",
          "type": "`$STRING`"
        },
        {
          "name": "person_id",
          "short": "The ID of the person to associate the file with",
          "type": "`$INTEGER`"
        },
        {
          "name": "person_name",
          "short": "The name of the person associated with the file",
          "type": "`$STRING`"
        },
        {
          "name": "product_id",
          "short": "The ID of the product to associate the file with",
          "type": "`$INTEGER`"
        },
        {
          "name": "product_name",
          "short": "The name of the product associated with the file",
          "type": "`$STRING`"
        },
        {
          "name": "project_id",
          "short": "The ID of the project to associate the file with",
          "type": "`$INTEGER`"
        },
        {
          "name": "project_name",
          "short": "The name of the project associated with the file",
          "type": "`$STRING`"
        },
        {
          "name": "remote_id",
          "short": "The ID of the remote item",
          "type": "`$STRING`"
        },
        {
          "name": "remote_location",
          "short": "The location type to send the file to.",
          "type": "`$STRING`"
        },
        {
          "name": "s3_bucket",
          "short": "The location of the cloud storage",
          "type": "`$STRING`"
        },
        {
          "name": "update_time",
          "short": "The last updated date and time of the file.",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "The URL of the download file",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "The ID of the user to associate the file with",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "file",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/files",
              "segments": [
                {
                  "lit": "files"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "files"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/files/remote",
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "lit": "remote"
                }
              ],
              "select": {
                "$action": "remote"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "files",
                "remote"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/files/remoteLink",
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "lit": "remoteLink"
                }
              ],
              "select": {
                "$action": "remote_link"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "files",
                "remoteLink"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/files",
              "segments": [
                {
                  "lit": "files"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "sort",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "files"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/files/{id}",
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "files",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/files/{id}/download",
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "download"
                }
              ],
              "select": {
                "$action": "download",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "files",
                "{id}",
                "download"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/files/{id}",
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "files",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/files/{id}",
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "files",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "filter": {
      "fields": [
        {
          "name": "conditions",
          "req": true,
          "short": "The conditions of the filter as a JSON object.",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "short": "The filter object including conditions",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the filter",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of filter to create",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "filter",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "include_field_code",
                    "orig": "include_field_code",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/filters",
              "segments": [
                {
                  "lit": "filters"
                }
              ],
              "select": {
                "exist": [
                  "include_field_code"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filters"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/filters",
              "segments": [
                {
                  "lit": "filters"
                }
              ],
              "select": {
                "exist": [
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filters"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "include_field_code",
                    "orig": "include_field_code",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/filters/{id}",
              "segments": [
                {
                  "lit": "filters"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "include_field_code"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filters",
                "{id}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/filters/helpers",
              "segments": [
                {
                  "lit": "filters"
                },
                {
                  "lit": "helpers"
                }
              ],
              "select": {
                "$action": "helper"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filters",
                "helpers"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/filters/{id}",
              "segments": [
                {
                  "lit": "filters"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filters",
                "{id}"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/filters",
              "segments": [
                {
                  "lit": "filters"
                }
              ],
              "select": {
                "exist": [
                  "ids"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filters"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "include_field_code",
                    "orig": "include_field_code",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/filters/{id}",
              "segments": [
                {
                  "lit": "filters"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "include_field_code"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filters",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "goal": {
      "fields": [
        {
          "name": "assignee",
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "Who this goal is assigned to.",
          "type": "`$OBJECT`"
        },
        {
          "name": "duration",
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "The date when the goal starts and ends.",
          "type": "`$OBJECT`"
        },
        {
          "name": "expected_outcome",
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "The expected outcome of the goal.",
          "type": "`$OBJECT`"
        },
        {
          "name": "goal",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "interval",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The interval of the goal",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "The title of the goal",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "The type of the goal.",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "goal",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/goals",
              "segments": [
                {
                  "lit": "goals"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "goals"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "assignee_id",
                    "orig": "assignee_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "assignee_type",
                    "orig": "assignee_type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "expected_outcome_currency_id",
                    "orig": "expected_outcome_currency_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "expected_outcome_target",
                    "orig": "expected_outcome_target",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "expected_outcome_tracking_metric",
                    "orig": "expected_outcome_tracking_metric",
                    "type": "`$STRING`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "is_active",
                    "orig": "is_active",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "period_end",
                    "orig": "period_end",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "period_start",
                    "orig": "period_start",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type_name",
                    "orig": "type_name",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type_params_activity_type_id",
                    "orig": "type_params_activity_type_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "type_params_pipeline_id",
                    "orig": "type_params_pipeline_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "type_params_stage_id",
                    "orig": "type_params_stage_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/goals/find",
              "segments": [
                {
                  "lit": "goals"
                },
                {
                  "lit": "find"
                }
              ],
              "select": {
                "$action": "find",
                "exist": [
                  "assignee_id",
                  "assignee_type",
                  "expected_outcome_currency_id",
                  "expected_outcome_target",
                  "expected_outcome_tracking_metric",
                  "is_active",
                  "period_end",
                  "period_start",
                  "title",
                  "type_name",
                  "type_params_activity_type_id",
                  "type_params_pipeline_id",
                  "type_params_stage_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "goals",
                "find"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "period_end",
                    "orig": "period_end",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "period_start",
                    "orig": "period_start",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/goals/{id}/results",
              "segments": [
                {
                  "lit": "goals"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "results"
                }
              ],
              "select": {
                "$action": "result",
                "exist": [
                  "id",
                  "period_end",
                  "period_start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "goals",
                "{id}",
                "results"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/goals/{id}",
              "segments": [
                {
                  "lit": "goals"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "goals",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/goals/{id}",
              "segments": [
                {
                  "lit": "goals"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "goals",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "lead": {
      "fields": [
        {
          "format": "date-time",
          "name": "add_time",
          "short": "The date and time of when the lead was created.",
          "type": "`$STRING`"
        },
        {
          "name": "cc_email",
          "short": "The BCC email of the lead",
          "type": "`$STRING`"
        },
        {
          "name": "channel",
          "short": "The ID of your Marketing channel this Lead was created from.",
          "type": "`$INTEGER`"
        },
        {
          "name": "channel_id",
          "short": "The optional ID to further distinguish the Marketing channel.",
          "type": "`$STRING`"
        },
        {
          "name": "creator_id",
          "short": "The ID of the user who created the lead",
          "type": "`$INTEGER`"
        },
        {
          "format": "date",
          "name": "expected_close_date",
          "short": "The date of when the deal which will be created from the lead is expected to be closed.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "short": "The unique ID of the lead in the UUID format",
          "type": "`$STRING`"
        },
        {
          "name": "is_archived",
          "short": "A flag indicating whether the lead is archived or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "label_ids",
          "short": "The IDs of the lead labels which are associated with the lead",
          "type": "`$ARRAY`"
        },
        {
          "name": "next_activity_id",
          "short": "The ID of the next activity associated with the lead",
          "type": "`$INTEGER`"
        },
        {
          "name": "organization_id",
          "short": "The ID of an organization which this lead is linked to",
          "type": "`$INTEGER`"
        },
        {
          "name": "origin",
          "short": "The way this Lead was created.",
          "type": "`$STRING`"
        },
        {
          "name": "origin_id",
          "short": "The optional ID to further distinguish the origin of the lead - e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "owner_id",
          "short": "The ID of the user who owns the lead",
          "type": "`$INTEGER`"
        },
        {
          "name": "person_id",
          "short": "The ID of a person which this lead is linked to",
          "type": "`$INTEGER`"
        },
        {
          "name": "source_deal_id",
          "short": "The ID of the deal if the lead was converted from a deal.",
          "type": "`$INTEGER`"
        },
        {
          "name": "source_name",
          "short": "Defines where the lead comes from.",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The title of the lead",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "update_time",
          "short": "The date and time of when the lead was last updated.",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "req": true,
          "short": "The potential value of the lead represented by a JSON object: `{ \"amount\": 200, \"currency\": \"EUR\" }`.",
          "type": "`$OBJECT`"
        },
        {
          "name": "visible_to",
          "short": "The visibility of the lead.",
          "type": "`$STRING`"
        },
        {
          "name": "was_seen",
          "short": "A flag indicating whether the lead was seen by someone in the Pipedrive UI",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "lead",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/leads",
              "segments": [
                {
                  "lit": "leads"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leads"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "organization_id",
                    "orig": "organization_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "owner_id",
                    "orig": "owner_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "person_id",
                    "orig": "person_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "2025-01-01T10:20:00Z",
                    "kind": "query",
                    "name": "updated_since",
                    "orig": "updated_since",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/leads",
              "segments": [
                {
                  "lit": "leads"
                }
              ],
              "select": {
                "exist": [
                  "filter_id",
                  "limit",
                  "organization_id",
                  "owner_id",
                  "person_id",
                  "sort",
                  "start",
                  "updated_since"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "leads"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "organization_id",
                    "orig": "organization_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "owner_id",
                    "orig": "owner_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "person_id",
                    "orig": "person_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/leads/archived",
              "segments": [
                {
                  "lit": "leads"
                },
                {
                  "lit": "archived"
                }
              ],
              "select": {
                "$action": "archived",
                "exist": [
                  "filter_id",
                  "limit",
                  "organization_id",
                  "owner_id",
                  "person_id",
                  "sort",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "leads",
                "archived"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/leads/{id}/permittedUsers",
              "segments": [
                {
                  "lit": "leads"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permittedUsers"
                }
              ],
              "select": {
                "$action": "permitted_user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "leads",
                "{id}",
                "permittedUsers"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "exact_match",
                    "orig": "exact_match",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "include_field",
                    "orig": "include_field",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "organization_id",
                    "orig": "organization_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "person_id",
                    "orig": "person_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "term",
                    "orig": "term",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/leads/search",
              "segments": [
                {
                  "lit": "leads"
                },
                {
                  "lit": "search"
                }
              ],
              "select": {
                "$action": "search",
                "exist": [
                  "exact_match",
                  "field",
                  "include_field",
                  "limit",
                  "organization_id",
                  "person_id",
                  "start",
                  "term"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "leads",
                "search"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/leads/{id}",
              "segments": [
                {
                  "lit": "leads"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leads",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/leads/{id}",
              "segments": [
                {
                  "lit": "leads"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leads",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/leads/{id}",
              "segments": [
                {
                  "lit": "leads"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leads",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "lead_field": {
      "fields": [
        {
          "name": "additional_data",
          "short": "The additional data of the list",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "lead_field",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/leadFields",
              "segments": [
                {
                  "lit": "leadFields"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "leadFields"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "lead_label": {
      "fields": [
        {
          "format": "date-time",
          "name": "add_time",
          "short": "The date and time of when the lead label was created.",
          "type": "`$STRING`"
        },
        {
          "name": "color",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The color of the label.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "short": "The unique ID of the lead label",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the lead label",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "update_time",
          "short": "The date and time of when the lead label was last updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "lead_label",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/leadLabels",
              "segments": [
                {
                  "lit": "leadLabels"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leadLabels"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/leadLabels",
              "segments": [
                {
                  "lit": "leadLabels"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leadLabels"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/leadLabels/{id}",
              "segments": [
                {
                  "lit": "leadLabels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leadLabels",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/leadLabels/{id}",
              "segments": [
                {
                  "lit": "leadLabels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leadLabels",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "lead_source": {
      "fields": [
        {
          "name": "name",
          "short": "The unique name of a lead source",
          "type": "`$STRING`"
        }
      ],
      "name": "lead_source",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/leadSources",
              "segments": [
                {
                  "lit": "leadSources"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "leadSources"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "legacy_team": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "description",
          "short": "The team description",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "manager_id",
          "req": true,
          "short": "The team manager ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The team name",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "users",
          "short": "The list of user IDs",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "legacy_team",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/legacyTeams/{id}/users",
              "segments": [
                {
                  "lit": "legacyTeams"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "users"
                }
              ],
              "select": {
                "$action": "user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams",
                "{id}",
                "users"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/legacyTeams",
              "segments": [
                {
                  "lit": "legacyTeams"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "id",
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "skip_user",
                    "orig": "skip_user",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/legacyTeams",
              "segments": [
                {
                  "lit": "legacyTeams"
                }
              ],
              "select": {
                "exist": [
                  "order_by",
                  "skip_user"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/legacyTeams/{id}/users",
              "segments": [
                {
                  "lit": "legacyTeams"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "users"
                }
              ],
              "select": {
                "$action": "user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams",
                "{id}",
                "users"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": "id",
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "skip_user",
                    "orig": "skip_user",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/legacyTeams/user/{id}",
              "segments": [
                {
                  "lit": "legacyTeams"
                },
                {
                  "lit": "user"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "order_by",
                  "skip_user"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams",
                "user",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "skip_user",
                    "orig": "skip_user",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/legacyTeams/{id}",
              "segments": [
                {
                  "lit": "legacyTeams"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "skip_user"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/legacyTeams/{id}/users",
              "segments": [
                {
                  "lit": "legacyTeams"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "users"
                }
              ],
              "select": {
                "$action": "user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams",
                "{id}",
                "users"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/legacyTeams/{id}",
              "segments": [
                {
                  "lit": "legacyTeams"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "legacyTeams",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "mailbox": {
      "fields": [
        {
          "name": "data",
          "short": "The mail thread object",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "service",
          "short": "The service name of the response.",
          "type": "`$STRING`"
        },
        {
          "name": "statusCode",
          "short": "The email service specific status code and it is returned through the response body.",
          "type": "`$INTEGER`"
        },
        {
          "name": "statusText",
          "short": "The status text of the response.",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "mailbox",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "inbox",
                    "kind": "query",
                    "name": "folder",
                    "orig": "folder",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/mailbox/mailThreads",
              "segments": [
                {
                  "lit": "mailbox"
                },
                {
                  "lit": "mailThreads"
                }
              ],
              "select": {
                "$action": "mail_thread",
                "exist": [
                  "folder",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "mailbox",
                "mailThreads"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "mail_thread_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/mailbox/mailThreads/{id}/mailMessages",
              "rename": {
                "param": {
                  "id": "mail_thread_id"
                }
              },
              "segments": [
                {
                  "lit": "mailbox"
                },
                {
                  "lit": "mailThreads"
                },
                {
                  "var": "mail_thread_id"
                },
                {
                  "lit": "mailMessages"
                }
              ],
              "select": {
                "exist": [
                  "mail_thread_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "mailbox",
                "mailThreads",
                "{mail_thread_id}",
                "mailMessages"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "include_body",
                    "orig": "include_body",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/mailbox/mailMessages/{id}",
              "segments": [
                {
                  "lit": "mailbox"
                },
                {
                  "lit": "mailMessages"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "include_body"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "mailbox",
                "mailMessages",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/mailbox/mailThreads/{id}",
              "segments": [
                {
                  "lit": "mailbox"
                },
                {
                  "lit": "mailThreads"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "mailbox",
                "mailThreads",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/mailbox/mailThreads/{id}",
              "segments": [
                {
                  "lit": "mailbox"
                },
                {
                  "lit": "mailThreads"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "mailbox",
                "mailThreads",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/mailbox/mailThreads/{id}",
              "segments": [
                {
                  "lit": "mailbox"
                },
                {
                  "lit": "mailThreads"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "mailbox",
                "mailThreads",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "mail_thread"
          ]
        ]
      }
    },
    "meeting": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "meeting",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/meetings/userProviderLinks",
              "segments": [
                {
                  "lit": "meetings"
                },
                {
                  "lit": "userProviderLinks"
                }
              ],
              "select": {
                "$action": "user_provider_link"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "meetings",
                "userProviderLinks"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/meetings/userProviderLinks/{id}",
              "segments": [
                {
                  "lit": "meetings"
                },
                {
                  "lit": "userProviderLinks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "meetings",
                "userProviderLinks",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "note": {
      "fields": [
        {
          "name": "active_flag",
          "short": "Whether the note is active or deleted",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "add_time",
          "short": "The creation date and time of the note",
          "type": "`$STRING`"
        },
        {
          "name": "company_id",
          "short": "The ID of the company",
          "type": "`$INTEGER`"
        },
        {
          "name": "content",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The content of the note in HTML format.",
          "type": "`$STRING`"
        },
        {
          "name": "deal",
          "type": "`$OBJECT`"
        },
        {
          "name": "deal_id",
          "short": "The ID of the deal the note is attached to",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "short": "The ID of the note",
          "type": "`$INTEGER`"
        },
        {
          "name": "last_update_user_id",
          "short": "The ID of the user who last updated the note",
          "type": "`$INTEGER`"
        },
        {
          "format": "uuid",
          "name": "lead_id",
          "short": "The ID of the lead the note is attached to",
          "type": "`$STRING`"
        },
        {
          "name": "object_id",
          "short": "The ID of the object that the comment is attached to, will be the id of the note",
          "type": "`$STRING`"
        },
        {
          "name": "object_type",
          "short": "The type of object that the comment is attached to, will be \"note\"",
          "type": "`$STRING`"
        },
        {
          "name": "org_id",
          "short": "The ID of the organization the note is attached to",
          "type": "`$INTEGER`"
        },
        {
          "name": "organization",
          "short": "The organization the note is attached to",
          "type": "`$OBJECT`"
        },
        {
          "name": "person",
          "short": "The person the note is attached to",
          "type": "`$OBJECT`"
        },
        {
          "name": "person_id",
          "short": "The ID of the person the note is attached to",
          "type": "`$INTEGER`"
        },
        {
          "name": "pinned_to_deal_flag",
          "short": "If true, the results are filtered by note to deal pinning state",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "pinned_to_organization_flag",
          "short": "If true, the results are filtered by note to organization pinning state",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "pinned_to_person_flag",
          "short": "If true, the results are filtered by note to person pinning state",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "pinned_to_project_flag",
          "short": "If true, the results are filtered by note to project pinning state",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "pinned_to_task_flag",
          "short": "If true, the results are filtered by note to task pinning state",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "project",
          "short": "The project the note is attached to",
          "type": "`$OBJECT`"
        },
        {
          "name": "project_id",
          "short": "The ID of the project the note is attached to",
          "type": "`$INTEGER`"
        },
        {
          "name": "task",
          "short": "The task the note is attached to",
          "type": "`$OBJECT`"
        },
        {
          "name": "task_id",
          "short": "The ID of the task the note is attached to",
          "type": "`$INTEGER`"
        },
        {
          "name": "update_time",
          "short": "The creation date and time of the note",
          "type": "`$STRING`"
        },
        {
          "name": "updater_id",
          "short": "The ID of the user who last updated the comment",
          "type": "`$INTEGER`"
        },
        {
          "name": "user",
          "short": "The user who created the note",
          "type": "`$OBJECT`"
        },
        {
          "name": "user_id",
          "short": "The ID of the user who created the comment",
          "type": "`$INTEGER`"
        },
        {
          "format": "uuid",
          "name": "uuid",
          "short": "The ID of the note",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "note",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/notes/{id}/comments",
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "comments"
                }
              ],
              "select": {
                "$action": "comment",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "notes",
                "{id}",
                "comments"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/notes",
              "segments": [
                {
                  "lit": "notes"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "notes"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "deal_id",
                    "orig": "deal_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "lead_id",
                    "orig": "lead_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "person_id",
                    "orig": "person_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "pinned_to_deal_flag",
                    "orig": "pinned_to_deal_flag",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "pinned_to_lead_flag",
                    "orig": "pinned_to_lead_flag",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "pinned_to_organization_flag",
                    "orig": "pinned_to_organization_flag",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "pinned_to_person_flag",
                    "orig": "pinned_to_person_flag",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "pinned_to_project_flag",
                    "orig": "pinned_to_project_flag",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "pinned_to_task_flag",
                    "orig": "pinned_to_task_flag",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "task_id",
                    "orig": "task_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "2025-01-01T10:20:00Z",
                    "kind": "query",
                    "name": "updated_since",
                    "orig": "updated_since",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/notes",
              "segments": [
                {
                  "lit": "notes"
                }
              ],
              "select": {
                "exist": [
                  "deal_id",
                  "end_date",
                  "lead_id",
                  "limit",
                  "org_id",
                  "person_id",
                  "pinned_to_deal_flag",
                  "pinned_to_lead_flag",
                  "pinned_to_organization_flag",
                  "pinned_to_person_flag",
                  "pinned_to_project_flag",
                  "pinned_to_task_flag",
                  "project_id",
                  "sort",
                  "start",
                  "start_date",
                  "task_id",
                  "updated_since",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notes"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/notes/{id}/comments",
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "comments"
                }
              ],
              "select": {
                "$action": "comment",
                "exist": [
                  "id",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notes",
                "{id}",
                "comments"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "comment_id",
                    "orig": "comment_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/notes/{id}/comments/{commentId}",
              "rename": {
                "param": {
                  "commentId": "comment_id"
                }
              },
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "comment_id"
                }
              ],
              "select": {
                "exist": [
                  "comment_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "notes",
                "{id}",
                "comments",
                "{comment_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/notes/{id}",
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "notes",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "comment_id",
                    "orig": "comment_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/notes/{id}/comments/{commentId}",
              "rename": {
                "param": {
                  "commentId": "comment_id"
                }
              },
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "comment_id"
                }
              ],
              "select": {
                "exist": [
                  "comment_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notes",
                "{id}",
                "comments",
                "{comment_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/notes/{id}",
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notes",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "comment_id",
                    "orig": "comment_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/notes/{id}/comments/{commentId}",
              "rename": {
                "param": {
                  "commentId": "comment_id"
                }
              },
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "comment_id"
                }
              ],
              "select": {
                "exist": [
                  "comment_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "notes",
                "{id}",
                "comments",
                "{comment_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/notes/{id}",
              "segments": [
                {
                  "lit": "notes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "notes",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "comment"
          ]
        ]
      }
    },
    "note_field": {
      "fields": [
        {
          "name": "additional_data",
          "short": "The additional data of the list",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "note_field",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/noteFields",
              "segments": [
                {
                  "lit": "noteFields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "noteFields"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "oauth": {
      "fields": [],
      "name": "oauth",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/oauth/token",
              "segments": [
                {
                  "lit": "oauth"
                },
                {
                  "lit": "token"
                }
              ],
              "select": {
                "$action": "token",
                "exist": [
                  "authorization"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "oauth",
                "token"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/oauth/token/",
              "segments": [
                {
                  "lit": "oauth"
                },
                {
                  "lit": "token"
                }
              ],
              "select": {
                "$action": "token",
                "exist": [
                  "authorization"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "oauth",
                "token"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "client_id",
                    "orig": "client_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "redirect_uri",
                    "orig": "redirect_uri",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "state",
                    "orig": "state",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/oauth/authorize",
              "segments": [
                {
                  "lit": "oauth"
                },
                {
                  "lit": "authorize"
                }
              ],
              "select": {
                "$action": "authorize",
                "exist": [
                  "client_id",
                  "redirect_uri",
                  "state"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "oauth",
                "authorize"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "organization": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "organization",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/organizations/{id}/followers",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "organizations",
                "{id}",
                "followers"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "all_change",
                    "orig": "all_change",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "item",
                    "orig": "item",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{id}/flow",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "flow"
                }
              ],
              "select": {
                "$action": "flow",
                "exist": [
                  "all_change",
                  "id",
                  "item",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}",
                "flow"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{id}/files",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "files"
                }
              ],
              "select": {
                "$action": "file",
                "exist": [
                  "id",
                  "limit",
                  "sort",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}",
                "files"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "include_body",
                    "orig": "include_body",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{id}/mailMessages",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "mailMessages"
                }
              ],
              "select": {
                "$action": "mail_message",
                "exist": [
                  "id",
                  "include_body",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}",
                "mailMessages"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{id}/changelog",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "changelog"
                }
              ],
              "select": {
                "$action": "changelog",
                "exist": [
                  "cursor",
                  "id",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}",
                "changelog"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{id}/followers",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}",
                "followers"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{id}/permittedUsers",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permittedUsers"
                }
              ],
              "select": {
                "$action": "permitted_user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}",
                "permittedUsers"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "follower_id",
                    "orig": "follower_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizations/{id}/followers/{follower_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                },
                {
                  "var": "follower_id"
                }
              ],
              "select": {
                "exist": [
                  "follower_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "organizations",
                "{id}",
                "followers",
                "{follower_id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/organizations/{id}/merge",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "merge"
                }
              ],
              "select": {
                "$action": "merge",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "organizations",
                "{id}",
                "merge"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "follower"
          ]
        ]
      }
    },
    "organization_field": {
      "fields": [
        {
          "name": "add_visible_flag",
          "short": "Whether the field is available in 'add new' modal or not (both in web and mobile app)",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "additional_data",
          "short": "The additional data of the list",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the field",
          "type": "`$STRING`"
        },
        {
          "name": "options",
          "short": "When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects.",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "organization_field",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/organizationFields",
              "segments": [
                {
                  "lit": "organizationFields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationFields"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizationFields",
              "segments": [
                {
                  "lit": "organizationFields"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationFields"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizationFields/{id}",
              "segments": [
                {
                  "lit": "organizationFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationFields",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizationFields/{id}",
              "segments": [
                {
                  "lit": "organizationFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationFields",
                "{id}"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizationFields",
              "segments": [
                {
                  "lit": "organizationFields"
                }
              ],
              "select": {
                "exist": [
                  "ids"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationFields"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/organizationFields/{id}",
              "segments": [
                {
                  "lit": "organizationFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationFields",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "organization_relationship": {
      "fields": [
        {
          "name": "additional_data",
          "short": "The additional data of the list",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "short": "The array of organization relationships",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "org_id",
          "short": "The ID of the base organization for the returned calculated values",
          "type": "`$INTEGER`"
        },
        {
          "name": "rel_linked_org_id",
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The linked organization in the relationship.",
          "type": "`$INTEGER`"
        },
        {
          "name": "rel_owner_org_id",
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The owner of the relationship.",
          "type": "`$INTEGER`"
        },
        {
          "name": "related_objects",
          "type": "`$OBJECT`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "type",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The type of organization relationship",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "organization_relationship",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/organizationRelationships",
              "segments": [
                {
                  "lit": "organizationRelationships"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationRelationships"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "org_id",
                    "orig": "org_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizationRelationships",
              "segments": [
                {
                  "lit": "organizationRelationships"
                }
              ],
              "select": {
                "exist": [
                  "org_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationRelationships"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organizationRelationships/{id}",
              "segments": [
                {
                  "lit": "organizationRelationships"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "org_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationRelationships",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizationRelationships/{id}",
              "segments": [
                {
                  "lit": "organizationRelationships"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationRelationships",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/organizationRelationships/{id}",
              "segments": [
                {
                  "lit": "organizationRelationships"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizationRelationships",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "permission_set": {
      "fields": [
        {
          "name": "app",
          "short": "The app that permission set belongs to",
          "type": "`$STRING`"
        },
        {
          "name": "assignment_count",
          "short": "The number of users assigned to this permission set",
          "type": "`$INTEGER`"
        },
        {
          "name": "contents",
          "short": "A permission assigned to this permission set",
          "type": "`$ARRAY`"
        },
        {
          "name": "data",
          "short": "The array of permission set",
          "type": "`$ARRAY`"
        },
        {
          "name": "description",
          "short": "The description of the permission set",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The ID of user permission set",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the permission set",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "type",
          "short": "The type of permission set",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "permission_set",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/permissionSets/{id}/assignments",
              "segments": [
                {
                  "lit": "permissionSets"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "assignments"
                }
              ],
              "select": {
                "$action": "assignment",
                "exist": [
                  "id",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "permissionSets",
                "{id}",
                "assignments"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "app",
                    "orig": "app",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/permissionSets",
              "segments": [
                {
                  "lit": "permissionSets"
                }
              ],
              "select": {
                "exist": [
                  "app"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "permissionSets"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/permissionSets/{id}",
              "segments": [
                {
                  "lit": "permissionSets"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "permissionSets",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "person": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "person",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/persons/{id}/followers",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "followers"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/persons/{id}/picture",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "picture"
                }
              ],
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "picture"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "all_change",
                    "orig": "all_change",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "item",
                    "orig": "item",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/{id}/flow",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "flow"
                }
              ],
              "select": {
                "$action": "flow",
                "exist": [
                  "all_change",
                  "id",
                  "item",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "flow"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/{id}/files",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "files"
                }
              ],
              "select": {
                "$action": "file",
                "exist": [
                  "id",
                  "limit",
                  "sort",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "files"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "include_body",
                    "orig": "include_body",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/{id}/mailMessages",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "mailMessages"
                }
              ],
              "select": {
                "$action": "mail_message",
                "exist": [
                  "id",
                  "include_body",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "mailMessages"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/{id}/changelog",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "changelog"
                }
              ],
              "select": {
                "$action": "changelog",
                "exist": [
                  "cursor",
                  "id",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "changelog"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/{id}/products",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "products"
                }
              ],
              "select": {
                "$action": "product",
                "exist": [
                  "id",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "products"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/{id}/followers",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "followers"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/persons/{id}/permittedUsers",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permittedUsers"
                }
              ],
              "select": {
                "$action": "permitted_user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "permittedUsers"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "follower_id",
                    "orig": "follower_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/persons/{id}/followers/{follower_id}",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                },
                {
                  "var": "follower_id"
                }
              ],
              "select": {
                "exist": [
                  "follower_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "followers",
                "{follower_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/persons/{id}/picture",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "picture"
                }
              ],
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "picture"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/persons/{id}/merge",
              "segments": [
                {
                  "lit": "persons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "merge"
                }
              ],
              "select": {
                "$action": "merge",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "persons",
                "{id}",
                "merge"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "follower"
          ]
        ]
      }
    },
    "person_field": {
      "fields": [
        {
          "name": "add_visible_flag",
          "short": "Whether the field is available in 'add new' modal or not (both in web and mobile app)",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "additional_data",
          "short": "The additional data of the list",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the field",
          "type": "`$STRING`"
        },
        {
          "name": "options",
          "short": "When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects.",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "person_field",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/personFields",
              "segments": [
                {
                  "lit": "personFields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "personFields"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/personFields",
              "segments": [
                {
                  "lit": "personFields"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "personFields"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/personFields/{id}",
              "segments": [
                {
                  "lit": "personFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "personFields",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/personFields/{id}",
              "segments": [
                {
                  "lit": "personFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "personFields",
                "{id}"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/personFields",
              "segments": [
                {
                  "lit": "personFields"
                }
              ],
              "select": {
                "exist": [
                  "ids"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "personFields"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/personFields/{id}",
              "segments": [
                {
                  "lit": "personFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "personFields",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pipeline": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "pipeline",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "everyone",
                    "orig": "everyone",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "get_summary",
                    "orig": "get_summary",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "stage_id",
                    "orig": "stage_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "totals_convert_currency",
                    "orig": "totals_convert_currency",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/pipelines/{id}/deals",
              "segments": [
                {
                  "lit": "pipelines"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "deals"
                }
              ],
              "select": {
                "$action": "deal",
                "exist": [
                  "everyone",
                  "filter_id",
                  "get_summary",
                  "id",
                  "limit",
                  "stage_id",
                  "start",
                  "totals_convert_currency",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "pipelines",
                "{id}",
                "deals"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/pipelines/{id}/conversion_statistics",
              "segments": [
                {
                  "lit": "pipelines"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "conversion_statistics"
                }
              ],
              "select": {
                "$action": "conversion_statistic",
                "exist": [
                  "end_date",
                  "id",
                  "start_date",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "pipelines",
                "{id}",
                "conversion_statistics"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/pipelines/{id}/movement_statistics",
              "segments": [
                {
                  "lit": "pipelines"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "movement_statistics"
                }
              ],
              "select": {
                "$action": "movement_statistic",
                "exist": [
                  "end_date",
                  "id",
                  "start_date",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "pipelines",
                "{id}",
                "movement_statistics"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "product": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "product",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/products/{id}/followers",
              "segments": [
                {
                  "lit": "products"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "products",
                "{id}",
                "followers"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "all_not_deleted",
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/products/{id}/deals",
              "segments": [
                {
                  "lit": "products"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "deals"
                }
              ],
              "select": {
                "$action": "deal",
                "exist": [
                  "id",
                  "limit",
                  "start",
                  "status"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "products",
                "{id}",
                "deals"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/products/{id}/files",
              "segments": [
                {
                  "lit": "products"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "files"
                }
              ],
              "select": {
                "$action": "file",
                "exist": [
                  "id",
                  "limit",
                  "sort",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "products",
                "{id}",
                "files"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/products/{id}/followers",
              "segments": [
                {
                  "lit": "products"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "products",
                "{id}",
                "followers"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/products/{id}/permittedUsers",
              "segments": [
                {
                  "lit": "products"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permittedUsers"
                }
              ],
              "select": {
                "$action": "permitted_user",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "products",
                "{id}",
                "permittedUsers"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "follower_id",
                    "orig": "follower_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/products/{id}/followers/{follower_id}",
              "segments": [
                {
                  "lit": "products"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                },
                {
                  "var": "follower_id"
                }
              ],
              "select": {
                "exist": [
                  "follower_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "products",
                "{id}",
                "followers",
                "{follower_id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "follower"
          ]
        ]
      }
    },
    "product_field": {
      "fields": [
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "field_type",
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (…",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the field",
          "type": "`$STRING`"
        },
        {
          "name": "options",
          "short": "When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{\"label\":\"red\"}, {\"label\":\"blue\"}, {\"label\":\"lilac\"}]`",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "product_field",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/productFields",
              "segments": [
                {
                  "lit": "productFields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "productFields"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/productFields",
              "segments": [
                {
                  "lit": "productFields"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "productFields"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/productFields/{id}",
              "segments": [
                {
                  "lit": "productFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "productFields",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/productFields/{id}",
              "segments": [
                {
                  "lit": "productFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "productFields",
                "{id}"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/productFields",
              "segments": [
                {
                  "lit": "productFields"
                }
              ],
              "select": {
                "exist": [
                  "ids"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "productFields"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/productFields/{id}",
              "segments": [
                {
                  "lit": "productFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "productFields",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "project": {
      "fields": [
        {
          "name": "additional_data",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$ANY`"
        },
        {
          "name": "group_id",
          "short": "The ID of a group on a project board",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "short": "The ID of the project, generated when the task was created",
          "type": "`$INTEGER`"
        },
        {
          "name": "phase_id",
          "short": "The ID of a phase on a project board",
          "type": "`$NUMBER`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{id}/archive",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "archive"
                }
              ],
              "select": {
                "$action": "archive",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}",
                "archive"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/projects",
              "segments": [
                {
                  "lit": "projects"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "include_archived",
                    "orig": "include_archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "phase_id",
                    "orig": "phase_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "open,completed",
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects",
              "segments": [
                {
                  "lit": "projects"
                }
              ],
              "select": {
                "exist": [
                  "cursor",
                  "filter_id",
                  "include_archived",
                  "limit",
                  "phase_id",
                  "status"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{id}/activities",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "activities"
                }
              ],
              "select": {
                "$action": "activity",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}",
                "activities"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{id}/groups",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "groups"
                }
              ],
              "select": {
                "$action": "group",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}",
                "groups"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{id}/plan",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "plan"
                }
              ],
              "select": {
                "$action": "plan",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}",
                "plan"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{id}/tasks",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "tasks"
                }
              ],
              "select": {
                "$action": "task",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}",
                "tasks"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "activity_id",
                    "orig": "activity_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{id}/plan/activities/{activityId}",
              "rename": {
                "param": {
                  "activityId": "activity_id"
                }
              },
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "plan"
                },
                {
                  "lit": "activities"
                },
                {
                  "var": "activity_id"
                }
              ],
              "select": {
                "exist": [
                  "activity_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}",
                "plan",
                "activities",
                "{activity_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "task_id",
                    "orig": "task_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{id}/plan/tasks/{taskId}",
              "rename": {
                "param": {
                  "taskId": "task_id"
                }
              },
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "plan"
                },
                {
                  "lit": "tasks"
                },
                {
                  "var": "task_id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "task_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}",
                "plan",
                "tasks",
                "{task_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "activity"
          ],
          [
            "task"
          ]
        ]
      }
    },
    "project_board": {
      "fields": [
        {
          "name": "add_time",
          "short": "The creation date and time of the board in UTC.",
          "type": "`$STRING`"
        },
        {
          "name": "additional_data",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "short": "The ID of the project board",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Name of a project board",
          "type": "`$STRING`"
        },
        {
          "name": "order_nr",
          "short": "The order of a board",
          "type": "`$NUMBER`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "update_time",
          "short": "The update date and time of the board in UTC.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project_board",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/projects/boards",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "boards"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "boards"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/boards/{id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "boards",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "project_phase": {
      "fields": [
        {
          "name": "add_time",
          "short": "The creation date and time of the board in UTC.",
          "type": "`$STRING`"
        },
        {
          "name": "additional_data",
          "type": "`$OBJECT`"
        },
        {
          "name": "board_id",
          "short": "The ID of the project board this phase is linked to",
          "type": "`$NUMBER`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "short": "The ID of the project phase",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Name of a project phase",
          "type": "`$STRING`"
        },
        {
          "name": "order_nr",
          "short": "The order of a phase",
          "type": "`$NUMBER`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "update_time",
          "short": "The update date and time of the board in UTC.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project_phase",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "board_id",
                    "orig": "board_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/phases",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "phases"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "phases"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projects/phases/{id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "phases"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projects",
                "phases",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "project_template": {
      "fields": [
        {
          "name": "add_time",
          "short": "The creation date and time of the template in UTC.",
          "type": "`$STRING`"
        },
        {
          "name": "additional_data",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$ANY`"
        },
        {
          "name": "description",
          "short": "The description of a template",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The ID of a template",
          "type": "`$NUMBER`"
        },
        {
          "name": "owner_id",
          "short": "The ID of a template owner",
          "type": "`$NUMBER`"
        },
        {
          "name": "projects_board_id",
          "short": "The ID of the project board this template is associated with",
          "type": "`$NUMBER`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "title",
          "short": "The title of a template",
          "type": "`$STRING`"
        },
        {
          "name": "update_time",
          "short": "The update date and time of the template in UTC.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project_template",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 500,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projectTemplates",
              "segments": [
                {
                  "lit": "projectTemplates"
                }
              ],
              "select": {
                "exist": [
                  "cursor",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projectTemplates"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/projectTemplates/{id}",
              "segments": [
                {
                  "lit": "projectTemplates"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "projectTemplates",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "recent": {
      "fields": [
        {
          "name": "additional_data",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`",
          "union": {
            "branches": 12,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "recent",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "item",
                    "orig": "item",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "since_timestamp",
                    "orig": "since_timestamp",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/recents",
              "segments": [
                {
                  "lit": "recents"
                }
              ],
              "select": {
                "exist": [
                  "item",
                  "limit",
                  "since_timestamp",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "recents"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "role": {
      "fields": [
        {
          "name": "additional_data",
          "short": "The additional data in the role",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "short": "The details of the sub-role",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the role",
          "type": "`$STRING`"
        },
        {
          "name": "parent_role_id",
          "short": "The ID of the parent role",
          "type": "`$INTEGER`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "role",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/roles/{id}/assignments",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "assignments"
                }
              ],
              "select": {
                "$action": "assignment",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}",
                "assignments"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/roles/{id}/settings",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "settings"
                }
              ],
              "select": {
                "$action": "setting",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}",
                "settings"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/roles",
              "segments": [
                {
                  "lit": "roles"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/roles/{id}/assignments",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "assignments"
                }
              ],
              "select": {
                "$action": "assignment",
                "exist": [
                  "id",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}",
                "assignments"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/roles",
              "segments": [
                {
                  "lit": "roles"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": true,
                    "kind": "query",
                    "name": "visible",
                    "orig": "visible",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/roles/{id}/pipelines",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "pipelines"
                }
              ],
              "select": {
                "$action": "pipeline",
                "exist": [
                  "id",
                  "visible"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}",
                "pipelines"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/roles/{id}",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/roles/{id}/settings",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "settings"
                }
              ],
              "select": {
                "$action": "setting",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}",
                "settings"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/roles/{id}",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/roles/{id}/assignments",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "assignments"
                }
              ],
              "select": {
                "$action": "assignment",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}",
                "assignments"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/roles/{id}",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/roles/{id}/pipelines",
              "segments": [
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "pipelines"
                }
              ],
              "select": {
                "$action": "pipeline",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "roles",
                "{id}",
                "pipelines"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "stage": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "stage",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "everyone",
                    "orig": "everyone",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "filter_id",
                    "orig": "filter_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/stages/{id}/deals",
              "segments": [
                {
                  "lit": "stages"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "deals"
                }
              ],
              "select": {
                "$action": "deal",
                "exist": [
                  "everyone",
                  "filter_id",
                  "id",
                  "limit",
                  "start",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "stages",
                "{id}",
                "deals"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "task": {
      "fields": [
        {
          "name": "additional_data",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "short": "The ID of the task, generated when the task was created",
          "type": "`$INTEGER`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "task",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/tasks",
              "segments": [
                {
                  "lit": "tasks"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tasks"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "assignee_id",
                    "orig": "assignee_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "done",
                    "orig": "done",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 500,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "parent_task_id",
                    "orig": "parent_task_id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/tasks",
              "segments": [
                {
                  "lit": "tasks"
                }
              ],
              "select": {
                "exist": [
                  "assignee_id",
                  "cursor",
                  "done",
                  "limit",
                  "parent_task_id",
                  "project_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tasks"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/tasks/{id}",
              "segments": [
                {
                  "lit": "tasks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tasks",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/tasks/{id}",
              "segments": [
                {
                  "lit": "tasks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tasks",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/tasks/{id}",
              "segments": [
                {
                  "lit": "tasks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tasks",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user": {
      "fields": [
        {
          "name": "access",
          "short": "The access given to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "active_flag",
          "op": {
            "update": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether the user is active or not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "email",
          "req": true,
          "short": "The email of the user",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/users",
              "segments": [
                {
                  "lit": "users"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{id}/roleAssignments",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "roleAssignments"
                }
              ],
              "select": {
                "$action": "role_assignment",
                "exist": [
                  "id",
                  "limit",
                  "start"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{id}",
                "roleAssignments"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "search_by_email",
                    "orig": "search_by_email",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "term",
                    "orig": "term",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/find",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "lit": "find"
                }
              ],
              "select": {
                "$action": "find",
                "exist": [
                  "search_by_email",
                  "term"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "find"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{id}/followers",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "followers"
                }
              ],
              "select": {
                "$action": "follower",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{id}",
                "followers"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/users",
              "segments": [
                {
                  "lit": "users"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{id}",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{id}/permissions",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permissions"
                }
              ],
              "select": {
                "$action": "permission",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{id}",
                "permissions"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{id}/roleSettings",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "roleSettings"
                }
              ],
              "select": {
                "$action": "role_setting",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{id}",
                "roleSettings"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/users/me",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "lit": "me"
                }
              ],
              "select": {
                "$action": "me"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "me"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/users/{id}",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_connection": {
      "fields": [
        {
          "name": "data",
          "short": "The object of UserConnections",
          "type": "`$OBJECT`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "user_connection",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/userConnections",
              "segments": [
                {
                  "lit": "userConnections"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "userConnections"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_setting": {
      "fields": [
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "success",
          "short": "If the response is successful or not",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "user_setting",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/userSettings",
              "segments": [
                {
                  "lit": "userSettings"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "userSettings"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webhook": {
      "fields": [
        {
          "name": "data",
          "short": "The array of Webhooks",
          "type": "`$ARRAY`"
        },
        {
          "name": "event_action",
          "req": true,
          "short": "The type of action to receive notifications about.",
          "type": "`$STRING`"
        },
        {
          "name": "event_object",
          "req": true,
          "short": "The type of object to receive notifications about.",
          "type": "`$STRING`"
        },
        {
          "name": "http_auth_password",
          "short": "The HTTP basic auth password of the subscription URL endpoint (if required)",
          "type": "`$STRING`"
        },
        {
          "name": "http_auth_user",
          "short": "The HTTP basic auth username of the subscription URL endpoint (if required)",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The webhook's name",
          "type": "`$STRING`"
        },
        {
          "name": "subscription_url",
          "req": true,
          "short": "A full, valid, publicly accessible URL which determines where to send the notifications.",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "The ID of the user that this webhook will be authorized with.",
          "type": "`$INTEGER`"
        },
        {
          "name": "version",
          "short": "The webhook's version.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "webhook",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/webhooks",
              "segments": [
                {
                  "lit": "webhooks"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "webhooks"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks",
              "segments": [
                {
                  "lit": "webhooks"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "webhooks"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/webhooks/{id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "webhooks",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

