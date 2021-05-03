import React, { useContext, useState } from 'react'
import { NavbarContext } from "../context/NavbarContext"
import CartSyntax from "./CartSyntax"
import "../css/cart.css"

const Cart = () => {

    const [cart, setCart] = useContext(NavbarContext)
    const total = cart.reduce((acc, curr) => acc + curr.price, 0)
    let i = 0

    const [buy, setBuy] = useState(false)

    const checkout = () => {
        setCart([])
        setBuy(!buy)
    }

    return (
        <div className="container">
            <h1 id="cart-title">Cart</h1>
            {
                cart.map(item => (
                    <CartSyntax img={item.img} name={item.name} price={item.price}
                    key={i+=1}
                    />
                ))
            }
            {
                i !== 0 &&
                <div className="checkout">
                    <p>Total payment:</p>
                    <p>${total}</p>
                    <button onClick={checkout}>Checkout</button>
                </div>
            }
            {
                buy &&
                <div>
                    <p className="purchase">Thank you for your purchase</p>
                </div>
            }
        </div>
    )
}

export default Cart