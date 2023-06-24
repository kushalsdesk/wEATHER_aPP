<h1 align="center"><a href="https://km-weather.netlify.app/" target="_blank">Weather App</a></h1>
<p>Click the link to see the actual site</p>


<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React Logo" width="70" height="60">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/120px-Vitejs-logo.svg.png" alt="Vite Logo" width="60" height="60">

<img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="Tailwind CSS Logo" width="80" height="60">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js Logo" width="80" height="60">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" width="60" height="60">


<p align="left" style="margin-top: 20px">This GitHub repository contains the source code for a weather application built with React. The app allows users to access weather information for various locations and provides a user-friendly interface for easy navigation.</p>
<div align="left">
<h3>Prerequisites</h3>

<p>Before getting started with the Weather App repository, ensure that you have the following prerequisites installed:</p>

<ol>
    <li>Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website: <a href="https://nodejs.org">https://nodejs.org</a></li>
</ol>

<h2>Features</h2>

<p>The Weather App offers the following key features:</p>

<ol>
    <li>Real-Time Weather Data: The app fetches real-time weather information for different locations.</li>
    <li>Location Search: Users can search for weather details by entering a specific location.</li>
    <li>Interactive Interface: The app provides an intuitive and user-friendly interface for easy navigation and interaction.</li>
    <li>Timezone Support: It utilizes the "moment-timezone" library to display accurate time information based on the selected location.</li>
    <li>Responsive Design: The app is built with responsiveness in mind, ensuring a seamless experience across various devices.</li>
</ol>

<h2>Installation</h2>

<p>To set up and run the Weather App locally, follow these steps:</p>

<h4>1. Clone the repository:</h4>
<pre><code>git clone https://github.com/Kushalmydesk/wEATHER_aPP.git</code></pre>

<h4>2. Navigate to the project directory:</h4>
<pre><code>cd weather-app</code></pre>

<h4>3. Install the dependencies:</h4>
<pre><code>npm install</code></pre>

<h2 >Tech Stacks</h2>
<p><strong>Dependencies:</strong></p>
<ul>
    <li>moment-timezone: Version 0.5.43</li>
    <li>react: Version 18.2.0</li>
    <li>react-accessible-accordion: Version 5.0.0</li>
    <li>react-dom: Version 18.2.0</li>
    <li>react-select-async-paginate: Version 0.7.2</li>
</ul>

<p><strong>Dev Dependencies:</strong></p>
<ul>
    <li>@types/react: Version 18.0.28</li>
    <li>@types/react-dom: Version 18.0.11</li>
    <li>@vitejs/plugin-react: Version 4.0.0-beta.0</li>
    <li>eslint: Version 8.38.0</li>
    <li>eslint-plugin-react: Version 7.32.2</li>
    <li>eslint-plugin-react-hooks: Version 4.6.0</li>
    <li>eslint-plugin-react-refresh: Version 0.3.4</li>
    <li>tailwindcss: Version 3.3.2</li>
    <li>vite: Version 4.3.0</li>
</ul>

<h2>Available Scripts</h2>

<p>In the project directory, you can run the following scripts:</p>

<ul>
    <li><code>npm run dev</code>: Starts the development server using Vite.</li>
    <li><code>npm run build</code>: Builds the app for production.</li>
    <li><code>npm run lint</code>: Lints the source code using ESLint.</li>
    <li><code>npm run preview</code>: Previews the production build locally.</li>
</ul>
</div>
<h4>For More Info Visit <a href="/package.json">/package.json</a></h4>

<div align="left">
  <h2>The Code Explanation</h2>

<h4><a href="/vite.config.js">vite.config.js</a></h4>
<pre>
  <code>
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
        plugins: [react()],
        server: {
          port: 3000
        }
    })
  </code>
</pre>


<ol>
  <li>
    The import statements import the necessary functions and plugins from Vite and other dependencies. In this case, defineConfig is imported from vite, and the react plugin is imported from @vitejs/plugin-react.
  </li>
  <li>
    The defineConfig function is called to define the configuration for Vite. It takes an object as an argument, where you can specify various options.
  </li>
  <li>
    The plugins option is an array of plugins to be used with Vite. In this example, the react() plugin is included. You can add more plugins to enhance the functionality of Vite.
  </li>
  <li>
    The server option allows you to configure the development server. In this case, the port property is set to 3000, specifying that the server should listen on port 3000. You can customize other server-related options as well.
  </li>
</ol>

<h4><a href="/tailwind.config.js">tailwind.config.js</a></h4>

<pre><code>
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
</code></pre>



<ul>
  <li><strong>content:</strong> This option specifies the paths of the files that Tailwind CSS should analyze to generate the styles. In this case, it's set to <code>./src/**/*.{html,js}</code>, which means Tailwind CSS will analyze all HTML and JavaScript files in the <code>src</code> directory and its subdirectories.</li>
  <li><strong>theme:</strong> This option allows you to customize the default theme of Tailwind CSS. In the provided configuration, the theme object is empty, indicating that no customizations have been made. You can extend this object to override or add new styles to the default theme.</li>
  <li><strong>plugins:</strong> This option allows you to include additional Tailwind CSS plugins. In the provided configuration, the plugins array is empty, indicating that no additional plugins are being used. You can add custom plugins to this array to extend the functionality of Tailwind CSS.</li>
</ul>



<h3>Icons are stored in Icon Folder</h3>
<h4><a href="/public/icons">icons</a></h4>

<h2><b><a href="/src">src</a> Folder</b></h2>

<ul>
  <li>root
    <ul>
      <li>src</li>
        <ul>
          <li><a href="/src/components">components</a></li>
          <ul>
            <li>current</li>
            <li>footer</li>
            <li>forecast</li>
            <li>header</li>
            <li>search</li>
          </ul>
          <li><a href="/src/utils">utils</a></li>
          <ul>
            <li>TimeMaker.js</li>
            <li>sunPoints.js</li>
          </ul>
          <li>api.jsx</li>
          <li>App.jsx</li>
          <li>App.css</li>
          <li>index.css</li>
          <li>main.jsx</li>
          </ul>
      
</ul>
<p> Inside the <code>components</code> folder, each component have their own file and style </p> 

</div>

<div align="left">

<h3><a href="/src/api.jsx">api.jsx</a></h3>

<pre>
<code>

export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '1c92f1a8b1msh2c2895873151217p18a6dbjsna19dab27e7bb',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


export const currentWeatherAPI = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "b78eb28673235e92fd98f2b4ee473dcd";

</code>
</pre>

<div>
  <p>
    <strong>Code Explanation:</strong>
  </p>
  <ul>
    <li>
      <code>url</code>: The constant <code>url</code> stores the endpoint for the Geo DB API to fetch cities data.
    </li>
    <li>
      <code>geoApiOptions</code>: The constant <code>geoApiOptions</code> stores an object with the options for making a GET request to the Geo DB API. It includes the HTTP method, content type, and API key headers.
    </li>
    <li>
      <code>currentWeatherAPI</code>: The constant <code>currentWeatherAPI</code> stores the base URL for the OpenWeatherMap API to retrieve current weather data.
    </li>
    <li>
      <code>WEATHER_API_KEY</code>: The constant <code>WEATHER_API_KEY</code> stores the API key for accessing the OpenWeatherMap API.
    </li>
  </ul>
</div>

<div align="left">

<h4><a href="/src/utils/TimeMaker.js">TimeMaker.js</a></h4>
    
  <pre><code class="language-javascript">
const getTime = (timezone_offset) => {
  // Define the UTC timezone offset in seconds
  let utcOffsetSeconds = timezone_offset; // Example: UTC+01:00

  // Create a new Date object with the current UTC time
  let utcDate = new Date();

  // Get the current local time in milliseconds
  let localTimeMilliseconds =
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1000;

  // Calculate the local timezone offset in milliseconds
  let localOffsetMilliseconds = utcOffsetSeconds * 1000;

  // Calculate the target local time in milliseconds
  let targetTimeMilliseconds = localTimeMilliseconds + localOffsetMilliseconds;

  // Create a new Date object with the target local time
  let targetDate = new Date(targetTimeMilliseconds);

  // Get the local time format with AM/PM indication
  let localTime = targetDate.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return localTime;
};

export default getTime;
  </code></pre>
</div>

<ol>
  <li><strong>Line 1:</strong> The <code>getTime</code> function is declared, which takes the <code>timezone_offset</code> as a parameter.</li>
  <li><strong>Line 3-6:</strong> The <code>utcOffsetSeconds</code> variable is defined to store the UTC timezone offset.</li>
  <li><strong>Line 9:</strong> A new Date object, <code>utcDate</code>, is created to represent the current UTC time.</li>
  <li><strong>Line 12:</strong> The current local time in milliseconds is calculated by adding the UTC time and the local timezone offset in minutes.</li>
  <li><strong>Line 15:</strong> The <code>localOffsetMilliseconds</code> variable stores the local timezone offset in milliseconds.</li>
  <li><strong>Line 18:</strong> The target local time in milliseconds is calculated by adding the current local time and the local timezone offset.</li>
  <li><strong>Line 21:</strong> A new Date object, <code>targetDate</code>, is created with the target local time.</li>
  <li><strong>Line 24-32:</strong> The <code>toLocaleString</code> method is used to format the local time with the specified options for year, month, day, hour, minute, and hour12 (to display AM/PM indication).</li>
  <li><strong>Line 35:</strong> The formatted local time is returned as the result of the function.</li>
  <li><strong>Line 38:</strong> The <code>getTime</code> function is exported as the default export of the module.</li>
</ol>

<p>
  This code defines a JavaScript function that converts a given UTC time to the corresponding local time based on the provided timezone offset. The local time is formatted with the specified options and returned as a string.
</p>
<div align="left">
<h4><a href="/src/utils/sunPoints.js">sunPoints.js</a></h4>
  <pre><code class="language-javascript">
import moment from "moment-timezone"

const getSunTime = (data) => {
  const countryCode = data.sys.country;
  const sunriseUTC = data.sys.sunrise;
  const sunsetUTC = data.sys.sunset;

  const timezones = moment.tz.zonesForCountry(countryCode);

  function getLocalTime(timezone, sunriseUTC, sunsetUTC) {
    // Convert UTC times to local timezone
    let sunriseLocal = new Date(sunriseUTC * 1000).toLocaleTimeString('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit' });
    let sunsetLocal = new Date(sunsetUTC * 1000).toLocaleTimeString('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit' });

    return {
      sunrise: sunriseLocal,
      sunset: sunsetLocal
    };
  }

  return getLocalTime(timezones[0], sunriseUTC, sunsetUTC);
}

export default getSunTime;
  </code></pre>
</div>

<ol>
  <li><strong>Line 1:</strong> The <code>moment</code> library is imported to work with time and timezones.</li>
  <li><strong>Line 3-10:</strong> The <code>getSunTime</code> function is declared, which takes the <code>data</code> object as a parameter.</li>
  <li><strong>Line 4-6:</strong> The necessary data such as the country code, sunrise UTC time, and sunset UTC time are extracted from the <code>data</code> object.</li>
  <li><strong>Line 8:</strong> The <code>zonesForCountry</code> method from <code>moment.tz</code> is used to get the available timezones for the given country code.</li>
  <li><strong>Line 10-19:</strong> The <code>getLocalTime</code> function is defined, which takes the timezone, sunrise UTC time, and sunset UTC time as parameters.</li>
  <li><strong>Line 13-14:</strong> The UTC times are converted to the local timezone using the <code>toLocaleTimeString</code> method with the specified options for timezone, hour, and minute formatting.</li>
  <li><strong>Line 16-18:</strong> An object containing the local sunrise and sunset times is returned as the result of the function.</li>
  <li><strong>Line 21:</strong> The <code>getLocalTime</code> function is called with the first timezone from the <code>timezones</code> array, and the sunrise and sunset UTC times.</li>
  <li><strong>Line 23:</strong> The local sunrise and sunset times are returned as the result of the <code>getSunTime</code> function.</li>
  <li><strong>Line 26:</strong> The <code>getSunTime</code> function is exported as the default export of the module.</li>
</ol>

<p>
  This code defines a JavaScript function that retrieves the local sunrise and sunset times based on the provided data object. It uses the <code>moment-timezone</code> library to work with timezones and <code>toLocaleTimeString</code> method to convert UTC times to the local timezone.
</p>
<div align="left">
 <h4><a href="/src/App.jsx">App.jsx</a></h4>

  <pre><code class="language-javascript">
import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import Current from "./components/current/Current";
import { WEATHER_API_KEY, currentWeatherAPI } from "./api";
import Forecast from "./components/forecast/Forecast";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${currentWeatherAPI}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${currentWeatherAPI}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  };

  return (
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;hr /&gt;
      &lt;div className="container"&gt;
        &lt;Search onSearchChange={handleOnSearchChange} /&gt;
        {
          currentWeather &amp;&amp; &lt;Current data={currentWeather}/&gt;
        }
        {forecast &amp;&amp; &lt;Forecast data={forecast}/&gt;}
      &lt;/div&gt;
      {currentWeather &amp;&amp; &lt;Footer data={currentWeather} /&gt;}
    &lt;/div&gt;
  );
}

export default App;
  </code></pre>
</div>

<ol>
  <li><strong>Line 1:</strong> The <code>React</code> library is imported.</li>
  <li><strong>Line 2:</strong> The <code>useState</code> hook is imported from React.</li>
  <li><strong>Line 3-7:</strong> The necessary components and APIs are imported.</li>
  <li><strong>Line 10-11:</strong> Two state variables, <code>currentWeather</code> and <code>forecast</code>, are declared using the <code>useState</code> hook.</li>
  <li><strong>Line 13-27:</strong> The <code>handleOnSearchChange</code> function is defined. It handles the search change event and performs API requests to fetch the current weather and forecast data based on the search coordinates.</li>
  <li><strong>Line 30-62:</strong> The <code>App</code> component is defined. It renders the application UI based on the state variables and data fetched from the API.</li>
  <li><strong>Line 35-45:</strong> The <code>handleOnSearchChange</code> function is passed to the <code>Search</code> component as a prop.</li>
  <li><strong>Line 37-39:</strong> The <code>Current</code> component is conditionally rendered if <code>currentWeather</code> exists.</li>
  <li><strong>Line 40-42:</strong> The <code>Forecast</code> component is conditionally rendered if <code>forecast</code> exists.</li>
  <li><strong>Line 46-49:</strong> The <code>Header</code> component is rendered.</li>
  <li><strong>Line 50:</strong> A horizontal rule is rendered.</li>
  <li><strong>Line 51-56:</strong> The main content container is rendered, containing the search component, current weather component, and forecast component.</li>
  <li><strong>Line 58:</strong> The <code>Footer</code> component is conditionally rendered if <code>currentWeather</code> exists.</li>
  <li><strong>Line 61:</strong> The <code>App</code> component is exported as the default export of the module.</li>
</ol>

<p>
  This code defines a React component that represents the main application. It uses state variables to manage the current weather and forecast data. The <code>handleOnSearchChange</code> function handles the search change event and fetches the required data from the API. The rendered UI includes various components based on the state and fetched data.
</p>
<div align="left">
	<h3>Current Component Explanation</h3>
  <h4><a href="/src/components/current/Current.jsx">Current.jsx</a></h4>

  <p>
    The code represents a React component named <code>Current</code> that displays the current weather information.
  </p>
  <p>
    The component imports CSS styles from the <code>Current.css</code> file and necessary utility functions.
  </p>
  <p>
    The <code>Current</code> component is a functional component that takes a single parameter, <code>data</code>, which contains the weather data to be displayed.
  </p>
  <p>
    The <code>getSunTime</code> function is invoked with the <code>data</code> parameter to calculate sunrise and sunset times based on the country code and UTC values.
  </p>
  <p>
    The component renders a &lt;div&gt; element with a dynamic class name based on the weather condition (day or night).
  </p>
  <p>
    Inside the main &lt;div&gt;, there is a container for the sunrise time, current time, and sunset time.
  </p>
  <p>
    The sunrise and sunset times are displayed using the calculated values from <code>getSunTime</code>.
  </p>
  <p>
    Next, there is a nested &lt;div&gt; with the class name <code>inside</code>, which contains the weather details.
  </p>
  <p>
    Inside the <code>inside</code> container, there is a top section and a bottom section.
  </p>
  <p>
    The top section displays the city name, weather description, and an icon representing the weather condition.
  </p>
  <p>
    The weather icon is determined based on the <code>data.weather[0].icon</code> value.
  </p>
  <p>
    The bottom section displays additional weather details, such as temperature, feels like temperature, humidity, wind speed, and pressure.
  </p>
  <p>
    Each detail is wrapped in a &lt;div&gt; with the class name <code>detail</code>, containing a label and value.
  </p>
  <p>
    The values are extracted from the <code>data</code> object.
  </p>
  <p>
    Finally, the <code>Current</code> component is exported as the default export of the module.
  </p>
</div>
<div align="left">
	<h3>Footer Component Explanation</h3>
  <h4><a href="/src/components/current/Footer.jsx">Footer.jsx</a></h4>
  

<p>
  The <code>Footer</code> component is a functional component that displays the footer section of the application.
</p>

<p>
  The component imports CSS styles from the <code>Footer.css</code> file.
</p>

<p>
  The <code>Footer</code> component takes a single parameter, <code>data</code>, which contains the weather data.
</p>

<p>
  Inside the component, there is a <code>&lt;div&gt;</code> element with the class name <code>footer</code>. It displays the footer text.
</p>

<p>
  The footer text includes a copyright symbol (<code>&amp;#169;</code>) and a link to the GitHub profile of <code>kushal_mydesk</code>.
</p>

<p>
  The link's <code>className</code> is dynamically set based on the weather condition. If the weather condition includes "n" in the icon, it adds the class <code>${data.weather[0].main}night</code>, otherwise, it adds the class <code>${data.weather[0].main}day</code>.
</p>

<p>
  The link opens in a new tab with the <code>target</code> attribute set to <code>_blank</code>.
</p>

<p>
  Finally, the <code>Footer</code> component is exported as the default export of the module.
</p>


