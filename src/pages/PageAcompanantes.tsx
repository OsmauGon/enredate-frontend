import '../styles/acompanantes.css'
import React, { useState } from "react";
import { Grid } from "@mui/material";
import type { Especialista } from "../types/especialista";
import FiltroBar from "../components/FilterBarAcompanantes";
import RegistroCard from "../components/TarjetaAcompanante";
import { specialists } from "../../public/especialistasSimulados";
interface RegistroGridProps {
  registros: Especialista[];
}

export const PageAcompanantes: React.FC<RegistroGridProps> = () => {
  const [registros,setRegistros] = useState<Especialista[]>(specialists)
  const [filtros, setFiltros] = useState({ nombre: "", disponible: false });

  const registrosFiltrados = registros.filter((r) => {
    const matchNombre = r.nombre
      .toLowerCase()
      .includes(filtros.nombre.toLowerCase());
    const matchDisponible = filtros.disponible ? r.disponible : true;
    return matchNombre && matchDisponible;
  });

  return (
    <section id='acompanantes'>
      <FiltroBar filtros={filtros} onChange={setFiltros} />
      <Grid className={"catalogo"} container spacing={2}>
        {registrosFiltrados.map((registro) => (
          <Grid key={registro.id}>
            <RegistroCard registro={registro} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

