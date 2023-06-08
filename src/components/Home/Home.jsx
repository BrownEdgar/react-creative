import React from "react";
import "./Home.scss";

export default function Home() {
  const handleDownload = () => {
    console.log("downloaed");
  };
  return (
    <div className="main">
      
        <div className="left">
          <h1>
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
    <div className="btn-download">
          <button onClick={handleDownload}>Download Resume</button>
        </div>
        </div>
        
     
      <div className="right">
        <img className="person_img" alt="John" />{" "}
      </div>
    </div>
  );
}
