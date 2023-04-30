import "./Current.css";
import React from "react";

const Current = ({ data }) => {
  return (
    <div className={data.weather[0].icon.includes("n")? `weather ${data.weather[0].main}night` : `weather ${data.weather[0].main}day`}>
    
      <div className="inside">
        <div className="top">
          <div>
            <p className="cityName">{data.city}</p>
            <p className="weatherStat">{data.weather[0].description}</p>
          </div>
          <img
            src={`icons/${data.weather[0].icon}.png`}
           
            alt="weather"
            className="weatherIcon"
          />
        </div>

        <div className="bottom">
          <p className="temp">{Math.round(data.main.temp)}&deg;C</p>
          <div className="details">
            <div className="parameterRow">
              <span className="parameterLabel">Details</span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Feels Like </span>
              <span className="parameterValue">
                {Math.round(data.main.feels_like)}&deg;C
              </span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Wind </span>
              <span className="parameterValue">{data.wind.speed}m/s</span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Humidity </span>
              <span className="parameterValue">{data.main.humidity}%</span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Pressure </span>
             <span className="parameterValue">{data.main.pressure}mb</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Current;
