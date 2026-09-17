import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { DealField, DealFieldLoadMatch, DealFieldListMatch, DealFieldCreateData, DealFieldUpdateData, DealFieldRemoveMatch } from '../PipedriveTypes';
declare class DealFieldEntity extends PipedriveEntityBase<DealField> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: DealFieldEntity): DealFieldEntity;
    load(this: any, reqmatch?: DealFieldLoadMatch, ctrl?: Control): Promise<DealFieldEntity>;
    list(this: any, reqmatch?: DealFieldListMatch, ctrl?: Control): Promise<DealFieldEntity[]>;
    create(this: any, reqdata?: DealFieldCreateData, ctrl?: Control): Promise<DealFieldEntity>;
    update(this: any, reqdata?: DealFieldUpdateData, ctrl?: Control): Promise<DealFieldEntity>;
    remove(this: any, reqmatch?: DealFieldRemoveMatch, ctrl?: Control): Promise<DealFieldEntity>;
}
export { DealFieldEntity };
