import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Organization, OrganizationListMatch, OrganizationCreateData, OrganizationUpdateData, OrganizationRemoveMatch } from '../PipedriveTypes';
declare class OrganizationEntity extends PipedriveEntityBase<Organization> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
    list(this: any, reqmatch?: OrganizationListMatch, ctrl?: Control): Promise<OrganizationEntity[]>;
    create(this: any, reqdata?: OrganizationCreateData, ctrl?: Control): Promise<OrganizationEntity>;
    update(this: any, reqdata?: OrganizationUpdateData, ctrl?: Control): Promise<OrganizationEntity>;
    remove(this: any, reqmatch?: OrganizationRemoveMatch, ctrl?: Control): Promise<OrganizationEntity>;
}
export { OrganizationEntity };
