import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Task, TaskLoadMatch, TaskListMatch, TaskCreateData, TaskUpdateData, TaskRemoveMatch } from '../PipedriveTypes';
declare class TaskEntity extends PipedriveEntityBase<Task> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: TaskEntity): TaskEntity;
    load(this: any, reqmatch?: TaskLoadMatch, ctrl?: Control): Promise<TaskEntity>;
    list(this: any, reqmatch?: TaskListMatch, ctrl?: Control): Promise<TaskEntity[]>;
    create(this: any, reqdata?: TaskCreateData, ctrl?: Control): Promise<TaskEntity>;
    update(this: any, reqdata?: TaskUpdateData, ctrl?: Control): Promise<TaskEntity>;
    remove(this: any, reqmatch?: TaskRemoveMatch, ctrl?: Control): Promise<TaskEntity>;
}
export { TaskEntity };
