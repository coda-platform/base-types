
import { SummarizeRequest } from '../../src/request/SummarizeRequest';

// Based on GIST @ https://gist.github.com/louismullie/23d128c93e4bd0a2ecd8c09d5cf975db

test('Requête #1', () => {
    const req = {
        "header": {},
        "body": {
            "selectors": [
                {
                    "resource": "Patient",
                    "filters": [
                        {
                            "path": "code",
                            "operator": "matches",
                            "value": {
                                "coding": [{ "system": "http://loinc.org", "code": "94531-1" }]
                            }
                        },
                    ],
                    "fields": []
                }],
            "options": {
                "measures": {
                    "categorical": ["count"]
                }
            }
        }
    };
    expect(() => req as SummarizeRequest).not.toThrow();
})

test('Requête #2', () => {
    const req = {
        "header": {},
        "body": {
            "selectors": [
                {
                    "resource": "Observation",
                    "filters": [
                        {
                            "path": "code",
                            "operator": "matches",
                            "value": {
                                "coding": [{ "system": "http://loinc.org", "code": "94531-1" }]
                            }
                        },
                        {
                            "path": "interpretation",
                            "operator": "matches",
                            "value": {
                                "interpretation": [{
                                    "coding": [{ "system": "http://snomed.info/sct", "code": "10828004" }]
                                }]
                            }
                        }
                    ],
                    "fields": []
                }],
            "options": {
                "measures": {
                    "categorical": ["count"]
                }
            }
        }
    };
    expect(() => req as SummarizeRequest).not.toThrow();
})

test('Requête #3', () => {
    const req = {
        "header": {},
        "body": {
            "selectors": [
                {
                    "resource": "Patient",
                    "filters": [
                        {
                            "path": "deceasedBoolean",
                            "operator": "matches",
                            "value": true
                        },
                        {
                            "path": "deceasedDateTime",
                            "operator": "on",
                            "value": "YYYY-MM-DD"
                        }
                    ],
                    "fields": []
                }],
            "options": {
                "measures": {
                    "categorical": ["count"]
                }
            }
        }
    };
    expect(() => req as SummarizeRequest).not.toThrow();
})

test('Requête #4.1', () => {
    const req = {
        "header": {},
        "body": {
            "selectors": [
                {
                    "resource": "Observation",
                    "filters": [
                        {
                            "path": "code",
                            "operator": "matches",
                            "value": {
                                "coding": [{ "system": "http://loinc.org", "code": "94531-1" }]
                            }
                        },
                        {
                            "path": "interpretation",
                            "operator": "matches",
                            "value": {
                                "interpretation": [{
                                    "coding": [{ "system": "http://snomed.info/sct", "code": "10828004" }]
                                }]
                            }
                        }
                    ],
                    "fields": []
                }],
            "options": {
                "measures": {
                    "categorical": ["count"]
                },
                "breakdown": {
                    "resource": {
                        "type": "Observation",
                        "field": "issued"
                    },
                    "slices": {
                        "min": "timestamp(period_start)",
                        "max": "timestamp(period_end)",
                        "step": 1209600,
                        "units": "seconds"
                    }
                }
            }
        }
    };
    expect(() => req as SummarizeRequest).not.toThrow();
})

test('Requête #6', () => {
    const req = {
        "header": {},
        "body": {
            "selectors": [
                {
                    "resource": "Encounter",
                    "filters": [{
                        "path": "period.start",
                        "operator": "after",
                        "value": "YYYY-MM-DDThh:mm:ss+zz:zz",
                    }],
                    "fields": []
                }
            ],
            "joins": [
                {
                    "resource": "Location",
                    "filters": [
                        {
                            "path": "type",
                            "operator": "matches",
                            "value": { "coding": [{ "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode", "code": "ICU" }] }
                        }
                    ],
                    "fields": []
                }
            ],
            "options": {
                "measures": {
                    "categorical": ["count"]
                },
                "breakdown": {
                    "resource": {
                        "type": "Encounter",
                        "field": "period.start"
                    },
                    "slices": {
                        "min": "timestamp(period_start)",
                        "max": "timestamp(period_end)",
                        "step": 1209600,
                        "units": "seconds"
                    }
                }
            }
        }
    };
    expect(() => req as SummarizeRequest).not.toThrow();
})

test('Requête #7', () => {
    const req = {
        "header": {},
        "body": {
            "selectors": [
                {
                    "resource": "Encounter",
                    "filters": [{
                        "path": "period.start",
                        "operator": "after",
                        "value": "YYYY-MM-DDThh:mm:ss+zz:zz"
                    }],
                    "fields": []
                }
            ],
            "joins": [
                {
                    "resource": "Location",
                    "filters": [
                        {
                            "path": "type",
                            "operator": "matches",
                            "value": { "coding": [{ "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode", "code": "ICU" }] }
                        }
                    ],
                    "fields": []
                }
            ],
            "options": {
                "measures": {
                    "categorical": ["count"]
                }
            }
        }
    };
    expect(() => req as SummarizeRequest).not.toThrow();
})