import React from "react"
import { ItemNavBar } from "../../Components/ItemNavBar/ItemNavBar"
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
        <nav>
            <ul className="navbar-links">
                <ItemNavBar route='/' content='inicio' />
                <ItemNavBar route='/Activity1' content='Actividad pasada 1' />
                <ItemNavBar route='/Activity2' content='Actividad pasada 2' />
                <ItemNavBar route='/taller1' content='Actividad 1 taller' />
                <ItemNavBar route='/taller2' content='Actividad 2 taller' />
                <ItemNavBar route='/taller3' content='Actividad 3 taller' />
                <ItemNavBar route='/taller4' content='Actividad 4 taller' />
            </ul>
        </nav>
        </>
    )
}