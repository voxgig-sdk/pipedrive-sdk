import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Oauth, OauthLoadMatch, OauthCreateData } from '../PipedriveTypes';
declare class OauthEntity extends PipedriveEntityBase<Oauth> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: OauthEntity): OauthEntity;
    load(this: any, reqmatch?: OauthLoadMatch, ctrl?: Control): Promise<OauthEntity>;
    create(this: any, reqdata?: OauthCreateData, ctrl?: Control): Promise<OauthEntity>;
}
export { OauthEntity };
