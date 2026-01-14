/* 
import '../styles/acompanantes.css'
import { Grid } from "@mui/material";
import { EspecialistaGrande } from './EspecialistaGrande';
import { specialists } from '../../public/especialistasSimulados';


export const CatalogoDEespecialistas = () => {
  
  return (  
    <div className="contenedorDEespecialistas">
      <Grid container spacing={2}>
        {specialists.map(espe => (
          <Grid key={espe.id}>
            <EspecialistaGrande
            id={espe.id}
            foto={espe.foto}
            nombre={espe.nombre}
            clasificacion={espe.titulo}
            descripcion="Especialista en terapia cognitivo-conductual con 10 años de experiencia."
            />
          </Grid>
        ))}
      </Grid> 
    </div>
    )
} */
 

//PODEMOS BORRAR