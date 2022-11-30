import "./App.scss";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer";
import Home from "./Router/HomePage/Home";
import MyProjects from "./Router/MyProjects/MyProjects";
import MyContacts from "./Router/MyContacts/MyContacts";
import RouterLayout from "./Router/RouterLayout";
import RouterLayoutError from "./Router/RouterLayoutError";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  let [colorId, setColorId] = useState("red");

  useEffect(() => {
    let color = localStorage.getItem("Color");
    AOS.init();
    AOS.refresh();
    if (color === null) {
      localStorage.setItem("Color", JSON.stringify("red"));
    }
    color = JSON.parse(color);
    if (color === "blue") {
      setColorId("blue");
    } else if (color === "green") {
      setColorId("green");
    }
  }, []);

  return (
    <div id={colorId}>
    
      <Header />
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route index element={<Home />} />
          <Route path="/MyProjects" element={<MyProjects />} />
          <Route path="/MyContacts" element={<MyContacts />} />
        </Route>
        <Route path="*" element={<RouterLayoutError />} />
      </Routes>
      <Footer />
      <div className="Head-div">
        <div className="frame-right"></div>
        <div className="frame-left"></div>
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
      </div>
    </div>
  );
}

export default App;