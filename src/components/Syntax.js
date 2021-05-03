import React, { useContext } from 'react'
import "../css/syntax.css"
import { NavbarContext } from "../context/NavbarContext"

const Men = (props) => {

    const [cart, setCart] = useContext(NavbarContext)

    const addToCart = () => {
        const clothing = {name: props.name, price: props.price, img: props.img}
        setCart([...cart, clothing])
    }

    return (
        <> 
            <div className="cloth">
                <img src={props.img} alt="img"/>
                <p className="title">{props.name}</p>
                <p className="price">${props.price}</p>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </>
    )
}

export default Men