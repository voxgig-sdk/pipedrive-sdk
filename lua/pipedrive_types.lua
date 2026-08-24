-- Typed models for the Pipedrive SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Deal
---@field add_time? string
---@field currency? string
---@field id? number
---@field org_id? number
---@field person_id? number
---@field stage_id? number
---@field status? string
---@field title? string
---@field update_time? string
---@field value? number

---@class DealLoadMatch
---@field id number

---@class DealListMatch
---@field add_time? string
---@field currency? string
---@field id? number
---@field org_id? number
---@field person_id? number
---@field stage_id? number
---@field status? string
---@field title? string
---@field update_time? string
---@field value? number

---@class DealCreateData
---@field add_time? string
---@field currency? string
---@field id? number
---@field org_id? number
---@field person_id? number
---@field stage_id? number
---@field status? string
---@field title? string
---@field update_time? string
---@field value? number

---@class DealUpdateData
---@field id number
---@field add_time? string
---@field currency? string
---@field org_id? number
---@field person_id? number
---@field stage_id? number
---@field status? string
---@field title? string
---@field update_time? string
---@field value? number

---@class DealRemoveMatch
---@field id number

local M = {}

return M
