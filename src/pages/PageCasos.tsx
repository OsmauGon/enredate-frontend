import { useState } from 'react'
//import UnderConstruction from '../components/UnderConstruction';
import { Grid } from '@mui/material';

import '../styles/casos.css'
import type { Caso } from '../types/caso';
import { simulatedCases } from '../../public/casosSimulados';
import { RegistroCard2 } from '../components/TarjetaCaso';



export const PageCasos = () => {
  const [nuevoCaso,setNuevoCaso] = useState<boolean>(false)
  const [registros] = useState<Caso[]>(simulatedCases)
  /* return <UnderConstruction message="Pagina en construccion ✨" />; */
  return (
    <section id='casos'>
      <a href="#casos" onClick={()=> setNuevoCaso(!nuevoCaso)} className="casos-button btn btn-primary btn-lg">{nuevoCaso ? "Ver Casos" : "Poslar Caso"}</a>
      <Grid className={"catalogo"} container spacing={2}>
        {registros.map((registro :Caso) => (
          <Grid key={registro.id}>
            <RegistroCard2 registro={registro} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}
