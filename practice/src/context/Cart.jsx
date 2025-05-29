import React, { useContext } from "react";
import { createContext , useState} from "react";

export const CartContext = createContext(null);

export const Usecart=()=>{
    const cart = useContext(CartContext);
    return cart;
}

export const CartProvider = (props) =>{
    const [item , setItem] = useState([]);
    return(
        <CartContext.Provider value={{item, setItem}}>
            {props.children}
        </CartContext.Provider>
    )
}