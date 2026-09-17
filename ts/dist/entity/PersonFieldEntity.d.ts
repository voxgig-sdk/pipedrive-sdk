import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { PersonField, PersonFieldLoadMatch, PersonFieldListMatch, PersonFieldCreateData, PersonFieldUpdateData, PersonFieldRemoveMatch } from '../PipedriveTypes';
declare class PersonFieldEntity extends PipedriveEntityBase<PersonField> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: PersonFieldEntity): PersonFieldEntity;
    load(this: any, reqmatch?: PersonFieldLoadMatch, ctrl?: Control): Promise<PersonFieldEntity>;
    list(this: any, reqmatch?: PersonFieldListMatch, ctrl?: Control): Promise<PersonFieldEntity[]>;
    create(this: any, reqdata?: PersonFieldCreateData, ctrl?: Control): Promise<PersonFieldEntity>;
    update(this: any, reqdata?: PersonFieldUpdateData, ctrl?: Control): Promise<PersonFieldEntity>;
    remove(this: any, reqmatch?: PersonFieldRemoveMatch, ctrl?: Control): Promise<PersonFieldEntity>;
}
export { PersonFieldEntity };
