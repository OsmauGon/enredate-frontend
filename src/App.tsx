import './styles/estilos1.css'
import {Haeder} from './components/Haeder'
import { useState } from 'react'
import { Acompañantes } from './pages/Acompañantes'

function App() {
  const [rapidSearch,setRapidSearch] = useState<boolean>(true)
  return (
    <>
    <Haeder setRapidSearch={setRapidSearch}></Haeder>
    <Acompañantes rapidSearch={rapidSearch}></Acompañantes>
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialistas" element={<Acompañantes rapidSearch={rapidSearch}></Acompañantes>} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/infoutil" element={<Infoutil />} />
      </Routes> */}

    {/* <!-- Sección Casos (nueva) --> */}
    <section id="casos" className="py-5">
        <div className="container">
            <h2>Casos</h2>
            <p>Explora casos reales de acompañantes terapéuticos para inspirarte o aprender.</p>
            {/* <!-- Placeholder: Agrega contenido dinámico aquí, ej. lista de casos --> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Caso 1: Ansiedad en Jóvenes</h5>
                            <p className="card-text">Descripción breve del caso y cómo se abordó.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Caso 2: Terapia Familiar</h5>
                            <p className="card-text">Descripción breve del caso y cómo se abordó.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Sección Info Útil (nueva) --> */}
    <section id="info" className="py-5">
        <div className="container">
            <h2>Info Útil</h2>
            <p>Recursos y consejos para el bienestar emocional.</p>
           {/*  <!-- Placeholder: Agrega artículos, enlaces o videos --> */}
            <ul>
                <li><a href="#">Cómo manejar el estrés</a></li>
                <li><a href="#">Beneficios de la terapia</a></li>
                <li><a href="#">Guía para elegir un terapeuta</a></li>
            </ul>
        </div>
    </section>

    {/* <!-- Sección Comunidad (nueva) --> */}
    <section id="comunidad" className="py-5">
        <div className="container">
            <h2>Comunidad</h2>
            <p>Registrate como profesional</p>
            <p>Únete a foros y grupos de apoyo.</p>
            {/* <!-- Placeholder: Agrega un foro simple o enlaces a redes sociales --> */}
            <p>Próximamente: Foro interactivo para compartir experiencias.</p>
        </div>
    </section>

    {/* <!-- Sección Supervisión (nueva) --> */}
    <section id="supervision" className="py-5">
        <div className="container">
            <h2>Supervisión</h2>
            <p>Recursos para supervisores y profesionales en formación.</p>
            {/* <!-- Placeholder: Agrega formularios o listas --> */}
            <p>Accede a sesiones de supervisión virtual o recursos educativos.</p>
        </div>
    </section>

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
