import React from "react";
import RedCheckbox from "./RedCheckbox";
import BlueCheckbox from "./BlueCheckbox";
import GreenCheckbox from "./GreenCheckbox";
function AllColors() {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div >
        <RedCheckbox />
      </div>
      <div >
        <BlueCheckbox />
      </div>
      <div >
        <GreenCheckbox />
      </div>
    </div>
  );
}

export default AllColors;
