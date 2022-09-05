import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Forecast({data}) {
  const dayInAWeek = new Date().getDay();
  const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  const nextSevenDates = []
    for(var i = 1; i<8; i++){ //start from tomorrow
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate() + i; //get seven consecutive dates
        var year = dateObj.getUTCFullYear();
        let date = day + "/" + month + "/" + year;

        nextSevenDates.push(date);
    }
    
  //console.log(data);
  //data returns forecast for many days so we splice it to just 7 days
  const splicedData = data.list.splice(0, 7);
  
  return (
    <div className='p-4 mt-8 border-2 rounded-md shadow-sm cursor-pointer border-sky-800 shadow-slate-400 prioritize'>
      <label className="title">{data.city.name}'s Weather Forecast</label>
      <Accordion allowZeroExpanded>
        {splicedData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center m-2 bg-white">
                  <img src={`icons/${item.weather[0].icon}.png`} className="w-8" alt="weather" />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="ml-auto date">{nextSevenDates[index]}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="pl-10 daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Summary: </label>
                  <label className="description">{item.weather[0].description}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}