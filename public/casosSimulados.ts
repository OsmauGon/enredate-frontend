type Caso = {
    id: number;
    tipoPaciente: "Niñx" | "Adolecente" | "Adulto" | "Adulto mayor",
    dx: string;
    edad: number;
    os: string;
    contacto: string[];
    solicitud: string;
    
}
export const simulatedCases :Caso[] = [
    {
        id: 1,
        tipoPaciente: "Niñx",
        dx: "TDH",
        edad: 12,
        os: "OSDEPYM",
        contacto:["juan@hotmail.com","223678921"],
        solicitud: "Se busca un acompañante terapeutico (varon excluyente) para un turno de mañana"
        
    },
    {
        id: 2,
        tipoPaciente: "Adolecente",
        dx: "TDH",
        edad: 24,
        os: "OSDEPYM",
        contacto:["juan@hotmail.com","223678921"],
        solicitud: "Se busca un acompañante terapeutico (varon excluyente) para un turno de mañana"
    },
    {
        id: 3,
        tipoPaciente: "Adulto",
        dx: "TDH",
        edad: 36,
        os: "OSDEPYM",
        contacto:["juan@hotmail.com","223678921"],
        solicitud: "Se busca un acompañante terapeutico (varon excluyente) para un turno de mañana"
    },
    {
        id: 1,
        tipoPaciente: "Adulto mayor",
        dx: "TDH",
        edad: 72,
        os: "OSDEPYM",
        contacto:["juan@hotmail.com","223678921"],
        solicitud: "Se busca un acompañante terapeutico (varon excluyente) para un turno de mañana"
    },
]
