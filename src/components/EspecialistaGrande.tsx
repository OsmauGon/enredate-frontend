import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface PersonaCardProps {
  id: number;
  foto: string;
  nombre: string;
  clasificacion: string;
  descripcion: string;
}

export const EspecialistaGrande: React.FC<PersonaCardProps> = ({ foto, nombre, clasificacion, descripcion }) => {
  const [expandido, setExpandido] = useState(false);

  const handleExpandClick = () => {
    setExpandido(!expandido);
  };

  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={`../../img/${foto}`}
        alt={nombre}
      />
      <CardContent>
        <Typography variant="h6">{nombre}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {clasificacion}
        </Typography>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expandido}
          aria-label="mostrar más"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expandido} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <button className="btn">Contactar</button>
        </CardContent>
      </Collapse>
    </Card>
  );
};
