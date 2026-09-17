import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Goal, GoalLoadMatch, GoalCreateData, GoalUpdateData, GoalRemoveMatch } from '../PipedriveTypes';
declare class GoalEntity extends PipedriveEntityBase<Goal> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: GoalEntity): GoalEntity;
    load(this: any, reqmatch?: GoalLoadMatch, ctrl?: Control): Promise<GoalEntity>;
    create(this: any, reqdata?: GoalCreateData, ctrl?: Control): Promise<GoalEntity>;
    update(this: any, reqdata?: GoalUpdateData, ctrl?: Control): Promise<GoalEntity>;
    remove(this: any, reqmatch?: GoalRemoveMatch, ctrl?: Control): Promise<GoalEntity>;
}
export { GoalEntity };
