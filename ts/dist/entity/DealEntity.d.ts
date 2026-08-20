import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Deal, DealLoadMatch, DealListMatch, DealCreateData, DealUpdateData, DealRemoveMatch } from '../PipedriveTypes';
declare class DealEntity extends PipedriveEntityBase<Deal> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: DealEntity): DealEntity;
    load(this: any, reqmatch?: DealLoadMatch, ctrl?: Control): Promise<DealEntity>;
    list(this: any, reqmatch?: DealListMatch, ctrl?: Control): Promise<DealEntity[]>;
    create(this: any, reqdata?: DealCreateData, ctrl?: Control): Promise<DealEntity>;
    update(this: any, reqdata?: DealUpdateData, ctrl?: Control): Promise<DealEntity>;
    remove(this: any, reqmatch?: DealRemoveMatch, ctrl?: Control): Promise<DealEntity>;
}
export { DealEntity };
