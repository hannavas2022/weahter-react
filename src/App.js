import React, { useState } from "react";
import "./App.css";

import axios from "axios";

export default function App() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [visibility, setVisibility] = useState(null);
  let [icon, setIcon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2718952144ed077c12e7c160fb6fc351";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiLink).then(showWeather);
  }

  function showWeather(response) {
    setLoaded(true);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setVisibility(response.data.visibility / 1000);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="inputtown"
          placeholder="Search - town, country"
          onChange={changeCity}
        />
        <input type="submit" value="Search" id="searchbutton" />
      </form>
      <div>
        <div className="container text-center">
          <div className="weather-app">
            <div classNames="row row-cols-7">
              <div className="col-3">
                <p className="currenttown"></p>
                <p className="currentdate"></p>
                <p classNames="temperature">
                  <span id="todayTemperature"></span>
                  <a> Temperature: {Math.round(temperature)}ºC</a>
                  <img alt="icon" src={icon} />
                  <span id="condition"></span>
                </p>
                <p className="humidity">
                  Humidity:{Math.round(humidity)} <span id="hum"></span>%
                </p>
                <p className="wind">
                  Wind: SW {Math.round(wind)}
                  <span id="speed"></span> km/h
                </p>
                <p className="visibility">
                  Visibility: {visibility}
                  <span id="vis"></span> km
                </p>
              </div>
              <div
                className="col d-flex align-items-center"
                id="forecast"
              ></div>
            </div>
          </div>
        </div>
        <br />
        <small id="footer">
          <a href="https://github.com/hannavas2022/git-train2" target="_blank">
            Open-source code
          </a>
          by Hanna Vasylets
        </small>
      </div>
    </>
  );
}
