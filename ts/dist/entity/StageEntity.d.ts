import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Stage, StageListMatch } from '../PipedriveTypes';
declare class StageEntity extends PipedriveEntityBase<Stage> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: StageEntity): StageEntity;
    list(this: any, reqmatch?: StageListMatch, ctrl?: Control): Promise<StageEntity[]>;
}
export { StageEntity };
