# Pipedrive SDK utility: make_context

from pipedrive_sdk.core.context import PipedriveContext


def make_context_util(ctxmap, basectx):
    return PipedriveContext(ctxmap, basectx)
