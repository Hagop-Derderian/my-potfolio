import React from "react";

function LeftComponent(props) {
  const showAnimation = window.innerWidth > 1000;
  return (
    <div className="column-divs">
      {showAnimation ? (
        <div className="left-icons">
          <h1 className="titles-left">{props.titles}</h1>
          <div data-aos="fade-up-left" className="icon-div-left">
            {props.icons}
          </div>
        </div>
      ) : (
        <div data-aos="fade-up" className="left-icons">
          <h1 className="titles-left">{props.titles}</h1>
          <div className="icon-div-left">{props.icons}</div>
        </div>
      )}

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

      <h3 data-aos="zoom-in-up" className="left-h3">
        {props.percentage}
      </h3>
    </div>
  );
}

export default LeftComponent;
