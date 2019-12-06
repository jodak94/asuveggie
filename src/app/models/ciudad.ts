export class Ciudad {
    id: number;
    nombre: string;
}

export class CiudadesResponse {
    error: boolean;
    ciudades: Ciudad[];
}
