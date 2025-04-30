import React from "react"
import Header from "./components/header.jsx";
import Item from "./components/item.jsx";
import Btn from "./components/button.jsx";
import "./style.css"

const App = ()=>{
  return(
    <div className="todo-container">
     <Header title="TODO"/>
     <Item title="Eat"/>
     <Item  title="Code"/>
     <Item title="Sing"/>
     <Item title="Sleep"/>
     <Btn/>
    </div>
  )
};

export default App;




// app.jsx me components banenge aur jo alag comp honge unhe yha import kar lenege 
// yha se sare main.jsx me import honge
// main.jsx se sare index.html me mount honge tab code start hoga 
//first index.html runs and set the script and all