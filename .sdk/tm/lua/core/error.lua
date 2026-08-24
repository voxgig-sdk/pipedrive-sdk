-- Pipedrive SDK error

local PipedriveError = {}
PipedriveError.__index = PipedriveError


function PipedriveError.new(code, msg, ctx)
  local self = setmetatable({}, PipedriveError)
  self.is_sdk_error = true
  self.sdk = "Pipedrive"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PipedriveError:error()
  return self.msg
end


function PipedriveError:__tostring()
  return self.msg
end


return PipedriveError
