// CatalogoDeEspecialistas.tsx
import React, { useState } from 'react';
import '../styles/CaralogoDeEspecialistas.css'

type Especialista = {
  id: string;
  nombre: string;
  titulo: string;
  foto: string;
  info?: string;
  categoria?: string;
};

type Props = {
  especialistas: Especialista[];
};

export const CatalogoDeEspecialistas: React.FC<Props> = ({ especialistas }) => {
  const [filtro, setFiltro] = useState<string>('');
  const [expandido, setExpandido] = useState<string | null>(null);

  const filtrados = filtro
    ? especialistas.filter((e) =>
        e.categoria?.toLowerCase().includes(filtro.toLowerCase())
      )
    : especialistas;

  return (
    <div className="catalogo-e">
      {/* Barra filtradora */}
      <div className="barra-filtros">
        <input
          type="text"
          placeholder="Filtrar por categoría..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      {/* Piscina horizontal */}
      <div className="piscina">
        {filtrados.map((esp) => (
          <div key={esp.id} className="tarjeta">
            <img src={`img/${esp.foto}`} alt={`Foto de ${esp.nombre}`} />
            <h5>{esp.nombre}</h5>
            <p className="titulo">{esp.titulo}</p>

            <button
              className="flecha"
              onClick={() =>
                setExpandido(expandido === esp.id ? null : esp.id)
              }
            >
              {expandido === esp.id ? '▲' : '▼'}
            </button>

            {expandido === esp.id && (
              <div className="info-extra">
                <p>{esp.info} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo, vel commodi, dolor provident cupiditate ea expedita magni obcaecati cumque maiores blanditiis! Dolor facilis, reiciendis dolorum iste delectus accusantium iure?</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};