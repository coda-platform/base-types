import Ontology, { OntologyObject } from "./ontology";

const kb = (localName: string) => Ontology.object("http://terminology.hl7.org/CodeSystem/v3-RoleCode", localName);

export default class V3RoleCode extends Ontology {
    ICU = kb("ICU");
};