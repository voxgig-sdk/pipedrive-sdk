

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


describe('StageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PIPEDRIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PipedriveSDK.test()
    const ent = testsdk.Stage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"stage","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"kind":"query","name":"everyone","orig":"everyone","reqd":false,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"filter_id","orig":"filter_id","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":0,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$INTEGER`","index$":4}]},"contract":{"id":"GET /stages/{id}/deals","json":"{\"operationId\":\"getStageDeals\",\"parameters\":[{\"description\":\"The ID of the stage\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"If supplied, only deals matching the given filter will be returned\",\"in\":\"query\",\"name\":\"filter_id\",\"schema\":{\"type\":\"integer\"}},{\"description\":\"If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.\",\"in\":\"query\",\"name\":\"user_id\",\"schema\":{\"type\":\"integer\"}},{\"description\":\"If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned\",\"in\":\"query\",\"name\":\"everyone\",\"schema\":{\"enum\":[0,1],\"title\":\"numberBoolean\",\"type\":\"number\"}},{\"description\":\"Pagination start\",\"in\":\"query\",\"name\":\"start\",\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Items shown per page\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"additional_data\":{\"pagination\":{\"limit\":100,\"more_items_in_collection\":false,\"start\":0}},\"data\":[{\"active\":true,\"activities_count\":1,\"add_time\":\"2019-05-29 04:21:51\",\"cc_email\":\"company+deal1@pipedrivemail.com\",\"close_time\":null,\"creator_user_id\":123,\"currency\":\"EUR\",\"deleted\":false,\"done_activities_count\":0,\"email_messages_count\":4,\"expected_close_date\":\"2019-06-29\",\"files_count\":0,\"first_won_time\":\"2019-11-27 11:40:36\",\"followers_count\":0,\"formatted_value\":\"€5,000\",\"formatted_weighted_value\":\"€5,000\",\"id\":1,\"label\":\"11\",\"last_activity_date\":null,\"last_activity_id\":null,\"last_incoming_mail_time\":\"2019-05-29 18:21:42\",\"last_outgoing_mail_time\":\"2019-05-30 03:45:35\",\"lost_reason\":null,\"lost_time\":\"2019-11-27 11:40:36\",\"next_activity_date\":\"2019-11-29\",\"next_activity_duration\":\"00:30:00\",\"next_activity_id\":128,\"next_activity_note\":\"Note content\",\"next_activity_subject\":\"Call\",\"next_activity_time\":\"11:30:00\",\"next_activity_type\":\"call\",\"notes_count\":2,\"org_hidden\":false,\"org_id\":2,\"org_name\":\"Organization\",\"owner_name\":\"Creator\",\"participants_count\":1,\"person_hidden\":false,\"person_id\":1,\"person_name\":\"Person\",\"pipeline_id\":1,\"probability\":null,\"products_count\":0,\"rotten_time\":null,\"stage_change_time\":\"2019-11-28 15:41:22\",\"stage_id\":2,\"stage_order_nr\":2,\"status\":\"open\",\"title\":\"Deal One\",\"undone_activities_count\":1,\"update_time\":\"2019-05-29 04:21:51\",\"user_id\":456,\"value\":5000,\"visible_to\":\"1\",\"weighted_value\":5000,\"weighted_value_currency\":\"EUR\",\"won_time\":\"2019-11-27 11:40:36\"}],\"success\":true},\"schema\":{\"properties\":{\"additional_data\":{\"description\":\"The additional data of the list\",\"properties\":{\"limit\":{\"description\":\"Items shown per page\",\"type\":\"integer\"},\"more_items_in_collection\":{\"description\":\"If there are more list items in the collection than displayed or not\",\"type\":\"boolean\"},\"start\":{\"description\":\"Pagination start\",\"type\":\"integer\"}},\"type\":\"object\"},\"data\":{\"description\":\"The array of deals\",\"items\":{\"allOf\":[{\"properties\":{\"creator_user_id\":{\"description\":\"The ID of the deal creator\",\"type\":\"integer\"},\"id\":{\"description\":\"The ID of the deal\",\"type\":\"integer\"},\"org_id\":{\"description\":\"The ID of the organization associated with the deal\",\"nullable\":true,\"type\":\"integer\"},\"person_id\":{\"description\":\"The ID of the person associated with the deal\",\"nullable\":true,\"type\":\"integer\"},\"user_id\":{\"description\":\"The ID of the user\",\"type\":\"integer\"}},\"type\":\"object\"},{\"properties\":{\"active\":{\"description\":\"Whether the deal is active or not\",\"type\":\"boolean\"},\"activities_count\":{\"description\":\"The number of activities associated with the deal\",\"type\":\"integer\"},\"acv\":{\"description\":\"Only available in Growth and above plans\\n\\nThe Annual Contract Value of the deal\\n\\nNull if there are no products attached to the deal\\n\",\"nullable\":true,\"type\":\"number\"},\"acv_currency\":{\"description\":\"Only available in Growth and above plans\\n\\nThe Currency for Annual Contract Value of the deal\\n\\nIf the `acv` is null, this will also be null\\n\",\"nullable\":true,\"type\":\"string\"},\"add_time\":{\"description\":\"The creation date and time of the deal\",\"type\":\"string\"},\"arr\":{\"description\":\"Only available in Growth and above plans\\n\\nThe Annual Recurring Revenue of the deal\\n\\nNull if there are no products attached to the deal\\n\",\"nullable\":true,\"type\":\"number\"},\"arr_currency\":{\"description\":\"Only available in Growth and above plans\\n\\nThe Currency for Annual Recurring Revenue of the deal\\n\\nIf the `arr` is null, this will also be null\\n\",\"nullable\":true,\"type\":\"string\"},\"cc_email\":{\"description\":\"The BCC email of the deal\",\"type\":\"string\"},\"channel\":{\"description\":\"The ID of your Marketing channel this Deal was created from. Recognized Marketing channels can be configured in your <a href=\\\"https://app.pipedrive.com/settings/fields\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Company settings</a>.\",\"nullable\":true,\"type\":\"integer\"},\"channel_id\":{\"description\":\"The optional ID to further distinguish the Marketing channel.\",\"nullable\":true,\"type\":\"string\"},\"close_time\":{\"description\":\"The date and time of closing the deal\",\"nullable\":true,\"type\":\"string\"},\"currency\":{\"description\":\"The currency associated with the deal\",\"type\":\"string\"},\"deleted\":{\"description\":\"Whether the deal is deleted or not\",\"type\":\"boolean\"},\"done_activities_count\":{\"description\":\"The number of completed activities associated with the deal\",\"type\":\"integer\"},\"email_messages_count\":{\"description\":\"The number of emails associated with the deal\",\"type\":\"integer\"},\"expected_close_date\":{\"description\":\"The expected close date of the deal\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"files_count\":{\"description\":\"The number of files associated with the deal\",\"type\":\"integer\"},\"first_won_time\":{\"description\":\"The date and time of the first time changing the deal status as won\",\"nullable\":true,\"type\":\"string\"},\"followers_count\":{\"description\":\"The number of followers associated with the deal\",\"type\":\"integer\"},\"formatted_value\":{\"description\":\"The deal value formatted with selected currency. E.g. US$500\",\"type\":\"string\"},\"formatted_weighted_value\":{\"description\":\"The weighted_value formatted with selected currency. E.g. US$500\",\"type\":\"string\"},\"is_archived\":{\"description\":\"Whether the deal is archived or not\",\"type\":\"boolean\"},\"label\":{\"description\":\"The label or multiple labels assigned to the deal\",\"nullable\":true,\"type\":\"string\"},\"last_activity_date\":{\"description\":\"The date of the last activity associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"last_activity_id\":{\"description\":\"The ID of the last activity associated with the deal\",\"nullable\":true,\"type\":\"integer\"},\"last_incoming_mail_time\":{\"description\":\"The date and time of the last incoming email associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"last_outgoing_mail_time\":{\"description\":\"The date and time of the last outgoing email associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"lost_reason\":{\"description\":\"The reason for losing the deal\",\"nullable\":true,\"type\":\"string\"},\"lost_time\":{\"description\":\"The date and time of changing the deal status as lost\",\"nullable\":true,\"type\":\"string\"},\"mrr\":{\"description\":\"Only available in Growth and above plans\\n\\nThe Monthly Recurring Revenue of the deal\\n\\nNull if there are no products attached to the deal\\n\",\"nullable\":true,\"type\":\"number\"},\"mrr_currency\":{\"description\":\"Only available in Growth and above plans\\n\\nThe Currency for Monthly Recurring Revenue of the deal\\n\\nIf the `mrr` is null, this will also be null\\n\",\"nullable\":true,\"type\":\"string\"},\"next_activity_date\":{\"description\":\"The date of the next activity associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"next_activity_duration\":{\"description\":\"The duration of the next activity associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"next_activity_id\":{\"description\":\"The ID of the next activity associated with the deal\",\"nullable\":true,\"type\":\"integer\"},\"next_activity_note\":{\"description\":\"The note of the next activity associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"next_activity_subject\":{\"description\":\"The subject of the next activity associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"next_activity_time\":{\"description\":\"The time of the next activity associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"next_activity_type\":{\"description\":\"The type of the next activity associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"notes_count\":{\"description\":\"The number of notes associated with the deal\",\"type\":\"integer\"},\"org_hidden\":{\"description\":\"If the organization that is associated with the deal is hidden or not\",\"type\":\"boolean\"},\"org_name\":{\"description\":\"The name of the organization associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"origin\":{\"description\":\"The way this Deal was created. `origin` field is set by Pipedrive when Deal is created and cannot be changed.\",\"type\":\"string\"},\"origin_id\":{\"description\":\"The optional ID to further distinguish the origin of the deal - e.g. Which API integration created this Deal.\",\"nullable\":true,\"type\":\"string\"},\"owner_name\":{\"description\":\"The name of the deal owner\",\"type\":\"string\"},\"participants_count\":{\"description\":\"The number of participants associated with the deal\",\"type\":\"integer\"},\"person_hidden\":{\"description\":\"If the person that is associated with the deal is hidden or not\",\"type\":\"boolean\"},\"person_name\":{\"description\":\"The name of the person associated with the deal\",\"nullable\":true,\"type\":\"string\"},\"pipeline_id\":{\"description\":\"The ID of the pipeline associated with the deal\",\"type\":\"integer\"},\"probability\":{\"description\":\"The success probability percentage of the deal\",\"nullable\":true,\"type\":\"number\"},\"products_count\":{\"description\":\"The number of products associated with the deal\",\"type\":\"integer\"},\"rotten_time\":{\"description\":\"The date and time of changing the deal status as rotten\",\"nullable\":true,\"type\":\"string\"},\"stage_change_time\":{\"description\":\"The last updated date and time of the deal stage\",\"nullable\":true,\"type\":\"string\"},\"stage_id\":{\"description\":\"The ID of the deal stage\",\"type\":\"integer\"},\"stage_order_nr\":{\"description\":\"The order number of the deal stage associated with the deal\",\"type\":\"integer\"},\"status\":{\"description\":\"The status of the deal\",\"type\":\"string\"},\"title\":{\"description\":\"The title of the deal\",\"type\":\"string\"},\"undone_activities_count\":{\"description\":\"The number of incomplete activities associated with the deal\",\"type\":\"integer\"},\"update_time\":{\"description\":\"The last updated date and time of the deal\",\"nullable\":true,\"type\":\"string\"},\"value\":{\"description\":\"The value of the deal\",\"type\":\"number\"},\"visible_to\":{\"description\":\"The visibility of the deal\",\"type\":\"string\"},\"weighted_value\":{\"description\":\"Probability times deal value. Probability can either be deal probability or if not set, then stage probability.\",\"type\":\"number\"},\"weighted_value_currency\":{\"description\":\"The currency associated with the deal\",\"type\":\"string\"},\"won_time\":{\"description\":\"The date and time of changing the deal status as won\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"baseDeal\",\"type\":\"object\"}],\"title\":\"DealStrict\"},\"type\":\"array\"},\"success\":{\"description\":\"If the request was successful or not\",\"type\":\"boolean\"}},\"title\":\"GetStageDealsResponse\",\"type\":\"object\"}}},\"description\":\"Get deals in a stage\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"deals:read\",\"deals:full\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/stages/{id}/deals","segments":[{"lit":"stages"},{"var":"id"},{"lit":"deals"}],"select":{"$action":"deal","exist":["everyone","filter_id","id","limit","start","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"stage","name__orig":"stage","Name":"Stage","name_":"stage","name-":"stage","NAME":"STAGE","index$":36}, {"active":true,"entity":"stage","key$":"BasicStageFlow","kind":"basic","name":"BasicStageFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"stage_ref01"}}],"index$":0}]}, 'Stage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stage_ref01_data = Object.values(setup.data.existing.stage)[0] as any

    // LIST
    const stage_ref01_ent = client.Stage()
    const stage_ref01_match: any = {}

    const stage_ref01_list = (await stage_ref01_ent.list(stage_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/stage/StageTestData.json')

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
    ['stage01','stage02','stage03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PIPEDRIVE_TEST_STAGE_ENTID': idmap,
    'PIPEDRIVE_TEST_LIVE': 'FALSE',
    'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
    'PIPEDRIVE_APIKEY': '',
    'PIPEDRIVE_SECRET': '',
  })

  idmap = env['PIPEDRIVE_TEST_STAGE_ENTID']

  const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PIPEDRIVE_TEST_STAGE_ENTID']
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
  
