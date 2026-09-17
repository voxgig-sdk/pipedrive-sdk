import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { PermissionSet, PermissionSetLoadMatch, PermissionSetListMatch } from '../PipedriveTypes';
declare class PermissionSetEntity extends PipedriveEntityBase<PermissionSet> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: PermissionSetEntity): PermissionSetEntity;
    load(this: any, reqmatch?: PermissionSetLoadMatch, ctrl?: Control): Promise<PermissionSetEntity>;
    list(this: any, reqmatch?: PermissionSetListMatch, ctrl?: Control): Promise<PermissionSetEntity[]>;
}
export { PermissionSetEntity };
