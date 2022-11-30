import React from "react";

function RightComponent(props) {
  const showAnimation = window.innerWidth > 1000;
  return (
    <div className="column-divs">
      {showAnimation ? (
        <div className="right-icons">
          <h1 className="titles-right">{props.titles}</h1>
          <div data-aos="fade-up-right" className="icon-div-right">
            {props.icons}
          </div>
        </div>
      ) : (
        <div data-aos="fade-up" className="right-icons">
          <h1 className="titles-right">{props.titles}</h1>
          <div className="icon-div-right">{props.icons}</div>
        </div>
      )}

      <div className="Line-div-right">
        <div className="for-percentage-div">
          <div className="Line-right-div" style={{ width: `${props.width}` }}>
            <div className="Percentage-div" style={{ left: `${props.number}` }}>
              <div className="Dot-div"></div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="right-h3">{props.percentage}</h3>
    </div>
  );
}

export default RightComponent;
