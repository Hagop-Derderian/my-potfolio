import React from "react";
import "./RedStyles.scss";
function RedCheckbox() {
  return (
    <div
      style={{ position: "relative", marginRight: "100px", marginTop: "40%" }}
    >
      <input type="checkbox" id="_checkbox1" />
      <label className="forCheckboxLabel" for="_checkbox1">
        <div id="tick_mark"></div>
      </label>
    </div>
  );
}

export default RedCheckbox;
