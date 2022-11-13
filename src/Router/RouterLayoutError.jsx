import React from "react";
import { Outlet } from "react-router-dom";
import VortexVideo1 from "./Error404/video/RedVortexCode.mp4";
import VortexVideo2 from "./Error404/video/BlueVortexCode.mp4";
import VortexVideo3 from "./Error404/video/GreenVortexCode.mp4";
import Error404 from "./Error404/image/Error404PageNotFound.jpg";
import "./Error404/AccessDenied.scss";

function RouterLayoutError() {
  let video = (
    <video className="bg-vid" autoPlay muted loop>
      <source src={VortexVideo1} />
    </video>
  );
  let color = localStorage.getItem("Color");
  color = JSON.parse(color);
  if (color === "blue") {
    video = (
      <video className="bg-vid" autoPlay muted loop>
        <source src={VortexVideo2} />
      </video>
    );
  } else if (color === "green") {
    video = (
      <video className="bg-vid" autoPlay muted loop>
        <source src={VortexVideo3} />
      </video>
    );
  }

  return (
    <>
      <Outlet />
      <div className="bgvid">{video}</div>
      <div className="accessDenied-div">
        <img src={Error404} alt="error404"/>
      </div>
    </>
  );
}

export default RouterLayoutError;
