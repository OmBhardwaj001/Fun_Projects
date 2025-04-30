import React from "react";

function Item(props){
    return(
        <li className="todo-item">
        <span>
        {props.completed ? <></> : <input type="checkbox"></input>}
        <span>{props.title}</span>
        </span>
        <p><button>...</button></p>
        </li>
    )
}

export default Item;