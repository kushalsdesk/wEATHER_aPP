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


