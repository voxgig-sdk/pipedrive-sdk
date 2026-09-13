export interface Deal {
    add_time?: string;
    currency?: string;
    id?: number;
    org_id?: number;
    person_id?: number;
    stage_id?: number;
    status?: string;
    title?: string;
    update_time?: string;
    value?: number;
}
export interface DealLoadMatch {
    id: number;
}
export interface DealListMatch {
    limit?: number;
    start?: number;
    status?: string;
}
export interface DealCreateData {
    add_time?: string;
    currency?: string;
    id?: number;
    org_id?: number;
    person_id?: number;
    stage_id?: number;
    status?: string;
    title?: string;
    update_time?: string;
    value?: number;
}
export interface DealUpdateData {
    id: number;
    add_time?: string;
    currency?: string;
    org_id?: number;
    person_id?: number;
    stage_id?: number;
    status?: string;
    title?: string;
    update_time?: string;
    value?: number;
}
export interface DealRemoveMatch {
    id: number;
}
