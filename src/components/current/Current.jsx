import "./Current.css";
import React from 'react'

const Current = () => {
  return (
    <div className="weather">
      
      
      <div className="top">
        <div>
          <p className="cityName">Belgrade</p>
          <p className="weatherStat">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weatherIcon" />
      </div>

      <div className="bottom">
        <p className="temp">34&deg;C</p>
        <div className="details">
            <div className="parameterRow">
              <span className="parameterLabel">Details</span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Feels Like </span>
              <span className="parameterValue">22&deg;C</span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Wind </span>
              <span className="parameterValue">5 km/h</span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Humidity </span>
              <span className="parameterValue">30%</span>
            </div>

            <div className="parameterRow">
              <span className="parameterLabel">Pressure </span>
              <span className="parameterValue">1010 mb</span>
            </div>

        </div>
      </div>



    </div>

  );
}

export default Current;
