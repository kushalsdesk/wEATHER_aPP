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

