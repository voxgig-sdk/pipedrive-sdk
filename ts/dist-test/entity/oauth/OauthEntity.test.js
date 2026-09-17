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
(0, node_test_1.describe)('OauthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PIPEDRIVE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PIPEDRIVE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PipedriveSDK.test();
        const ent = testsdk.Oauth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PIPEDRIVE_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'oauth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "oauth", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "POST /oauth/token", "json": "{\"operationId\":\"get-tokens\",\"parameters\":[{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/x-www-form-urlencoded\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"The authorization code that you received after the user confirmed app installation\",\"type\":\"string\"},\"grant_type\":{\"default\":\"authorization_code\",\"description\":\"Since you are trying to exchange an authorization code for a pair of tokens, you must use the value \\\"authorization_code\\\"\",\"enum\":[\"authorization_code\",\"refresh_token\"],\"type\":\"string\"},\"redirect_uri\":{\"description\":\"The callback URL you provided when you registered your app\",\"type\":\"string\"}},\"title\":\"getTokensRequest\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"access_token\":\"v1u:AQIBAHj+LzTNK1yuuuaLqifzhWb9crUNKTpk4FlQ9rjnXqp/6AErhI98syaV25RmpLJLIgOkAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMbGNxa4UccVoXAmLNAgEQgDsiQ7cNdoRBJeFr1i3KW84RYyM1Qtwq1oSBJOl/NFQdVjDI2iQH0LBhS28DbL2KDvoVIihea9Ryt/9rIQ==:RIDnTOIXo8QirT3DMYw0Y0s8xBbxz59f5IMq7T7WhSz313e2MXRHB6g+8OTNCSqVO7QsUhluoAmOfBP1FNkPycy9txn7t2Uoz9y/JDVf4Givv4MMiK/Xq3I7hO4N6FeD+2GqDJDBn24OW6b0SRIr4FEROhGo3BpcPRGehv46NLn1n5LrqXrQwO9qrGD4gIZe40oO2IQgGL9QAPDfqvZ+JhUtcpAipRLp7cCDRfYU8+sdOFJ+hLffqC8isFcV6iPsNrmj\",\"api_domain\":\"https://user-company.pipedrive.com\",\"expires_in\":3599,\"refresh_token\":\"1:1:2a5496a8bdd0f829dcb09dc8ba82b188f0ea4481\",\"scope\":\"base\",\"token_type\":\"Bearer\"},\"schema\":{\"properties\":{\"access_token\":{\"description\":\"You need to use an `access_token` for accessing the user's data via API. You will need to [refresh the access token](https://pipedrive.readme.io/docs/marketplace-oauth-authorization#step-7-refreshing-the-tokens) if the `access_token` becomes invalid.\",\"type\":\"string\"},\"api_domain\":{\"description\":\"The base URL path, including the company_domain, where the requests can be sent to\",\"type\":\"string\"},\"expires_in\":{\"description\":\"The maximum time in seconds until the `access_token` expires\",\"type\":\"integer\"},\"refresh_token\":{\"description\":\"A refresh token is needed when you refresh the access token. refresh_token will expire if it isn't used in 60 days. Each time refresh_token is used, its expiry date is reset back to 60 days.\",\"type\":\"string\"},\"scope\":{\"description\":\"List of scopes to which users have agreed to grant access within this `access_token`\",\"type\":\"string\"},\"token_type\":{\"description\":\"The format of the token. Always \\\"Bearer\\\".\",\"type\":\"string\"}},\"title\":\"GetTokensResponse\",\"type\":\"object\"}}},\"description\":\"Returns user Oauth2 tokens.\"}},\"security\":[{\"basic_authentication\":[]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/oauth/token", "segments": [{ "lit": "oauth" }, { "lit": "token" }], "select": { "$action": "token", "exist": ["authorization"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "authorization", "orig": "authorization", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "POST /oauth/token/", "json": "{\"operationId\":\"refresh-tokens\",\"parameters\":[{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"in\":\"header\",\"name\":\"Authorization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/x-www-form-urlencoded\":{\"schema\":{\"properties\":{\"grant_type\":{\"default\":\"refresh_token\",\"description\":\"Since you are to refresh your access_token, you must use the value \\\"refresh_token\\\"\",\"enum\":[\"authorization_code\",\"refresh_token\"],\"type\":\"string\"},\"refresh_token\":{\"description\":\"The refresh token that you received after you exchanged the authorization code\",\"type\":\"string\"}},\"title\":\"getTokensRequest\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"access_token\":\"v1u:AQIBAHj+LzTNK1yuuuaLqifzhWb9crUNKTpk4FlQ9rjnXqp/6AErhI98syaV25RmpLJLIgOkAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMbGNxa4UccVoXAmLNAgEQgDsiQ7cNdoRBJeFr1i3KW84RYyM1Qtwq1oSBJOl/NFQdVjDI2iQH0LBhS28DbL2KDvoVIihea9Ryt/9rIQ==:RIDnTOIXo8QirT3DMYw0Y0s8xBbxz59f5IMq7T7WhSz313e2MXRHB6g+8OTNCSqVO7QsUhluoAmOfBP1FNkPycy9txn7t2Uoz9y/JDVf4Givv4MMiK/Xq3I7hO4N6FeD+2GqDJDBn24OW6b0SRIr4FEROhGo3BpcPRGehv46NLn1n5LrqXrQwO9qrGD4gIZe40oO2IQgGL9QAPDfqvZ+JhUtcpAipRLp7cCDRfYU8+sdOFJ+hLffqC8isFcV6iPsNrmj\",\"api_domain\":\"https://user-company.pipedrive.com\",\"expires_in\":3599,\"refresh_token\":\"1:1:2a5496a8bdd0f829dcb09dc8ba82b188f0ea4481\",\"scope\":\"base\",\"token_type\":\"Bearer\"},\"schema\":{\"properties\":{\"access_token\":{\"description\":\"You need to use an `access_token` for accessing the user's data via API. You will need to [refresh the access token](https://pipedrive.readme.io/docs/marketplace-oauth-authorization#step-7-refreshing-the-tokens) if the `access_token` becomes invalid.\",\"type\":\"string\"},\"api_domain\":{\"description\":\"The base URL path, including the company_domain, where the requests can be sent to\",\"type\":\"string\"},\"expires_in\":{\"description\":\"The maximum time in seconds until the `access_token` expires\",\"type\":\"integer\"},\"refresh_token\":{\"description\":\"A refresh token is needed when you refresh the access token. refresh_token will expire if it isn't used in 60 days. Each time refresh_token is used, its expiry date is reset back to 60 days.\",\"type\":\"string\"},\"scope\":{\"description\":\"List of scopes to which users have agreed to grant access within this `access_token`\",\"type\":\"string\"},\"token_type\":{\"description\":\"The format of the token. Always \\\"Bearer\\\".\",\"type\":\"string\"}},\"title\":\"GetTokensResponse\",\"type\":\"object\"}}},\"description\":\"Returns user Oauth2 tokens.\"}},\"security\":[{\"basic_authentication\":[]}],\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/oauth/token/", "segments": [{ "lit": "oauth" }, { "lit": "token" }], "select": { "$action": "token", "exist": ["authorization"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "client_id", "orig": "client_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "redirect_uri", "orig": "redirect_uri", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "state", "orig": "state", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /oauth/authorize", "json": "{\"operationId\":\"authorize\",\"parameters\":[{\"description\":\"The client ID provided to you by the Pipedrive Marketplace when you register your app\",\"in\":\"query\",\"name\":\"client_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The callback URL you provided when you registered your app. Authorization code will be sent to that URL (if it matches with the value you entered in the registration form) if a user approves the app install. Or, if a customer declines, the corresponding error will also be sent to this URL.\",\"in\":\"query\",\"name\":\"redirect_uri\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"You may pass any random string as the state parameter and the same string will be returned to your app after a user authorizes access. It may be used to store the user's session ID from your app or distinguish different responses. Using state may increase security; see RFC-6749.\\n\",\"in\":\"query\",\"name\":\"state\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/html\":{\"example\":\"As a result of the request, the customer will see a page with the confirmation dialog, which will present your app details (title, company name, icon) and explain the permission scopes that you have set for the app. Customers should confirm their wish to install the app by clicking \\\"Allow and install\\\" or deny authorization by clicking \\\"Cancel\\\".\\n\"}},\"description\":\"Authorize user in the app.\"}},\"securitySchemes\":{\"api_key\":{\"in\":\"header\",\"name\":\"x-api-token\",\"type\":\"apiKey\"},\"basic_authentication\":{\"description\":\"Base 64 encoded string containing the `client_id` and `client_secret` values. The header value should be `Basic <base64(client_id:client_secret)>`.\",\"scheme\":\"basic\",\"type\":\"http\"},\"oauth2\":{\"description\":\"For more information, see https://pipedrive.readme.io/docs/marketplace-oauth-authorization\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://oauth.pipedrive.com/oauth/authorize\",\"refreshUrl\":\"https://oauth.pipedrive.com/oauth/token\",\"scopes\":{\"activities:full\":\"Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types\",\"activities:read\":\"Read activities, its fields and types; all files and filters\",\"admin\":\"Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app\",\"base\":\"Read settings of the authorized user and currencies in an account\",\"contact-fields:full\":\"Create, read, update and delete person and organization fields\",\"contacts:full\":\"Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields\",\"contacts:read\":\"Read the data about persons and organizations, their related fields and followers; also all notes, files, filters\",\"deal-fields:full\":\"Create, read, update and delete deal fields\",\"deals:full\":\"Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"deals:read\":\"Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)\",\"goals:full\":\"Create, read, update and delete goals\",\"goals:read\":\"Read data on all goals\",\"leads:full\":\"Create, read, update and delete leads and lead labels\",\"leads:read\":\"Read data about leads and lead labels\",\"mail:full\":\"Read, update and delete mail threads. Also grants read access to mail messages\",\"mail:read\":\"Read mail threads and messages\",\"messengers-integration\":\"Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses\",\"phone-integration\":\"Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive\",\"product-fields:full\":\"Create, read, update and delete product fields\",\"products:full\":\"Create, read, update and delete products and its fields; add products to deals\",\"products:read\":\"Read products, its fields, files, followers and products connected to a deal\",\"projects:full\":\"Create, read, update and delete projects and its fields; add projects templates and project related tasks\",\"projects:read\":\"Read projects and its fields, tasks and project templates\",\"recents:read\":\"Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users\",\"search:read\":\"Search across the account for deals, persons, organizations, files and products, and see details about the returned results\",\"users:read\":\"Read data about users (people with access to a Pipedrive account), their permissions, roles and followers\",\"video-calls\":\"Allows application to register as a video call integration provider and create conference links\"},\"tokenUrl\":\"https://oauth.pipedrive.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/oauth/authorize", "segments": [{ "lit": "oauth" }, { "lit": "authorize" }], "select": { "$action": "authorize", "exist": ["client_id", "redirect_uri", "state"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "oauth", "name__orig": "oauth", "Name": "Oauth", "name_": "oauth", "name-": "oauth", "NAME": "OAUTH", "index$": 20 }, { "active": true, "entity": "oauth", "key$": "BasicOauthFlow", "kind": "basic", "name": "BasicOauthFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "oauth_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "oauth_ref01", "srcdatavar": "oauth_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-oauth_ref01" } }], "index$": 1 }] }, 'Oauth');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const oauth_ref01_ent = client.Oauth();
        let oauth_ref01_data = setup.data.new.oauth['oauth_ref01'];
        oauth_ref01_data = (await oauth_ref01_ent.create(oauth_ref01_data)).data();
        (0, node_assert_1.default)(null != oauth_ref01_data);
        // LOAD
        const oauth_ref01_match_dt0 = {};
        const oauth_ref01_data_dt0 = (await oauth_ref01_ent.load(oauth_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != oauth_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/oauth/OauthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PipedriveSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['oauth01', 'oauth02', 'oauth03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PIPEDRIVE_TEST_OAUTH_ENTID': idmap,
        'PIPEDRIVE_TEST_LIVE': 'FALSE',
        'PIPEDRIVE_TEST_EXPLAIN': 'FALSE',
        'PIPEDRIVE_APIKEY': '',
        'PIPEDRIVE_SECRET': '',
    });
    idmap = env['PIPEDRIVE_TEST_OAUTH_ENTID'];
    const live = 'TRUE' === env.PIPEDRIVE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PIPEDRIVE_TEST_OAUTH_ENTID'];
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
//# sourceMappingURL=OauthEntity.test.js.map