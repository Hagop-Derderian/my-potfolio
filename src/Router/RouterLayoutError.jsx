import React from "react";
import { Outlet } from "react-router-dom";
import VortexVideo1 from "./Error404/video/RedVortexCode.mp4";
import Error404 from "./Error404/image/Error404PageNotFound.jpg";
import "./Error404/AccessDenied.scss";

function RouterLayoutError() {
  let video = (
    <video className="bg-vid" autoPlay muted loop>
      <source src={VortexVideo1} />
    </video>
  );
  return (
    <>
      <Outlet />
      <div className="bgvid">{video}</div>
      <div className="accessDenied-div">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          src={Error404}
          alt="error404"
        />
      </div>
    </>
  );
}

export default RouterLayoutError;
