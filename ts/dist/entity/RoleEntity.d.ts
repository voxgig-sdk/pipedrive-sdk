import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Role, RoleLoadMatch, RoleListMatch, RoleCreateData, RoleUpdateData, RoleRemoveMatch } from '../PipedriveTypes';
declare class RoleEntity extends PipedriveEntityBase<Role> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: RoleEntity): RoleEntity;
    load(this: any, reqmatch?: RoleLoadMatch, ctrl?: Control): Promise<RoleEntity>;
    list(this: any, reqmatch?: RoleListMatch, ctrl?: Control): Promise<RoleEntity[]>;
    create(this: any, reqdata?: RoleCreateData, ctrl?: Control): Promise<RoleEntity>;
    update(this: any, reqdata?: RoleUpdateData, ctrl?: Control): Promise<RoleEntity>;
    remove(this: any, reqmatch?: RoleRemoveMatch, ctrl?: Control): Promise<RoleEntity>;
}
export { RoleEntity };
