import React, { useRef } from "react";
import Yt from "./image/YoutubePic.PNG";
import Wix from "./image/Wix.PNG";
import Registration from "./image/registration.PNG";
import YerevanCity from "./image/YerevanCity.PNG";
import Richard from "./image/Richard.PNG";
import { BiDownArrow } from "react-icons/bi";
import "./MyProjects.scss";
function MyProjects() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div className="main-div">
      <div className="top-pic-projects">
        <div className="inside-content-div">
          <h1>
            ~ FrontEnd ~<br />
            ~My Projects~
          </h1>
          <button onClick={handleClick}>
            Learn More <br />
            <BiDownArrow
              style={{ width: "20px", height: "20px", color: "grey" }}
            />
          </button>
        </div>
      </div>
      <div ref={ref} className="Mid-SectionDiv">
        <div className="title-div">
          <h1 className="title"> ~ My All Projects ~</h1>
        </div>
        <div className="content-MainDiv">
          <div className="FirstProjectDiv">
            <h2>YouTube project</h2>
            <img src={Yt} alt="youtube" />
            <button>Click here to View Demo project</button>
          </div>

          <div className="SecondProjectDiv">
            <h2>Wix Project</h2>
            <img src={Wix} alt="wix" />
            <button>Click here to View Demo project</button>
          </div>

          <div className="ThirdProjectDiv">
            <h2>YerevanCity Project</h2>
            <img src={YerevanCity} alt="yerevancity" />
            <button>Click here to View Demo project</button>
          </div>

          <div className="FourthProjectDiv">
            <h2>Registration Project</h2>
            <img src={Registration} alt="" />
            <button>Click here to View Demo project</button>
          </div>

          <div className="FifthProjectDiv">
            <h2>Richard Project</h2>
            <img src={Richard} alt="youtube" />
            <button>Click here to View Demo project</button>
          </div>

          <div className="SixthProjectDiv">
            <h2>TodoList Project</h2>
            <img src={Yt} alt="youtube" />
            <button>Click here to View Demo project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
