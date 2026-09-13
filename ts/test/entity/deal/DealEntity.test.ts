

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


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


describe('DealEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PIPEDRIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PipedriveSDK.test()
    const ent = testsdk.Deal()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'deal.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set PIPEDRIVE_TEST_DEAL_ENTID JSON to run live')
      return
    }
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
    const deal_ref01_match: any = {}

    const deal_ref01_list = (await deal_ref01_ent.list(deal_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(deal_ref01_list, { id: deal_ref01_data.id })))


    // UPDATE
    const deal_ref01_data_up0: any = {}
    deal_ref01_data_up0.id = deal_ref01_data.id

    const deal_ref01_markdef_up0 = { name: 'add_time', value: 'Mark01-deal_ref01_' + setup.now }
    ;(deal_ref01_data_up0 as any)[deal_ref01_markdef_up0.name] = deal_ref01_markdef_up0.value

    const deal_ref01_resdata_up0 = (await deal_ref01_ent.update(deal_ref01_data_up0)).data()
    assert(deal_ref01_resdata_up0.id === deal_ref01_data_up0.id)

    assert((deal_ref01_resdata_up0 as any)[deal_ref01_markdef_up0.name] === deal_ref01_markdef_up0.value)


    // LOAD
    const deal_ref01_match_dt0: any = {}
    deal_ref01_match_dt0.id = deal_ref01_data.id
    const deal_ref01_data_dt0 = (await deal_ref01_ent.load(deal_ref01_match_dt0)).data()
    assert(deal_ref01_data_dt0.id === deal_ref01_data.id)


    // REMOVE
    const deal_ref01_match_rm0: any = { id: deal_ref01_data.id }
    await deal_ref01_ent.remove(deal_ref01_match_rm0)
  

    // LIST
    const deal_ref01_match_rt0: any = {}

    const deal_ref01_list_rt0 = (await deal_ref01_ent.list(deal_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(deal_ref01_list_rt0, { id: deal_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['PIPEDRIVE_TEST_DEAL_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'PIPEDRIVE_TEST_DEAL_ENTID': idmap,
    'PIPEDRIVE_TEST_LIVE': 'FALSE',
    'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
    'PIPEDRIVE_APIKEY': '',
  })

  idmap = env['PIPEDRIVE_TEST_DEAL_ENTID']

  const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE

  if (live) {
    client = new PipedriveSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.PIPEDRIVE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
