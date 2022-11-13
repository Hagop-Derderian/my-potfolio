import React from "react";

function LeftComponent(props) {
  return (
    <div className="column-divs">
      <div data-aos="fade-up-left" className="left-icons">
        <h1 className="titles-left">{props.titles}</h1>
        <div className="icon-div-left">{props.icons}</div>
      </div>
      <div className="Line-div-left">
        <div className="for-percentage-div">
          <div className="Line-left-div" style={{ width: `${props.width}` }}>
            <div
              className="Percentage-div"
              style={{ right: `${props.number}` }}
            >
              <div className="Dot-div"></div>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ position: "absolute", right: "10px", marginTop: "80px" }}>
        {props.percentage}
      </h3>
    </div>
  );
}

export default LeftComponent;
