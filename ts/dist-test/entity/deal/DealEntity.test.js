"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DealEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PIPEDRIVE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PipedriveSDK.test();
        const ent = testsdk.Deal();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'deal.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "add_time", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "currency", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "org_id", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "person_id", "req": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "stage_id", "req": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "title", "op": { "create": { "req": true, "type": "`$STRING`" }, "update": { "req": true, "type": "`$STRING`" } }, "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "update_time", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "value", "req": false, "type": "`$NUMBER`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "deal", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /deals", "json": "{\"operationId\":\"createDeal\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"currency\":{\"type\":\"string\"},\"org_id\":{\"type\":\"integer\"},\"person_id\":{\"type\":\"integer\"},\"stage_id\":{\"type\":\"integer\"},\"status\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"required\":[\"title\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"add_time\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"id\":{\"type\":\"integer\"},\"org_id\":{\"type\":\"integer\"},\"person_id\":{\"type\":\"integer\"},\"stage_id\":{\"type\":\"integer\"},\"status\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"update_time\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"},\"success\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"The created deal\"}},\"security\":[{\"apiKeyAuth\":[]}],\"securitySchemes\":{\"apiKeyAuth\":{\"in\":\"query\",\"name\":\"api_token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/deals", "segments": [{ "lit": "deals" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "start", "orig": "start", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /deals", "json": "{\"operationId\":\"listDeals\",\"parameters\":[{\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"add_time\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"id\":{\"type\":\"integer\"},\"org_id\":{\"type\":\"integer\"},\"person_id\":{\"type\":\"integer\"},\"stage_id\":{\"type\":\"integer\"},\"status\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"update_time\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"success\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"A page of deals\"}},\"security\":[{\"apiKeyAuth\":[]}],\"securitySchemes\":{\"apiKeyAuth\":{\"in\":\"query\",\"name\":\"api_token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/deals", "segments": [{ "lit": "deals" }], "select": { "exist": ["limit", "start", "status"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /deals/{id}", "json": "{\"operationId\":\"getDeal\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"add_time\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"id\":{\"type\":\"integer\"},\"org_id\":{\"type\":\"integer\"},\"person_id\":{\"type\":\"integer\"},\"stage_id\":{\"type\":\"integer\"},\"status\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"update_time\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"},\"success\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"The requested deal\"}},\"security\":[{\"apiKeyAuth\":[]}],\"securitySchemes\":{\"apiKeyAuth\":{\"in\":\"query\",\"name\":\"api_token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/deals/{id}", "segments": [{ "lit": "deals" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "DELETE /deals/{id}", "json": "{\"operationId\":\"deleteDeal\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"success\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Deleted\"}},\"security\":[{\"apiKeyAuth\":[]}],\"securitySchemes\":{\"apiKeyAuth\":{\"in\":\"query\",\"name\":\"api_token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/deals/{id}", "segments": [{ "lit": "deals" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "PUT /deals/{id}", "json": "{\"operationId\":\"updateDeal\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"currency\":{\"type\":\"string\"},\"org_id\":{\"type\":\"integer\"},\"person_id\":{\"type\":\"integer\"},\"stage_id\":{\"type\":\"integer\"},\"status\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"required\":[\"title\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"add_time\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"id\":{\"type\":\"integer\"},\"org_id\":{\"type\":\"integer\"},\"person_id\":{\"type\":\"integer\"},\"stage_id\":{\"type\":\"integer\"},\"status\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"update_time\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"},\"success\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"The updated deal\"}},\"security\":[{\"apiKeyAuth\":[]}],\"securitySchemes\":{\"apiKeyAuth\":{\"in\":\"query\",\"name\":\"api_token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/deals/{id}", "segments": [{ "lit": "deals" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "deal", "name__orig": "deal", "Name": "Deal", "name_": "deal", "name-": "deal", "NAME": "DEAL", "index$": 0 }, { "active": true, "entity": "deal", "key$": "BasicDealFlow", "kind": "basic", "name": "BasicDealFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "deal_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "deal_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "deal_ref01", "srcdatavar": "deal_ref01_data", "suffix": "_up0", "textfield": "add_time" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-deal_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "deal_ref01", "srcdatavar": "deal_ref01_data", "suffix": "_dt0" }, "match": { "id": "deal01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-deal_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "deal_ref01", "suffix": "_rm0" }, "match": { "id": "deal01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "deal_ref01" } }], "index$": 5 }] }, 'Deal');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const deal_ref01_ent = client.Deal();
        let deal_ref01_data = setup.data.new.deal['deal_ref01'];
        deal_ref01_data = (await deal_ref01_ent.create(deal_ref01_data)).data();
        (0, node_assert_1.default)(null != deal_ref01_data.id);
        // LIST
        const deal_ref01_match = {};
        const deal_ref01_list = (await deal_ref01_ent.list(deal_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(deal_ref01_list, { id: deal_ref01_data.id })));
        // UPDATE
        const deal_ref01_data_up0 = {};
        deal_ref01_data_up0.id = deal_ref01_data.id;
        const deal_ref01_markdef_up0 = { name: 'add_time', value: 'Mark01-deal_ref01_' + setup.now };
        deal_ref01_data_up0[deal_ref01_markdef_up0.name] = deal_ref01_markdef_up0.value;
        const deal_ref01_resdata_up0 = (await deal_ref01_ent.update(deal_ref01_data_up0)).data();
        (0, node_assert_1.default)(deal_ref01_resdata_up0.id === deal_ref01_data_up0.id);
        (0, node_assert_1.default)(deal_ref01_resdata_up0[deal_ref01_markdef_up0.name] === deal_ref01_markdef_up0.value);
        // LOAD
        const deal_ref01_match_dt0 = {};
        deal_ref01_match_dt0.id = deal_ref01_data.id;
        const deal_ref01_data_dt0 = (await deal_ref01_ent.load(deal_ref01_match_dt0)).data();
        (0, node_assert_1.default)(deal_ref01_data_dt0.id === deal_ref01_data.id);
        // REMOVE
        const deal_ref01_match_rm0 = { id: deal_ref01_data.id };
        await deal_ref01_ent.remove(deal_ref01_match_rm0);
        // LIST
        const deal_ref01_match_rt0 = {};
        const deal_ref01_list_rt0 = (await deal_ref01_ent.list(deal_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(deal_ref01_list_rt0, { id: deal_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/deal/DealTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PipedriveSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['deal01', 'deal02', 'deal03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PIPEDRIVE_TEST_DEAL_ENTID': idmap,
        'PIPEDRIVE_TEST_LIVE': 'FALSE',
        'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
        'PIPEDRIVE_APIKEY': '',
    });
    idmap = env['PIPEDRIVE_TEST_DEAL_ENTID'];
    const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PIPEDRIVE_TEST_DEAL_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.PipedriveSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.PIPEDRIVE_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=DealEntity.test.js.map