import React from "react";
import LeftComponent from "./LeftComponent";
import { DiCss3, DiJavascript, DiHtml5, DiReact } from "react-icons/di";

function LeftMap() {
  const title = [
    {
      title: "HTML",
      absolute: "0%",
      percentage: "90%",
      width: "90%",
      icon: <DiHtml5 className="left-icon" />,
    },
    {
      title: "CSS",
      absolute: "0%",
      percentage: "85%",
      width: "85%",
      icon: <DiCss3 className="left-icon" />,
    },
    {
      title: "JAVASCRIPT",
      absolute: "0%",
      percentage: "70%",
      width: "70%",
      icon: <DiJavascript className="left-icon" />,
    },
    {
      title: "REACT",
      absolute: "0%",
      percentage: "80%",
      width: "80%",
      icon: <DiReact className="left-icon" />,
    },
  ];
  return (
    <>
      {title.map((n) => (
        <LeftComponent
          key={n.title}
          titles={n.title}
          number={n.absolute}
          percentage={n.percentage}
          width={n.width}
          icons={n.icon}
        />
      ))}
    </>
  );
}

export default LeftMap;
