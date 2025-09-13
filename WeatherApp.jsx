import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({

        city:"mumbai",
temp: 25.78,
temp_max: 25.78,
temp_min: 25.78,
weather: "overcast clouds",
feelsLike: 26.92,
humidity: 97,
pressure: 1008,

    });
    let updateWeatherInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    

    return(
        <div style={{textAlign:"center"}} >
            <h1>Weather App</h1>
       
            <>
              <SearchBox updateWeatherInfo={updateWeatherInfo}/>
              <br></br>
              <br></br>
              <InfoBox Info={weatherInfo}/>
            </>
            </div>
    )
}