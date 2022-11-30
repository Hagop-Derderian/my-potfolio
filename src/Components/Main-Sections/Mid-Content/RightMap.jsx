import React from "react";
import RightComponent from "./RightComponent";
import { DiJavascript } from "react-icons/di";
import { SiRedux, SiSass, SiAdobephotoshop } from "react-icons/si";

function RightMap() {
  const title = [
    {
      title: "SASS",
      absolute: "0%",
      percentage: "90%",
      width: "90%",
      icon: <SiSass className="right-icon" />,
    },
    {
      title: "REDUX",
      absolute: "0%",
      percentage: "90%",
      width: "90%",
      icon: <SiRedux className="right-icon" />,
    },
    {
      title: "JS DOM",
      absolute: "0%",
      percentage: "80%",
      width: "80%",
      icon: <DiJavascript className="right-icon" />,
    },
    {
      title: "Photoshop",
      absolute: "0%",
      percentage: "80%",
      width: "80%",
      icon: <SiAdobephotoshop className="right-icon-photoshop" />,
    },
  ];

  return (
    <>
      {title.map((n) => (
        <RightComponent
          key={n.title}
          titles={n.title}
          number={n.absolute}
          percentage={n.percentage}
          width={n.width}
          icons={n.icon}
          url={n.imageURL}
        />
      ))}
    </>
  );
}

export default RightMap;
