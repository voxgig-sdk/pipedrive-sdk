import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { CallLog, CallLogLoadMatch, CallLogListMatch, CallLogCreateData, CallLogRemoveMatch } from '../PipedriveTypes';
declare class CallLogEntity extends PipedriveEntityBase<CallLog> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: CallLogEntity): CallLogEntity;
    load(this: any, reqmatch?: CallLogLoadMatch, ctrl?: Control): Promise<CallLogEntity>;
    list(this: any, reqmatch?: CallLogListMatch, ctrl?: Control): Promise<CallLogEntity[]>;
    create(this: any, reqdata?: CallLogCreateData, ctrl?: Control): Promise<CallLogEntity>;
    remove(this: any, reqmatch?: CallLogRemoveMatch, ctrl?: Control): Promise<CallLogEntity>;
}
export { CallLogEntity };
