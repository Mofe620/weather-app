import React from 'react';

export default function Weather({data}) {

  return (
    <div className='weather-card prioritize bg-white border-t-4 border-b-4 border-l-2 border-r-2 border-sky-800 rounded-md m-8 shadow-2xl shadow-slate-400 p-4 cursor-pointer'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>{data.city}</h2>
                    <q className='capitalize'>{data.weather[0].description}</q>
                </div>
                <div className="">
                    <div className="details-section">
                        <div className="flex items-center justify-between">
                                <div>
                                    <h2 className='text-6xl'>{Math.round(data.main.temp)}°C</h2>
                                    <span> Feels like </span>
                                    <span className=''> {Math.round(data.main.feels_like)}°C</span>
                                </div>
                                <div>
                                    <img src={`icons/${data.weather[0].icon}.png`} alt=""/>
                                    
                                </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <span>Wind speed:</span>
                                <span>{data.wind.speed} m/s</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Humidity:</span>
                                <span>{data.main.humidity}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Air Pressure:</span>
                                <span>{data.main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
  )
}
