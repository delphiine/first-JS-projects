const WeatherApi = require('./WeatherApi')

class Weather {
    
  constructor(api) {
    this.api = api;
  }
  
  fetch (city) {
    this.api.fetchWeatherData(city, (weatherData) => {
      this.weatherData = weatherData;
    })
  }

  getWeatherData () {
    return this.weatherData;
  }
  
  displayWeather() {
    console.log(`City:\t\t${this.weatherData.name}`)
    console.log(`Weather:\t${this.weatherData.weather[0].main}`)
    console.log(`Temperature:\t${this.weatherData.main.temp}°C`)
    console.log(`Feels like:\t${this.weatherData.main.feels_like}°C`)
    console.log(`Humidity:\t${this.weatherData.main.humidity}%`)
  }
}

module.exports = Weather;
