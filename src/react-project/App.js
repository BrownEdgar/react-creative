import React from "react";
import data from "./data.json";
import { useState } from "react";
import "./App.scss";

export default function App() {
  const [info, setInfo] = useState(data);

  return (
    <div className="App">
      <div className="container">
        <h3>Recent posts</h3>
        <div className="wrapper">
          {info.map((elem) => {
            return (
              <div className="wrap">
                <h1>{elem.header}</h1>
                <h4>{elem.data}</h4>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}