// Pipedrive Ts SDK

import { ActivityFieldEntity } from './entity/ActivityFieldEntity'
import { ActivityTypeEntity } from './entity/ActivityTypeEntity'
import { BillingEntity } from './entity/BillingEntity'
import { CallLogEntity } from './entity/CallLogEntity'
import { ChannelEntity } from './entity/ChannelEntity'
import { CurrencyEntity } from './entity/CurrencyEntity'
import { DealEntity } from './entity/DealEntity'
import { DealFieldEntity } from './entity/DealFieldEntity'
import { FileEntity } from './entity/FileEntity'
import { FilterEntity } from './entity/FilterEntity'
import { GoalEntity } from './entity/GoalEntity'
import { LeadEntity } from './entity/LeadEntity'
import { LeadFieldEntity } from './entity/LeadFieldEntity'
import { LeadLabelEntity } from './entity/LeadLabelEntity'
import { LeadSourceEntity } from './entity/LeadSourceEntity'
import { LegacyTeamEntity } from './entity/LegacyTeamEntity'
import { MailboxEntity } from './entity/MailboxEntity'
import { MeetingEntity } from './entity/MeetingEntity'
import { NoteEntity } from './entity/NoteEntity'
import { NoteFieldEntity } from './entity/NoteFieldEntity'
import { OauthEntity } from './entity/OauthEntity'
import { OrganizationEntity } from './entity/OrganizationEntity'
import { OrganizationFieldEntity } from './entity/OrganizationFieldEntity'
import { OrganizationRelationshipEntity } from './entity/OrganizationRelationshipEntity'
import { PermissionSetEntity } from './entity/PermissionSetEntity'
import { PersonEntity } from './entity/PersonEntity'
import { PersonFieldEntity } from './entity/PersonFieldEntity'
import { PipelineEntity } from './entity/PipelineEntity'
import { ProductEntity } from './entity/ProductEntity'
import { ProductFieldEntity } from './entity/ProductFieldEntity'
import { ProjectEntity } from './entity/ProjectEntity'
import { ProjectBoardEntity } from './entity/ProjectBoardEntity'
import { ProjectPhaseEntity } from './entity/ProjectPhaseEntity'
import { ProjectTemplateEntity } from './entity/ProjectTemplateEntity'
import { RecentEntity } from './entity/RecentEntity'
import { RoleEntity } from './entity/RoleEntity'
import { StageEntity } from './entity/StageEntity'
import { TaskEntity } from './entity/TaskEntity'
import { UserEntity } from './entity/UserEntity'
import { UserConnectionEntity } from './entity/UserConnectionEntity'
import { UserSettingEntity } from './entity/UserSettingEntity'
import { WebhookEntity } from './entity/WebhookEntity'

export type * from './PipedriveTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { PipedriveEntityBase } from './PipedriveEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class PipedriveSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('PipedriveSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('PipedriveSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('PipedriveSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.ActivityField().list()` / `client.ActivityField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActivityField(entopts?: Record<string, any>) {
    const self = this
    return new ActivityFieldEntity(self, entopts)
  }


  // Entity access: `client.ActivityType().list()` / `client.ActivityType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActivityType(entopts?: Record<string, any>) {
    const self = this
    return new ActivityTypeEntity(self, entopts)
  }


  // Entity access: `client.Billing().list()` / `client.Billing().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Billing(entopts?: Record<string, any>) {
    const self = this
    return new BillingEntity(self, entopts)
  }


  // Entity access: `client.CallLog().list()` / `client.CallLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallLog(entopts?: Record<string, any>) {
    const self = this
    return new CallLogEntity(self, entopts)
  }


  // Entity access: `client.Channel().list()` / `client.Channel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Channel(entopts?: Record<string, any>) {
    const self = this
    return new ChannelEntity(self, entopts)
  }


  // Entity access: `client.Currency().list()` / `client.Currency().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Currency(entopts?: Record<string, any>) {
    const self = this
    return new CurrencyEntity(self, entopts)
  }


  // Entity access: `client.Deal().list()` / `client.Deal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deal(entopts?: Record<string, any>) {
    const self = this
    return new DealEntity(self, entopts)
  }


  // Entity access: `client.DealField().list()` / `client.DealField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DealField(entopts?: Record<string, any>) {
    const self = this
    return new DealFieldEntity(self, entopts)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  File(entopts?: Record<string, any>) {
    const self = this
    return new FileEntity(self, entopts)
  }


  // Entity access: `client.Filter().list()` / `client.Filter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Filter(entopts?: Record<string, any>) {
    const self = this
    return new FilterEntity(self, entopts)
  }


  // Entity access: `client.Goal().list()` / `client.Goal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Goal(entopts?: Record<string, any>) {
    const self = this
    return new GoalEntity(self, entopts)
  }


  // Entity access: `client.Lead().list()` / `client.Lead().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Lead(entopts?: Record<string, any>) {
    const self = this
    return new LeadEntity(self, entopts)
  }


  // Entity access: `client.LeadField().list()` / `client.LeadField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LeadField(entopts?: Record<string, any>) {
    const self = this
    return new LeadFieldEntity(self, entopts)
  }


  // Entity access: `client.LeadLabel().list()` / `client.LeadLabel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LeadLabel(entopts?: Record<string, any>) {
    const self = this
    return new LeadLabelEntity(self, entopts)
  }


  // Entity access: `client.LeadSource().list()` / `client.LeadSource().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LeadSource(entopts?: Record<string, any>) {
    const self = this
    return new LeadSourceEntity(self, entopts)
  }


  // Entity access: `client.LegacyTeam().list()` / `client.LegacyTeam().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LegacyTeam(entopts?: Record<string, any>) {
    const self = this
    return new LegacyTeamEntity(self, entopts)
  }


  // Entity access: `client.Mailbox().list()` / `client.Mailbox().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Mailbox(entopts?: Record<string, any>) {
    const self = this
    return new MailboxEntity(self, entopts)
  }


  // Entity access: `client.Meeting().list()` / `client.Meeting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Meeting(entopts?: Record<string, any>) {
    const self = this
    return new MeetingEntity(self, entopts)
  }


  // Entity access: `client.Note().list()` / `client.Note().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Note(entopts?: Record<string, any>) {
    const self = this
    return new NoteEntity(self, entopts)
  }


  // Entity access: `client.NoteField().list()` / `client.NoteField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NoteField(entopts?: Record<string, any>) {
    const self = this
    return new NoteFieldEntity(self, entopts)
  }


  // Entity access: `client.Oauth().list()` / `client.Oauth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Oauth(entopts?: Record<string, any>) {
    const self = this
    return new OauthEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationField().list()` / `client.OrganizationField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationField(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationFieldEntity(self, entopts)
  }


  // Entity access: `client.OrganizationRelationship().list()` / `client.OrganizationRelationship().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationRelationship(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationRelationshipEntity(self, entopts)
  }


  // Entity access: `client.PermissionSet().list()` / `client.PermissionSet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PermissionSet(entopts?: Record<string, any>) {
    const self = this
    return new PermissionSetEntity(self, entopts)
  }


  // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Person(entopts?: Record<string, any>) {
    const self = this
    return new PersonEntity(self, entopts)
  }


  // Entity access: `client.PersonField().list()` / `client.PersonField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonField(entopts?: Record<string, any>) {
    const self = this
    return new PersonFieldEntity(self, entopts)
  }


  // Entity access: `client.Pipeline().list()` / `client.Pipeline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pipeline(entopts?: Record<string, any>) {
    const self = this
    return new PipelineEntity(self, entopts)
  }


  // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Product(entopts?: Record<string, any>) {
    const self = this
    return new ProductEntity(self, entopts)
  }


  // Entity access: `client.ProductField().list()` / `client.ProductField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProductField(entopts?: Record<string, any>) {
    const self = this
    return new ProductFieldEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntity(self, entopts)
  }


  // Entity access: `client.ProjectBoard().list()` / `client.ProjectBoard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectBoard(entopts?: Record<string, any>) {
    const self = this
    return new ProjectBoardEntity(self, entopts)
  }


  // Entity access: `client.ProjectPhase().list()` / `client.ProjectPhase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectPhase(entopts?: Record<string, any>) {
    const self = this
    return new ProjectPhaseEntity(self, entopts)
  }


  // Entity access: `client.ProjectTemplate().list()` / `client.ProjectTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectTemplate(entopts?: Record<string, any>) {
    const self = this
    return new ProjectTemplateEntity(self, entopts)
  }


  // Entity access: `client.Recent().list()` / `client.Recent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Recent(entopts?: Record<string, any>) {
    const self = this
    return new RecentEntity(self, entopts)
  }


  // Entity access: `client.Role().list()` / `client.Role().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Role(entopts?: Record<string, any>) {
    const self = this
    return new RoleEntity(self, entopts)
  }


  // Entity access: `client.Stage().list()` / `client.Stage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Stage(entopts?: Record<string, any>) {
    const self = this
    return new StageEntity(self, entopts)
  }


  // Entity access: `client.Task().list()` / `client.Task().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Task(entopts?: Record<string, any>) {
    const self = this
    return new TaskEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserConnection().list()` / `client.UserConnection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserConnection(entopts?: Record<string, any>) {
    const self = this
    return new UserConnectionEntity(self, entopts)
  }


  // Entity access: `client.UserSetting().list()` / `client.UserSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserSetting(entopts?: Record<string, any>) {
    const self = this
    return new UserSettingEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new PipedriveSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return PipedriveSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Pipedrive' }
  }

  toString() {
    return 'Pipedrive ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = PipedriveSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  PipedriveEntityBase,

  PipedriveSDK,
  SDK,
}


