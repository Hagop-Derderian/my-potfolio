import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function Footer() {
  const location = useLocation();

  let fixed = ["/MyProjects", "/MyContacts", "/"].includes(location.pathname);

  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  return (
    <div
      id="Scrolldown"
      className="Footer-Main"
      style={{
        display: fixed === false ? "none" : "block",
      }}
    >
      <div className="align-items">
        <div className="Terms-div">
          <ul>
            <li>
              <a href="terms and conditions">TERMS & CONDITION</a>
            </li>
            <li className="wall-li"></li>
            <li>
              <a href="privacy policy">PRIVACY POLICY</a>
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
