import React from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';


export default function Paris() {

    const [parisWeather, setParisWeather] = React.useState(null);
    
    const lat = 48.833022222;
    const lon = 2.326888888;
        
        // const parisWeatherFetch = async ()=>{ 
        //     fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        //             .then(response => response.json()
        //             .then (weatherResult => {return weatherResult}));
        //             console.log("HI");
        // }

        // const setStatetoResult = React.useMemo(async () => {
        //      await parisWeatherFetch;
        //   });
   

    React.useEffect(()=>{
        fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json()
                    .then (weatherResult => {setParisWeather(weatherResult)}));
                    console.log("HI");
    },[]);

    if(parisWeather != null){
        return (
            <div className='p-4 m-8 bg-white border-b-4 border-l-2 border-r-2 border-orange-400 rounded-md shadow-2xl cursor-pointer weather-card shadow-slate-400'>
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
                    </div>
                    
                </div>
            </div>
         )
    }
  
}
