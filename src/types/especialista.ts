export type Especialista = {
    id: number,
    nombre: string;
    email: string;
    phone: string;
    ubicacion: string;
    ambito: string;
    rangoEtareo: string[];
    titulo?: string;
    disponible: boolean;
    habilitado: boolean;
    imagen: string;

}