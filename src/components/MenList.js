import React from 'react'
import Syntax from "./Syntax"

import img1 from "../img/name1.png"
import img2 from "../img/name2.png"
import img3 from "../img/name3.png"
import img4 from "../img/name4.png"
import img5 from "../img/name5.png"
import img6 from "../img/name6.png"
import img7 from "../img/name7.png"
import img8 from "../img/name8.png"
import img9 from "../img/name9.png"

const MenList = () => {

    const items = [
        {
            name: "Smooth Stock Printed Hoodie",
            price: 80,
            img: img1,
            id: 1
        }, 
        {
            name: "Spot in the Sun Dyed Tee",
            price: 60,
            img: img2,
            id: 2
        },
        {
            name: "Reflection Tee",
            price: 60,
            img: img3,
            id: 3
        }, 
        {
            name: "Herby's Dyed Tee",
            price: 60,
            img: img4,
            id: 4
        }, 
        {
            name: "World Tour Tee",
            price: 60,
            img: img5,
            id: 5
        }, 
        {
            name: "World Tour LS Tee",
            price: 60,
            img: img6,
            id: 6
        }, 
        {
            name: "World Tour Zip Hoodie",
            price: 80,
            img: img7,
            id: 7
        }, 
        {
            name: "Overdyed Crew",
            price: 60,
            img: img8,
            id: 8
        },
        {
            name: "Overdyed Hoodie",
            price: 80,
            img: img9,
            id: 9
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

export default MenList
