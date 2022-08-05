import React from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';


export default function Tokyo() {

    const [tokyoWeather, setTokyoWeather] = React.useState(null);
    
    const lat = 35.689722222;
    const lon = 139.692222222;
        
        function tokyoWeatherFetch (){ 
            fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json()
                    .then (weatherResult => setTokyoWeather(weatherResult)));
            
        }
   

    React.useEffect(()=>{
     tokyoWeatherFetch();
    }, []);

    if(tokyoWeather != null){
        return (
            <div className='weather-card bg-fuchsia-50 border-t-4 border-r-2 border-amber-400 rounded-md m-8 shadow-2xl shadow-slate-400 p-4 cursor-pointer'>
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
                    </div>
                    
                </div>
            </div>
         )
    }
  
}
