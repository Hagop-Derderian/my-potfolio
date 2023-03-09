import React from "react";
import RightComponent from "./RightComponent";

import {
  SiRedux,
  SiSass,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";

function RightMap() {
  const title = [
    {
      title: "SASS",
      absolute: "0%",
      percentage: "87%",
      width: "87%",
      icon: <SiSass className="right-icon" />,
    },
    {
      title: "REDUX",
      absolute: "0%",
      percentage: "50%",
      width: "50%",
      icon: <SiRedux className="right-icon" />,
    },
    {
      title: "Premiere",
      absolute: "0%",
      percentage: "80%",
      width: "80%",
      icon: <SiAdobepremierepro className="right-icon-photoshop" />,
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
