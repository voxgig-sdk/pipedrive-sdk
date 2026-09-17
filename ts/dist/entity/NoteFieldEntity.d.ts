import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { NoteField, NoteFieldListMatch } from '../PipedriveTypes';
declare class NoteFieldEntity extends PipedriveEntityBase<NoteField> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: NoteFieldEntity): NoteFieldEntity;
    list(this: any, reqmatch?: NoteFieldListMatch, ctrl?: Control): Promise<NoteFieldEntity[]>;
}
export { NoteFieldEntity };
