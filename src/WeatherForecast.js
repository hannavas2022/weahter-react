import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiLink).then(handleResponse);
  return (
    <div>
      <p className="nextdays">
        Sun
        <br />
        18 Sep
      </p>
      <img src="suncloud.jpg" alt="SunCloud" className="d-flex" />
      <p className="nextdaystemperatute">+22°C</p>
      <p classNAme="nextdaystemperatute">+8°C</p>
    </div>
  );
}
