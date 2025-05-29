import React from "react"
import {  Usecart } from "../context/Cart";



function Card(props){

    const cart = Usecart()
    console.log(cart);
    return(
        <div>
        <h4> {props.name} </h4>
        <p> {props.price} </p>
        <button onClick={()=> cart.setItem([...cart.item, {name: props.name , price: props.price}])}> add to cart </button>

        </div>
    )
}

export default Card;