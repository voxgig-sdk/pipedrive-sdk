import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Pipeline, PipelineLoadMatch, PipelineListMatch } from '../PipedriveTypes';
declare class PipelineEntity extends PipedriveEntityBase<Pipeline> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: PipelineEntity): PipelineEntity;
    load(this: any, reqmatch?: PipelineLoadMatch, ctrl?: Control): Promise<PipelineEntity>;
    list(this: any, reqmatch?: PipelineListMatch, ctrl?: Control): Promise<PipelineEntity[]>;
}
export { PipelineEntity };
