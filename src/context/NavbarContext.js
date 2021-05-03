import React, { useState } from 'react'

export const NavbarContext = React.createContext()
const NavbarProvider = (props) => {

    const [cart, setCart] = useState([])

    return (
        <NavbarContext.Provider value={[cart, setCart]}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarProvider