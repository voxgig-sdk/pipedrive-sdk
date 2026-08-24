# Pipedrive SDK exists test

import pytest
from pipedrive_sdk import PipedriveSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PipedriveSDK.test(None, None)
        assert testsdk is not None
