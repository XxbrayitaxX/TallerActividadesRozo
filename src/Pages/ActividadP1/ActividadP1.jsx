import { useState } from "react";
import React from 'react'


export const ActividadP1 = () => {
    const [ name, setname ] = useState('')
    const [ username, setUsername ] = useState('Usuario')

    const handleGreet = () => {
    setUsername(name)
  }
    return (
        <>
        <div>
        <h1>Bienvenido {username} </h1> 
            <input type="text" 
            placeholder="Escribe tu nombre"
            onChange={(e) => setname(e.target.value)}
            />     
            <button onClick={handleGreet}  className="w-20 px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors duration-300 cursor-pointer">
            Enviar
            </button>       
        </div>
            </>
    )
}
