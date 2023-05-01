import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  return (
    <>
      <label htmlFor="" className="title">
        Daily
      </label>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily_item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon_small"
                  />
                  <label htmlFor="" className="day">{forecastDays[index]}</label>
                  <label htmlFor="" className="description">{item.weather[0].description}</label>
                  <label htmlFor="" className="min_max">{Math.floor(item.main.temp_min)}&deg;C / {Math.ceil(item.main.temp_max)}&deg;C </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily_details">
                    <div className="daily_details_item">
                        <label htmlFor="">Pressure</label>
                        <label htmlFor="">{item.main.pressure} mb</label>
                    </div>
                    <div className="daily_details_item">
                        <label htmlFor="">Humidity</label>
                        <label htmlFor="">{item.main.humidity} %</label>
                    </div>
                    <div className="daily_details_item">
                        <label htmlFor="">Clouds</label>
                        <label htmlFor="">{item.clouds.all} %</label>
                    </div>
                    <div className="daily_details_item">
                        <label htmlFor="">Wind Speed</label>
                        <label htmlFor="">{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily_details_item">
                        <label htmlFor="">Sea Level</label>
                        <label htmlFor="">{item.main.sea_level} m/s</label>
                    </div>
                    <div className="daily_details_item">
                        <label htmlFor="">Feels Like</label>
                        <label htmlFor="">{Math.round(item.main.feels_like)} &deg;C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
