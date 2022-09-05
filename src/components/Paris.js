import React from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';
import Forecast from './Forecast';


export default function Paris() {

    const [parisWeather, setParisWeather] = React.useState(null);
    const [parisForecast, setParisForecast] = React.useState(null);
    const [showForecast, setShowForecast] = React.useState(false);
    
    const lat = 48.833022222;
    const lon = 2.326888888;
        
    React.useEffect(()=>{
        fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json()
                    .then (weatherResult => {setParisWeather(weatherResult)}));
        fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json() 
                    .then (forecastResult => {setParisForecast(forecastResult)}));
    },[]);

    if(parisWeather != null){
        return (
            <div className='p-4 m-8 bg-white border-b-4 border-l-2 border-r-2 rounded-md shadow-2xl cursor-pointer border-sky-800 weather-card shadow-slate-400'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Paris, FR</h2>
                    <q className='capitalize'>{parisWeather.weather[0].description}</q>
                </div>
                <div className="">
                    <div className="details-section">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className='text-6xl'>{Math.round(parisWeather.main.temp)}°C</h2>
                                <span> Feels like </span>
                                <span className=''> {Math.round(parisWeather.main.feels_like)}°C</span>
                            </div>
                            <div>
                                <img src={`icons/${parisWeather.weather[0].icon}.png`} alt=""/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <span>Wind speed:</span>
                                <span>{parisWeather.wind.speed} m/s</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Humidity:</span>
                                <span>{parisWeather.main.humidity}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Air Pressure:</span>
                                <span>{parisWeather.main.pressure} hPa</span>
                            </div>
                        </div>
                        <div className="text-center bg-blue-400" onClick={()=>{setShowForecast(prev => !prev)}}>
                            <button>{showForecast ? "Hide" : "See"} Forecast</button>
                        </div>
                        {showForecast && parisForecast !=null ? <Forecast data={parisForecast} /> : ""}
                    </div>
                    
                </div>
            </div>
         )
    }
  
}
