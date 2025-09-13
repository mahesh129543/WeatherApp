import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'

export default function SearchBox({updateWeatherInfo}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="19cbcf614d0389aa67bfb548c1d6d905";

    let getWeatherInfo=async()=>{
        try{
             let url=`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        let res=await fetch(url);
        let data=await res.json();
      
       let result={
        city:data.name,
        temp:data.main.temp,
        temp_max:data.main.temp_max,
        temp_min:data.main.temp_min,
        humidity:data.main.humidity,
        pressure:data.main.pressure,
        feelsLike:data.main.feels_like,
        weather:data.weather[0].description,
       };
       console.log(result);
       return result;

        }catch(e){
            throw e;
        }

      
       
       

    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async(evt)=>{
        try{evt.preventDefault();
        console.log(city);
      
        setCity("");
        let newInfo=await getWeatherInfo();
        updateWeatherInfo(newInfo);
       

        }catch(e){
            setError(true);
        }
        
       
    }



    return(
        <div className="Searchbox">
            
        <form onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>

            <br></br>
            <br></br>
            <Button variant="contained"  type="submit">
        Search
      </Button>
      {error&&<p style={{color:"red"}}>No such place Exist!</p>}
        </form>
        
        </div>


    )
}