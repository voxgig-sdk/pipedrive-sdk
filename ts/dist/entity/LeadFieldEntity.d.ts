import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { LeadField, LeadFieldListMatch } from '../PipedriveTypes';
declare class LeadFieldEntity extends PipedriveEntityBase<LeadField> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: LeadFieldEntity): LeadFieldEntity;
    list(this: any, reqmatch?: LeadFieldListMatch, ctrl?: Control): Promise<LeadFieldEntity[]>;
}
export { LeadFieldEntity };
