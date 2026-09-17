import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { LeadSource, LeadSourceListMatch } from '../PipedriveTypes';
declare class LeadSourceEntity extends PipedriveEntityBase<LeadSource> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: LeadSourceEntity): LeadSourceEntity;
    list(this: any, reqmatch?: LeadSourceListMatch, ctrl?: Control): Promise<LeadSourceEntity[]>;
}
export { LeadSourceEntity };
