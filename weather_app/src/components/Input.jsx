import React from "react";
import { useWeather } from "../context/Weather";

const Input =()=>{
    const weather = useWeather();
    return(
        <input
            className="input_field"
            placeholder="search here"
            value={weather?.searchCity || ""}
            onChange={(e)=>{weather.setSearchCity(e.target.value)}}
        />
    )
}

export default Input;