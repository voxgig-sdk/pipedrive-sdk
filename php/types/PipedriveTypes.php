<?php
declare(strict_types=1);

// Typed models for the Pipedrive SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Deal entity data model. */
class Deal
{
    public ?string $add_time = null;
    public ?string $currency = null;
    public ?int $id = null;
    public ?int $org_id = null;
    public ?int $person_id = null;
    public ?int $stage_id = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $update_time = null;
    public ?float $value = null;
}

/** Request payload for Deal#load. */
class DealLoadMatch
{
    public int $id;
}

/** Request payload for Deal#list. */
class DealListMatch
{
    public ?int $limit = null;
    public ?int $start = null;
    public ?string $status = null;
}

/** Request payload for Deal#create. */
class DealCreateData
{
    public ?string $add_time = null;
    public ?string $currency = null;
    public ?int $id = null;
    public ?int $org_id = null;
    public ?int $person_id = null;
    public ?int $stage_id = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $update_time = null;
    public ?float $value = null;
}

/** Request payload for Deal#update. */
class DealUpdateData
{
    public int $id;
    public ?string $add_time = null;
    public ?string $currency = null;
    public ?int $org_id = null;
    public ?int $person_id = null;
    public ?int $stage_id = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $update_time = null;
    public ?float $value = null;
}

/** Request payload for Deal#remove. */
class DealRemoveMatch
{
    public int $id;
}

