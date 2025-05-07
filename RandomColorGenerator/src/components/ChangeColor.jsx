import React from "react";
import { useState } from "react";

function Colorchange(){

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

function Counter(){
  const [count, Setcount] = useState(0);
  const [inputValue , setinputValue] = useState(0);

  return(



    <>

    <input type="number"
    value={inputValue}
    onChange={(e)=> setinputValue(Number(e.target.value))}
    />


    <button onClick={()=> Setcount(count + inputValue)}> increase </button>
    <button onClick={()=>{
      setinputValue(0);
      Setcount(0);
    }}>reset</button>

    <p> {count} </p>
    </>
  )
}

  export {Counter, Colorchange};
