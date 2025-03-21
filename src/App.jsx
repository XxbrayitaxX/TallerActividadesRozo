import React from 'react'
import { Home } from './Pages/Home/Home'
import { Header } from './Layouts/Header/Header'
import { Routes , Route } from 'react-router-dom'
import { Footer } from './Layouts/Footer/Footer'
import { ActividadP1 } from './Pages/ActividadP1/ActividadP1'
import { ActividadP2 } from './Pages/ActividadP2/ActividadP2'
import { TallerActividad1 } from './Pages/TallerActividad1.jsx/TallerActividad1'
import { TallerActividad2 } from './Pages/TallerActividad2/TallerActividad2'
import { TallerActividad3 } from './Pages/TallerActividad3/TallerActividad3'
import { TallerActividad4 } from './Pages/TallerActividad4/TallerActividad4'


export const App = () => {

  return (
    <>
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Activity1" element={<ActividadP1/>}  />
            <Route path="/Activity2" element={<ActividadP2/>}  />
            <Route path="/taller1" element={<TallerActividad1/>}  />
            <Route path="/taller2" element={<TallerActividad2/>}  />
            <Route path="/taller3" element={<TallerActividad3/>}  />
            <Route path="/taller4" element={<TallerActividad4/>}  />
        </Routes>
        <Footer/>
    </>
  )
}


