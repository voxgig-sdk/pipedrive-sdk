# Pipedrive SDK feature factory

from pipedrive_sdk.feature.base_feature import PipedriveBaseFeature
from pipedrive_sdk.feature.debug_feature import PipedriveDebugFeature
from pipedrive_sdk.feature.idempotency_feature import PipedriveIdempotencyFeature
from pipedrive_sdk.feature.metrics_feature import PipedriveMetricsFeature
from pipedrive_sdk.feature.paging_feature import PipedrivePagingFeature
from pipedrive_sdk.feature.ratelimit_feature import PipedriveRatelimitFeature
from pipedrive_sdk.feature.retry_feature import PipedriveRetryFeature
from pipedrive_sdk.feature.test_feature import PipedriveTestFeature
from pipedrive_sdk.feature.timeout_feature import PipedriveTimeoutFeature


_FEATURES = {
    "base": lambda: PipedriveBaseFeature(),
    "debug": lambda: PipedriveDebugFeature(),
    "idempotency": lambda: PipedriveIdempotencyFeature(),
    "metrics": lambda: PipedriveMetricsFeature(),
    "paging": lambda: PipedrivePagingFeature(),
    "ratelimit": lambda: PipedriveRatelimitFeature(),
    "retry": lambda: PipedriveRetryFeature(),
    "test": lambda: PipedriveTestFeature(),
    "timeout": lambda: PipedriveTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
