import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { UserSetting, UserSettingLoadMatch } from '../PipedriveTypes';
declare class UserSettingEntity extends PipedriveEntityBase<UserSetting> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: UserSettingEntity): UserSettingEntity;
    load(this: any, reqmatch?: UserSettingLoadMatch, ctrl?: Control): Promise<UserSettingEntity>;
}
export { UserSettingEntity };
