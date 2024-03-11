interface Fluxo {
    [key: string]: any;
    empresa: string;
    ambiente: string;    
    arquivo: string;    
    loggers: Node[];
}

interface Node {
    uid: string;
    type: string;
    trigger: boolean;    
}

interface Data {
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

interface Data {
    label: string;
    value: string;
}

interface Connection {
    source: string;
    target: string;
    label: string;
}

interface Variables {
    name: string;
    value: string;
}

