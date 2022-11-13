import React from "react";
import { Outlet } from "react-router-dom";
import MatrixCode1 from "./HomePage/Video/RedRainCode.mp4";
import MatrixCode2 from "./HomePage/Video/BlueRainCode.mp4";
import MatrixCode3 from "./HomePage/Video/GreenRainCode.mp4";

function RouterLayout() {
  let video = (
    <video className="bg-vid" autoPlay muted loop>
      <source src={MatrixCode1} />
    </video>
  );
  let color = localStorage.getItem("Color");
  color = JSON.parse(color);
  if (color === "blue") {
    video = (
      <video className="bg-vid" autoPlay muted loop>
        <source src={MatrixCode2} />
      </video>
    );
  } else if (color === "green") {
    video = (
      <video className="bg-vid" autoPlay muted loop>
        <source src={MatrixCode3} />
      </video>
    );
  }
  return (
    <>
      <Outlet />
      <div className="bgvid">{video}</div>
    </>
  );
}

export default RouterLayout;
