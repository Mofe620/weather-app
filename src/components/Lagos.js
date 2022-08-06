import React from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';


export default function Lagos() {

    const [lagosWeather, setLagosWeather] = React.useState(null);
    
        const lat = 6.45;
        const lon = 3.4;
        
        function lagosWeatherFetch (){ 
            fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json()
                    .then (weatherResult => setLagosWeather(weatherResult)));
            
        }
   

    React.useEffect(()=>{
     lagosWeatherFetch();
    }, []);

    if(lagosWeather != null){
        return (
            <div className='weather-card bg-white border-l-4 border-b-2 border-yellow-500 rounded-md m-8 shadow-2xl shadow-slate-400 p-4 cursor-pointer'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Lagos, NG</h2>
                    <q className='capitalize'>{lagosWeather.weather[0].description}</q>
                </div>
                <div className="">
                    <div className="details-section">
                        <div className="flex items-center justify-between">
                                <div>
                                    <h2 className='text-6xl'>{Math.round(lagosWeather.main.temp)}°C</h2>
                                    <span> Feels like </span>
                                    <span className=''> {Math.round(lagosWeather.main.feels_like)}°C</span>
                                </div>
                                <div>
                                    <img src={`icons/${lagosWeather.weather[0].icon}.png`} alt=""/>
                                </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <span>Wind speed:</span>
                                <span>{lagosWeather.wind.speed} m/s</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Humidity:</span>
                                <span>{lagosWeather.main.humidity}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Air Pressure:</span>
                                <span>{lagosWeather.main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
         )
    }
  
}
