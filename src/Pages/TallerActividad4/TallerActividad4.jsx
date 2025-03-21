import React, { useState, useEffect } from "react";

export const TallerActividad4 = () => {
    const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (activo) {
      intervalo = setInterval(() => setSegundos((s) => s + 1), 1000);
    }
    return () => clearInterval(intervalo);
  }, [activo]);

  const iniciar = () => setActivo(true);
  const parar = () => {
    setActivo(false);
    setSegundos(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Segundos: {segundos}</h2>
      <button onClick={iniciar} style={{ marginRight: "10px", padding: "10px 20px" }}>
        Iniciar
      </button>
      <button onClick={parar} style={{ padding: "10px 20px" }}>
        Parar
      </button>
    </div>
  );
}