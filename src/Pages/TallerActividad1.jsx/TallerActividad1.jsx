import { useState } from "react";

export const TallerActividad1 = () =>{
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => setDarkMode(!darkMode);
  
    return (
      <div
        style={{
          backgroundColor: darkMode ? "#333" : "#fff",
          color: darkMode ? "#fff" : "#000",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{darkMode ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}</h1>
        <button
          onClick={toggleMode}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: darkMode ? "#555" : "#ddd",
            color: darkMode ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cambiar a {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>
    );
}