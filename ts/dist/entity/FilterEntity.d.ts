import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Filter, FilterLoadMatch, FilterListMatch, FilterCreateData, FilterUpdateData, FilterRemoveMatch } from '../PipedriveTypes';
declare class FilterEntity extends PipedriveEntityBase<Filter> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: FilterEntity): FilterEntity;
    load(this: any, reqmatch?: FilterLoadMatch, ctrl?: Control): Promise<FilterEntity>;
    list(this: any, reqmatch?: FilterListMatch, ctrl?: Control): Promise<FilterEntity[]>;
    create(this: any, reqdata?: FilterCreateData, ctrl?: Control): Promise<FilterEntity>;
    update(this: any, reqdata?: FilterUpdateData, ctrl?: Control): Promise<FilterEntity>;
    remove(this: any, reqmatch?: FilterRemoveMatch, ctrl?: Control): Promise<FilterEntity>;
}
export { FilterEntity };
