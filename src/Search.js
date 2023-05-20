import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />{" "}
          </div>
        </div>
      </form>
      <h1> Paris</h1>
      <ul>
        <li>Wednesday 11:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt=""
              className="float-left"
            />{" "}
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 15%</li>
            <li> Humidity: 72%</li>
            <li> Wind:13km per h</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
