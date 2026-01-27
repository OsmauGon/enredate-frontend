import React, { useState } from 'react'
import type { Caso } from '../types/caso'
import { Card, CardContent, CardHeader, Collapse, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface RegistroCardProps {
  registro: Caso;
}

export const RegistroCard: React.FC<RegistroCardProps> = ({ registro }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    
    <Card className={"tarjeta-caso"}>
      <CardHeader
        className="tarjeta-header"
        title={`${(registro.tipoPaciente)} de ${registro.edad} años`}
        action={
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      <div className="tarjeta-caso-atributos">
        <Typography>
            <b>DX:</b> {registro.dx}
          </Typography>
        <Typography>
            <b>Covertura:</b> {registro.covertura.split("-")[0] + registro.covertura.split("-")[1]  }
          </Typography>
          
      </div>
      {/* <CardMedia
        className={registro.disponible ? "at-image" : "at-image-byn"}
        component="img"
        image={`../../img/${registro.imagen}`}
        alt={registro.nombre}
      /> */}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{registro.solicitud}</Typography>
          <Typography>
            <b>Contacto:</b> {registro.contacto.join(" - ")}
          </Typography>
          {/* <Typography>
            Estado: {registro.disponible ? "Disponible" : "No disponible"}
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  )
}
export const RegistroCard2: React.FC<RegistroCardProps> = ({registro}) =>{
    return (
        <div className="tarjeta-caso col-md-6">
                      <div className="card">
                          <div className="card-body">
                              <h6 className="card-title">{registro.tipoPaciente} de {registro.edad} años</h6>
                              <details>
                                <summary><b>DX</b>: {registro.dx}</summary>
                                <b>Covertura</b>: {registro.covertura.split("-")[0] + registro.covertura.split("-")[1]  } <br></br>
                                <b>Contacto</b>: {registro.contacto.join(" - ")}<br></br>
                                <p>{registro.solicitud}</p>
                              </details>
                          </div>
                      </div>
                  </div>
    )
}
