import React from "react";
import classes from "./Loading.module.scss";
function Loading() {
  return (
    <>
      <div className={classes["wrap-loader"]}>
        <div className={classes["loader"]}>
          <div className={classes["box"]}></div>
          <div className={classes["box"]}></div>
          <div className={classes["box"]}></div>
          <div className={classes["box"]}></div>
          <div className={classes["wrap-text"]}>
            <div className={classes["text"]}>
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className={classes["loader-text"]}>wait please</div>
      </div>
    </>
  );
}

export default Loading;
