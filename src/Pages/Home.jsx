import React from "react";
import Homephoto from "../image/Sleek IV.png";
import "./Home.css";

function Home() {
  return (
    <div className="HomePage">
      <img src={Homephoto} className="FrontImage" alt="Home Page" />
    </div>
  );
}

export default Home;
