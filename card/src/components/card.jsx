import React from "react";


function Card(props){
    return(
        <div className="card-parent">
           <img className="image" src= {props.url} alt="loading.."/>


          <div className="content-parent">
          <p className="content">{props.content}</p>
          </div>
          

        </div>   
    )
}

export default Card;