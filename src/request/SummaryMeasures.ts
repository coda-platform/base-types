import {I18nCode} from "../base";

const continuousMeasures: I18nCode[] = [
    { code: 'count', labels: { 'en': 'count', 'fr': 'décompte'} },
    { code: 'mean', labels: { 'en': 'mean', 'fr': 'moyenne'} },
    { code: 'stdev', labels: { 'en': 'stdev', 'fr': 'stdev'} },
    { code: 'ci95', labels: { 'en': 'ci95', 'fr': 'ci95'} }
];

const discreteMeasures: I18nCode[] = [
    { code: 'count', labels: { 'en': 'count', 'fr': 'décompte'} },
    { code: 'mode', labels: { 'en': 'mode', 'fr': 'mode'} }
];

export default {
    // Measures applicable for continuous variables.
    continuous: continuousMeasures,
    // Measures applicable for discrete variables.
    discrete: discreteMeasures
}
