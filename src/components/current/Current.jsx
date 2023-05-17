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
        <div className="sunPost">
          <img src="/icons/sunrise.png" alt="sunrise" width={40} height={40} />{" "}
          {suntime.sunrise.toLowerCase()}
        </div>
        <h4>Time: {TimeMaker(data.timezone)}</h4>
        <div className="sunPost">
          <img src="/icons/sunset.png" alt="sunset" width={40} height={40} />{" "}
          {suntime.sunset.toLowerCase()}
        </div>
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

          <div class="details">
            <div class="detail">
              <p class="label">Feels Like </p>
              <p class="value">{Math.round(data.main.feels_like)}&deg;C</p>
            </div>
            <div class="detail">
              <p class="label">Humidity</p>
              <p class="value">{data.main.humidity}%</p>
            </div>
            <div class="detail">
              <p class="label">Wind Speed</p>
              <p class="value">{data.wind.speed}m/s</p>
            </div>
            <div class="detail">
              <p class="label">Pressure</p>
              <p class="value">{data.main.pressure}mb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
