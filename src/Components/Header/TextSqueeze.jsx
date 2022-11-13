import React, { useState } from "react";
import MovingComponent from "react-moving-text";
import { BiDotsHorizontalRounded } from "react-icons/bi";
function TextSqueeze(props) {
  const [moving, setMoving] = useState(false);

  return (
    <a
      onMouseLeave={() => setMoving(false)}
      onMouseEnter={() => setMoving(true)}
      href=""
      style={{ display: "flex" }}
    >
      {moving === true ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MovingComponent
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            type="squeezeMix"
            duration="300ms"
            direction="normal"
            timing="ease-in"
            iteration="infinte"
            fillMode="none"
          >
            {props.name}
            <BiDotsHorizontalRounded style={{ margin: "auto" }} />
          </MovingComponent>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {props.name}
          <BiDotsHorizontalRounded style={{ margin: "auto" }} />
        </div>
      )}
    </a>
  );
}

export default TextSqueeze;
