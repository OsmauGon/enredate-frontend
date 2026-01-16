import React, { useState } from 'react'
import type { Caso } from '../types/caso'
import {simulatedCases} from '../../public/casosSimulados'
import '../styles/casos.css'

type Props = {}

export const Casos = (props: Props) => {
  const [casesNum,setcasesNum] = useState<number>(2)
  const [casos,setCasos] = useState<Caso[]>(simulatedCases)
  
  return (
    <>
    {/* <!-- Sección Casos (nueva) --> */}
    <section id="casos" className="py-5">
        <div className="container">
            <h2>Casos</h2>
            <p>Explora casos reales de acompañantes terapéuticos para inspirarte o aprender.</p>
            {/* <!-- Placeholder: Agrega contenido dinámico aquí, ej. lista de casos --> */}
            <div className="row">
                {
                  casos.slice(0,casesNum).map(caso => (
                    <div className="col-md-6">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">{caso.tipoPaciente} de {caso.edad} años</h5>
                              <details>
                                <summary><b>DX</b>: {caso.dx}</summary>
                                <b>Obra Social</b>: {caso.os} <br></br>
                                <b>Contacto</b>: {caso.contacto.join(" - ")}<br></br>
                                <p>{caso.solicitud}</p>
                              </details>
                          </div>
                      </div>
                  </div>
                  ))
                }
            </div>
            {(casesNum < casos.length) ? <button  onClick={()=> setcasesNum(prev => prev + 1)}>Mas casos...</button> : ""}
        </div>
    </section>
    </>
  )
}