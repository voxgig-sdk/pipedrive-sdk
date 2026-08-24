<?php
declare(strict_types=1);

// Pipedrive SDK utility: result_body

class PipedriveResultBody
{
    public static function call(PipedriveContext $ctx): ?PipedriveResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
