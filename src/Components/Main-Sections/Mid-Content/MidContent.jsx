import React from "react";
import "./MidContent.scss";
import LinesMap from "./LeftMap";
import RightMap from "./RightMap";

function MidContent(props) {
  return (
    <div className="Mid-Content" ref={props.x}>
      <h2 className="title">My Skills</h2>
      <div className="Mid-inside-div">
        <div data-aos="zoom-in-up" className="Left-div">
          <LinesMap />
        </div>
        <div data-aos="zoom-in-up" className="Right-div">
          <RightMap />
        </div>
      </div>
      {/* <div className="animation-language">
        <ProgressBar/>
      </div> */}
    </div>
  );
}

export default MidContent;
