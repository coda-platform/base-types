import Ontology, { OntologyObject } from "./ontology";

const kb = (localName: string) => Ontology.object("http://loinc.org", localName);

export default class LOINC extends Ontology {
    Positive = kb("positive"); // NOTE(malavv): this is prob. incorrect. Should pass code instead. (LOINC:LA6576-8) or (SNOWMED:10828004)
    SarsCov2Probe = kb("94500-6");
    SarsCov2RnaPanel = kb("94531-1");
};