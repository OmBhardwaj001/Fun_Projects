import Card from "./components/Card"
import Input from "./components/Input"
import Button from "./components/Button"
import "./App.css"
import { useWeather } from "./context/Weather"
import { useEffect } from "react"



function App() {

    const weather = useWeather();
    console.log(weather)
    useEffect(()=>{
      weather.fetchcurrentUserlocation();
    },[])
  return(
    <div>
        <h1> weather forecast </h1>
        <Input/>
        <Button onClick={weather.fetchData} value="search"/>
        <Card/>
        <Button onClick={weather.refresh} value="refresh"/>
    </div>
  )
}

export default App
