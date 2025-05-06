import React from "react";

function Header(props){
    return(
        <div>
        <h2 className="todo-header">{props.title}</h2>
        </div>
    )
}

export default Header;