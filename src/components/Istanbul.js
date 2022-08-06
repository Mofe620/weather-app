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
            <div className='weather-card bg-white border-r-4 border-b-2 border-rose-500 rounded-md m-8 shadow-2xl shadow-slate-400 p-4 cursor-pointer'>
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
