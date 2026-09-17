

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PipedriveSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PermissionSetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PIPEDRIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PipedriveSDK.test()
    const ent = testsdk.PermissionSet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'permission_set.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"app","req":false,"short":"The app that permission set belongs to","type":"`$STRING`","index$":0},{"active":true,"name":"assignment_count","req":false,"short":"The number of users assigned to this permission set","type":"`$INTEGER`","index$":1},{"active":true,"name":"contents","req":false,"short":"A permission assigned to this permission set","type":"`$ARRAY`","index$":2},{"active":true,"name":"data","req":false,"short":"The array of permission set","type":"`$ARRAY`","index$":3},{"active":true,"name":"description","req":false,"short":"The description of the permission set","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"short":"The ID of user permission set","type":"`$STRING`","index$":5},{"active":true,"name":"name","req":false,"short":"The name of the permission set","type":"`$STRING`","index$":6},{"active":true,"name":"success","req":false,"short":"If the response is successful or not","type":"`$BOOLEAN`","index$":7},{"active":true,"name":"type","req":false,"short":"The type of permission set","type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"permission_set","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`"},{"active":true,"example":0,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`"}]},"contract":{"id":"GET /permissionSets/{id}/assignments","json":"{\"operationId\":\"getPermissionSetAssignments\",\"parameters\":[{\"description\":\"The ID of the permission set\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Pagination start\",\"in\":\"query\",\"name\":\"start\",\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Items shown per page\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"name\":\"Deals regular user\",\"permission_set_id\":\"f07d229d-088a-4144-a40f-1fe64295d180\",\"user_id\":10}],\"success\":true},\"schema\":{\"allOf\":[{\"properties\":{\"success\":{\"description\":\"If the response is successful or not\",\"type\":\"boolean\"}},\"title\":\"baseResponse\",\"type\":\"object\"},{\"properties\":{\"data\":{\"description\":\"An array of the assignments of the user\",\"items\":{\"properties\":{\"name\":{\"description\":\"The name of the permission set\",\"type\":\"string\"},\"permission_set_id\":{\"description\":\"The ID of the permission set\",\"type\":\"string\"},\"user_id\":{\"description\":\"The ID of the user in the permission set\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}],\"title\":\"GetUserAssignmentsToPermissionSetResponse\"}}},\"description\":\"The assignments of a specific user ID\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"title\":\"NotFoundResponse\"}}},\"description\":\"If the user ID has no assignments, then it will return NotFound\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"admin\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/permissionSets/{id}/assignments","segments":[{"lit":"permissionSets"},{"var":"id"},{"lit":"assignments"}],"select":{"$action":"assignment","exist":["id","limit","start"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"app","orig":"app","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /permissionSets","json":"{\"operationId\":\"getPermissionSets\",\"parameters\":[{\"description\":\"The app to filter the permission sets by\",\"in\":\"query\",\"name\":\"app\",\"schema\":{\"enum\":[\"sales\",\"projects\",\"campaigns\",\"global\",\"account_settings\",\"partnership\",\"nova\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"app\":\"sales\",\"assignment_count\":1,\"description\":\"See and edit all sales data (deals, leads), manage company-level sales setup (such as lost reasons and pipelines)\",\"id\":\"62cc4d7f-4038-4352-abf3-a8c1c822b631\",\"name\":\"Deals admin\",\"type\":\"admin\"},{\"app\":\"sales\",\"assignment_count\":3,\"description\":\"Access to sales data (deals, leads) and available actions may be limited depending on the custom permission setup. This set is the default for new users.\",\"id\":\"f07d229d-088a-4144-a40f-1fe64295d180\",\"name\":\"Deals regular user\",\"type\":\"regular\"},{\"app\":\"global\",\"assignment_count\":1,\"description\":\"See and edit all cross-product data (such as contacts, activities, reports) and access related features\",\"id\":\"233b7976-39bd-43a9-b305-ef3a2b0998e5\",\"name\":\"Global admin\",\"type\":\"admin\"},{\"app\":\"global\",\"assignment_count\":2,\"description\":\"Access to cross-product data (such as contacts, activities, reports) and available actions may be limited depending on the custom permission setup. This set is the default for new users.\",\"id\":\"ec8a42e5-1842-490d-9113-b3a3b4b1c0a9\",\"name\":\"Global regular user\",\"type\":\"regular\"},{\"app\":\"account_settings\",\"assignment_count\":1,\"description\":\"Access company account level features and setup (billing, security center, company settings, user management)\",\"id\":\"982c5ce5-b8ba-4b47-b102-9da024f4b990\",\"name\":\"Account settings\",\"type\":\"admin\"}],\"success\":true},\"schema\":{\"allOf\":[{\"properties\":{\"success\":{\"description\":\"If the response is successful or not\",\"type\":\"boolean\"}},\"title\":\"baseResponse\",\"type\":\"object\"},{\"properties\":{\"data\":{\"description\":\"The array of permission set\",\"items\":{\"properties\":{\"app\":{\"description\":\"The app that permission set belongs to\",\"enum\":[\"sales\",\"projects\",\"campaigns\",\"global\",\"account_settings\",\"partnership\",\"nova\"],\"type\":\"string\"},\"assignment_count\":{\"description\":\"The number of users assigned to this permission set\",\"type\":\"integer\"},\"description\":{\"description\":\"The description of the permission set\",\"type\":\"string\"},\"id\":{\"description\":\"The ID of user permission set\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the permission set\",\"type\":\"string\"},\"type\":{\"description\":\"The type of permission set\",\"enum\":[\"admin\",\"manager\",\"regular\",\"custom\"],\"type\":\"string\"}},\"title\":\"PermissionSet\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}],\"title\":\"GetPermissionSetsResponse\"}}},\"description\":\"Get all permissions\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"admin\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/permissionSets","segments":[{"lit":"permissionSets"}],"select":{"exist":["app"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /permissionSets/{id}","json":"{\"operationId\":\"getPermissionSet\",\"parameters\":[{\"description\":\"The ID of the permission set\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"app\":\"sales\",\"assignment_count\":3,\"contents\":[\"can_add_products\",\"can_bulk_edit_items\",\"can_change_visibility_of_items\",\"can_delete_activities\",\"can_edit_products\",\"can_edit_shared_filters\",\"can_export_data_from_lists\",\"can_see_deals_list_summary\",\"can_see_other_users\",\"can_share_filters\",\"can_use_api\",\"can_use_email_tracking\"],\"description\":\"Access to sales data (deals, leads) and available actions may be limited depending on the custom permission setup. This set is the default for new users.\",\"id\":\"f07d229d-088a-4144-a40f-1fe64295d180\",\"name\":\"Deals regular user\"}],\"success\":true},\"schema\":{\"allOf\":[{\"properties\":{\"app\":{\"description\":\"The app that permission set belongs to\",\"enum\":[\"sales\",\"projects\",\"campaigns\",\"global\",\"account_settings\",\"partnership\",\"nova\"],\"type\":\"string\"},\"assignment_count\":{\"description\":\"The number of users assigned to this permission set\",\"type\":\"integer\"},\"description\":{\"description\":\"The description of the permission set\",\"type\":\"string\"},\"id\":{\"description\":\"The ID of user permission set\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the permission set\",\"type\":\"string\"},\"type\":{\"description\":\"The type of permission set\",\"enum\":[\"admin\",\"manager\",\"regular\",\"custom\"],\"type\":\"string\"}},\"title\":\"PermissionSet\",\"type\":\"object\"},{\"properties\":{\"contents\":{\"description\":\"A permission assigned to this permission set\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}],\"title\":\"GetPermissionSetResponse\"}}},\"description\":\"The permission set of a specific user ID\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"title\":\"NotFoundResponse\"}}},\"description\":\"If the user ID has no assignments, then it will return NotFound\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"admin\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/permissionSets/{id}","segments":[{"lit":"permissionSets"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"permission_set","name__orig":"permission_set","Name":"PermissionSet","name_":"permission_set","name-":"permission-set","NAME":"PERMISSION_SET","index$":24}, {"active":true,"entity":"permission_set","key$":"BasicPermissionSetFlow","kind":"basic","name":"BasicPermissionSetFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"permission_set_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"permission_set_ref01","srcdatavar":"permission_set_ref01_data","suffix":"_dt0"},"match":{"id":"permission_set01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-permission_set_ref01"}}],"index$":1}]}, 'PermissionSet')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let permission_set_ref01_data = Object.values(setup.data.existing.permission_set)[0] as any

    // LIST
    const permission_set_ref01_ent = client.PermissionSet()
    const permission_set_ref01_match: any = {}

    const permission_set_ref01_list = (await permission_set_ref01_ent.list(permission_set_ref01_match)).map((e: any) => e.data())


    // LOAD
    const permission_set_ref01_match_dt0: any = {}
    permission_set_ref01_match_dt0.id = permission_set_ref01_data.id
    const permission_set_ref01_data_dt0 = (await permission_set_ref01_ent.load(permission_set_ref01_match_dt0)).data()
    assert(permission_set_ref01_data_dt0.id === permission_set_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/permission_set/PermissionSetTestData.json')

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
    ['permission_set01','permission_set02','permission_set03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PIPEDRIVE_TEST_PERMISSION_SET_ENTID': idmap,
    'PIPEDRIVE_TEST_LIVE': 'FALSE',
    'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
    'PIPEDRIVE_APIKEY': '',
    'PIPEDRIVE_SECRET': '',
  })

  idmap = env['PIPEDRIVE_TEST_PERMISSION_SET_ENTID']

  const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PIPEDRIVE_TEST_PERMISSION_SET_ENTID']
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
        secret: env.PIPEDRIVE_SECRET,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
