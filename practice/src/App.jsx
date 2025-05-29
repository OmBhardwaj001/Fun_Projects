
import Card from "./components/card";
import Cart from "./components/Cart";

function App(){
  return(
    <div>
    <Card name="iphone" price="54000"/>
    <Card name="Fridge" price="66660"/>
    <Cart/>
    </div>
  )
}

export default App;