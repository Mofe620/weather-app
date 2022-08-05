import React from 'react';
import Search from './Search';
import Weather from './Weather';
import Lagos from './Lagos';
import Tokyo from './Tokyo';
import Paris from './Paris';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api_data';

export default function Main() {

    const [searchCityWeather, setsearchCityWeather] = React.useState(null);
    const [forecast, setForecast] = React.useState(null);

    function selectCity(searchData){
        const [lat, lon] = searchData.value.split(" ");
        console.log(lat, lon);
        const searchCityWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
      
        Promise.all([searchCityWeatherFetch, forecastFetch])
            .then(async (response) => {
              const weatherResponse = await response[0].json();
              const forecastResponse = await response[1].json();
              
              setsearchCityWeather({ city: searchData.label, ...weatherResponse });
              setForecast({ city: searchData.label, ...forecastResponse }); console.log(forecast);
            })
            .catch(console.log);

    }

    React.useEffect(()=>{
        //console.log(searchCityWeather, forecast);
    }, [searchCityWeather]);

  return (
    <main className='p-4 md:px-16 md:py-8'>
        <Search selectCity={selectCity}/>
        <div className="grid">
            <Lagos />
            {searchCityWeather ? <Weather data={searchCityWeather}/> : <Paris />}
            <Tokyo />
        </div>
    </main>
  )
}