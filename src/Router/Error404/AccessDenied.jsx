import React from "react";
import Error404 from "./image/accessDenied.jpg";

import "./AccessDenied.scss";
function AccessDenied() {
  return (
    <div>
      <div className="bgvid">
        <div className="accessDenied-div">
          <img src={Error404} alt="error404" />
        </div>
      </div>
    </div>
  );
}

export default AccessDenied;
