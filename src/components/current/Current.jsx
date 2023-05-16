import "./Current.css";
import React from "react";
import TimeMaker from "../../utils/TimeMaker";
import getSunTime from "../../utils/sunPoints";

const Current = ({ data }) => {
  let suntime = getSunTime(data);

  return (
    <div
      className={
        data.weather[0].icon.includes("n")
          ? `weather ${data.weather[0].main}night`
          : `weather ${data.weather[0].main}day`
      }
    >
      <div className="top_container">
      <div className="sunPost"><img src="/icons/sunrise.png" alt="sunrise" width={40} height={40} /> {suntime.sunrise.toLowerCase()}</div>
        <h4>Time: {TimeMaker(data.timezone)}</h4>
      <div className="sunPost"><img src="/public/icons/sunset.png" alt="sunset" width={40} height={40} /> {suntime.sunset.toLowerCase()}</div>
      </div>
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
