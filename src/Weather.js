import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherTemperature from "./WeatherTemperature";
import "./index.css";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      visibility: response.data.visibility / 1000,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiLink).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search" />
            </div>
          </div>
        </form>
        <div className="Currentweather">
          <div className="weather-app">
            <div className="row row-cols-7">
              <div className="col-3">
                <h1 className="currenttown">{weatherData.city}</h1>
                <p className="currentdate">
                  <FormattedDate date={weatherData.date} />
                </p>
                <h2 className="temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="d-flex"
                  />
                  <span className="current-temperature">
                    <WeatherTemperature celsius={weatherData.temperature} />
                  </span>
                </h2>
                <p>
                  Humidity:{" "}
                  <span className="humidity">{weatherData.humidity}</span>%
                </p>
                <p>
                  Wind:{" "}
                  <span className="wind">{Math.round(weatherData.wind)}</span>{" "}
                  km/h
                </p>
                <p>
                  Visibility:{" "}
                  <span className="visibility">{weatherData.visibility}</span>
                  km
                </p>
              </div>
              <div className="col">
                <WeatherForecast coordinates={weatherData.coordinates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
