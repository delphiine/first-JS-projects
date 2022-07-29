const Weather = require('./Weather')

describe('Weather',() => {
  it('gets the weather for a given city',() => {
    const mockedApi = { fetchWeatherData: (repoName, callback) => {
      callback({
        name: 'Bristol',
        description: 'some fake weather data',
      });
    }};
    const weather = new Weather(mockedApi);
    weather.fetch('Bristol')
    expect(weather.getWeatherData()).toEqual({
      name: 'Bristol',
      description: 'some fake weather data',
    });
  });
});