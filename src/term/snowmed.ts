import Ontology  from "./ontology";

const kb = (localName: string) => Ontology.object("http://snomed.info/sct", localName);

export default class Snowmed extends Ontology {
    Positive = kb("10828004");
};