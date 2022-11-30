import React from "react";

import "./TopContent.scss";
import { BiDownArrow } from "react-icons/bi";

function TopContent(props) {
  const handleClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: props.x.current.offsetTop - 100,
    });
  };

  return (
    <div className="relative-div">
      <div className="inside-Content">
        <div data-aos="zoom-in-top" className="Text-div">
          <h1>
            ~ FrontEnd ~<br />
            ~Web Developer~
          </h1>
          <button onClick={handleClick}>
            Learn More <br />
            <BiDownArrow
              style={{ width: "20px", height: "20px", color: "grey" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
