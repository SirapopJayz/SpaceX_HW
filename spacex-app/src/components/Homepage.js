import React from "react";
import "../index.css"
import "./Homepage.css";
import Video1 from "../components/videos/video-1.mp4"
const Homepage = () => {
  return (
      <div className='home-container'>
        <video loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video>
          <source src={Video1} type="video/mp4" />
        </video>
        <h1>SpaceX</h1>
      </div>
  );
};
export default Homepage;
