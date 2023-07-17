import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function WeatherForecast() {
  return (
    <div>
      {" "}
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
