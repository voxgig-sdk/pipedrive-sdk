# Typed models for the Pipedrive SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Deal(TypedDict, total=False):
    add_time: str
    currency: str
    id: int
    org_id: int
    person_id: int
    stage_id: int
    status: str
    title: str
    update_time: str
    value: float


class DealLoadMatch(TypedDict):
    id: int


class DealListMatch(TypedDict, total=False):
    limit: int
    start: int
    status: str


class DealCreateData(TypedDict, total=False):
    add_time: str
    currency: str
    id: int
    org_id: int
    person_id: int
    stage_id: int
    status: str
    title: str
    update_time: str
    value: float


class DealUpdateDataRequired(TypedDict):
    id: int


class DealUpdateData(DealUpdateDataRequired, total=False):
    add_time: str
    currency: str
    org_id: int
    person_id: int
    stage_id: int
    status: str
    title: str
    update_time: str
    value: float


class DealRemoveMatch(TypedDict):
    id: int
