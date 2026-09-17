import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { ActivityType, ActivityTypeListMatch, ActivityTypeCreateData, ActivityTypeUpdateData, ActivityTypeRemoveMatch } from '../PipedriveTypes';
declare class ActivityTypeEntity extends PipedriveEntityBase<ActivityType> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ActivityTypeEntity): ActivityTypeEntity;
    list(this: any, reqmatch?: ActivityTypeListMatch, ctrl?: Control): Promise<ActivityTypeEntity[]>;
    create(this: any, reqdata?: ActivityTypeCreateData, ctrl?: Control): Promise<ActivityTypeEntity>;
    update(this: any, reqdata?: ActivityTypeUpdateData, ctrl?: Control): Promise<ActivityTypeEntity>;
    remove(this: any, reqmatch?: ActivityTypeRemoveMatch, ctrl?: Control): Promise<ActivityTypeEntity>;
}
export { ActivityTypeEntity };
