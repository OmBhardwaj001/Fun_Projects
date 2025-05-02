import React from "react";
import { useState } from "react";

function Counter(){

  const [color , setColor] = useState("")

  function change(){
    const randomRED = Math.floor(Math.random()*256);
    const randomGREEN =Math.floor(Math.random()*256);
    const randomBLUE =  Math.floor(Math.random()*256);

    setColor(`rgb(${randomRED},${randomGREEN},${randomBLUE})`);
  }

    return(
      <>
      <button onClick={change}>
        start 
      </button>
      <h1 style={{color:color}}> hello world</h1>
      <h2>{color}</h2>
      </>
    )
  };

  export default Counter;
