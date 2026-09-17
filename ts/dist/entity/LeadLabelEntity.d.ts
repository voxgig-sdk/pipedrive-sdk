import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { LeadLabel, LeadLabelListMatch, LeadLabelCreateData, LeadLabelUpdateData, LeadLabelRemoveMatch } from '../PipedriveTypes';
declare class LeadLabelEntity extends PipedriveEntityBase<LeadLabel> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: LeadLabelEntity): LeadLabelEntity;
    list(this: any, reqmatch?: LeadLabelListMatch, ctrl?: Control): Promise<LeadLabelEntity[]>;
    create(this: any, reqdata?: LeadLabelCreateData, ctrl?: Control): Promise<LeadLabelEntity>;
    update(this: any, reqdata?: LeadLabelUpdateData, ctrl?: Control): Promise<LeadLabelEntity>;
    remove(this: any, reqmatch?: LeadLabelRemoveMatch, ctrl?: Control): Promise<LeadLabelEntity>;
}
export { LeadLabelEntity };
