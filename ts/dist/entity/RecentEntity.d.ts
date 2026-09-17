import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Recent, RecentListMatch } from '../PipedriveTypes';
declare class RecentEntity extends PipedriveEntityBase<Recent> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: RecentEntity): RecentEntity;
    list(this: any, reqmatch?: RecentListMatch, ctrl?: Control): Promise<RecentEntity[]>;
}
export { RecentEntity };
