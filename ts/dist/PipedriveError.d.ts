import { Context } from './Context';
declare class PipedriveError extends Error {
    isPipedriveError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { PipedriveError };
