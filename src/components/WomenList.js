import React from 'react'
import Syntax from "./Syntax"

import img10 from "../img/name10.png"
import img11 from "../img/name11.png"
import img12 from "../img/name12.png"
import img13 from "../img/name13.png"
import img14 from "../img/name14.png"
import img15 from "../img/name15.png"
import img16 from "../img/name16.png"
import img17 from "../img/name17.png"
import img18 from "../img/name18.png"

const WomenList = () => {

    const items = [
        {
            name: "Ritters Long Quilted Jacket",
            price: 60,
            img: img10,
            id: 10
        }, 
        {
            name: "Marsh Jacket",
            price: 60,
            img: img11,
            id: 11
        },
        {
            name: "Zell Shirt",
            price: 60,
            img: img12,
            id: 12
        }, 
        {
            name: "Perri Overall",
            price: 20,
            img: img13,
            id: 13
        }, 
        {
            name: "Syla Tee",
            price: 40,
            img: img14,
            id: 14
        }, 
        {
            name: "Ren Leather Vest",
            price: 40,
            img: img15,
            id: 15
        }, 
        {
            name: "Palm Cargo Dress",
            price: 40,
            img: img16,
            id: 16
        }, 
        {
            name: "Lita LS Tee",
            price: 40,
            img: img17,
            id: 17
        },
        {
            name: "Webster Shirt",
            price: 40,
            img: img18,
            id: 18
        } 
    ]

    return (
        <div className="menu">
            <div className="menu-grip">
                {
                    items.map(item => (
                        <Syntax name={item.name} price={item.price} img={item.img}
                        key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default WomenList
