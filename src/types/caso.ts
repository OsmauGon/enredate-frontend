export type Caso = {
    id: number;
    tipoPaciente: "Niñx" | "Adolecente" | "Adulto" | "Adulto mayor",
    dx: string;
    edad: number;
    contacto: string[];
    solicitud: string;

    covertura: string;
    franjahoraria: string;
    
}
/*
dx: diagnostico
covertura (particular o obra social) --si es obra social nombrarla
preferencia: una cadena que indica preferecias del solicitante: si se desar un varon, mujer etc
franajahoraria: indica el tiempo de que debe cubrir el asistente
*/