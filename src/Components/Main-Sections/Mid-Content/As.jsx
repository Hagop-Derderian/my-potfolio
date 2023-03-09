import React from "react";
import { useState, useEffect, useRef } from "react";
import "./MidContent";

function As() {
  let [data, setData] = useState(false);
  const hiddenRef = useRef();
  const hiddenRef2 = useRef();
  const hiddenRef3 = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (
      window.pageYOffset + window.innerHeight >=
      hiddenRef.current.offsetTop
    ) {
      window.removeEventListener("scroll", scrollHandler);
      setData(true);
    }
  };
  return (
    <>
      <div className="container">
        <div className="for-progressBar">
          <div
            data-aos-duration="1000"
            data-aos="zoom-in"
            className="progressbar-title "
          >
            <div className="progressbar" ref={hiddenRef2}>
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle2 circle-react shadow-react"
                  style={{
                    animation:
                      data === true
                        ? `anim_circle-react 3s ease-in-out forwards`
                        : "",
                  }}
                ></circle>
              </svg>
              <span className="progressbar__text shadow-react">80%</span>
            </div>
            <span className="Name-second">Javascript / React</span>
          </div>

          <div
            data-aos-duration="1000"
            data-aos="zoom-in"
            className="progressbar-title"
          >
            <div className="progressbar" ref={hiddenRef}>
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle1 circle-react shadow-react"
                  style={{
                    animation:
                      data === true
                        ? `anim_circle-react 3s ease-in-out forwards`
                        : "",
                  }}
                ></circle>
              </svg>
              <span className="progressbar__text shadow-react">90%</span>
            </div>
            <span className="Name-third">Photoshop/Premiere</span>
          </div>

          <div
            data-aos-duration="1000"
            data-aos="zoom-in"
            className="progressbar-title"
          >
            <div className="progressbar" ref={hiddenRef3}>
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle3 circle-react shadow-react"
                  style={{
                    animation:
                      data === true
                        ? `anim_circle-react 3s ease-in-out forwards`
                        : "",
                  }}
                ></circle>
              </svg>
              <span className="progressbar__text shadow-react">95%</span>
            </div>

            <span className="Name-first">HTML / CSS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default As;
