import React from "react";
import { Link} from "react-router-dom";
import "./Header.scss";
import Hacker from "./images//Hacker-icon.jpg";
import { useState } from "react";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

function Header() {
  const [open, setOpen] = useState(true);

  return (
    <header className="Header-mainDiv">
      <div className="Header-insideDiv">
        <div
          data-aos-duration="1000"
          data-aos="zoom-in-right"
          className="left-div"
        >
          <h2>
            ANON<span>YMOUS</span>
          </h2>
          <img className="Reaper" src={Hacker} alt="Reaper" />
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-out-down"
          className="mid-div"
        >
          <div className="inside-frame">
            <div className="div-nav">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home Page</Link>
                  </li>
                  <li>
                    <Link to="/MyProjects">My Projects</Link>
                  </li>
                  <li>
                    <Link to="/MyContacts">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div
          data-aos-duration="1000"
          data-aos="zoom-out-left"
          className="right-div"
        >
          {!open ? (
            <div
              className="Opened-div"
            >
              <button
                onClick={() => {
                  localStorage.setItem("Color", JSON.stringify("red"));
                  window.location.reload();
                }}
                className="Opened-red"
                data-aos-duration="2300"
                data-aos="zoom-in"
              >
                <button className="Button-Absolute"></button>
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("Color", JSON.stringify("blue"));
                  window.location.reload();
                }}
                className="Opened-blue"
                data-aos-duration="1500"
                data-aos="zoom-in"
              >
                <button className="Button-Absolute"></button>
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("Color", JSON.stringify("green"));
                  window.location.reload();
                }}
                className="Opened-green"
                data-aos-duration="500"
                data-aos="zoom-in"
              >
                <button className="Button-Absolute"></button>
              </button>
              <button
                className="Button-to-close "
                onClick={() => setOpen(!open)}
              >
                <MdOutlineArrowForwardIos className="Arrow-icon-forward" />
              </button>
            </div>
          ) : (
            <button
              data-aos="fade-right"
              onClick={() => setOpen(!open)}
              className="Button-to-open "
            >
              <MdArrowBackIos className="Arrow-icon-back" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
