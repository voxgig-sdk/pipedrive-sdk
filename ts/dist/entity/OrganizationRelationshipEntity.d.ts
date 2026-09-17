import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { OrganizationRelationship, OrganizationRelationshipLoadMatch, OrganizationRelationshipListMatch, OrganizationRelationshipCreateData, OrganizationRelationshipUpdateData, OrganizationRelationshipRemoveMatch } from '../PipedriveTypes';
declare class OrganizationRelationshipEntity extends PipedriveEntityBase<OrganizationRelationship> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: OrganizationRelationshipEntity): OrganizationRelationshipEntity;
    load(this: any, reqmatch?: OrganizationRelationshipLoadMatch, ctrl?: Control): Promise<OrganizationRelationshipEntity>;
    list(this: any, reqmatch?: OrganizationRelationshipListMatch, ctrl?: Control): Promise<OrganizationRelationshipEntity[]>;
    create(this: any, reqdata?: OrganizationRelationshipCreateData, ctrl?: Control): Promise<OrganizationRelationshipEntity>;
    update(this: any, reqdata?: OrganizationRelationshipUpdateData, ctrl?: Control): Promise<OrganizationRelationshipEntity>;
    remove(this: any, reqmatch?: OrganizationRelationshipRemoveMatch, ctrl?: Control): Promise<OrganizationRelationshipEntity>;
}
export { OrganizationRelationshipEntity };
