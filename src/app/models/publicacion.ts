import { Local } from './local';

export class Publicacion {
    id: number;
    titulo: string;
    texto: string;
    img: string;
    local: Local;
}

export class PublicacionesResponse {
    error: boolean;
    publicaciones: Publicacion[];
}
