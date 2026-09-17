import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { File, FileLoadMatch, FileListMatch, FileCreateData, FileUpdateData, FileRemoveMatch } from '../PipedriveTypes';
declare class FileEntity extends PipedriveEntityBase<File> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: FileEntity): FileEntity;
    load(this: any, reqmatch?: FileLoadMatch, ctrl?: Control): Promise<FileEntity>;
    list(this: any, reqmatch?: FileListMatch, ctrl?: Control): Promise<FileEntity[]>;
    create(this: any, reqdata?: FileCreateData, ctrl?: Control): Promise<FileEntity>;
    update(this: any, reqdata?: FileUpdateData, ctrl?: Control): Promise<FileEntity>;
    remove(this: any, reqmatch?: FileRemoveMatch, ctrl?: Control): Promise<FileEntity>;
}
export { FileEntity };
