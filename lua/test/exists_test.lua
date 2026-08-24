-- Pipedrive SDK exists test

local sdk = require("pipedrive_sdk")

describe("PipedriveSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
