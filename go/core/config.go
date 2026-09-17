package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Pipedrive",
			"slug": "pipedrive",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.pipedrive.com/v1",
			"auth": map[string]any{
				"prefix": "Basic",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"activity_field": map[string]any{},
				"activity_type": map[string]any{},
				"billing": map[string]any{},
				"call_log": map[string]any{},
				"channel": map[string]any{},
				"currency": map[string]any{},
				"deal": map[string]any{},
				"deal_field": map[string]any{},
				"file": map[string]any{},
				"filter": map[string]any{},
				"goal": map[string]any{},
				"lead": map[string]any{},
				"lead_field": map[string]any{},
				"lead_label": map[string]any{},
				"lead_source": map[string]any{},
				"legacy_team": map[string]any{},
				"mailbox": map[string]any{},
				"meeting": map[string]any{},
				"note": map[string]any{},
				"note_field": map[string]any{},
				"oauth": map[string]any{},
				"organization": map[string]any{},
				"organization_field": map[string]any{},
				"organization_relationship": map[string]any{},
				"permission_set": map[string]any{},
				"person": map[string]any{},
				"person_field": map[string]any{},
				"pipeline": map[string]any{},
				"product": map[string]any{},
				"product_field": map[string]any{},
				"project": map[string]any{},
				"project_board": map[string]any{},
				"project_phase": map[string]any{},
				"project_template": map[string]any{},
				"recent": map[string]any{},
				"role": map[string]any{},
				"stage": map[string]any{},
				"task": map[string]any{},
				"user": map[string]any{},
				"user_connection": map[string]any{},
				"user_setting": map[string]any{},
				"webhook": map[string]any{},
			},
		},
		"entity": map[string]any{
			"activity_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"short": "The additional data of the list",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "activity_field",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/activityFields",
								"segments": []any{
									map[string]any{
										"lit": "activityFields",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"activityFields",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"activity_type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "color",
						"short": "A designated color for the activity type in 6-character HEX format (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data",
						"short": "The array of activity types",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "icon_key",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Icon graphic to use for representing this activity type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the activity type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "order_nr",
						"short": "An order number for this activity type.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "activity_type",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/activityTypes",
								"segments": []any{
									map[string]any{
										"lit": "activityTypes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"activityTypes",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/activityTypes",
								"segments": []any{
									map[string]any{
										"lit": "activityTypes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"activityTypes",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/activityTypes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "activityTypes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"activityTypes",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/activityTypes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "activityTypes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"activityTypes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"billing": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "An array of add-ons that the company has.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "billing",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/billing/subscriptions/addons",
								"segments": []any{
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "addons",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"billing",
									"subscriptions",
									"addons",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"call_log": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "activity_id",
						"short": "If specified, this activity will be converted into a call log, with the information provided.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "company_id",
						"short": "The company ID of the owner of the call log",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deal_id",
						"short": "The ID of the deal this call is associated with.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "duration",
						"short": "The duration of the call in seconds",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "end_time",
						"req": true,
						"short": "The date and time of the end of the call in UTC.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "from_phone_number",
						"short": "The number that made the call",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_recording",
						"short": "If the call log has an audio recording attached, the value should be true",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The call log ID, generated when the call log was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "lead_id",
						"short": "The ID of the lead in the UUID format this call is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "note",
						"short": "The note for the call log in HTML format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "org_id",
						"short": "The ID of the organization this call is associated with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "outcome",
						"req": true,
						"short": "Describes the outcome of the call",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "person_id",
						"short": "The ID of the person this call is associated with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "start_time",
						"req": true,
						"short": "The date and time of the start of the call in UTC.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"short": "The name of the activity this call is attached to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "to_phone_number",
						"req": true,
						"short": "The number called",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"short": "The ID of the owner of the call log.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "call_log",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "3cde3b05035cae14dcfc172bd8000d08",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/callLogs/{id}/recordings",
								"segments": []any{
									map[string]any{
										"lit": "callLogs",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "recordings",
									},
								},
								"select": map[string]any{
									"$action": "recording",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"callLogs",
									"{id}",
									"recordings",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/callLogs",
								"segments": []any{
									map[string]any{
										"lit": "callLogs",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"callLogs",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/callLogs",
								"segments": []any{
									map[string]any{
										"lit": "callLogs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"callLogs",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "3cde3b05035cae14dcfc172bd8000d08",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/callLogs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "callLogs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"callLogs",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "3cde3b05035cae14dcfc172bd8000d08",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/callLogs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "callLogs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"callLogs",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attachments",
						"short": "The list of attachments available in the message",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "url",
						"name": "avatar_url",
						"short": "The URL for an icon that represents your channel",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channel_id",
						"req": true,
						"short": "The channel ID as in the provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conversation_id",
						"req": true,
						"short": "The ID of the conversation",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "url",
						"name": "conversation_link",
						"short": "A URL that can open the conversation in the provider's side",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The date and time when your channel was created in the API",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The unique channel ID used internally in omnichannel-api and the frontend of the extension",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "marketplace_client_id",
						"short": "The client_id of your app in Pipedrive marketplace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"req": true,
						"short": "The body of the message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the channel",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pd_company_id",
						"short": "The ID of the user's company in Pipedrive",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pd_user_id",
						"short": "The ID of the user in Pipedrive",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "string",
						"name": "provider_channel_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The channel ID you specified while creating the channel",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_type",
						"short": "Value of the provider_type sent to this endpoint",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "reply_by",
						"short": "The date and time when the message can no longer receive a reply, in UTC.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sender_id",
						"req": true,
						"short": "The ID of the provider's user that sent the message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The status of the message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "template_support",
						"short": "Value of the template_support sent to this endpoint",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "channel",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/channels",
								"segments": []any{
									map[string]any{
										"lit": "channels",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"channels",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/channels/messages/receive",
								"segments": []any{
									map[string]any{
										"lit": "channels",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"lit": "receive",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"channels",
									"messages",
									"receive",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "conversation_id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/channels/{channel-id}/conversations/{conversation-id}",
								"rename": map[string]any{
									"param": map[string]any{
										"channel-id": "id",
										"conversation-id": "conversation_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "channels",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"channels",
									"{id}",
									"conversations",
									"{conversation_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/channels/{id}",
								"segments": []any{
									map[string]any{
										"lit": "channels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"channels",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"conversation",
						},
					},
				},
			},
			"currency": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_flag",
						"short": "Whether the currency is active or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "code",
						"short": "The code of the currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "decimal_points",
						"short": "The amount of decimal points of the currency",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the currency",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_custom_flag",
						"short": "Whether the currency is a custom one or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "symbol",
						"short": "The symbol of the currency",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "currency",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "term",
											"orig": "term",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/currencies",
								"segments": []any{
									map[string]any{
										"lit": "currencies",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"term",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"currencies",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"deal": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "deals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "period_end",
						"short": "The end date and time of the period",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "period_start",
						"short": "The start date and time of the period",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total_count",
						"short": "The total number of deals",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_currency_converted_value",
						"short": "The total value of deals converted into the company default currency",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "total_currency_converted_value_formatted",
						"short": "The total converted value of deals formatted with the company default currency.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total_weighted_currency_converted_value",
						"short": "The total weighted value of deals converted into the company default currency",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "total_weighted_currency_converted_value_formatted",
						"short": "The total weighted value of deals formatted with the company default currency.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totals",
						"short": "The total values of deals for the given period",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "values_total",
						"short": "The total values of the deals grouped by deal currency",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "weighted_values_total",
						"short": "The total weighted values of the deals grouped by deal currency.",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "deal",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/deals/{id}/duplicate",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "duplicate",
									},
								},
								"select": map[string]any{
									"$action": "duplicate",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"duplicate",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/deals/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"followers",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/deals/{id}/participants",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "participants",
									},
								},
								"select": map[string]any{
									"$action": "participant",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"participants",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "org_id",
											"orig": "org_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "owned_by_you",
											"orig": "owned_by_you",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "person_id",
											"orig": "person_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pipeline_id",
											"orig": "pipeline_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "stage_id",
											"orig": "stage_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "all_not_deleted",
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/archived",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"lit": "archived",
									},
								},
								"select": map[string]any{
									"$action": "archived",
									"exist": []any{
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
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"archived",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "all_change",
											"orig": "all_change",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "item",
											"orig": "item",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/flow",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "flow",
									},
								},
								"select": map[string]any{
									"$action": "flow",
									"exist": []any{
										"all_change",
										"id",
										"item",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"flow",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/files",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"$action": "file",
									"exist": []any{
										"id",
										"limit",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"files",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_body",
											"orig": "include_body",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/mailMessages",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "mailMessages",
									},
								},
								"select": map[string]any{
									"$action": "mail_message",
									"exist": []any{
										"id",
										"include_body",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"mailMessages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/changelog",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "changelog",
									},
								},
								"select": map[string]any{
									"$action": "changelog",
									"exist": []any{
										"cursor",
										"id",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"changelog",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/participants",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "participants",
									},
								},
								"select": map[string]any{
									"$action": "participant",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"participants",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/participantsChangelog",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "participantsChangelog",
									},
								},
								"select": map[string]any{
									"$action": "participants_changelog",
									"exist": []any{
										"cursor",
										"id",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"participantsChangelog",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"followers",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "exclude_deal",
											"orig": "exclude_deal",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "field_key",
											"orig": "field_key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "interval",
											"orig": "interval",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pipeline_id",
											"orig": "pipeline_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "totals_convert_currency",
											"orig": "totals_convert_currency",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/timeline",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"lit": "timeline",
									},
								},
								"select": map[string]any{
									"$action": "timeline",
									"exist": []any{
										"amount",
										"exclude_deal",
										"field_key",
										"filter_id",
										"interval",
										"pipeline_id",
										"start_date",
										"totals_convert_currency",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"timeline",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "exclude_deal",
											"orig": "exclude_deal",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "field_key",
											"orig": "field_key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "interval",
											"orig": "interval",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pipeline_id",
											"orig": "pipeline_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "totals_convert_currency",
											"orig": "totals_convert_currency",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/timeline/archived",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"lit": "timeline",
									},
									map[string]any{
										"lit": "archived",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"exclude_deal",
										"field_key",
										"filter_id",
										"interval",
										"pipeline_id",
										"start_date",
										"totals_convert_currency",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"timeline",
									"archived",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pipeline_id",
											"orig": "pipeline_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "stage_id",
											"orig": "stage_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/summary",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"lit": "summary",
									},
								},
								"select": map[string]any{
									"$action": "summary",
									"exist": []any{
										"filter_id",
										"pipeline_id",
										"stage_id",
										"status",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"summary",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pipeline_id",
											"orig": "pipeline_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "stage_id",
											"orig": "stage_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/summary/archived",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"lit": "summary",
									},
									map[string]any{
										"lit": "archived",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter_id",
										"pipeline_id",
										"stage_id",
										"status",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"summary",
									"archived",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/deals/{id}/permittedUsers",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permittedUsers",
									},
								},
								"select": map[string]any{
									"$action": "permitted_user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"permittedUsers",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "deal_participant_id",
											"orig": "deal_participant_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/deals/{id}/participants/{deal_participant_id}",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "participants",
									},
									map[string]any{
										"var": "deal_participant_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"deal_participant_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"participants",
									"{deal_participant_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "follower_id",
											"orig": "follower_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/deals/{id}/followers/{follower_id}",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
									map[string]any{
										"var": "follower_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"follower_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"followers",
									"{follower_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/deals/{id}/merge",
								"segments": []any{
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "merge",
									},
								},
								"select": map[string]any{
									"$action": "merge",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"deals",
									"{id}",
									"merge",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"follower",
						},
						[]any{
							"participant",
						},
					},
				},
			},
			"deal_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "add_visible_flag",
						"short": "Whether the field is available in 'add new' modal or not (both in web and mobile app)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "additional_data",
						"short": "The additional data of the list",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the field",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"short": "When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "deal_field",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/dealFields",
								"segments": []any{
									map[string]any{
										"lit": "dealFields",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dealFields",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dealFields",
								"segments": []any{
									map[string]any{
										"lit": "dealFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dealFields",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dealFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "dealFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dealFields",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/dealFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "dealFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dealFields",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/dealFields",
								"segments": []any{
									map[string]any{
										"lit": "dealFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dealFields",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/dealFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "dealFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dealFields",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_flag",
						"short": "Whether the user is active or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "activity_id",
						"short": "The ID of the activity to associate the file with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "add_time",
						"short": "The date and time when the file was added/created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cid",
						"short": "The ID of the inline attachment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deal_id",
						"short": "The ID of the deal to associate the file with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deal_name",
						"short": "The name of the deal associated with the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "file_name",
						"short": "The original name of the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "file_size",
						"short": "The size of the file",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the file",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "inline_flag",
						"short": "Whether the file was uploaded as inline or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "uuid",
						"name": "lead_id",
						"short": "The ID of the lead to associate the file with",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lead_name",
						"short": "The name of the lead associated with the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mail_message_id",
						"short": "The ID of the mail message to associate the file with",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mail_template_id",
						"short": "The ID of the mail template to associate the file with",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The visible name of the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "org_id",
						"short": "The ID of the organization to associate the file with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "org_name",
						"short": "The name of the organization associated with the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "person_id",
						"short": "The ID of the person to associate the file with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "person_name",
						"short": "The name of the person associated with the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_id",
						"short": "The ID of the product to associate the file with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "product_name",
						"short": "The name of the product associated with the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "project_id",
						"short": "The ID of the project to associate the file with",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "project_name",
						"short": "The name of the project associated with the file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remote_id",
						"short": "The ID of the remote item",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remote_location",
						"short": "The location type to send the file to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "s3_bucket",
						"short": "The location of the cloud storage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "update_time",
						"short": "The last updated date and time of the file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The URL of the download file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"short": "The ID of the user to associate the file with",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/files",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"files",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/files/remote",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"lit": "remote",
									},
								},
								"select": map[string]any{
									"$action": "remote",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"files",
									"remote",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/files/remoteLink",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"lit": "remoteLink",
									},
								},
								"select": map[string]any{
									"$action": "remote_link",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"files",
									"remoteLink",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files/{id}",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"files",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files/{id}/download",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "download",
									},
								},
								"select": map[string]any{
									"$action": "download",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files",
									"{id}",
									"download",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/files/{id}",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"files",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/files/{id}",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"files",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"filter": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conditions",
						"req": true,
						"short": "The conditions of the filter as a JSON object.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"short": "The filter object including conditions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the filter",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of filter to create",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "filter",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_field_code",
											"orig": "include_field_code",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/filters",
								"segments": []any{
									map[string]any{
										"lit": "filters",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_field_code",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"filters",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/filters",
								"segments": []any{
									map[string]any{
										"lit": "filters",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"filters",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_field_code",
											"orig": "include_field_code",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/filters/{id}",
								"segments": []any{
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_field_code",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"filters",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/filters/helpers",
								"segments": []any{
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"lit": "helpers",
									},
								},
								"select": map[string]any{
									"$action": "helper",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"filters",
									"helpers",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/filters/{id}",
								"segments": []any{
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"filters",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/filters",
								"segments": []any{
									map[string]any{
										"lit": "filters",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"filters",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_field_code",
											"orig": "include_field_code",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/filters/{id}",
								"segments": []any{
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_field_code",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"filters",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"goal": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assignee",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "Who this goal is assigned to.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "duration",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "The date when the goal starts and ends.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "expected_outcome",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "The expected outcome of the goal.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "goal",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "interval",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The interval of the goal",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "The title of the goal",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "The type of the goal.",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "goal",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/goals",
								"segments": []any{
									map[string]any{
										"lit": "goals",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"goals",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "assignee_id",
											"orig": "assignee_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "assignee_type",
											"orig": "assignee_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "expected_outcome_currency_id",
											"orig": "expected_outcome_currency_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "expected_outcome_target",
											"orig": "expected_outcome_target",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "expected_outcome_tracking_metric",
											"orig": "expected_outcome_tracking_metric",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "is_active",
											"orig": "is_active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "period_end",
											"orig": "period_end",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "period_start",
											"orig": "period_start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type_name",
											"orig": "type_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type_params_activity_type_id",
											"orig": "type_params_activity_type_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "type_params_pipeline_id",
											"orig": "type_params_pipeline_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "type_params_stage_id",
											"orig": "type_params_stage_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/goals/find",
								"segments": []any{
									map[string]any{
										"lit": "goals",
									},
									map[string]any{
										"lit": "find",
									},
								},
								"select": map[string]any{
									"$action": "find",
									"exist": []any{
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
										"type_params_stage_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"goals",
									"find",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "period_end",
											"orig": "period_end",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "period_start",
											"orig": "period_start",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/goals/{id}/results",
								"segments": []any{
									map[string]any{
										"lit": "goals",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "results",
									},
								},
								"select": map[string]any{
									"$action": "result",
									"exist": []any{
										"id",
										"period_end",
										"period_start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"goals",
									"{id}",
									"results",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/goals/{id}",
								"segments": []any{
									map[string]any{
										"lit": "goals",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"goals",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/goals/{id}",
								"segments": []any{
									map[string]any{
										"lit": "goals",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"goals",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lead": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "add_time",
						"short": "The date and time of when the lead was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cc_email",
						"short": "The BCC email of the lead",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channel",
						"short": "The ID of your Marketing channel this Lead was created from.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "channel_id",
						"short": "The optional ID to further distinguish the Marketing channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creator_id",
						"short": "The ID of the user who created the lead",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date",
						"name": "expected_close_date",
						"short": "The date of when the deal which will be created from the lead is expected to be closed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"short": "The unique ID of the lead in the UUID format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_archived",
						"short": "A flag indicating whether the lead is archived or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "label_ids",
						"short": "The IDs of the lead labels which are associated with the lead",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "next_activity_id",
						"short": "The ID of the next activity associated with the lead",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "organization_id",
						"short": "The ID of an organization which this lead is linked to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "origin",
						"short": "The way this Lead was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_id",
						"short": "The optional ID to further distinguish the origin of the lead - e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_id",
						"short": "The ID of the user who owns the lead",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "person_id",
						"short": "The ID of a person which this lead is linked to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source_deal_id",
						"short": "The ID of the deal if the lead was converted from a deal.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source_name",
						"short": "Defines where the lead comes from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The title of the lead",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "update_time",
						"short": "The date and time of when the lead was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"req": true,
						"short": "The potential value of the lead represented by a JSON object: `{ \"amount\": 200, \"currency\": \"EUR\" }`.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "visible_to",
						"short": "The visibility of the lead.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "was_seen",
						"short": "A flag indicating whether the lead was seen by someone in the Pipedrive UI",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "lead",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/leads",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leads",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "owner_id",
											"orig": "owner_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "person_id",
											"orig": "person_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "2025-01-01T10:20:00Z",
											"kind": "query",
											"name": "updated_since",
											"orig": "updated_since",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/leads",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter_id",
										"limit",
										"organization_id",
										"owner_id",
										"person_id",
										"sort",
										"start",
										"updated_since",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"leads",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "owner_id",
											"orig": "owner_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "person_id",
											"orig": "person_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/leads/archived",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
									map[string]any{
										"lit": "archived",
									},
								},
								"select": map[string]any{
									"$action": "archived",
									"exist": []any{
										"filter_id",
										"limit",
										"organization_id",
										"owner_id",
										"person_id",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"leads",
									"archived",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/leads/{id}/permittedUsers",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permittedUsers",
									},
								},
								"select": map[string]any{
									"$action": "permitted_user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"leads",
									"{id}",
									"permittedUsers",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "exact_match",
											"orig": "exact_match",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_field",
											"orig": "include_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "person_id",
											"orig": "person_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "term",
											"orig": "term",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/leads/search",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"$action": "search",
									"exist": []any{
										"exact_match",
										"field",
										"include_field",
										"limit",
										"organization_id",
										"person_id",
										"start",
										"term",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"leads",
									"search",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/leads/{id}",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leads",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/leads/{id}",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leads",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/leads/{id}",
								"segments": []any{
									map[string]any{
										"lit": "leads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leads",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lead_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"short": "The additional data of the list",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "lead_field",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/leadFields",
								"segments": []any{
									map[string]any{
										"lit": "leadFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"leadFields",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lead_label": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "add_time",
						"short": "The date and time of when the lead label was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "color",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The color of the label.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"short": "The unique ID of the lead label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the lead label",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "update_time",
						"short": "The date and time of when the lead label was last updated.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "lead_label",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/leadLabels",
								"segments": []any{
									map[string]any{
										"lit": "leadLabels",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leadLabels",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/leadLabels",
								"segments": []any{
									map[string]any{
										"lit": "leadLabels",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leadLabels",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/leadLabels/{id}",
								"segments": []any{
									map[string]any{
										"lit": "leadLabels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leadLabels",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/leadLabels/{id}",
								"segments": []any{
									map[string]any{
										"lit": "leadLabels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leadLabels",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lead_source": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"short": "The unique name of a lead source",
						"type": "`$STRING`",
					},
				},
				"name": "lead_source",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/leadSources",
								"segments": []any{
									map[string]any{
										"lit": "leadSources",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"leadSources",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"legacy_team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"short": "The team description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "manager_id",
						"req": true,
						"short": "The team manager ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The team name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "users",
						"short": "The list of user IDs",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "legacy_team",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/legacyTeams/{id}/users",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "users",
									},
								},
								"select": map[string]any{
									"$action": "user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
									"{id}",
									"users",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/legacyTeams",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "id",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "skip_user",
											"orig": "skip_user",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/legacyTeams",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"order_by",
										"skip_user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/legacyTeams/{id}/users",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "users",
									},
								},
								"select": map[string]any{
									"$action": "user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
									"{id}",
									"users",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "id",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "skip_user",
											"orig": "skip_user",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/legacyTeams/user/{id}",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"order_by",
										"skip_user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
									"user",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "skip_user",
											"orig": "skip_user",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/legacyTeams/{id}",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"skip_user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/legacyTeams/{id}/users",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "users",
									},
								},
								"select": map[string]any{
									"$action": "user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
									"{id}",
									"users",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/legacyTeams/{id}",
								"segments": []any{
									map[string]any{
										"lit": "legacyTeams",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"legacyTeams",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"mailbox": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "The mail thread object",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service",
						"short": "The service name of the response.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statusCode",
						"short": "The email service specific status code and it is returned through the response body.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "statusText",
						"short": "The status text of the response.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "mailbox",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "inbox",
											"kind": "query",
											"name": "folder",
											"orig": "folder",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/mailbox/mailThreads",
								"segments": []any{
									map[string]any{
										"lit": "mailbox",
									},
									map[string]any{
										"lit": "mailThreads",
									},
								},
								"select": map[string]any{
									"$action": "mail_thread",
									"exist": []any{
										"folder",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"mailbox",
									"mailThreads",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "mail_thread_id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/mailbox/mailThreads/{id}/mailMessages",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "mail_thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "mailbox",
									},
									map[string]any{
										"lit": "mailThreads",
									},
									map[string]any{
										"var": "mail_thread_id",
									},
									map[string]any{
										"lit": "mailMessages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"mail_thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"mailbox",
									"mailThreads",
									"{mail_thread_id}",
									"mailMessages",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_body",
											"orig": "include_body",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/mailbox/mailMessages/{id}",
								"segments": []any{
									map[string]any{
										"lit": "mailbox",
									},
									map[string]any{
										"lit": "mailMessages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_body",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"mailbox",
									"mailMessages",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/mailbox/mailThreads/{id}",
								"segments": []any{
									map[string]any{
										"lit": "mailbox",
									},
									map[string]any{
										"lit": "mailThreads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"mailbox",
									"mailThreads",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/mailbox/mailThreads/{id}",
								"segments": []any{
									map[string]any{
										"lit": "mailbox",
									},
									map[string]any{
										"lit": "mailThreads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"mailbox",
									"mailThreads",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/mailbox/mailThreads/{id}",
								"segments": []any{
									map[string]any{
										"lit": "mailbox",
									},
									map[string]any{
										"lit": "mailThreads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"mailbox",
									"mailThreads",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"mail_thread",
						},
					},
				},
			},
			"meeting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "meeting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/meetings/userProviderLinks",
								"segments": []any{
									map[string]any{
										"lit": "meetings",
									},
									map[string]any{
										"lit": "userProviderLinks",
									},
								},
								"select": map[string]any{
									"$action": "user_provider_link",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"meetings",
									"userProviderLinks",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/meetings/userProviderLinks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "meetings",
									},
									map[string]any{
										"lit": "userProviderLinks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"meetings",
									"userProviderLinks",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"note": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_flag",
						"short": "Whether the note is active or deleted",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "add_time",
						"short": "The creation date and time of the note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company_id",
						"short": "The ID of the company",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "content",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The content of the note in HTML format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deal",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "deal_id",
						"short": "The ID of the deal the note is attached to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the note",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "last_update_user_id",
						"short": "The ID of the user who last updated the note",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uuid",
						"name": "lead_id",
						"short": "The ID of the lead the note is attached to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_id",
						"short": "The ID of the object that the comment is attached to, will be the id of the note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_type",
						"short": "The type of object that the comment is attached to, will be \"note\"",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "org_id",
						"short": "The ID of the organization the note is attached to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "organization",
						"short": "The organization the note is attached to",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "person",
						"short": "The person the note is attached to",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "person_id",
						"short": "The ID of the person the note is attached to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pinned_to_deal_flag",
						"short": "If true, the results are filtered by note to deal pinning state",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pinned_to_organization_flag",
						"short": "If true, the results are filtered by note to organization pinning state",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pinned_to_person_flag",
						"short": "If true, the results are filtered by note to person pinning state",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pinned_to_project_flag",
						"short": "If true, the results are filtered by note to project pinning state",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pinned_to_task_flag",
						"short": "If true, the results are filtered by note to task pinning state",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "project",
						"short": "The project the note is attached to",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "project_id",
						"short": "The ID of the project the note is attached to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "task",
						"short": "The task the note is attached to",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "task_id",
						"short": "The ID of the task the note is attached to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "update_time",
						"short": "The creation date and time of the note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updater_id",
						"short": "The ID of the user who last updated the comment",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user",
						"short": "The user who created the note",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user_id",
						"short": "The ID of the user who created the comment",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uuid",
						"name": "uuid",
						"short": "The ID of the note",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "note",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/notes/{id}/comments",
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "comments",
									},
								},
								"select": map[string]any{
									"$action": "comment",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"notes",
									"{id}",
									"comments",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/notes",
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"notes",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "deal_id",
											"orig": "deal_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "lead_id",
											"orig": "lead_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "org_id",
											"orig": "org_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "person_id",
											"orig": "person_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pinned_to_deal_flag",
											"orig": "pinned_to_deal_flag",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pinned_to_lead_flag",
											"orig": "pinned_to_lead_flag",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pinned_to_organization_flag",
											"orig": "pinned_to_organization_flag",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pinned_to_person_flag",
											"orig": "pinned_to_person_flag",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pinned_to_project_flag",
											"orig": "pinned_to_project_flag",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "pinned_to_task_flag",
											"orig": "pinned_to_task_flag",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "project_id",
											"orig": "project_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "task_id",
											"orig": "task_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "2025-01-01T10:20:00Z",
											"kind": "query",
											"name": "updated_since",
											"orig": "updated_since",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notes",
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notes",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notes/{id}/comments",
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "comments",
									},
								},
								"select": map[string]any{
									"$action": "comment",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notes",
									"{id}",
									"comments",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notes/{id}/comments/{commentId}",
								"rename": map[string]any{
									"param": map[string]any{
										"commentId": "comment_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "comments",
									},
									map[string]any{
										"var": "comment_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"comment_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"notes",
									"{id}",
									"comments",
									"{comment_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"notes",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/notes/{id}/comments/{commentId}",
								"rename": map[string]any{
									"param": map[string]any{
										"commentId": "comment_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "comments",
									},
									map[string]any{
										"var": "comment_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"comment_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notes",
									"{id}",
									"comments",
									"{comment_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/notes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notes",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/notes/{id}/comments/{commentId}",
								"rename": map[string]any{
									"param": map[string]any{
										"commentId": "comment_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "comments",
									},
									map[string]any{
										"var": "comment_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"comment_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"notes",
									"{id}",
									"comments",
									"{comment_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/notes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"notes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"comment",
						},
					},
				},
			},
			"note_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"short": "The additional data of the list",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "note_field",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/noteFields",
								"segments": []any{
									map[string]any{
										"lit": "noteFields",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"noteFields",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"oauth": map[string]any{
				"fields": []any{},
				"name": "oauth",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "authorization",
											"orig": "authorization",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/oauth/token",
								"segments": []any{
									map[string]any{
										"lit": "oauth",
									},
									map[string]any{
										"lit": "token",
									},
								},
								"select": map[string]any{
									"$action": "token",
									"exist": []any{
										"authorization",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"oauth",
									"token",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "authorization",
											"orig": "authorization",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/oauth/token/",
								"segments": []any{
									map[string]any{
										"lit": "oauth",
									},
									map[string]any{
										"lit": "token",
									},
								},
								"select": map[string]any{
									"$action": "token",
									"exist": []any{
										"authorization",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"oauth",
									"token",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "client_id",
											"orig": "client_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "redirect_uri",
											"orig": "redirect_uri",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/oauth/authorize",
								"segments": []any{
									map[string]any{
										"lit": "oauth",
									},
									map[string]any{
										"lit": "authorize",
									},
								},
								"select": map[string]any{
									"$action": "authorize",
									"exist": []any{
										"client_id",
										"redirect_uri",
										"state",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"oauth",
									"authorize",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"followers",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "all_change",
											"orig": "all_change",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "item",
											"orig": "item",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/flow",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "flow",
									},
								},
								"select": map[string]any{
									"$action": "flow",
									"exist": []any{
										"all_change",
										"id",
										"item",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"flow",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/files",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"$action": "file",
									"exist": []any{
										"id",
										"limit",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"files",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_body",
											"orig": "include_body",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/mailMessages",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "mailMessages",
									},
								},
								"select": map[string]any{
									"$action": "mail_message",
									"exist": []any{
										"id",
										"include_body",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"mailMessages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/changelog",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "changelog",
									},
								},
								"select": map[string]any{
									"$action": "changelog",
									"exist": []any{
										"cursor",
										"id",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"changelog",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"followers",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/permittedUsers",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permittedUsers",
									},
								},
								"select": map[string]any{
									"$action": "permitted_user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"permittedUsers",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "follower_id",
											"orig": "follower_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/followers/{follower_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
									map[string]any{
										"var": "follower_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"follower_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"followers",
									"{follower_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{id}/merge",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "merge",
									},
								},
								"select": map[string]any{
									"$action": "merge",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"merge",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"follower",
						},
					},
				},
			},
			"organization_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "add_visible_flag",
						"short": "Whether the field is available in 'add new' modal or not (both in web and mobile app)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "additional_data",
						"short": "The additional data of the list",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the field",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"short": "When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization_field",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/organizationFields",
								"segments": []any{
									map[string]any{
										"lit": "organizationFields",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationFields",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizationFields",
								"segments": []any{
									map[string]any{
										"lit": "organizationFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationFields",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizationFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizationFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationFields",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizationFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizationFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationFields",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizationFields",
								"segments": []any{
									map[string]any{
										"lit": "organizationFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationFields",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/organizationFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizationFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationFields",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization_relationship": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"short": "The additional data of the list",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"short": "The array of organization relationships",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "org_id",
						"short": "The ID of the base organization for the returned calculated values",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rel_linked_org_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The linked organization in the relationship.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rel_owner_org_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The owner of the relationship.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "related_objects",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The type of organization relationship",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization_relationship",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/organizationRelationships",
								"segments": []any{
									map[string]any{
										"lit": "organizationRelationships",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationRelationships",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "org_id",
											"orig": "org_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizationRelationships",
								"segments": []any{
									map[string]any{
										"lit": "organizationRelationships",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationRelationships",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "org_id",
											"orig": "org_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizationRelationships/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizationRelationships",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationRelationships",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizationRelationships/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizationRelationships",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationRelationships",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/organizationRelationships/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizationRelationships",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizationRelationships",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"permission_set": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app",
						"short": "The app that permission set belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assignment_count",
						"short": "The number of users assigned to this permission set",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "contents",
						"short": "A permission assigned to this permission set",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "data",
						"short": "The array of permission set",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the permission set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of user permission set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the permission set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of permission set",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "permission_set",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/permissionSets/{id}/assignments",
								"segments": []any{
									map[string]any{
										"lit": "permissionSets",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "assignments",
									},
								},
								"select": map[string]any{
									"$action": "assignment",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"permissionSets",
									"{id}",
									"assignments",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "app",
											"orig": "app",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/permissionSets",
								"segments": []any{
									map[string]any{
										"lit": "permissionSets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"permissionSets",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/permissionSets/{id}",
								"segments": []any{
									map[string]any{
										"lit": "permissionSets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"permissionSets",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"person": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "person",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/persons/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"followers",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/persons/{id}/picture",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "picture",
									},
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"picture",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "all_change",
											"orig": "all_change",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "item",
											"orig": "item",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/{id}/flow",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "flow",
									},
								},
								"select": map[string]any{
									"$action": "flow",
									"exist": []any{
										"all_change",
										"id",
										"item",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"flow",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/{id}/files",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"$action": "file",
									"exist": []any{
										"id",
										"limit",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"files",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_body",
											"orig": "include_body",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/{id}/mailMessages",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "mailMessages",
									},
								},
								"select": map[string]any{
									"$action": "mail_message",
									"exist": []any{
										"id",
										"include_body",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"mailMessages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/{id}/changelog",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "changelog",
									},
								},
								"select": map[string]any{
									"$action": "changelog",
									"exist": []any{
										"cursor",
										"id",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"changelog",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/{id}/products",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "products",
									},
								},
								"select": map[string]any{
									"$action": "product",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"products",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"followers",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/persons/{id}/permittedUsers",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permittedUsers",
									},
								},
								"select": map[string]any{
									"$action": "permitted_user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"permittedUsers",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "follower_id",
											"orig": "follower_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/persons/{id}/followers/{follower_id}",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
									map[string]any{
										"var": "follower_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"follower_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"followers",
									"{follower_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/persons/{id}/picture",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "picture",
									},
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"picture",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/persons/{id}/merge",
								"segments": []any{
									map[string]any{
										"lit": "persons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "merge",
									},
								},
								"select": map[string]any{
									"$action": "merge",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"persons",
									"{id}",
									"merge",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"follower",
						},
					},
				},
			},
			"person_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "add_visible_flag",
						"short": "Whether the field is available in 'add new' modal or not (both in web and mobile app)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "additional_data",
						"short": "The additional data of the list",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the field",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"short": "When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "person_field",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/personFields",
								"segments": []any{
									map[string]any{
										"lit": "personFields",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"personFields",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/personFields",
								"segments": []any{
									map[string]any{
										"lit": "personFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"personFields",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/personFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "personFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"personFields",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/personFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "personFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"personFields",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/personFields",
								"segments": []any{
									map[string]any{
										"lit": "personFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"personFields",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/personFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "personFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"personFields",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pipeline": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "pipeline",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "everyone",
											"orig": "everyone",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "get_summary",
											"orig": "get_summary",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "stage_id",
											"orig": "stage_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "totals_convert_currency",
											"orig": "totals_convert_currency",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/pipelines/{id}/deals",
								"segments": []any{
									map[string]any{
										"lit": "pipelines",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "deals",
									},
								},
								"select": map[string]any{
									"$action": "deal",
									"exist": []any{
										"everyone",
										"filter_id",
										"get_summary",
										"id",
										"limit",
										"stage_id",
										"start",
										"totals_convert_currency",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"pipelines",
									"{id}",
									"deals",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/pipelines/{id}/conversion_statistics",
								"segments": []any{
									map[string]any{
										"lit": "pipelines",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "conversion_statistics",
									},
								},
								"select": map[string]any{
									"$action": "conversion_statistic",
									"exist": []any{
										"end_date",
										"id",
										"start_date",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"pipelines",
									"{id}",
									"conversion_statistics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/pipelines/{id}/movement_statistics",
								"segments": []any{
									map[string]any{
										"lit": "pipelines",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "movement_statistics",
									},
								},
								"select": map[string]any{
									"$action": "movement_statistic",
									"exist": []any{
										"end_date",
										"id",
										"start_date",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"pipelines",
									"{id}",
									"movement_statistics",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "product",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/products/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"products",
									"{id}",
									"followers",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "all_not_deleted",
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/products/{id}/deals",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "deals",
									},
								},
								"select": map[string]any{
									"$action": "deal",
									"exist": []any{
										"id",
										"limit",
										"start",
										"status",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"products",
									"{id}",
									"deals",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/products/{id}/files",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"$action": "file",
									"exist": []any{
										"id",
										"limit",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"products",
									"{id}",
									"files",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/products/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"products",
									"{id}",
									"followers",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/products/{id}/permittedUsers",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permittedUsers",
									},
								},
								"select": map[string]any{
									"$action": "permitted_user",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"products",
									"{id}",
									"permittedUsers",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "follower_id",
											"orig": "follower_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/products/{id}/followers/{follower_id}",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
									map[string]any{
										"var": "follower_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"follower_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"products",
									"{id}",
									"followers",
									"{follower_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"follower",
						},
					},
				},
			},
			"product_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "field_type",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the field",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"short": "When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{\"label\":\"red\"}, {\"label\":\"blue\"}, {\"label\":\"lilac\"}]`",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "product_field",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/productFields",
								"segments": []any{
									map[string]any{
										"lit": "productFields",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"productFields",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/productFields",
								"segments": []any{
									map[string]any{
										"lit": "productFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"productFields",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/productFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "productFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"productFields",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/productFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "productFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"productFields",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/productFields",
								"segments": []any{
									map[string]any{
										"lit": "productFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"productFields",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/productFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "productFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"productFields",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"project": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "group_id",
						"short": "The ID of a group on a project board",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the project, generated when the task was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "phase_id",
						"short": "The ID of a phase on a project board",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "success",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{id}/archive",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"select": map[string]any{
									"$action": "archive",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
									"archive",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/projects",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "phase_id",
											"orig": "phase_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "open,completed",
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"filter_id",
										"include_archived",
										"limit",
										"phase_id",
										"status",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{id}/activities",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "activities",
									},
								},
								"select": map[string]any{
									"$action": "activity",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
									"activities",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{id}/groups",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "groups",
									},
								},
								"select": map[string]any{
									"$action": "group",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
									"groups",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{id}/plan",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "plan",
									},
								},
								"select": map[string]any{
									"$action": "plan",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
									"plan",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{id}/tasks",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "tasks",
									},
								},
								"select": map[string]any{
									"$action": "task",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
									"tasks",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "activity_id",
											"orig": "activity_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{id}/plan/activities/{activityId}",
								"rename": map[string]any{
									"param": map[string]any{
										"activityId": "activity_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "plan",
									},
									map[string]any{
										"lit": "activities",
									},
									map[string]any{
										"var": "activity_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"activity_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
									"plan",
									"activities",
									"{activity_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "task_id",
											"orig": "task_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{id}/plan/tasks/{taskId}",
								"rename": map[string]any{
									"param": map[string]any{
										"taskId": "task_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "plan",
									},
									map[string]any{
										"lit": "tasks",
									},
									map[string]any{
										"var": "task_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"task_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
									"plan",
									"tasks",
									"{task_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"activity",
						},
						[]any{
							"task",
						},
					},
				},
			},
			"project_board": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "add_time",
						"short": "The creation date and time of the board in UTC.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "additional_data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the project board",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of a project board",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "order_nr",
						"short": "The order of a board",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "success",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "update_time",
						"short": "The update date and time of the board in UTC.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project_board",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/boards",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "boards",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"boards",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/boards/{id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"boards",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"project_phase": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "add_time",
						"short": "The creation date and time of the board in UTC.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "additional_data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "board_id",
						"short": "The ID of the project board this phase is linked to",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the project phase",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of a project phase",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "order_nr",
						"short": "The order of a phase",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "success",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "update_time",
						"short": "The update date and time of the board in UTC.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project_phase",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "board_id",
											"orig": "board_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/phases",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "phases",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"phases",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projects/phases/{id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "phases",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projects",
									"phases",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"project_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "add_time",
						"short": "The creation date and time of the template in UTC.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "additional_data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of a template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of a template",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "owner_id",
						"short": "The ID of a template owner",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "projects_board_id",
						"short": "The ID of the project board this template is associated with",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "success",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "title",
						"short": "The title of a template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "update_time",
						"short": "The update date and time of the template in UTC.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project_template",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projectTemplates",
								"segments": []any{
									map[string]any{
										"lit": "projectTemplates",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projectTemplates",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/projectTemplates/{id}",
								"segments": []any{
									map[string]any{
										"lit": "projectTemplates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"projectTemplates",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"recent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 12,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "recent",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "item",
											"orig": "item",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "since_timestamp",
											"orig": "since_timestamp",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/recents",
								"segments": []any{
									map[string]any{
										"lit": "recents",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"item",
										"limit",
										"since_timestamp",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"recents",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"role": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"short": "The additional data in the role",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"short": "The details of the sub-role",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_role_id",
						"short": "The ID of the parent role",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "role",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/roles/{id}/assignments",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "assignments",
									},
								},
								"select": map[string]any{
									"$action": "assignment",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
									"assignments",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/roles/{id}/settings",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"select": map[string]any{
									"$action": "setting",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
									"settings",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/roles",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/roles/{id}/assignments",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "assignments",
									},
								},
								"select": map[string]any{
									"$action": "assignment",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
									"assignments",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/roles",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "visible",
											"orig": "visible",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/roles/{id}/pipelines",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "pipelines",
									},
								},
								"select": map[string]any{
									"$action": "pipeline",
									"exist": []any{
										"id",
										"visible",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
									"pipelines",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/roles/{id}",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/roles/{id}/settings",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"select": map[string]any{
									"$action": "setting",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
									"settings",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/roles/{id}",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/roles/{id}/assignments",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "assignments",
									},
								},
								"select": map[string]any{
									"$action": "assignment",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
									"assignments",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/roles/{id}",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/roles/{id}/pipelines",
								"segments": []any{
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "pipelines",
									},
								},
								"select": map[string]any{
									"$action": "pipeline",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"roles",
									"{id}",
									"pipelines",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"stage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "stage",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "everyone",
											"orig": "everyone",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/stages/{id}/deals",
								"segments": []any{
									map[string]any{
										"lit": "stages",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "deals",
									},
								},
								"select": map[string]any{
									"$action": "deal",
									"exist": []any{
										"everyone",
										"filter_id",
										"id",
										"limit",
										"start",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"stages",
									"{id}",
									"deals",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"task": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "additional_data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the task, generated when the task was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "success",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "task",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/tasks",
								"segments": []any{
									map[string]any{
										"lit": "tasks",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tasks",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "assignee_id",
											"orig": "assignee_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "done",
											"orig": "done",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parent_task_id",
											"orig": "parent_task_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "project_id",
											"orig": "project_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tasks",
								"segments": []any{
									map[string]any{
										"lit": "tasks",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assignee_id",
										"cursor",
										"done",
										"limit",
										"parent_task_id",
										"project_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tasks",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tasks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "tasks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tasks",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/tasks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "tasks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tasks",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/tasks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "tasks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tasks",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "access",
						"short": "The access given to the user.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "active_flag",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the user is active or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "email",
						"req": true,
						"short": "The email of the user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/users",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{id}/roleAssignments",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "roleAssignments",
									},
								},
								"select": map[string]any{
									"$action": "role_assignment",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"{id}",
									"roleAssignments",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "search_by_email",
											"orig": "search_by_email",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "term",
											"orig": "term",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/find",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "find",
									},
								},
								"select": map[string]any{
									"$action": "find",
									"exist": []any{
										"search_by_email",
										"term",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"find",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{id}/followers",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "followers",
									},
								},
								"select": map[string]any{
									"$action": "follower",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"{id}",
									"followers",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/users",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{id}",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{id}/permissions",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permissions",
									},
								},
								"select": map[string]any{
									"$action": "permission",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"{id}",
									"permissions",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{id}/roleSettings",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "roleSettings",
									},
								},
								"select": map[string]any{
									"$action": "role_setting",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"{id}",
									"roleSettings",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/users/me",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "me",
									},
								},
								"select": map[string]any{
									"$action": "me",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"me",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/users/{id}",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_connection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "The object of UserConnections",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "user_connection",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/userConnections",
								"segments": []any{
									map[string]any{
										"lit": "userConnections",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"userConnections",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"short": "If the response is successful or not",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "user_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/userSettings",
								"segments": []any{
									map[string]any{
										"lit": "userSettings",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"userSettings",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "The array of Webhooks",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "event_action",
						"req": true,
						"short": "The type of action to receive notifications about.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event_object",
						"req": true,
						"short": "The type of object to receive notifications about.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "http_auth_password",
						"short": "The HTTP basic auth password of the subscription URL endpoint (if required)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "http_auth_user",
						"short": "The HTTP basic auth username of the subscription URL endpoint (if required)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The webhook's name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscription_url",
						"req": true,
						"short": "A full, valid, publicly accessible URL which determines where to send the notifications.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"short": "The ID of the user that this webhook will be authorized with.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "version",
						"short": "The webhook's version.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
