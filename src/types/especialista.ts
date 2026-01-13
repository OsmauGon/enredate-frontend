export type Especialista = {
    id: number,
    nombre: string;
    email: string;
    phone: string | number;
    ubicacion: string;
    ambito: "no se";
    rangoEtareo: string[];
    titulo: string;
    disponible: boolean;
    habilitado: boolean;

}