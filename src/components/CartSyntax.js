import React from 'react'

const CartSyntax = (props) => {
    return (
        <div className="list">
            <img className="thumbnail" src={props.img} alt=""/>
            <h1>{props.name}</h1>
            <h2>${props.price}</h2>
        </div>
    )
}

export default CartSyntax
