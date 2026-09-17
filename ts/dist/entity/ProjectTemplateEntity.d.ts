import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { ProjectTemplate, ProjectTemplateLoadMatch, ProjectTemplateListMatch } from '../PipedriveTypes';
declare class ProjectTemplateEntity extends PipedriveEntityBase<ProjectTemplate> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ProjectTemplateEntity): ProjectTemplateEntity;
    load(this: any, reqmatch?: ProjectTemplateLoadMatch, ctrl?: Control): Promise<ProjectTemplateEntity>;
    list(this: any, reqmatch?: ProjectTemplateListMatch, ctrl?: Control): Promise<ProjectTemplateEntity[]>;
}
export { ProjectTemplateEntity };
