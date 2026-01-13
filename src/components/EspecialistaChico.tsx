import React from 'react'
import type {specialistsType} from '../../public/especialistasSimulados'
type Props = {
    one: specialistsType;
}
const showProfile = (num: number) => {
    console.log(num)
}
const EspecialistaChico = (props: Props) => {
  return (
    <div className = 'col-md-4'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.one.nombre}</h5>
                <p className="card-text">{props.one.ubicacion} - {props.one.practica}</p>
                <button className="btn btn-primary" onClick={()=>showProfile(props.one.id)}>Ver Perfil</button>
            </div>
        </div>
    </div>
  )
}

export default EspecialistaChico