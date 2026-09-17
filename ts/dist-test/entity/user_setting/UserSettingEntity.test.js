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
(0, node_test_1.describe)('UserSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PIPEDRIVE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PipedriveSDK.test();
        const ent = testsdk.UserSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "data", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "success", "req": false, "short": "If the response is successful or not", "type": "`$BOOLEAN`", "index$": 1 }], "name": "user_setting", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /userSettings", "json": "{\"operationId\":\"getUserSettings\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"autofill_deal_expected_close_date\":false,\"beta_app\":true,\"callto_link_syntax\":\"callto:[number]\",\"file_upload_destination\":\"s3\",\"list_limit\":100,\"marketplace_team\":false,\"person_duplicate_condition\":\"name && (org_id || email || phone)\",\"prevent_salesphone_callto_override\":false},\"success\":true},\"schema\":{\"allOf\":[{\"properties\":{\"success\":{\"description\":\"If the response is successful or not\",\"type\":\"boolean\"}},\"title\":\"baseResponse\",\"type\":\"object\"},{\"properties\":{\"data\":{\"properties\":{\"autofill_deal_expected_close_date\":{\"description\":\"Whether the expected close date of the deal is filled automatically or not\",\"type\":\"boolean\"},\"beta_app\":{\"description\":\"Whether beta app is enabled\",\"type\":\"boolean\"},\"callto_link_syntax\":{\"description\":\"The call to link syntax\",\"type\":\"string\"},\"file_upload_destination\":{\"description\":\"The destination of file upload\",\"type\":\"string\"},\"list_limit\":{\"description\":\"The number of results shown in list by default\",\"type\":\"number\"},\"marketplace_team\":{\"description\":\"If the vendors are allowed to be part of the Marketplace team or not\",\"type\":\"boolean\"},\"person_duplicate_condition\":{\"description\":\"Allow the vendors to duplicate a person\",\"type\":\"string\"},\"prevent_salesphone_callto_override\":{\"description\":\"Prevent salesphone call to override\",\"type\":\"boolean\"}},\"title\":\"UserSettingsItem\",\"type\":\"object\"}},\"title\":\"GetUserSettingsResponseData\",\"type\":\"object\"}],\"title\":\"GetUserSettingsResponse\"}}},\"description\":\"The list of user settings\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"unauthorized access\",\"errorCode\":401,\"success\":false},\"schema\":{\"properties\":{\"error\":{\"description\":\"The error message\",\"type\":\"string\"},\"errorCode\":{\"description\":\"The response error code\",\"type\":\"integer\"},\"success\":{\"description\":\"If the response is successful or not\",\"type\":\"boolean\"}},\"title\":\"unathorizedResponse\",\"type\":\"object\"}}},\"description\":\"Unauthorized response\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"base\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/userSettings", "segments": [{ "lit": "userSettings" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "user_setting", "name__orig": "user_setting", "Name": "UserSetting", "name_": "user_setting", "name-": "user-setting", "NAME": "USER_SETTING", "index$": 40 }, { "active": true, "entity": "user_setting", "key$": "BasicUserSettingFlow", "kind": "basic", "name": "BasicUserSettingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "user_setting_ref01", "srcdatavar": "user_setting_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_setting_ref01" } }], "index$": 0 }] }, 'UserSetting');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_setting_ref01_data = Object.values(setup.data.existing.user_setting)[0];
        // LOAD
        const user_setting_ref01_ent = client.UserSetting();
        const user_setting_ref01_match_dt0 = {};
        const user_setting_ref01_data_dt0 = (await user_setting_ref01_ent.load(user_setting_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != user_setting_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user_setting/UserSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PipedriveSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user_setting01', 'user_setting02', 'user_setting03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PIPEDRIVE_TEST_USER_SETTING_ENTID': idmap,
        'PIPEDRIVE_TEST_LIVE': 'FALSE',
        'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
        'PIPEDRIVE_APIKEY': '',
        'PIPEDRIVE_SECRET': '',
    });
    idmap = env['PIPEDRIVE_TEST_USER_SETTING_ENTID'];
    const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PIPEDRIVE_TEST_USER_SETTING_ENTID'];
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
                secret: env.PIPEDRIVE_SECRET,
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
//# sourceMappingURL=UserSettingEntity.test.js.map