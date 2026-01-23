// src/components/RegistroCard.tsx
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Collapse,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Especialista } from "../types/especialista";

interface RegistroCardProps {
  registro: Especialista;
}

const RegistroCard: React.FC<RegistroCardProps> = ({ registro }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={registro.disponible ? "tarjeta-acompanante" : "tarjeta-acompanante desable"}>
      <CardHeader
        className="tarjeta-header"
        title={(registro.titulo) ? `${(registro.titulo[0] + registro.titulo[1] + registro.titulo[2])}. ${registro.nombre}` : `At. ${registro.nombre}`}
        action={
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      {registro.disponible ? "" : (<b>Acompañanate ocupado</b>)}
      
      <CardMedia
        className={registro.disponible ? "at-image" : "at-image-byn"}
        component="img"
        image={`../../img/${registro.imagen}`}
        alt={registro.nombre}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Email: {registro.email}</Typography>
          <Typography>Teléfono: {registro.phone}</Typography>
          <Typography>Ubicación: {registro.ubicacion}</Typography>
          <Typography>Ámbito: {registro.ambito}</Typography>
          <Typography>
            Rango Etareo: {registro.rangoEtareo.join(", ")}
          </Typography>
          {/* <Typography>
            Estado: {registro.disponible ? "Disponible" : "No disponible"}
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RegistroCard;