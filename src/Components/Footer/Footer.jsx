import React from "react";
// import { useRef } from "react";
import "./Footer.scss";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function Footer() {
  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  return (
    <div id="Scrolldown" className="Footer-Main">
      <div className="align-items">
        <div className="Terms-div">
          <ul>
            <li>
              <a href="">TERMS & CONDITION</a>
            </li>
            <li
              style={{ width: "1px", height: "25px", backgroundColor: "grey" }}
            ></li>
            <li>
              <a href="">PRIVACY POLICY</a>
            </li>
          </ul>
        </div>
        <div className="MadeBy-div">
          HAGOP WITH PASSION BY ROMETHEME © 2022 ALL RIGHTS RESERVED
        </div>
        <div className="GoUp-div">
          <button onClick={handleClick} type="button">
            <MdOutlineKeyboardArrowUp className="iconUp" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
