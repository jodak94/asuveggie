export class Local {
    id: number;
    descripcion: string;
    destacado: boolean;
    direccion: string;
    nombre: string;
    telefono: string;
    logo: string;
    nombre_ciudad: String;
    galeria: String[];
}

export class LocalResponse {
    error: boolean;
    locales: Local[];
}
