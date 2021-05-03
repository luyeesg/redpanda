import React from 'react'
import Syntax from "./Syntax"

import bottom1 from "../img/bottom1.png"
import bottom2 from "../img/bottom2.png"
import bottom3 from "../img/bottom3.png"
import bottom4 from "../img/bottom4.png"
import bottom5 from "../img/bottom5.png"
import bottom6 from "../img/bottom6.png"
import bottom7 from "../img/bottom7.png"
import bottom8 from "../img/bottom8.png"
import bottom9 from "../img/bottom9.png"

const BottomList = () => {

    const items = [
        {
            name: "Smooth Stock Water Short",
            price: 20,
            img: bottom1,
            id: 19
        }, 
        {
            name: "Denim Work Pant",
            price: 40,
            img: bottom2,
            id: 20
        },
        {
            name: "Dyed Uniform Pant",
            price: 40,
            img: bottom3,
            id: 21
        }, 
        {
            name: "Brushed Cotton Mountain Short",
            price: 40,
            img: bottom4,
            id: 22
        }, 
        {
            name: "Stock Water Short",
            price: 20,
            img: bottom5,
            id: 23
        }, 
        {
            name: "Roses Water Short",
            price: 20,
            img: bottom6,
            id: 24
        }, 
        {
            name: "Peaches Water Short",
            price: 20,
            img: bottom7,
            id: 25
        }, 
        {
            name: "Boxy Linen Short",
            price: 20,
            img: bottom8,
            id: 26
        },
        {
            name: "Soul Water Short",
            price: 20,
            img: bottom9,
            id: 27
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

export default BottomList
