import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./index.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }
  if (loaded) {
    return (
      <div>
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(handleResponse);
    return null;
  }
}
