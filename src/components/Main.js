import React from 'react';
import Search from './Search';
import Weather from './Weather';
import Forecast from './Forecast';
import Lagos from './Lagos';
import Tokyo from './Tokyo';
import Paris from './Paris';
import London from './London';
import NewYork from './NewYork';
import Istanbul from './Istanbul';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';

export default function Main() {

    const [searchCityWeather, setsearchCityWeather] = React.useState(null);
    const [searchCityForecast, setSearchCityForecast] = React.useState(null);

    function selectCity(searchData){
        const [lat, lon] = searchData.value.split(" ");
        
        const searchCityWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
      
        Promise.all([searchCityWeatherFetch, forecastFetch])
            .then(async (response) => {
              const weatherResponse = await response[0].json();
              const forecastResponse = await response[1].json();
              
              setsearchCityWeather({ city: searchData.label, ...weatherResponse });
              setSearchCityForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch(console.log);

    }

  return (
    <main className='p-4 md:px-16 md:py-8'>
        <Search selectCity={selectCity}/>
        <div className="grid">
            {!searchCityWeather && <Lagos />}
            {!searchCityWeather ? <Paris /> : <Weather data={searchCityWeather}/> }
            {!searchCityForecast ? "" : <Forecast data={searchCityForecast}/> }
            {!searchCityWeather ? <><Tokyo /> <London /> <NewYork /> <Istanbul /></> : "" }
        </div>
    </main>
  )
}