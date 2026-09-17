import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { ProjectPhase, ProjectPhaseLoadMatch, ProjectPhaseListMatch } from '../PipedriveTypes';
declare class ProjectPhaseEntity extends PipedriveEntityBase<ProjectPhase> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ProjectPhaseEntity): ProjectPhaseEntity;
    load(this: any, reqmatch?: ProjectPhaseLoadMatch, ctrl?: Control): Promise<ProjectPhaseEntity>;
    list(this: any, reqmatch?: ProjectPhaseListMatch, ctrl?: Control): Promise<ProjectPhaseEntity[]>;
}
export { ProjectPhaseEntity };
