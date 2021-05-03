import React, { useContext } from 'react'
import "../css/navbar.css"
import { Link } from "react-router-dom"
import { NavbarContext } from "../context/NavbarContext"

const Navbar = () => {

    const [cart] = useContext(NavbarContext)

    return (
        <nav class="navbar">
            <ul>
                <li className="nav-items"><Link to={'/'} id="brand-logo"> Redpanda </Link></li>
                <li className="nav-items"><Link to={'/'}> Men </Link></li>
                <li className="nav-items"><Link to={'/women'}> Women </Link></li>
                <li className="nav-items"><Link to={'/bottom'}> Bottom </Link></li>
                <li className="nav-items"><Link to={'/cart'}> Cart ({cart.length})</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar