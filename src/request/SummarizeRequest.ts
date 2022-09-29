export interface SummarizeRequest {
    header: SummarizeRequestHeader;
    body: SummarizeRequestBody;
}

export interface SummarizeRequestHeader { }

export interface SummarizeRequestBody {
    selectors: SummarizeRequestSelector[];
    options: SummarizeRequestOptions;
}

export type SummarizeRequestField = string | {
    path: string;
    label?: string;
    type?: string;
}
export interface SummarizeRequestSelector {
    resource: string;
    label?: string;
    fields: SummarizeRequestField[];
    filters: SummarizeRequestSelectorFilter[];
    joins?: SummarizeRequestSelector;
    breakdown?: SummarizeRequestBreakdown;
}

export type SummaryOperator = "match" | "not" | "equals" | "less_than" | "greater_than" | "less_or_equal_than" | "greater_or_equal_than" | "after" | "on" | "before" | "is" | "afterOrOn";
export interface SummarizeRequestSelectorFilter {
    path: string;
    operator: SummaryOperator;
    value: SummarizeRequestSelectorFilterValue | boolean | string;
}

export interface SummarizeRequestSelectorFilterValue {
    coding: SummarizeRequestSelectorFilterValueCode[];
}

export interface SummarizeRequestSelectorFilterInterpretationValue {
    interpretation: SummarizeRequestSelectorFilterValue[];
}

export interface SummarizeRequestSelectorFilterValueCode {
    system: string;
    code: string;
}

export interface SummarizeRequestOptions {
    measures: SummarizeRequestMeasures;
    breakdown?: Object;
}

export interface SummarizeRequestMeasures {
    continuous?: string[];
    categorical?: string[];
}

export interface SummarizeRequestBreakdown {
    resource?: Object;
    slices?: SummarizeRequestBreakdownSlices;
    query?: string; // FIXME(malavv): This is supposed to be only for the demo near 2021-04-15, don't let it be permanent
}

export interface SummarizeRequestBreakdownResource {
    type: string;
    field: string;
}

export interface SummarizeRequestBreakdownSlices {
    min?: string;
    max?: string;
    step: number;
    units?: string;
}

export interface SummarizeRequestBreakdownSliceResult {
    periodStart: string;
    periodCount: number;
}
export interface SummarizeRequestBreakdownResult {
    query: string;
    result: any[]
}
export interface SummarizeRequestSiteResult {
    siteCode: string;
    total: number;
    query: string;
    results: any[];
    breakdown: SummarizeRequestBreakdownResult;
}
export type SummarizeRequestSiteAllResult = SummarizeRequestSiteResult[];
export type SummarizeRequestResult = SummarizeRequestSiteAllResult[];