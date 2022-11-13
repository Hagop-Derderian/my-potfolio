import React from 'react'
import './GreenStyles.scss'
function GreenCheckbox() {
  return (
    <div
      style={{ position: "relative", marginRight: "100px", marginTop: "40%" }}
    >
      <input type="checkbox" id="_checkbox3" />
      <label className="forCheckboxLabel3" for="_checkbox3">
        <div id="tick_mark"></div>
      </label>
    </div>
  );
}

export default GreenCheckbox