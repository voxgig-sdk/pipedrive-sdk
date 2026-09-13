
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


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


describe('DealEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PIPEDRIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PipedriveSDK.test()
    const ent = testsdk.Deal()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const deal_ref01_ent = client.Deal()
    let deal_ref01_data = setup.data.new.deal['deal_ref01']

    deal_ref01_data = (await deal_ref01_ent.create(deal_ref01_data)).data()
    assert(null != deal_ref01_data.id)


    // LIST
    const deal_ref01_match = {}

    const deal_ref01_list = (await deal_ref01_ent.list(deal_ref01_match)).map((e) => e.data())

    assert(!isempty(select(deal_ref01_list, { id: deal_ref01_data.id })))


    // UPDATE
    const deal_ref01_data_up0 = {}
    deal_ref01_data_up0.id = deal_ref01_data.id

    const deal_ref01_markdef_up0 = { name: 'add_time', value: 'Mark01-deal_ref01_' + setup.now }
    deal_ref01_data_up0 [deal_ref01_markdef_up0.name] = deal_ref01_markdef_up0.value

    const deal_ref01_resdata_up0 = (await deal_ref01_ent.update(deal_ref01_data_up0)).data()
    assert(deal_ref01_resdata_up0.id === deal_ref01_data_up0.id)

    assert(deal_ref01_resdata_up0[deal_ref01_markdef_up0.name] === deal_ref01_markdef_up0.value)


    // LOAD
    const deal_ref01_match_dt0 = {}
    deal_ref01_match_dt0.id = deal_ref01_data.id
    const deal_ref01_data_dt0 = (await deal_ref01_ent.load(deal_ref01_match_dt0)).data()
    assert(deal_ref01_data_dt0.id === deal_ref01_data.id)


    // REMOVE
    const deal_ref01_match_rm0 = {}
    deal_ref01_match_rm0.id = deal_ref01_data.id
    await deal_ref01_ent.remove(deal_ref01_match_rm0)
  

    // LIST
    const deal_ref01_match_rt0 = {}

    const deal_ref01_list_rt0 = (await deal_ref01_ent.list(deal_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(deal_ref01_list_rt0, { id: deal_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/deal/DealTestData.json')

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
    ['deal01','deal02','deal03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PIPEDRIVE_TEST_DEAL_ENTID': idmap,
    'PIPEDRIVE_TEST_LIVE': 'FALSE',
    'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
    'PIPEDRIVE_APIKEY': '',
  })

  idmap = env['PIPEDRIVE_TEST_DEAL_ENTID']

  if ('TRUE' === env.PIPEDRIVE_TEST_LIVE) {
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
      extra || {}
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
    now: Date.now(),
  }

  return setup
}
  
