import React from "react";
import "./BlueStyles.scss";
function BlueCheckbox() {
  return (
    <div  style={{ position: "relative" , marginRight:"100px",marginTop:"40%" }}>
      <input type="checkbox" id="_checkbox2" />
      <label className="forCheckboxLabel2" for="_checkbox2">
        <div id="tick_mark"></div>
      </label>
    </div>
  );
}

export default BlueCheckbox;
