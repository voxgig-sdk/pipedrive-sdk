import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { OrganizationField, OrganizationFieldLoadMatch, OrganizationFieldListMatch, OrganizationFieldCreateData, OrganizationFieldUpdateData, OrganizationFieldRemoveMatch } from '../PipedriveTypes';
declare class OrganizationFieldEntity extends PipedriveEntityBase<OrganizationField> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: OrganizationFieldEntity): OrganizationFieldEntity;
    load(this: any, reqmatch?: OrganizationFieldLoadMatch, ctrl?: Control): Promise<OrganizationFieldEntity>;
    list(this: any, reqmatch?: OrganizationFieldListMatch, ctrl?: Control): Promise<OrganizationFieldEntity[]>;
    create(this: any, reqdata?: OrganizationFieldCreateData, ctrl?: Control): Promise<OrganizationFieldEntity>;
    update(this: any, reqdata?: OrganizationFieldUpdateData, ctrl?: Control): Promise<OrganizationFieldEntity>;
    remove(this: any, reqmatch?: OrganizationFieldRemoveMatch, ctrl?: Control): Promise<OrganizationFieldEntity>;
}
export { OrganizationFieldEntity };
