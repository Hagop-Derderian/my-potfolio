import React from "react";
import "./MidContent2.scss";

function MidContent2() {
  const showAnimation = window.innerWidth > 410;
  return (
    <div className="Mid-content-2">
      <div className="Mid-inside-div">
        <div className="div-aboutMe">
          <div className="div-introduction">
            <h1>Hello, I'm Hagop Derderian.</h1>
            <h2>I am Web Developer.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              laudantium, veniam aperiam ducimus qui quidem doloribus vel!
              Deserunt sed impedit temporibus in ullam accusamus hic quae, qui
              voluptas, voluptatem reprehenderit.
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
                <li>AGE</li>
                <li>ADDRESS</li>
                <li>PHONE</li>
                <li>EMAIL</li>
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
                <li>: 22 Years</li>
                <li>: Armenia,kotayq,Aramus</li>
                <li>: +374 166 552</li>
                <li>: hagop_111@outlook.com</li>
              </ul>
            </div>
            
            {showAnimation ? (
              <div className="animation-logos">
                <div data-aos="zoom-in-right" className="First-logo"></div>
                <div data-aos="zoom-in" className="Second-logo"></div>
                <div data-aos="zoom-in-left" className="Third-logo"></div>
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
