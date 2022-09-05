import React from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';
import Forecast from './Forecast';


export default function NewYork() {

    const [newYorkWeather, setNewYorkWeather] = React.useState(null);
    const [newYorkForecast, setNewYorkForecast] = React.useState(null);
    const [showForecast, setShowForecast] = React.useState(false);
    
        const lat = 40.712728;
        const lon = -74.006015;
        
        function newYorkWeatherFetch (){ 
            fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json()
                    .then (weatherResult => setNewYorkWeather(weatherResult)));
            fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json() 
                    .then (forecastResult => {setNewYorkForecast(forecastResult)}));
        }
   

    React.useEffect(()=>{
     newYorkWeatherFetch();
    });

    if(newYorkWeather != null){
        return (
            <div className='p-4 m-8 bg-white border-b-2 border-l-4 rounded-md shadow-2xl cursor-pointer border-sky-800 weather-card shadow-slate-400'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>New York City, US</h2>
                    <q className='capitalize'>{newYorkWeather.weather[0].description}</q>
                </div>
                <div className="">
                    <div className="details-section">
                        <div className="flex items-center justify-between">
                                <div>
                                    <h2 className='text-6xl'>{Math.round(newYorkWeather.main.temp)}°C</h2>
                                    <span> Feels like </span>
                                    <span className=''> {Math.round(newYorkWeather.main.feels_like)}°C</span>
                                </div>
                                <div>
                                    <img src={`icons/${newYorkWeather.weather[0].icon}.png`} alt=""/>
                                </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <span>Wind speed:</span>
                                <span>{newYorkWeather.wind.speed} m/s</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Humidity:</span>
                                <span>{newYorkWeather.main.humidity}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Air Pressure:</span>
                                <span>{newYorkWeather.main.pressure} hPa</span>
                            </div>
                        </div>
                        <div className="text-center bg-blue-400" onClick={()=>{setShowForecast(prev => !prev)}}>
                            <button>{showForecast ? "Hide" : "See"} Forecast</button>
                        </div>
                        {showForecast && newYorkForecast !=null ? <Forecast data={newYorkForecast} /> : ""}
                    </div>
                    
                </div>
            </div>
         )
    }
  
}
