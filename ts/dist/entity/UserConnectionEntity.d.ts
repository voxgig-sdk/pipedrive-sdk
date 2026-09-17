import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { UserConnection, UserConnectionLoadMatch } from '../PipedriveTypes';
declare class UserConnectionEntity extends PipedriveEntityBase<UserConnection> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: UserConnectionEntity): UserConnectionEntity;
    load(this: any, reqmatch?: UserConnectionLoadMatch, ctrl?: Control): Promise<UserConnectionEntity>;
}
export { UserConnectionEntity };
