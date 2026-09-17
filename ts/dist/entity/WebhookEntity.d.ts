import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Webhook, WebhookListMatch, WebhookCreateData, WebhookRemoveMatch } from '../PipedriveTypes';
declare class WebhookEntity extends PipedriveEntityBase<Webhook> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    list(this: any, reqmatch?: WebhookListMatch, ctrl?: Control): Promise<WebhookEntity[]>;
    create(this: any, reqdata?: WebhookCreateData, ctrl?: Control): Promise<WebhookEntity>;
    remove(this: any, reqmatch?: WebhookRemoveMatch, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
