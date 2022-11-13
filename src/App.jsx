import "./App.scss";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer";
import AccessDenied from "./Router/Error404/AccessDenied";
import Home from "./Router/HomePage/Home";
import MyProjects from "./Router/MyProjects/MyProjects";
import MyContacts from "./Router/MyContacts/MyContacts";
import RouterLayout from "./Router/RouterLayout";
import RouterLayoutError from "./Router/RouterLayoutError";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [colorId, setColorId] = useState("red");

  useEffect(() => {
    let color = localStorage.getItem("Color");
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
          <Route path="/myProjects" element={<MyProjects />} />
          <Route path="/myContacts" element={<MyContacts />} />
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
