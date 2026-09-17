import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Product, ProductListMatch, ProductCreateData, ProductRemoveMatch } from '../PipedriveTypes';
declare class ProductEntity extends PipedriveEntityBase<Product> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
    create(this: any, reqdata?: ProductCreateData, ctrl?: Control): Promise<ProductEntity>;
    remove(this: any, reqmatch?: ProductRemoveMatch, ctrl?: Control): Promise<ProductEntity>;
}
export { ProductEntity };
