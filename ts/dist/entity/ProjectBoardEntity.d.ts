import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { ProjectBoard, ProjectBoardLoadMatch, ProjectBoardListMatch } from '../PipedriveTypes';
declare class ProjectBoardEntity extends PipedriveEntityBase<ProjectBoard> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ProjectBoardEntity): ProjectBoardEntity;
    load(this: any, reqmatch?: ProjectBoardLoadMatch, ctrl?: Control): Promise<ProjectBoardEntity>;
    list(this: any, reqmatch?: ProjectBoardListMatch, ctrl?: Control): Promise<ProjectBoardEntity[]>;
}
export { ProjectBoardEntity };
