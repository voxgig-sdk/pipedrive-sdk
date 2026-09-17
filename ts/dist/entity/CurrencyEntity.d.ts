import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Currency, CurrencyListMatch } from '../PipedriveTypes';
declare class CurrencyEntity extends PipedriveEntityBase<Currency> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: CurrencyEntity): CurrencyEntity;
    list(this: any, reqmatch?: CurrencyListMatch, ctrl?: Control): Promise<CurrencyEntity[]>;
}
export { CurrencyEntity };
