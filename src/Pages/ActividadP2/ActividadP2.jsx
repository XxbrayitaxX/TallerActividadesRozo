import { useState } from "react";
import React from 'react'

export const ActividadP2 = () => {
  
const [ color, setColor ] = useState('#000000');

const ChangeColor = () => {

  setColor('#'+ Math.floor(Math.random()*16777215).toString(16))
}
    return(
        <div>
        <div className="DivColor" style={{backgroundColor: color}}>
        <h1>{color}</h1>
        </div>
        <button onClick={ChangeColor} >
          Change
        </button>
        </div> 
    )
}