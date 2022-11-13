import React, { useEffect } from "react";
import "./BottomContent.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function BottomContent() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="Bottom-Content">
      <div data-aos="zoom-in" className="inside-div">
        <div data-aos="fade-left" className="bottom-div-content">
          <h1>Let's Project & Get a Free Consultation.</h1>
          <div className="div-form">
            <form action="">
              <div className="ForSubmit-div">
                <input
                  className="ForEmail"
                  required
                  type="email"
                  placeholder="Your Email"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomContent;
