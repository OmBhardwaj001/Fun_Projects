import React from "react";
import {Usecart} from "../context/Cart"

const Cart = ()=>{

    const cart = Usecart();
    const total = cart.item.reduce((a,b) => a + Number(b.price),0);
    return(
        <div>
        {
            cart && cart.item.map((item)=> <li> {item.name} - {item.price}</li>)
        }
            <h5> total bill : {total} </h5>
        </div>
    )
}

export default Cart;