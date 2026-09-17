import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Billing, BillingListMatch } from '../PipedriveTypes';
declare class BillingEntity extends PipedriveEntityBase<Billing> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: BillingEntity): BillingEntity;
    list(this: any, reqmatch?: BillingListMatch, ctrl?: Control): Promise<BillingEntity[]>;
}
export { BillingEntity };
