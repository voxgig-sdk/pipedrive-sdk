import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { ActivityField, ActivityFieldListMatch } from '../PipedriveTypes';
declare class ActivityFieldEntity extends PipedriveEntityBase<ActivityField> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ActivityFieldEntity): ActivityFieldEntity;
    list(this: any, reqmatch?: ActivityFieldListMatch, ctrl?: Control): Promise<ActivityFieldEntity[]>;
}
export { ActivityFieldEntity };
