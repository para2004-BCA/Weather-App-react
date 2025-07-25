import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBdox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "e2791cce7d6af1cfcdd79aac6ac7e588"

 let getWetherInfo=async()=>{
    try{
        let respones=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse= await respones.json();
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_Max,
        humidity:jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        wether: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result
 }
catch(err){
   throw err;

}}
    

let handleChange=(event)=>{
    setCity(event.target.value)
}

let handleSubmit= async(event)=>{
    try{event.preventDefault();
  console.log(city);
  setCity("");
let newinfo= await getWetherInfo();
updateInfo(newinfo);}
catch(err){
 setError(true)
} 
};

    return(
    <>
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
             <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
             <br></br><br></br>
             <Button variant="contained" type='submit'>
                 Search
             </Button>
             {error && <p style={{color:"red"}}>No such place Exits</p>}
        </form>
    </div>
    </>)
}
