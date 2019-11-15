import { Horario } from './horario';

export class Local {
    id: number;
    descripcion: string;
    destacado: boolean;
    direccion: string;
    nombre: string;
    telefono: string;
    logo: string;
    nombre_ciudad: string;
    galeria: string[];
    latitud: string;
    longitud: string;
    horarios: Horario[];
}

export class LocalesResponse {
    error: boolean;
    locales: Local[];
}

export class LocalResponse {
    error: boolean;
    local: Local;
}
