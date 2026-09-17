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
(0, node_test_1.describe)('ProjectTemplateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PIPEDRIVE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PipedriveSDK.test();
        const ent = testsdk.ProjectTemplate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_template.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "add_time", "req": false, "short": "The creation date and time of the template in UTC.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "additional_data", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "data", "req": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "description", "req": false, "short": "The description of a template", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": false, "short": "The ID of a template", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "owner_id", "req": false, "short": "The ID of a template owner", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "projects_board_id", "req": false, "short": "The ID of the project board this template is associated with", "type": "`$NUMBER`", "index$": 6 }, { "active": true, "name": "success", "req": false, "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "name": "title", "req": false, "short": "The title of a template", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "update_time", "req": false, "short": "The update date and time of the template in UTC.", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "project_template", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 500, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /projectTemplates", "json": "{\"operationId\":\"getProjectTemplates\",\"parameters\":[{\"description\":\"For pagination, the marker (an opaque string value) representing the first item on the next page\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"example\":500,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"additional_data\":{\"next_cursor\":\"eyJhY3Rpdml0aWVzIjoyN30\"},\"data\":[{\"add_time\":\"2023-09-14 08:14:40.288\",\"description\":\"Template Description\",\"id\":1,\"owner_id\":3,\"projects_board_id\":2,\"title\":\"Template Title\",\"update_time\":\"2023-09-14 08:14:40.288\"}],\"success\":true},\"schema\":{\"properties\":{\"additional_data\":{\"description\":\"The additional data of the list\",\"properties\":{\"next_cursor\":{\"description\":\"The first item on the next page. The value of the `next_cursor` field will be `null` if you have reached the end of the dataset and there’s no more pages to be returned.\",\"type\":\"string\"}},\"type\":\"object\"},\"data\":{\"items\":{\"allOf\":[{\"properties\":{\"add_time\":{\"description\":\"The creation date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.\",\"type\":\"string\"},\"description\":{\"description\":\"The description of a template\",\"type\":\"string\"},\"id\":{\"description\":\"The ID of a template\",\"type\":\"number\"},\"owner_id\":{\"description\":\"The ID of a template owner\",\"type\":\"number\"},\"projects_board_id\":{\"description\":\"The ID of the project board this template is associated with\",\"type\":\"number\"},\"title\":{\"description\":\"The title of a template\",\"type\":\"string\"},\"update_time\":{\"description\":\"The update date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.\",\"type\":\"string\"}},\"title\":\"ProjectTemplate\",\"type\":\"object\"}],\"title\":\"TemplateResponseObject\"},\"type\":\"array\"},\"success\":{\"type\":\"boolean\"}},\"title\":\"GetProjectTemplatesResponse\",\"type\":\"object\"}}},\"description\":\"A list of project template.\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"projects:read\",\"projects:full\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/projectTemplates", "segments": [{ "lit": "projectTemplates" }], "select": { "exist": ["cursor", "limit"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /projectTemplates/{id}", "json": "{\"operationId\":\"getProjectTemplate\",\"parameters\":[{\"description\":\"The ID of the project template\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"additional_data\":null,\"data\":{\"add_time\":\"2023-09-14 08:14:40.288\",\"description\":\"Template Description\",\"id\":1,\"owner_id\":3,\"projects_board_id\":2,\"title\":\"Template Title\",\"update_time\":\"2023-09-14 08:14:40.288\"},\"success\":true},\"schema\":{\"properties\":{\"additional_data\":{\"example\":null,\"nullable\":true,\"type\":\"object\"},\"data\":{\"allOf\":[{\"properties\":{\"add_time\":{\"description\":\"The creation date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.\",\"type\":\"string\"},\"description\":{\"description\":\"The description of a template\",\"type\":\"string\"},\"id\":{\"description\":\"The ID of a template\",\"type\":\"number\"},\"owner_id\":{\"description\":\"The ID of a template owner\",\"type\":\"number\"},\"projects_board_id\":{\"description\":\"The ID of the project board this template is associated with\",\"type\":\"number\"},\"title\":{\"description\":\"The title of a template\",\"type\":\"string\"},\"update_time\":{\"description\":\"The update date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.\",\"type\":\"string\"}},\"title\":\"ProjectTemplate\",\"type\":\"object\"}],\"title\":\"TemplateResponseObject\"},\"success\":{\"type\":\"boolean\"}},\"title\":\"GetProjectTemplateResponse\",\"type\":\"object\"}}},\"description\":\"Get a project template.\"}},\"security\":[{\"api_key\":[]},{\"oauth2\":[\"projects:read\",\"projects:full\"]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/projectTemplates/{id}", "segments": [{ "lit": "projectTemplates" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "project_template", "name__orig": "project_template", "Name": "ProjectTemplate", "name_": "project_template", "name-": "project-template", "NAME": "PROJECT_TEMPLATE", "index$": 33 }, { "active": true, "entity": "project_template", "key$": "BasicProjectTemplateFlow", "kind": "basic", "name": "BasicProjectTemplateFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "project_template_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "project_template_ref01", "srcdatavar": "project_template_ref01_data", "suffix": "_dt0" }, "match": { "id": "project_template01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_template_ref01" } }], "index$": 1 }] }, 'ProjectTemplate');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let project_template_ref01_data = Object.values(setup.data.existing.project_template)[0];
        // LIST
        const project_template_ref01_ent = client.ProjectTemplate();
        const project_template_ref01_match = {};
        const project_template_ref01_list = (await project_template_ref01_ent.list(project_template_ref01_match)).map((e) => e.data());
        // LOAD
        const project_template_ref01_match_dt0 = {};
        project_template_ref01_match_dt0.id = project_template_ref01_data.id;
        const project_template_ref01_data_dt0 = (await project_template_ref01_ent.load(project_template_ref01_match_dt0)).data();
        (0, node_assert_1.default)(project_template_ref01_data_dt0.id === project_template_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_template/ProjectTemplateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PipedriveSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_template01', 'project_template02', 'project_template03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PIPEDRIVE_TEST_PROJECT_TEMPLATE_ENTID': idmap,
        'PIPEDRIVE_TEST_LIVE': 'FALSE',
        'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
        'PIPEDRIVE_APIKEY': '',
        'PIPEDRIVE_SECRET': '',
    });
    idmap = env['PIPEDRIVE_TEST_PROJECT_TEMPLATE_ENTID'];
    const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PIPEDRIVE_TEST_PROJECT_TEMPLATE_ENTID'];
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
//# sourceMappingURL=ProjectTemplateEntity.test.js.map