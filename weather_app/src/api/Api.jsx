const baseURL = import.meta.env.VITE_BASEURL;

export const getweatherData = async (city)=>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
}
export const getuserlocation = async (lat,long)=>{
    const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    return await response.json();
}