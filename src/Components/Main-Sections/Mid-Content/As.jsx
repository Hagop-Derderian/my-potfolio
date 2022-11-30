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
          <div className="progressbar-title">
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
              <span className="progressbar__text shadow-react">60%</span>
            </div>
            <span className="Name-third">SASS / CSS</span>
          </div>

          <div className="progressbar-title ">
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
              <span className="progressbar__text shadow-react">90%</span>
            </div>
            <span className="Name-second">Javascript / React</span>
          </div>

          <div className="progressbar-title">
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
              <span className="progressbar__text shadow-react">100%</span>
            </div>

            <span className="Name-first">HTML / CSS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default As;
