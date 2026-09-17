
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { PipedriveSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('LeadLabelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PIPEDRIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PipedriveSDK.test()
    const ent = testsdk.LeadLabel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"add_time","req":false,"short":"The date and time of when the lead label was created.","type":"`$STRING`","index$":0},{"active":true,"name":"color","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The color of the label.","type":"`$STRING`","index$":1},{"active":true,"format":"uuid","name":"id","req":false,"short":"The unique ID of the lead label","type":"`$STRING`","index$":2},{"active":true,"name":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The name of the lead label","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"update_time","req":false,"short":"The date and time of when the lead label was last updated.","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"lead_label","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /leadLabels","json":"{\"operationId\":\"addLeadLabel\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"color\":{\"description\":\"The color of the label. Only a subset of colors can be used.\",\"enum\":[\"blue\",\"brown\",\"dark-gray\",\"gray\",\"green\",\"orange\",\"pink\",\"purple\",\"red\",\"yellow\"],\"type\":\"string\"},\"name\":{\"description\":\"The name of the lead label\",\"type\":\"string\"}},\"required\":[\"name\",\"color\"],\"title\":\"addLeadLabelRequest\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"add_time\":\"2020-02-13T15:31:44.000Z\",\"color\":\"red\",\"id\":\"f08b42a0-4e75-11ea-9643-03698ef1cfd6\",\"name\":\"Hot\",\"update_time\":\"2020-10-14T13:11:36.000Z\"},\"success\":true},\"schema\":{\"properties\":{\"data\":{\"properties\":{\"add_time\":{\"description\":\"The date and time of when the lead label was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\",\"format\":\"date-time\",\"type\":\"string\"},\"color\":{\"description\":\"The color of the label. Only a subset of colors can be used.\",\"enum\":[\"blue\",\"brown\",\"dark-gray\",\"gray\",\"green\",\"orange\",\"pink\",\"purple\",\"red\",\"yellow\"],\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the lead label\",\"format\":\"uuid\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the lead label\",\"type\":\"string\"},\"update_time\":{\"description\":\"The date and time of when the lead label was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\",\"format\":\"date-time\",\"type\":\"string\"}},\"title\":\"LeadLabel\",\"type\":\"object\"},\"success\":{\"type\":\"boolean\"}},\"title\":\"UpsertLeadLabelResponse\",\"type\":\"object\"}}},\"description\":\"Successful response containing payload in the `data` field\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"leads:full\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/leadLabels","segments":[{"lit":"leadLabels"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /leadLabels","json":"{\"operationId\":\"getLeadLabels\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"add_time\":\"2020-02-13T15:31:44.000Z\",\"color\":\"red\",\"id\":\"f08b42a0-4e75-11ea-9643-03698ef1cfd6\",\"name\":\"Hot\",\"update_time\":\"2020-02-13T15:31:44.000Z\"},{\"add_time\":\"2020-02-13T15:31:44.000Z\",\"color\":\"blue\",\"id\":\"f08b42a1-4e75-11ea-9643-03698ef1cfd6\",\"name\":\"Cold\",\"update_time\":\"2020-02-13T15:31:44.000Z\"},{\"add_time\":\"2020-02-13T15:31:44.000Z\",\"color\":\"yellow\",\"id\":\"f08b69b0-4e75-11ea-9643-03698ef1cfd6\",\"name\":\"Warm\",\"update_time\":\"2020-02-13T15:31:44.000Z\"}],\"success\":true},\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"add_time\":{\"description\":\"The date and time of when the lead label was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\",\"format\":\"date-time\",\"type\":\"string\"},\"color\":{\"description\":\"The color of the label. Only a subset of colors can be used.\",\"enum\":[\"blue\",\"brown\",\"dark-gray\",\"gray\",\"green\",\"orange\",\"pink\",\"purple\",\"red\",\"yellow\"],\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the lead label\",\"format\":\"uuid\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the lead label\",\"type\":\"string\"},\"update_time\":{\"description\":\"The date and time of when the lead label was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\",\"format\":\"date-time\",\"type\":\"string\"}},\"title\":\"LeadLabel\",\"type\":\"object\"},\"type\":\"array\"},\"success\":{\"type\":\"boolean\"}},\"title\":\"GetLeadLabelsResponse\",\"type\":\"object\"}}},\"description\":\"Successful response containing payload in the `data` field\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"leads:read\",\"leads:full\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/leadLabels","segments":[{"lit":"leadLabels"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /leadLabels/{id}","json":"{\"operationId\":\"deleteLeadLabel\",\"parameters\":[{\"description\":\"The ID of the lead label\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"id\":\"adf21080-0e10-11eb-879b-05d71fb426ec\"},\"success\":true},\"schema\":{\"properties\":{\"data\":{\"properties\":{\"id\":{\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"type\":\"boolean\"}},\"title\":\"DeleteLeadIdResponse\",\"type\":\"object\"}}},\"description\":\"Successful response with id value only. Used in DELETE calls.\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"additional_data\":{\"example\":null,\"nullable\":true,\"type\":\"object\"},\"data\":{\"example\":null,\"nullable\":true,\"type\":\"object\"},\"error\":{\"description\":\"The description of the error\",\"type\":\"string\"},\"error_info\":{\"description\":\"A message describing how to solve the problem\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"title\":\"LeadNotFoundResponse\",\"type\":\"object\"}}},\"description\":\"A resource describing an error\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"leads:full\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/leadLabels/{id}","segments":[{"lit":"leadLabels"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PATCH /leadLabels/{id}","json":"{\"operationId\":\"updateLeadLabel\",\"parameters\":[{\"description\":\"The ID of the lead label\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"color\":{\"description\":\"The color of the label. Only a subset of colors can be used.\",\"enum\":[\"blue\",\"brown\",\"dark-gray\",\"gray\",\"green\",\"orange\",\"pink\",\"purple\",\"red\",\"yellow\"],\"type\":\"string\"},\"name\":{\"description\":\"The name of the lead label\",\"type\":\"string\"}},\"title\":\"updateLeadLabelRequest\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"add_time\":\"2020-02-13T15:31:44.000Z\",\"color\":\"red\",\"id\":\"f08b42a0-4e75-11ea-9643-03698ef1cfd6\",\"name\":\"Hot\",\"update_time\":\"2020-10-14T13:11:36.000Z\"},\"success\":true},\"schema\":{\"properties\":{\"data\":{\"properties\":{\"add_time\":{\"description\":\"The date and time of when the lead label was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\",\"format\":\"date-time\",\"type\":\"string\"},\"color\":{\"description\":\"The color of the label. Only a subset of colors can be used.\",\"enum\":[\"blue\",\"brown\",\"dark-gray\",\"gray\",\"green\",\"orange\",\"pink\",\"purple\",\"red\",\"yellow\"],\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the lead label\",\"format\":\"uuid\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the lead label\",\"type\":\"string\"},\"update_time\":{\"description\":\"The date and time of when the lead label was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.\",\"format\":\"date-time\",\"type\":\"string\"}},\"title\":\"LeadLabel\",\"type\":\"object\"},\"success\":{\"type\":\"boolean\"}},\"title\":\"UpsertLeadLabelResponse\",\"type\":\"object\"}}},\"description\":\"Successful response containing payload in the `data` field\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"additional_data\":{\"example\":null,\"nullable\":true,\"type\":\"object\"},\"data\":{\"example\":null,\"nullable\":true,\"type\":\"object\"},\"error\":{\"description\":\"The description of the error\",\"type\":\"string\"},\"error_info\":{\"description\":\"A message describing how to solve the problem\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"title\":\"LeadNotFoundResponse\",\"type\":\"object\"}}},\"description\":\"A resource describing an error\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"leads:full\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/leadLabels/{id}","segments":[{"lit":"leadLabels"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"lead_label","name__orig":"lead_label","Name":"LeadLabel","name_":"lead_label","name-":"lead-label","NAME":"LEAD_LABEL","index$":13}, {"active":true,"entity":"lead_label","key$":"BasicLeadLabelFlow","kind":"basic","name":"BasicLeadLabelFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"lead_label_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"lead_label_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"lead_label_ref01","srcdatavar":"lead_label_ref01_data","suffix":"_up0","textfield":"add_time"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-lead_label_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"lead_label_ref01","suffix":"_rm0"},"match":{"id":"lead_label01"},"op":"remove","spec":[],"valid":[],"index$":3},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"lead_label_ref01"}}],"index$":4}]}, 'LeadLabel')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const lead_label_ref01_ent = client.LeadLabel()
    let lead_label_ref01_data = setup.data.new.lead_label['lead_label_ref01']

    lead_label_ref01_data = (await lead_label_ref01_ent.create(lead_label_ref01_data)).data()
    assert(null != lead_label_ref01_data.id)


    // LIST
    const lead_label_ref01_match = {}

    const lead_label_ref01_list = (await lead_label_ref01_ent.list(lead_label_ref01_match)).map((e) => e.data())

    assert(!isempty(select(lead_label_ref01_list, { id: lead_label_ref01_data.id })))


    // UPDATE
    const lead_label_ref01_data_up0 = {}
    lead_label_ref01_data_up0.id = lead_label_ref01_data.id

    const lead_label_ref01_markdef_up0 = { name: 'add_time', value: 'Mark01-lead_label_ref01_' + setup.now }
    lead_label_ref01_data_up0 [lead_label_ref01_markdef_up0.name] = lead_label_ref01_markdef_up0.value

    const lead_label_ref01_resdata_up0 = (await lead_label_ref01_ent.update(lead_label_ref01_data_up0)).data()
    assert(lead_label_ref01_resdata_up0.id === lead_label_ref01_data_up0.id)

    assert(lead_label_ref01_resdata_up0[lead_label_ref01_markdef_up0.name] === lead_label_ref01_markdef_up0.value)


    // REMOVE
    const lead_label_ref01_match_rm0 = {}
    lead_label_ref01_match_rm0.id = lead_label_ref01_data.id
    await lead_label_ref01_ent.remove(lead_label_ref01_match_rm0)
  

    // LIST
    const lead_label_ref01_match_rt0 = {}

    const lead_label_ref01_list_rt0 = (await lead_label_ref01_ent.list(lead_label_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(lead_label_ref01_list_rt0, { id: lead_label_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/lead_label/LeadLabelTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PipedriveSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['lead_label01','lead_label02','lead_label03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PIPEDRIVE_TEST_LEAD_LABEL_ENTID': idmap,
    'PIPEDRIVE_TEST_LIVE': 'FALSE',
    'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
    'PIPEDRIVE_APIKEY': '',
  })

  idmap = env['PIPEDRIVE_TEST_LEAD_LABEL_ENTID']

  const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PIPEDRIVE_TEST_LEAD_LABEL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PipedriveSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.PIPEDRIVE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PIPEDRIVE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
