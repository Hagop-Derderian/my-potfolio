import React from "react";
import "./MidContent2.scss";

function MidContent2(props) {
  const showAnimation = window.innerWidth > 410;
  return (
    <div ref={props.x} className="Mid-content-2">
      <div className="Mid-inside-div">
        <div className="div-aboutMe">
          <div className="div-introduction">
            <h1>Hello, I'm Hagop Derderian.</h1>
            <h2>I am a Web Developer.</h2>
            <p>
              I am originally from Lebanon, currently living in Armenia. My
              focus of study is Web Development FrontEnd, and has been for
              nearly a year. I am looking to work with companies to grow both
              the company itself, and my range of expertise. My skills also
              include a modest understanding of computer hardware and
              programming.
            </p>
          </div>

          <div className="div-address" style={{ display: "flex" }}>
            <div className="div-ul">
              <ul
                className="left-ul"
                data-aos="fade-right"
                style={{
                  fontSize: "25px",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                <li>Education</li>
                <li>Age</li>
                <li>Phone Number</li>
                <li>Email</li>
              </ul>
              <ul
                className="right-ul"
                data-aos="flip-down"
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  fontSize: "25px",
                }}
              >
                <li>: Sahakyan Ads Agency</li>
                <li>: 23 Years Old</li>
                <li>: +374 94 166 552</li>
                <li>: hagop_111@outlook.com</li>
              </ul>
            </div>

            {showAnimation ? (
              <div className="animation-logos">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.facebook.com/hagop.derderian.3?mibextid=ZbWKwL"
                >
                  <div data-aos="zoom-in-right" className="First-logo"></div>
                </a>

                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://instagram.com/itsjake1_1?igshid=YmMyMTA2M2Y="
                >
                  <div data-aos="zoom-in" className="Second-logo"></div>
                </a>

                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://wa.me/+37494166552"
                >
                  <div data-aos="zoom-in-left" className="Third-logo"></div>
                </a>
              </div>
            ) : (
              <div className="animation-logos">
                <div data-aos="zoom-in" className="First-logo"></div>
                <div data-aos="zoom-in" className="Second-logo"></div>
                <div data-aos="zoom-in" className="Third-logo"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidContent2;
