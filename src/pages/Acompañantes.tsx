import React, { useState } from 'react'
import type { specialistsType } from '../../public/especialistasSimulados';
//import { CatalogoDEespecialistas } from '../components/CatalogoDEespecialistas';
import EspecialistaChico from '../components/EspecialistaChico';
import { specialists } from '../../public/especialistasSimulados';
import { CatalogoDeEspecialistas } from '../components/CatalogoDeEspecialistas2';

type Props = {
    rapidSearch :boolean;
}

export const Acompañantes = (props: Props) => {
    const [specialist,setSpecialist] = useState<specialistsType[]>([])
    const [ubicacion,setUbicacion] = useState<string>("")
    const [practica,setPractica] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("mandamos a buscar",ubicacion,practica)
    const filtered = specialists.filter(s => 
        s.ubicacion.includes(ubicacion) && 
        s.practica.includes(practica)
    );
    setSpecialist(filtered)
    }

  return (
    <>
    
    
    {/* <!-- Sección Acompañantes Terapéuticos (nueva, basada en la búsqueda anterior) --> */}
    <section id="acompanantes" className="py-5">
        <div className="container">
            <h2>Acompañantes Terapéuticos</h2>
            {
              props.rapidSearch ? <>
                              <p>Busca especialistas registrados según tu ubicación y práctica.</p>
                              <form id="searchForm" className="mb-4" onSubmit={handleSubmit}>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <input type="text" id="ubicacion" className="form-control" placeholder="Ubicación (ej. Madrid)" onChange={(e) => setUbicacion(e.target.value)}
                                            ></input>
                                      </div>
                                      <div className="col-md-4">
                                          <input type="text" id="practica" className="form-control" placeholder="Práctica (ej. Psicología)" onChange={(e) => setPractica(e.target.value)}
                                            ></input>
                                      </div>
                                      <div className="col-md-4">
                                          <button type="submit" className="btn btn-primary w-100">Buscar</button>
                                      </div>
                                  </div>
                              </form>
                            </> 
                          : <CatalogoDeEspecialistas especialistas={specialists}></CatalogoDeEspecialistas>
            }
            <div id="results" className="row">
                {(specialist.length > 0) ? specialist.map(one => (<EspecialistaChico key={one.id} one={one}></EspecialistaChico>)) : ""}
            </div>
        </div>
    </section>
    </>
  )
}
