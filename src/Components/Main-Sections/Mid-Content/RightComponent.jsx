import React from "react";

function RightComponent(props) {
  return (
    <div className="column-divs">
      <div data-aos="fade-up-right" className="right-icons">
        <h1 className="titles-right">{props.titles}</h1>
        <div className="icon-div-right"> {props.icons}</div>
      </div>

      <div className="Line-div-right">
        <div className="for-percentage-div">
          <div className="Line-right-div" style={{ width: `${props.width}` }}>
            <div className="Percentage-div" style={{ left: `${props.number}` }}>
              <div className="Dot-div"></div>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ position: "absolute", left: "10px", marginTop: " 80px" }}>
        {props.percentage}
      </h3>
    </div>
  );
}

export default RightComponent;
