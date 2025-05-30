import { createContext, useContext, useState } from "react";
import { getweatherData } from "../api/Api";
import { getuserlocation } from "../api/Api";

export const Weathercontext = createContext(null);

export const useWeather=()=>{
    return useContext(Weathercontext);
}; 

export const WeatherProvider = (props) =>{
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null); 

    const fetchData =async ()=>{
        const response = await getweatherData(searchCity);
        setData(response);
    }

    const fetchcurrentUserlocation=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getuserlocation(position.coords.latitude, position.coords.longitude)
            .then((data)=> setData(data));
        });
    }

    const refresh = ()=>{
        setData(null);
        setSearchCity(null);
    }

    return(
        <Weathercontext.Provider value={{data, searchCity, setSearchCity, fetchData, fetchcurrentUserlocation, refresh}}>
            {props.children}
        </Weathercontext.Provider>
    )

}