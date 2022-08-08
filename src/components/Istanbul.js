import React from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';


export default function Istanbul() {

    const [istanbulWeather, setIstanbulWeather] = React.useState(null);
    
        const lat = 41.01;
        const lon = 28.960277777;
        
        function istanbulWeatherFetch (){ 
            fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json()
                    .then (weatherResult => setIstanbulWeather(weatherResult)));
            
        }
   

    React.useEffect(()=>{
     istanbulWeatherFetch();
    }, []);

    if(istanbulWeather != null){
        return (
            <div className='p-4 m-8 bg-white border-b-2 border-r-4 rounded-md shadow-2xl cursor-pointer weather-card border-rose-500 shadow-slate-400'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Istanbul, TR</h2>
                    <q className='capitalize'>{istanbulWeather.weather[0].description}</q>
                </div>
                <div className="">
                    <div className="details-section">
                        <div className="flex items-center justify-between">
                                <div>
                                    <h2 className='text-6xl'>{Math.round(istanbulWeather.main.temp)}°C</h2>
                                    <span> Feels like </span>
                                    <span className=''> {Math.round(istanbulWeather.main.feels_like)}°C</span>
                                </div>
                                <div>
                                    <img src={`icons/${istanbulWeather.weather[0].icon}.png`} alt=""/>
                                </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <span>Wind speed:</span>
                                <span>{istanbulWeather.wind.speed} m/s</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Humidity:</span>
                                <span>{istanbulWeather.main.humidity}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Air Pressure:</span>
                                <span>{istanbulWeather.main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
         )
    }
  
}
