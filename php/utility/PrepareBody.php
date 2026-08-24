<?php
declare(strict_types=1);

// Pipedrive SDK utility: prepare_body

class PipedrivePrepareBody
{
    public static function call(PipedriveContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
