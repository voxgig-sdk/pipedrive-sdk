import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Meeting, MeetingCreateData, MeetingRemoveMatch } from '../PipedriveTypes';
declare class MeetingEntity extends PipedriveEntityBase<Meeting> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: MeetingEntity): MeetingEntity;
    create(this: any, reqdata?: MeetingCreateData, ctrl?: Control): Promise<MeetingEntity>;
    remove(this: any, reqmatch?: MeetingRemoveMatch, ctrl?: Control): Promise<MeetingEntity>;
}
export { MeetingEntity };
