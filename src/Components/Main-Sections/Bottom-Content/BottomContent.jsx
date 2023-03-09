import React from "react";
import "./BottomContent.scss";

function BottomContent() {
  return (
    <div className="Bottom-Content">
      <div className="inside-div">
        <div data-aos="fade-up" className="bottom-div-content">
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
