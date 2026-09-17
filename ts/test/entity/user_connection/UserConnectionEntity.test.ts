

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


describe('UserConnectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PIPEDRIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PipedriveSDK.test()
    const ent = testsdk.UserConnection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_connection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"The object of UserConnections","type":"`$OBJECT`","index$":0},{"active":true,"name":"success","req":false,"short":"If the response is successful or not","type":"`$BOOLEAN`","index$":1}],"name":"user_connection","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /userConnections","json":"{\"operationId\":\"getUserConnections\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"google\":\"awesomeid-123-4567890\"},\"success\":true},\"schema\":{\"allOf\":[{\"properties\":{\"success\":{\"description\":\"If the response is successful or not\",\"type\":\"boolean\"}},\"title\":\"baseResponse\",\"type\":\"object\"},{\"properties\":{\"data\":{\"description\":\"The object of UserConnections\",\"properties\":{\"google\":{\"description\":\"The third party ID or false in case the ID is not found\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"GetUserConnectionsResponseData\",\"type\":\"object\"}],\"title\":\"GetUserConnectionsResponse\"}}},\"description\":\"The data of user connections\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"unauthorized access\",\"errorCode\":401,\"success\":false},\"schema\":{\"properties\":{\"error\":{\"description\":\"The error message\",\"type\":\"string\"},\"errorCode\":{\"description\":\"The response error code\",\"type\":\"integer\"},\"success\":{\"description\":\"If the response is successful or not\",\"type\":\"boolean\"}},\"title\":\"unathorizedResponse\",\"type\":\"object\"}}},\"description\":\"Unauthorized response\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"base\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/userConnections","segments":[{"lit":"userConnections"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"user_connection","name__orig":"user_connection","Name":"UserConnection","name_":"user_connection","name-":"user-connection","NAME":"USER_CONNECTION","index$":39}, {"active":true,"entity":"user_connection","key$":"BasicUserConnectionFlow","kind":"basic","name":"BasicUserConnectionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"user_connection_ref01","srcdatavar":"user_connection_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_connection_ref01"}}],"index$":0}]}, 'UserConnection')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_connection_ref01_data = Object.values(setup.data.existing.user_connection)[0] as any

    // LOAD
    const user_connection_ref01_ent = client.UserConnection()
    const user_connection_ref01_match_dt0: any = {}
    const user_connection_ref01_data_dt0 = (await user_connection_ref01_ent.load(user_connection_ref01_match_dt0)).data()
    assert(null != user_connection_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_connection/UserConnectionTestData.json')

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
    ['user_connection01','user_connection02','user_connection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PIPEDRIVE_TEST_USER_CONNECTION_ENTID': idmap,
    'PIPEDRIVE_TEST_LIVE': 'FALSE',
    'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
    'PIPEDRIVE_APIKEY': '',
    'PIPEDRIVE_SECRET': '',
  })

  idmap = env['PIPEDRIVE_TEST_USER_CONNECTION_ENTID']

  const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PIPEDRIVE_TEST_USER_CONNECTION_ENTID']
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
  
