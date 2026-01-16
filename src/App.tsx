import './styles/estilos1.css'
import {Haeder} from './components/Haeder'
import { useState } from 'react'
import { Acompañantes } from './pages/Acompañantes'
import { Casos } from './pages/Casos'
import { Comunidad } from './pages/Comunidad'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { PageHome } from './pages/PageHome'
import { PageAcompanantes } from './pages/PageAcompanantes'
import { PageCasos } from './pages/PageCasos'
import { PageComunidad } from './pages/PageComunidad'
import { PageInfoutil } from './pages/PageInfoutil'
import { PageSupervision } from './pages/PageSupervision'

function App() {
  const [rapidSearch,setRapidSearch] = useState<boolean>(true)
  return (
    <>
    <Haeder setRapidSearch={setRapidSearch}></Haeder>
    {/* 
    <Acompañantes rapidSearch={rapidSearch}></Acompañantes>
    <Casos></Casos>
    <Comunidad></Comunidad>
     */}
    
    <main>
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/ats" element={<PageAcompanantes></PageAcompanantes>} />
            <Route path="/casos" element={<PageCasos/>} />
            <Route path="/comunidad" element={<PageComunidad />} />
            <Route path="/infoutil" element={<PageInfoutil />} />
            <Route path="/supervision" element={<PageSupervision />} />
            
        </Routes>
    </main> 
   
    <Footer></Footer>

    

    {/* <!-- Sección Info Útil (nueva) --> */}
    {/* <section id="info" className="py-5">
        <div className="container">
            <h2>Info Útil</h2>
            <p>Recursos y consejos para el bienestar emocional.</p>
            <ul>
                <li><a href="#">Cómo manejar el estrés</a></li>
                <li><a href="#">Beneficios de la terapia</a></li>
                <li><a href="#">Guía para elegir un terapeuta</a></li>
            </ul>
        </div>
    </section> */}

    {/* <!-- Sección Comunidad (nueva) --> */}
    {/* <section id="comunidad" className="py-5">
        <div className="container">
            <h2>Comunidad</h2>
            <p>Registrate como profesional</p>
            <p>Únete a foros y grupos de apoyo.</p>
            <p>Próximamente: Foro interactivo para compartir experiencias.</p>
        </div>
    </section> */}

    {/* <!-- Sección Supervisión (nueva) --> */}
    {/* <section id="supervision" className="py-5">
        <div className="container">
            <h2>Supervisión</h2>
            <p>Recursos para supervisores y profesionales en formación.</p>
            <p>Accede a sesiones de supervisión virtual o recursos educativos.</p>
        </div>
    </section>
    */}
    {/* <!-- Modal para Perfil y Contacto (sin cambios) --> */}
    <div className="modal fade" id="specialistModal" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalTitle"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <p id="modalUbicacion"></p>
                    <p id="modalPractica"></p>
                    <h6>Casos:</h6>
                    <p id="modalCasos"></p>
                    <form id="contactForm">
                        <div className="mb-3">
                            <label  className="form-label">Mensaje</label>
                            <textarea id="contactMessage" className="form-control"  required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Contactar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
