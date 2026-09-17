import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Mailbox, MailboxLoadMatch, MailboxListMatch, MailboxUpdateData, MailboxRemoveMatch } from '../PipedriveTypes';
declare class MailboxEntity extends PipedriveEntityBase<Mailbox> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: MailboxEntity): MailboxEntity;
    load(this: any, reqmatch?: MailboxLoadMatch, ctrl?: Control): Promise<MailboxEntity>;
    list(this: any, reqmatch?: MailboxListMatch, ctrl?: Control): Promise<MailboxEntity[]>;
    update(this: any, reqdata?: MailboxUpdateData, ctrl?: Control): Promise<MailboxEntity>;
    remove(this: any, reqmatch?: MailboxRemoveMatch, ctrl?: Control): Promise<MailboxEntity>;
}
export { MailboxEntity };
