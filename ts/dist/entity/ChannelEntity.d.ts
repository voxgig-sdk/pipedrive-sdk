import { PipedriveEntityBase } from '../PipedriveEntityBase';
import type { PipedriveSDK } from '../PipedriveSDK';
import type { Control } from '../types';
import type { Channel, ChannelCreateData, ChannelRemoveMatch } from '../PipedriveTypes';
declare class ChannelEntity extends PipedriveEntityBase<Channel> {
    constructor(client: PipedriveSDK, entopts: any);
    make(this: ChannelEntity): ChannelEntity;
    create(this: any, reqdata?: ChannelCreateData, ctrl?: Control): Promise<ChannelEntity>;
    remove(this: any, reqmatch?: ChannelRemoveMatch, ctrl?: Control): Promise<ChannelEntity>;
}
export { ChannelEntity };
