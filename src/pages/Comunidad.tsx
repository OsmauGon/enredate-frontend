import React, { useState } from 'react'
import '../styles/comunidad.css'
import { FormularioDEespecialista } from '../components/FormularioDEespecialista'
import { FormularioDEusuario } from '../components/FormularioDEusuario'

type Props = {}

export const Comunidad = (props: Props) => {
  const [registerType,setregistertype] = useState<"Especialista" | "Usuario" | ":">(":")
  return (
    <>
    {/* <!-- Sección Comunidad (nueva) --> */}
    <section id="comunidad" className="py-5">
        <div className="container">
            <h2>Comunidad</h2>
            <p>Nuestra comunidad siempre tiene los brazos abiertos!!!</p>
            <div className="registro">
            Deseo formar parte como {registerType}
            {(registerType === ':') ? <>
                                        <button onClick={()=> setregistertype("Especialista")}>Especialista</button>
                                        <button onClick={()=> setregistertype("Usuario")}>Usuario</button>
                                      </> : ""}
            {(registerType === 'Especialista') ? <FormularioDEespecialista></FormularioDEespecialista> : ""}
            {(registerType === 'Usuario') ? <FormularioDEusuario></FormularioDEusuario> : ""}
            </div>
            <div className="eventos">
              <p>Eventos y grupos de apoyo.</p>
            </div>
            {/* <!-- Placeholder: Agrega un foro simple o enlaces a redes sociales --> */}
            {/*  <p>Próximamente: Foro interactivo para compartir experiencias.</p> */}
        </div>
    </section></>
  )
}

