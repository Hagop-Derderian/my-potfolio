import React from "react";
import Topcontent from "../../Components/Main-Sections/Top-Content/TopContent";
import Midcontent from "../../Components/Main-Sections/Mid-Content/MidContent";
import Midcontent2 from "../../Components/Main-Sections/Mid-Content2/MidContent2";
import Bottomcontent from "../../Components/Main-Sections/Bottom-Content/BottomContent";

import { useRef } from "react";
function Home() {


  const ref = useRef(null);
  return (
    <>
      <Topcontent x={ref} />
      <Midcontent x={ref} />
      <Midcontent2 />
      <Bottomcontent /> 
    </>
  );
}

export default Home;
