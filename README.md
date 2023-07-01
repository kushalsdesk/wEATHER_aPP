# [Weather App](https://km-weather.netlify.app/)

Click the link to see the actual site

<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React Logo" width="70" height="60">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/120px-Vitejs-logo.svg.png" alt="Vite Logo" width="60" height="60">

<img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="Tailwind CSS Logo" width="80" height="60">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js Logo" width="80" height="60">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" width="60" height="60">
</div>
This GitHub repository contains the source code for a weather application built with React. The app allows users to access weather information for various locations and provides a user-friendly interface for easy navigation.

### Prerequisites

Before getting started with the Weather App repository, ensure that you have the following prerequisites installed:

1.  Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

## Features

The Weather App offers the following key features:

1.  Real-Time Weather Data: The app fetches real-time weather information for different locations.
2.  Location Search: Users can search for weather details by entering a specific location.
3.  Interactive Interface: The app provides an intuitive and user-friendly interface for easy navigation and interaction.
4.  Timezone Support: It utilizes the "moment-timezone" library to display accurate time information based on the selected location.
5.  Responsive Design: The app is built with responsiveness in mind, ensuring a seamless experience across various devices.

## Installation

To set up and run the Weather App locally, follow these steps:

#### 1\. Clone the repository:
```console
    git clone https://github.com/Kushalmydesk/wEATHER_aPP.git
```
#### 2\. Navigate to the project directory:
```console
    cd weather-app
```
#### 3\. Install the dependencies:
```console
    npm install
```
## Tech Stacks

**Dependencies:**

- moment-timezone: Version 0.5.43
- react: Version 18.2.0
- react-accessible-accordion: Version 5.0.0
- react-dom: Version 18.2.0
- react-select-async-paginate: Version 0.7.2

**Dev Dependencies:**

- @types/react: Version 18.0.28
- @types/react-dom: Version 18.0.11
- @vitejs/plugin-react: Version 4.0.0-beta.0
- eslint: Version 8.38.0
- eslint-plugin-react: Version 7.32.2
- eslint-plugin-react-hooks: Version 4.6.0
- eslint-plugin-react-refresh: Version 0.3.4
- tailwindcss: Version 3.3.2
- vite: Version 4.3.0

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the source code using ESLint.
- `npm run preview`: Previews the production build locally.

#### For More Info Visit [/package.json](/package.json)

## The Code Explanation

#### [vite.config.js](/vite.config.js)

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
});
```

1.  The import statements import the necessary functions and plugins from Vite and other dependencies. In this case, defineConfig is imported from vite, and the react plugin is imported from @vitejs/plugin-react.
2.  The defineConfig function is called to define the configuration for Vite. It takes an object as an argument, where you can specify various options.
3.  The plugins option is an array of plugins to be used with Vite. In this example, the react() plugin is included. You can add more plugins to enhance the functionality of Vite.
4.  The server option allows you to configure the development server. In this case, the port property is set to 3000, specifying that the server should listen on port 3000. You can customize other server-related options as well.

#### [tailwind.config.js](/tailwind.config.js)

```javascript
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- **content:** This option specifies the paths of the files that Tailwind CSS should analyze to generate the styles. In this case, it's set to `./src/**/*.{html,js}`, which means Tailwind CSS will analyze all HTML and JavaScript files in the `src` directory and its subdirectories.
- **theme:** This option allows you to customize the default theme of Tailwind CSS. In the provided configuration, the theme object is empty, indicating that no customizations have been made. You can extend this object to override or add new styles to the default theme.
- **plugins:** This option allows you to include additional Tailwind CSS plugins. In the provided configuration, the plugins array is empty, indicating that no additional plugins are being used. You can add custom plugins to this array to extend the functionality of Tailwind CSS.

### Icons are stored in Icon Folder

#### [icons](/public/icons)

## **[src](/src) Folder**

- src

  - [components](/src/components)

    - current
    - footer
    - forecast
    - header
    - search

  - [utils](/src/utils)

    - TimeMaker.js
    - sunPoints.js

  - api.jsx
  - App.jsx
  - App.css
  - index.css
  - main.jsx

  Inside the `components` folder, each component have their own file and style

#### [api.jsx](/src/api.jsx)

```javascript
export const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "1c92f1a8b1msh2c2895873151217p18a6dbjsna19dab27e7bb",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const currentWeatherAPI = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "b78eb28673235e92fd98f2b4ee473dcd";
```

**Code Explanation:**

- `url`: The constant `url` stores the endpoint for the Geo DB API to fetch cities data.
- `geoApiOptions`: The constant `geoApiOptions` stores an object with the options for making a GET request to the Geo DB API. It includes the HTTP method, content type, and API key headers.
- `currentWeatherAPI`: The constant `currentWeatherAPI` stores the base URL for the OpenWeatherMap API to retrieve current weather data.
- `WEATHER_API_KEY`: The constant `WEATHER_API_KEY` stores the API key for accessing the OpenWeatherMap API.

#### [TimeMaker.js](/src/utils/TimeMaker.js)

```javascript
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
```

**Code Explanation:**

1.  **Line 1:** The `getTime` function is declared, which takes the `timezone_offset` as a parameter.
2.  **Line 3-6:** The `utcOffsetSeconds` variable is defined to store the UTC timezone offset.
3.  **Line 9:** A new Date object, `utcDate`, is created to represent the current UTC time.
4.  **Line 12:** The current local time in milliseconds is calculated by adding the UTC time and the local timezone offset in minutes.
5.  **Line 15:** The `localOffsetMilliseconds` variable stores the local timezone offset in milliseconds.
6.  **Line 18:** The target local time in milliseconds is calculated by adding the current local time and the local timezone offset.
7.  **Line 21:** A new Date object, `targetDate`, is created with the target local time.
8.  **Line 24-32:** The `toLocaleString` method is used to format the local time with the specified options for year, month, day, hour, minute, and hour12 (to display AM/PM indication).
9.  **Line 35:** The formatted local time is returned as the result of the function.
10. **Line 38:** The `getTime` function is exported as the default export of the module.

This code defines a JavaScript function that converts a given UTC time to the corresponding local time based on the provided timezone offset. The local time is formatted with the specified options and returned as a string.

#### [sunPoints.js](/src/utils/sunPoints.js)

```javascript
import moment from "moment-timezone";

const getSunTime = (data) => {
  const countryCode = data.sys.country;
  const sunriseUTC = data.sys.sunrise;
  const sunsetUTC = data.sys.sunset;

  const timezones = moment.tz.zonesForCountry(countryCode);

  function getLocalTime(timezone, sunriseUTC, sunsetUTC) {
    // Convert UTC times to local timezone
    let sunriseLocal = new Date(sunriseUTC * 1000).toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
    });
    let sunsetLocal = new Date(sunsetUTC * 1000).toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      sunrise: sunriseLocal,
      sunset: sunsetLocal,
    };
  }

  return getLocalTime(timezones[0], sunriseUTC, sunsetUTC);
};

export default getSunTime;
```

**Code Explanation:**

1.  **Line 1:** The `moment` library is imported to work with time and timezones.
2.  **Line 3-10:** The `getSunTime` function is declared, which takes the `data` object as a parameter.
3.  **Line 4-6:** The necessary data such as the country code, sunrise UTC time, and sunset UTC time are extracted from the `data` object.
4.  **Line 8:** The `zonesForCountry` method from `moment.tz` is used to get the available timezones for the given country code.
5.  **Line 10-19:** The `getLocalTime` function is defined, which takes the timezone, sunrise UTC time, and sunset UTC time as parameters.
6.  **Line 13-14:** The UTC times are converted to the local timezone using the `toLocaleTimeString` method with the specified options for timezone, hour, and minute formatting.
7.  **Line 16-18:** An object containing the local sunrise and sunset times is returned as the result of the function.
8.  **Line 21:** The `getLocalTime` function is called with the first timezone from the `timezones` array, and the sunrise and sunset UTC times.
9.  **Line 23:** The local sunrise and sunset times are returned as the result of the `getSunTime` function.
10. **Line 26:** The `getSunTime` function is exported as the default export of the module.

This code defines a JavaScript function that retrieves the local sunrise and sunset times based on the provided data object. It uses the `moment-timezone` library to work with timezones and `toLocaleTimeString` method to convert UTC times to the local timezone.

#### [App.jsx](/src/App.jsx)

```javascript
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
    <div>
      <Header />
      <hr />
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <Current data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
      {currentWeather && <Footer data={currentWeather} />}
    </div>
  );
}

export default App;
```

**Code Explanation:**

1.  **Line 1:** The `React` library is imported.
2.  **Line 2:** The `useState` hook is imported from React.
3.  **Line 3-7:** The necessary components and APIs are imported.
4.  **Line 10-11:** Two state variables, `currentWeather` and `forecast`, are declared using the `useState` hook.
5.  **Line 13-27:** The `handleOnSearchChange` function is defined. It handles the search change event and performs API requests to fetch the current weather and forecast data based on the search coordinates.
6.  **Line 30-62:** The `App` component is defined. It renders the application UI based on the state variables and data fetched from the API.
7.  **Line 35-45:** The `handleOnSearchChange` function is passed to the `Search` component as a prop.
8.  **Line 37-39:** The `Current` component is conditionally rendered if `currentWeather` exists.
9.  **Line 40-42:** The `Forecast` component is conditionally rendered if `forecast` exists.
10. **Line 46-49:** The `Header` component is rendered.
11. **Line 50:** A horizontal rule is rendered.
12. **Line 51-56:** The main content container is rendered, containing the search component, current weather component, and forecast component.
13. **Line 58:** The `Footer` component is conditionally rendered if `currentWeather` exists.
14. **Line 61:** The `App` component is exported as the default export of the module.

This code defines a React component that represents the main application. It uses state variables to manage the current weather and forecast data. The `handleOnSearchChange` function handles the search change event and fetches the required data from the API. The rendered UI includes various components based on the state and fetched data.

### **Current Component Explanation**

#### [Current.jsx](/src/components/current/Current.jsx)

The code represents a React component named `Current` that displays the current weather information.

The component imports CSS styles from the `Current.css` file and necessary utility functions.

The `Current` component is a functional component that takes a single parameter, `data`, which contains the weather data to be displayed.

The `getSunTime` function is invoked with the `data` parameter to calculate sunrise and sunset times based on the country code and UTC values.

The component renders a <div> element with a dynamic class name based on the weather condition (day or night).

Inside the main <div>, there is a container for the sunrise time, current time, and sunset time.

The sunrise and sunset times are displayed using the calculated values from `getSunTime`.

Next, there is a nested <div> with the class name `inside`, which contains the weather details.

Inside the `inside` container, there is a top section and a bottom section.

The top section displays the city name, weather description, and an icon representing the weather condition.

The weather icon is determined based on the `data.weather[0].icon` value.

The bottom section displays additional weather details, such as temperature, feels like temperature, humidity, wind speed, and pressure.

Each detail is wrapped in a <div> with the class name `detail`, containing a label and value.

The values are extracted from the `data` object.

Finally, the `Current` component is exported as the default export of the module.

### **Footer Component Explanation**

#### [Footer.jsx](/src/components/current/Footer.jsx)

The `Footer` component is a functional component that displays the footer section of the application.

The component imports CSS styles from the `Footer.css` file.

The `Footer` component takes a single parameter, `data`, which contains the weather data.

Inside the component, there is a `<div>` element with the class name `footer`. It displays the footer text.

The footer text includes a copyright symbol (`&#169;`) and a link to the GitHub profile of `kushal_mydesk`.

The link's `className` is dynamically set based on the weather condition. If the weather condition includes "n" in the icon, it adds the class `${data.weather[0].main}night`, otherwise, it adds the class `${data.weather[0].main}day`.

The link opens in a new tab with the `target` attribute set to `_blank`.

Finally, the `Footer` component is exported as the default export of the module.

## **Forecast Component Explanation**

#### [Forecast.jsx](/src/components/forecast/Forecast.jsx)

The `Forecast` component is a functional component that displays the daily weather forecast.

The component imports CSS styles from the `Forecast.css` file and various components from the `react-accessible-accordion` library.

The `Forecast` component takes a single parameter, `data`, which contains the weather forecast data.

Inside the component, there is a label with the class name `title`. It displays the text "Daily" and "Tap for details".

The component uses the `Accordion` component from the `react-accessible-accordion` library to create an accordion-style UI for the daily forecast items.

The forecast data is mapped over to create individual `AccordionItem` components for each forecast item.

Each `AccordionItem` has a `AccordionItemHeading` with a button, and a `AccordionItemPanel` that contains the details of the forecast item.

Inside the `AccordionItemButton`, there is a `div` element with the class name `daily_item`. It displays the weather icon, day of the week, weather description, and temperature range for the day.

When the button is clicked, the `AccordionItemPanel` expands to reveal more details about the forecast item.

The `AccordionItemPanel` contains a `div` element with the class name `daily_details`. It displays additional details such as pressure, humidity, clouds, wind speed, sea level, and feels like temperature.

The forecast data is limited to the first 7 items using the `splice` method to show the forecast for the upcoming days.

Finally, the `Forecast` component is exported as the default export of the module.

## **Header Component Explanation**

#### [Header.jsx](/src/components/header/Header.jsx)

The `Header` component is a functional component that represents the header of the weather application.

The component imports CSS styles from the `Header.css` file.

Inside the component, there is a `div` element with the class name `header`. It contains an image and a text.

The image source is dynamically set using template literals and the `icons/weather.png` path.

Below the image, there is a `p` element that displays the text "Get Your Weather Update".

The `Header` component is exported as the default export of the module.

## **Search Component Explanation**

#### [Search.jsx](/src/components/search/Search.jsx)

The `Search` component is a functional component responsible for the search functionality in the weather application.

The component imports the necessary dependencies, including `useState` from React and `AsyncPaginate` from the `react-select-async-paginate` library.

Inside the component, there is a `useState` hook used to manage the state of the search input.

The component defines a function named `handleOnChange` which is called when the search input value changes. It updates the search state and invokes the `onSearchChange` function passed as a prop, passing the search data as an argument.

The component also defines an asynchronous `loadOptions` function that is used by the `AsyncPaginate` component to load options based on the user's input. Inside the function, it makes an API call to the specified URL with the provided query parameters. The response is then transformed into the expected format and returned as options for the `AsyncPaginate` component.

The `Search` component returns the `AsyncPaginate` component, which renders a search input field with asynchronous option loading based on user input.

The `AsyncPaginate` component receives several props such as `placeholder`, `debounceTimeout`, `value`, `onChange`, and `loadOptions` to handle the search functionality.

The `Search` component is exported as the default export of the module.
