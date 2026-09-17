
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


describe('LeadFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PIPEDRIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PipedriveSDK.test()
    const ent = testsdk.LeadField()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"additional_data","req":false,"short":"The additional data of the list","type":"`$OBJECT`","index$":0},{"active":true,"name":"data","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"success","req":false,"short":"If the response is successful or not","type":"`$BOOLEAN`","index$":2}],"name":"lead_field","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":0,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /leadFields","json":"{\"operationId\":\"getLeadFields\",\"parameters\":[{\"description\":\"Pagination start\",\"in\":\"query\",\"name\":\"start\",\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Items shown per page\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"additional_data\":{\"pagination\":{\"limit\":100,\"more_items_in_collection\":false,\"start\":0}},\"data\":[{\"active_flag\":true,\"add_time\":\"2019-02-04 13:58:03\",\"add_visible_flag\":true,\"bulk_edit_allowed\":true,\"created_by_user_id\":1,\"details_visible_flag\":true,\"edit_flag\":false,\"field_type\":\"varchar\",\"filtering_allowed\":true,\"id\":1,\"important_flag\":false,\"index_visible_flag\":true,\"key\":\"title\",\"last_updated_by_user_id\":1,\"mandatory_flag\":true,\"name\":\"Title\",\"options\":null,\"order_nr\":2,\"searchable_flag\":false,\"sortable_flag\":true,\"update_time\":\"2019-02-04 13:58:03\"},{\"active_flag\":true,\"add_time\":\"2019-02-04 13:58:03\",\"add_visible_flag\":false,\"bulk_edit_allowed\":true,\"created_by_user_id\":1,\"details_visible_flag\":true,\"edit_flag\":true,\"field_type\":\"enum\",\"filtering_allowed\":true,\"id\":2,\"important_flag\":false,\"index_visible_flag\":true,\"key\":\"9dc80c50d78a15643bfc4ca79d76156a73a1ca0e\",\"last_updated_by_user_id\":1,\"mandatory_flag\":true,\"name\":\"Customer Type\",\"options\":[{\"id\":190,\"label\":\"Private person\"},{\"id\":191,\"label\":\"Company\"},{\"id\":192,\"label\":\"Government\"}],\"order_nr\":1,\"searchable_flag\":false,\"sortable_flag\":true,\"update_time\":\"2019-02-04 13:58:03\"}],\"success\":true},\"schema\":{\"allOf\":[{\"properties\":{\"success\":{\"description\":\"If the response is successful or not\",\"type\":\"boolean\"}},\"title\":\"baseResponse\",\"type\":\"object\"},{\"title\":\"FieldsResponse\"},{\"properties\":{\"additional_data\":{\"description\":\"The additional data of the list\",\"properties\":{\"limit\":{\"description\":\"Items shown per page\",\"type\":\"integer\"},\"more_items_in_collection\":{\"description\":\"If there are more list items in the collection than displayed or not\",\"type\":\"boolean\"},\"start\":{\"description\":\"Pagination start\",\"type\":\"integer\"}},\"type\":\"object\"},\"data\":{\"items\":{\"allOf\":[{\"properties\":{\"active_flag\":{\"description\":\"The active flag of the field\",\"type\":\"boolean\"},\"add_time\":{\"description\":\"The creation time of the field\",\"format\":\"date-time\",\"type\":\"string\"},\"add_visible_flag\":{\"description\":\"Not used\",\"type\":\"boolean\"},\"bulk_edit_allowed\":{\"description\":\"Whether or not the field of an item can be edited in bulk\",\"type\":\"boolean\"},\"created_by_user_id\":{\"description\":\"The ID of the user who created the field\",\"nullable\":true,\"type\":\"integer\"},\"details_visible_flag\":{\"description\":\"Not used\",\"type\":\"boolean\"},\"edit_flag\":{\"description\":\"The edit flag of the field\",\"type\":\"boolean\"},\"field_type\":{\"allOf\":[{\"description\":\"The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`address`</td><td>Address field</td></tr><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td></tr><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td></tr><tr><td>`double`</td><td>Numeric value</td></tr><tr><td>`enum`</td><td>Options field with a single possible chosen option</td></tr><tr></tr><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td></tr><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td></tr><tr><td>`people`</td><td>Person field (contains a person ID which is stored on the same account)</td></tr><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td></tr><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td></tr><tr><td>`text`</td><td>Long text (up to 65k characters)</td></tr><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td></tr><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td></tr><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td></tr><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td></tr><tr><td>`visible_to`</td><td>System field that keeps item's visibility setting</td></tr></table>\",\"enum\":[\"address\",\"date\",\"daterange\",\"double\",\"enum\",\"monetary\",\"org\",\"people\",\"phone\",\"set\",\"text\",\"time\",\"timerange\",\"user\",\"varchar\",\"varchar_auto\",\"visible_to\"],\"type\":\"string\"}]},\"filtering_allowed\":{\"description\":\"Whether or not items can be filtered by this field\",\"type\":\"boolean\"},\"id\":{\"description\":\"The ID of the field. Value is `null` in case of subfields.\",\"nullable\":true,\"type\":\"integer\"},\"important_flag\":{\"description\":\"Not used\",\"type\":\"boolean\"},\"index_visible_flag\":{\"description\":\"Not used\",\"type\":\"boolean\"},\"is_subfield\":{\"description\":\"Whether or not the field is a subfield of another field. Only present if field is subfield.\",\"type\":\"boolean\"},\"key\":{\"description\":\"The key of the field. For custom fields this is generated upon creation.\",\"type\":\"string\"},\"last_updated_by_user_id\":{\"description\":\"The ID of the user who created or most recently updated the field, only applicable for custom fields\",\"nullable\":true,\"type\":\"integer\"},\"mandatory_flag\":{\"description\":\"Whether or not the field is mandatory\",\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the field\",\"type\":\"string\"},\"options\":{\"description\":\"The options of the field. When there are no options, `null` is returned.\",\"items\":{\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"options_deleted\":{\"description\":\"The deleted options of the field. Only present when there is at least 1 deleted option.\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"order_nr\":{\"description\":\"The order number of the field\",\"type\":\"integer\"},\"searchable_flag\":{\"description\":\"Whether or not items can be searched by this field\",\"type\":\"boolean\"},\"sortable_flag\":{\"description\":\"Whether or not items can be sorted by this field\",\"type\":\"boolean\"},\"subfields\":{\"description\":\"The subfields of the field. Only present when the field has subfields.\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"update_time\":{\"description\":\"The update time of the field\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Field\",\"type\":\"object\"},{\"properties\":{\"field_type\":{\"description\":\"List of all possible field types\",\"enum\":[\"boolean\",\"double\",\"int\",\"json\",\"date\",\"daterange\",\"time\",\"timerange\",\"text\",\"varchar\",\"varchar_auto\",\"varchar_options\",\"address\",\"enum\",\"monetary\",\"phone\",\"set\",\"activity\",\"deal\",\"lead\",\"org\",\"people\",\"pipeline\",\"product\",\"project\",\"stage\",\"user\",\"billing_frequency\",\"picture\",\"price_list\",\"projects_board\",\"projects_phase\",\"status\",\"visible_to\"],\"type\":\"string\"}},\"type\":\"object\"}],\"title\":\"GetField\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}],\"title\":\"GetFieldsResponse\"}}},\"description\":\"Success\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"leads:read\",\"leads:full\",\"admin\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/leadFields","segments":[{"lit":"leadFields"}],"select":{"exist":["limit","start"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"lead_field","name__orig":"lead_field","Name":"LeadField","name_":"lead_field","name-":"lead-field","NAME":"LEAD_FIELD","index$":12}, {"active":true,"entity":"lead_field","key$":"BasicLeadFieldFlow","kind":"basic","name":"BasicLeadFieldFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"lead_field_ref01"}}],"index$":0}]}, 'LeadField')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let lead_field_ref01_data = Object.values(setup.data.existing.lead_field)[0]

    // LIST
    const lead_field_ref01_ent = client.LeadField()
    const lead_field_ref01_match = {}

    const lead_field_ref01_list = (await lead_field_ref01_ent.list(lead_field_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/lead_field/LeadFieldTestData.json')

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
    ['lead_field01','lead_field02','lead_field03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PIPEDRIVE_TEST_LEAD_FIELD_ENTID': idmap,
    'PIPEDRIVE_TEST_LIVE': 'FALSE',
    'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
    'PIPEDRIVE_APIKEY': '',
  })

  idmap = env['PIPEDRIVE_TEST_LEAD_FIELD_ENTID']

  const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PIPEDRIVE_TEST_LEAD_FIELD_ENTID']
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
  
