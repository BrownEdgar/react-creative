import React from "react";
import data from "./data.json";
import { useState } from "react";
import "./HomePostSection.scss";

export default function HomePostSection() {
  const [info] = useState(data);

  return (
    <div className="HomePostSection">
      <div className="container">
        <div className="headers">
          <h3>Recent posts</h3>
          <a href="!#">
            <p>View all</p>
          </a>
        </div>
        <div className="wrapper">
          {info.map((elem) => {
            return (
              <div className="wrap">
                <h1>{elem.header}</h1>
                <ul>
                  <li>{elem.data}</li>
                  <li className="name">{elem.name}</li>
                </ul>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
