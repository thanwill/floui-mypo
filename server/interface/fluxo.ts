interface Fluxo {
    nodes: Node[];
    connections: Connection[];
    variablesFlow : VariablesFlow[];
    data: DataFlow;
    
}

interface Node {
    uid: string;
    type: string;
    trigger: boolean;
    data: DataNode;
}

interface DataNode {
    x: number;
    y: number;
    output_path: string;
    pin_authorization: string;
    codigo_material_inicial: string;
    codigo_material_final: string;
    client_url_base: string;
}

interface Position {
    x: number;
    y: number;
}

interface DataFlow {
    label: string;
    value: string;
}

interface Connection {
    source: string;
    target: string;
    label: string;
}

interface VariablesFlow {
    name: string;
    value: string;
}

