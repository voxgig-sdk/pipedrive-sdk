<?php
declare(strict_types=1);

// Pipedrive SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PipedriveMakeContext
{
    public static function call(array $ctxmap, ?PipedriveContext $basectx): PipedriveContext
    {
        return new PipedriveContext($ctxmap, $basectx);
    }
}
