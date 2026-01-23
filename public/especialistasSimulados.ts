export type specialistsType = {
    id: string;
  nombre: string;
    ubicacion: string;
    practica: string;
    ambito: string;
    imagen: string;
    disponible: boolean;
    habilitado: boolean;
    titulo: string;
}//se pude borrar
export const specialists = [
    { id: 1, nombre: "Ana López", ubicacion: "Madrid", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: false, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 2, nombre: "Carlos Ruiz", ubicacion: "Barcelona", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Tecnic@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 3, nombre: "Benito Gimenez", ubicacion: "Tokio", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: undefined, email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 4, nombre: "Esteban Andalucia", ubicacion: "Denber", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 5, nombre: "Ivan Perez", ubicacion: "Lisboa", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 6, nombre: "Pedro Martin", ubicacion: "Moscu", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 7, nombre: "Ariana Listorti", ubicacion: "Moscu", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: false, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 8, nombre: "Enrique Mosto", ubicacion: "Berlin", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 9, nombre: "Lucia Valdez", ubicacion: "Palermo", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 10, nombre: "Braian Estevanes", ubicacion: "Rio", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 11, nombre: "Luciana Gomez", ubicacion: "Paris", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 12, nombre: "Margarita Nigro", ubicacion: "Barcelona", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 13, nombre: "Erika Alfonsin", ubicacion: "Madrid", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: false, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 14, nombre: "Jimena Milei", ubicacion: "Barcelona", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 15, nombre: "Roberto Pueyrredon", ubicacion: "Madrid", practica: "Psicología", ambito: "Ayuda en ansiedad y depresión.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    { id: 16, nombre: "Samuel Dartes", ubicacion: "Lisboa", practica: "Terapia Cognitiva", ambito: "Tratamiento de trastornos de estrés.", imagen: "analopez.webp", disponible: true, habilitado: true, titulo: "Licenciad@", email: "emailderegistro@hotmail.com", phone: '123456789101112', rangoEtareo:["Ninx", "Adolecente", "Adulto", "Adulto Mayor"] },
    // Agrega más datos aquí
];