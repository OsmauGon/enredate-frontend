import React from 'react'

type Props = {}

export const FormularioDEespecialista = (props: Props) => {
  return (
    <div className="container">
            <h2>Registro como Especialista</h2>
            <form id="registerForm">
                <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label for="ubicacionReg" className="form-label">Ubicación</label>
                    <input type="text" id="ubicacionReg" className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label for="practicaReg" className="form-label">Práctica</label>
                    <input type="text" id="practicaReg" className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label for="casos" className="form-label">Casos (descripción breve)</label>
                    <textarea id="casos" className="form-control" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-success">Registrar</button>
            </form>
        </div>
  )
}

