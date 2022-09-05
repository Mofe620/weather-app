import React from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';
import Forecast from './Forecast';


export default function Tokyo() {

    const [tokyoWeather, setTokyoWeather] = React.useState(null);
    const [tokyoForecast, setTokyoForecast] = React.useState(null);
    const [showForecast, setShowForecast] = React.useState(false);
    
    const lat = 35.689722222;
    const lon = 139.692222222;
        
        function tokyoWeatherFetch (){ 
            fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json()
                    .then (weatherResult => setTokyoWeather(weatherResult)));
            fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                        .then(response => response.json() 
                        .then (forecastResult => {setTokyoForecast(forecastResult)}));
            
        }
   

    React.useEffect(()=>{
     tokyoWeatherFetch();
    }, []);

    if(tokyoWeather != null){
        return (
            <div className='p-4 m-8 bg-white border-t-4 border-r-2 rounded-md shadow-2xl cursor-pointer weather-card border-sky-800 shadow-slate-400'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Tokyo, JP</h2>
                    <q className='capitalize'>{tokyoWeather.weather[0].description}</q>
                </div>
                <div className="">
                    <div className="details-section">
                        <div className="flex items-center justify-between">
                                <div>
                                    <h2 className='text-6xl'>{Math.round(tokyoWeather.main.temp)}°C</h2>
                                    <span> Feels like </span>
                                    <span className=''> {Math.round(tokyoWeather.main.feels_like)}°C</span>
                                </div>
                                <div>
                                    <img src={`icons/${tokyoWeather.weather[0].icon}.png`} alt=""/>
                                    
                                </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <span>Wind speed:</span>
                                <span>{tokyoWeather.wind.speed} m/s</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Humidity:</span>
                                <span>{tokyoWeather.main.humidity}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Air Pressure:</span>
                                <span>{tokyoWeather.main.pressure} hPa</span>
                            </div>
                        </div>
                        <div className="text-center bg-blue-400" onClick={()=>{setShowForecast(prev => !prev)}}>
                            <button>{showForecast ? "Hide" : "See"} Forecast</button>
                        </div>
                        {showForecast && tokyoForecast !=null ? <Forecast data={tokyoForecast} /> : ""}
                    </div>
                    
                </div>
            </div>
         )
    }
  
}
