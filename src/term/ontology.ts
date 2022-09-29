export interface OntologyObject {
    system: string;
    code: string;
}

export default class Ontology {
    static object(ontologyRef: string, localName: string): OntologyObject {
        return { system: ontologyRef, code: localName } as OntologyObject;
    }
}