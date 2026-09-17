import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Lead, LeadLoadMatch, LeadListMatch, LeadCreateData, LeadUpdateData, LeadRemoveMatch } from '../PipedriveTypes';
declare class LeadEntity extends PipedriveEntityBase<Lead> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: LeadEntity): LeadEntity;
    load(this: any, reqmatch?: LeadLoadMatch, ctrl?: Control): Promise<LeadEntity>;
    list(this: any, reqmatch?: LeadListMatch, ctrl?: Control): Promise<LeadEntity[]>;
    create(this: any, reqdata?: LeadCreateData, ctrl?: Control): Promise<LeadEntity>;
    update(this: any, reqdata?: LeadUpdateData, ctrl?: Control): Promise<LeadEntity>;
    remove(this: any, reqmatch?: LeadRemoveMatch, ctrl?: Control): Promise<LeadEntity>;
}
export { LeadEntity };
