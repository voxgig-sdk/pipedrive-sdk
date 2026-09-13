// Typed models for the Pipedrive SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Deal
 * @property {string} [add_time]
 * @property {string} [currency]
 * @property {number} [id]
 * @property {number} [org_id]
 * @property {number} [person_id]
 * @property {number} [stage_id]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [update_time]
 * @property {number} [value]
 */

/**
 * @typedef {Object} DealLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} DealListMatch
 * @property {number} [limit]
 * @property {number} [start]
 * @property {string} [status]
 */

/**
 * @typedef {Object} DealCreateData
 * @property {string} [add_time]
 * @property {string} [currency]
 * @property {number} [id]
 * @property {number} [org_id]
 * @property {number} [person_id]
 * @property {number} [stage_id]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [update_time]
 * @property {number} [value]
 */

/**
 * @typedef {Object} DealUpdateData
 * @property {number} id
 * @property {string} [add_time]
 * @property {string} [currency]
 * @property {number} [org_id]
 * @property {number} [person_id]
 * @property {number} [stage_id]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [update_time]
 * @property {number} [value]
 */

/**
 * @typedef {Object} DealRemoveMatch
 * @property {number} id
 */

