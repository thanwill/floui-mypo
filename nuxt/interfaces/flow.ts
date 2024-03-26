export interface Flow {
    ambiente: string;
    arquivo: string;
    cliente: string;
    loggers: Logger[];
}

export interface Logger {
    label: string;
    type: string;
    uid: string;
}