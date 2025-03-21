import { useState } from "react";

export const TallerActividad3 = () => {
    const coloresAbsolutos = [
        "#FF0000",     // Rojo
        "#00FF00",     // Verde
        "#0000FF",     // Azul
        "#FFFF00",     // Amarillo
        "#FF00FF",     // Magenta
        "#00FFFF",     // Cian
        "#000000",     // Negro
        "#FFFFFF",     // Blanco
        "#808080",     // Gris
        "#800000",     // Marrón oscuro
        "#808000",     // Oliva
        "#800080",     // Púrpura
        "#008080",     // Verde azulado
        "#C0C0C0",     // Plata
        "#FFA500",     // Naranja
        "#A52A2A"      // Marrón
        ];

        const [color , setColor] = useState("#FFFFFF");
        const [mensaje , setMensaje] = useState("haz click para generar un color");

        const generarColor = () => {
          const colorAleatorio = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
          setColor(colorAleatorio);
          setMensaje(`El color elegido es: ${colorAleatorio}`);
        };
        return (
            <div
              style={{
                backgroundColor: color,
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "#000",
              }}
            >
              <h2>{mensaje}</h2>
              <button onClick={generarColor} style={{ padding: "10px 20px", marginTop: "20px" }}>
                Generar Color
              </button>
            </div>
          );
}