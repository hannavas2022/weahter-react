import React from "react";
import "./index.css";

import Weather from "./Weather";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather-app">
          <Weather defaultCity="Kyiv" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
