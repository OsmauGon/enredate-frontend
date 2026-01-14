export type Caso = {
    id: number;
    tipoPaciente: "Niñx" | "Adolecente" | "Adulto" | "Adulto mayor",
    dx: string;
    edad: number;
    os: string;
    contacto: string[]
    
}