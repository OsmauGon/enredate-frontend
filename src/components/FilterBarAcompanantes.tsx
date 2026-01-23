// src/components/FiltroBar.tsx
import React from "react";
import { Checkbox, FormControlLabel, Box } from "@mui/material";

interface FiltroBarProps {
  filtros: { nombre: string; disponible: boolean };
  onChange: (filtros: { nombre: string; disponible: boolean }) => void;
}

const FiltroBar: React.FC<FiltroBarProps> = ({ filtros, onChange }) => {
  return (
    <Box className={'filterBar'} display="flex" gap={2} mb={2}>
      {/*  */}
      <input type="text" placeholder="Buscar por nombre" value={filtros.nombre} onChange={(e) => onChange({ ...filtros, nombre: e.target.value })} />
      <FormControlLabel
        control={
          <Checkbox
            checked={filtros.disponible}
            onChange={(e) =>
              onChange({ ...filtros, disponible: e.target.checked })
            }
          />
        }
        label="Disponible"
      />
    </Box>
  );
};

export default FiltroBar;