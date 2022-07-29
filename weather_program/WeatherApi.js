const got = require('got')
const apiKey = require('./apiKey.js')

class WeatherApi {
  
  fetchWeatherData (city, callbackFunction) {
    let weatherData = null;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      callbackFunction(weatherData)
    });
        
    this.weatherData = weatherData
    console.log('Requesting weather data');
  }
}

module.exports = WeatherApi;  
