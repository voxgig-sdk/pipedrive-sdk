import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { LegacyTeam, LegacyTeamLoadMatch, LegacyTeamListMatch, LegacyTeamCreateData, LegacyTeamUpdateData, LegacyTeamRemoveMatch } from '../PipedriveTypes';
declare class LegacyTeamEntity extends PipedriveEntityBase<LegacyTeam> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: LegacyTeamEntity): LegacyTeamEntity;
    load(this: any, reqmatch?: LegacyTeamLoadMatch, ctrl?: Control): Promise<LegacyTeamEntity>;
    list(this: any, reqmatch?: LegacyTeamListMatch, ctrl?: Control): Promise<LegacyTeamEntity[]>;
    create(this: any, reqdata?: LegacyTeamCreateData, ctrl?: Control): Promise<LegacyTeamEntity>;
    update(this: any, reqdata?: LegacyTeamUpdateData, ctrl?: Control): Promise<LegacyTeamEntity>;
    remove(this: any, reqmatch?: LegacyTeamRemoveMatch, ctrl?: Control): Promise<LegacyTeamEntity>;
}
export { LegacyTeamEntity };
