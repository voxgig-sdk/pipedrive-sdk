import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { ProductField, ProductFieldLoadMatch, ProductFieldListMatch, ProductFieldCreateData, ProductFieldUpdateData, ProductFieldRemoveMatch } from '../PipedriveTypes';
declare class ProductFieldEntity extends PipedriveEntityBase<ProductField> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ProductFieldEntity): ProductFieldEntity;
    load(this: any, reqmatch?: ProductFieldLoadMatch, ctrl?: Control): Promise<ProductFieldEntity>;
    list(this: any, reqmatch?: ProductFieldListMatch, ctrl?: Control): Promise<ProductFieldEntity[]>;
    create(this: any, reqdata?: ProductFieldCreateData, ctrl?: Control): Promise<ProductFieldEntity>;
    update(this: any, reqdata?: ProductFieldUpdateData, ctrl?: Control): Promise<ProductFieldEntity>;
    remove(this: any, reqmatch?: ProductFieldRemoveMatch, ctrl?: Control): Promise<ProductFieldEntity>;
}
export { ProductFieldEntity };
