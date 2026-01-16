import React from 'react'

type Props = {}

export const PageHome = (props: Props) => {
  return (
    <section id="inicio" className="hero bg-light py-5">
        <div className="container text-center">
            <h1>Bienvenido a EnRed<b>At</b></h1>
            <p>Un espacio seguro para conectar con acompañantes terapéuticos. Encuentra especialistas por ubicación y práctica, y accede a recursos útiles.</p>
            <a href="#acompanantes" onClick={()=> console.log("algo")} className="btn btn-primary btn-lg">Explorar Especialistas</a>
        </div>
    </section>
  )
}
