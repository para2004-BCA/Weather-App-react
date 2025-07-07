import SearchBdox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city:"Delhi",
        weather:"haze",
        temp:22.05,
        humidity:47,
        tempMin:22.03,
        tempMax:28.05,
        feelslike:25.04,
    });

    let updateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
            <b><h2>Weathr App by Paramesha</h2></b>
            <SearchBdox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </>
    )
}