export interface PrepareRequest {
    header: PrepareRequestHeader;
    body: PrepareRequestBody;
    job?: string;
}

export interface PrepareRequestHeader {}

export interface PrepareRequestBody {
    selectors: PrepareRequestSelector[];
    options: PrepareRequestOptions;
}

export type PrepareRequestField = {path: string; label: string;}
export interface PrepareRequestSelector {
    resource: string;
    fields: PrepareRequestField[];
    filters: PrepareRequestSelectorFilter[];
    joins?: PrepareRequestSelector;
}

export type SummaryOperator = "match" | "not" | "equals" | "less_than" | "greater_than" | "less_or_equal_than" | "greater_or_equal_than" | "after" | "on" | "before" | "is" | "afterOrOn";
export interface PrepareRequestSelectorFilter {
    path: string;
    operator: SummaryOperator;
    value: PrepareRequestSelectorFilterValue | boolean | string;
}

export interface PrepareRequestSelectorFilterValue {
    coding: PrepareRequestSelectorFilterValueCode[];
}

export interface PrepareRequestSelectorFilterInterpretationValue {
    interpretation: PrepareRequestSelectorFilterValue[];
}

export interface PrepareRequestSelectorFilterValueCode {
    system: string;
    code: string;
}

export interface PrepareRequestOptions {
    model: PrepareRequestModel;
    inputs: string[];
    outputs: string[];
    optimizer: PrepareRequestOptimizer;
    compiler: PrepareRequestCompiler;
}

export interface PrepareRequestModel {
    class_name: string;
    config: PrepareRequestConfig;
}

export interface PrepareRequestOptimizer {
    name: string;
    parameters: PrepareRequestOptimizerParameters;
}

export interface PrepareRequestCompiler {
    parameters: PrepareRequestCompilerParameters;
}

export interface PrepareRequestConfig {
    name: string;
    layers: string[];
}

export interface PrepareRequestOptimizerParameters {
    learning_rate: number;
    validation_split: number;
    epochs: number;
    batch_size: number;
    shuffle: number;
}

export interface PrepareRequestCompilerParameters {
    loss: string;
    metrics: string[];
}

export interface PrepareRequestSiteResult {
    siteCode: string;
    job: string;
    query: string;
    results: any[];
}
export type PrepareRequestSiteAllResult = PrepareRequestSiteResult[];
export type PrepareRequestResult = PrepareRequestSiteAllResult[];