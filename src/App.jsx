import React, { useState } from 'react';
import './App.css'
import Search from './components/search/Search';
import Current from './components/current/Current';
import { WEATHER_API_KEY, currentWeatherAPI } from './api';
import Forecast from './components/forecast/Forecast';


function App() {


  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    
    const currentWeatherFetch= fetch(`${currentWeatherAPI}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forecastFetch= fetch(`${currentWeatherAPI}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async(response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();

        setCurrentWeather({city:searchData.label, ...weatherRes});
        setForecast({city: searchData.label, ...forecastRes});
      })
      .catch((err) => console.log(err));
  }



  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {
          currentWeather && <Current data={currentWeather}/>
        }
        {forecast && <Forecast data={forecast}/>}
      </div>
    </>
  );
}

export default App;
