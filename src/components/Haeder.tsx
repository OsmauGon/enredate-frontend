
import { Link } from 'react-router-dom'



export const Haeder = () => {
  return (
    <>
    {/* 
    <nav className="navbar navbar-expand-lg navbar-dark greenbackground">
        <div className="container">
            <a className="navbar-brand" href="#">Refugio Terapéutico</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#acompanantes">Acompañantes Terapéuticos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#casos">Casos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#info">Info Útil</a></li>
                    <li className="nav-item"><a className="nav-link" href="#comunidad">Comunidad</a></li>
                    <li className="nav-item"><a className="nav-link" href="#supervision">Supervisión</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <section id="inicio" className="hero bg-light py-5">
        <div className="container text-center">
            <h1>Bienvenido a Refugio Terapéutico</h1>
            <p>Un espacio seguro para conectar con acompañantes terapéuticos. Encuentra especialistas por ubicación y práctica, y accede a recursos útiles.</p>
            <a href="#acompanantes" className="btn btn-primary btn-lg">Explorar Acompañantes</a>
        </div>
    </section>
     */}
     
    <nav className="navbar navbar-expand-lg navbar-dark greenbackground">
        <div className="container">
            <Link to={'/'}><img src="/img/headerLogo.png" alt="" className="navbar-brand" /></Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {/* 
                    <li className="nav-item"><a className="nav-link" href="#acompanantes">Acompañantes Terapéuticos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#casos">Casos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#info">Info Útil</a></li>
                    <li className="nav-item"><a className="nav-link" href="#comunidad">Comunidad</a></li>
                    <li className="nav-item"><a className="nav-link" href="#supervision">Supervisión</a></li>
                     */}
                    {/* <li className="nav-item"><Link className='nav-link' to="/">Home</Link> |{" "}</li> */}
                    <li className="nav-item"><Link className='nav-link' to="/ats">Acompañantes Terapeuticos</Link> </li>
                    <li className="nav-item"><Link className='nav-link' to="/casos">Casos</Link></li>
                    <li className="nav-item"><Link className='nav-link' to="/infoutil">InfoUtil</Link> </li>
                    <li className="nav-item"><Link className='nav-link' to="/comunidad">Comunidad</Link></li>
                    <li className="nav-item"><Link className='nav-link' to="/supervision">Supervision</Link> </li>
                    <li className="nav-item"><Link className='nav-link' to="/login">Ingrese</Link> </li>
                    {/* <li className="nav-item"><Link className='nav-link' to="/regitro">Registro</Link> </li> */}
                    {/* <li className="nav-item"><Link className='nav-link' to="/contact">Contact</Link></li> */}
                </ul>
            </div>
        </div>
    </nav>
    {/* <section id="inicio" className="hero bg-light py-5">
        <div className="container text-center">
            <h1>Bienvenido a EnRed<b>At</b></h1>
            <p>Un espacio seguro para conectar con acompañantes terapéuticos. Encuentra especialistas por ubicación y práctica, y accede a recursos útiles.</p>
            <a href="#acompanantes" onClick={()=>props.setRapidSearch(false)} className="btn btn-primary btn-lg">Explorar Especialistas</a>
        </div>
    </section> */}
    
    </>
  )
}
