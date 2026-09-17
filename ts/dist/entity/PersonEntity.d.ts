import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Person, PersonListMatch, PersonCreateData, PersonUpdateData, PersonRemoveMatch } from '../PipedriveTypes';
declare class PersonEntity extends PipedriveEntityBase<Person> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: PersonEntity): PersonEntity;
    list(this: any, reqmatch?: PersonListMatch, ctrl?: Control): Promise<PersonEntity[]>;
    create(this: any, reqdata?: PersonCreateData, ctrl?: Control): Promise<PersonEntity>;
    update(this: any, reqdata?: PersonUpdateData, ctrl?: Control): Promise<PersonEntity>;
    remove(this: any, reqmatch?: PersonRemoveMatch, ctrl?: Control): Promise<PersonEntity>;
}
export { PersonEntity };
