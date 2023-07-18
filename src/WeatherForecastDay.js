import React from "react";
import axios from "axios";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}C`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}C`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div>
        <p className="nextdays">{day()}</p>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description}
          className="d-flex"
        />
        <p className="nextdaystemperatute">{maxTemp()}</p>
        <p className="nextdaystemperatute">{minTemp()}</p>
      </div>
    </div>
  );
}
