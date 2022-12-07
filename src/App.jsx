import "./App.scss";
import "./index.scss";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer";
import Home from "./Router/HomePage/Home";
import MyProjects from "./Router/MyProjects/MyProjects";
import MyContacts from "./Router/MyContacts/MyContacts";
import RouterLayout from "./Router/RouterLayout";
import RouterLayoutError from "./Router/RouterLayoutError";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
// import ReactAudioPlayer from "react-audio-player";
import BgThemeSong from "./Detroit-Convention-Center-Ambient.mp3";
// import ReactAudioPlayer from "react-audio-player";
function App() {
  let [colorId, setColorId] = useState("red");
  const [sound, setSound] = useState(false);
  const musicRef = useRef(null);
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
        <audio
          className=""
          src={BgThemeSong}
          controls={false}
          type={"audio/mp3"}
          loop
          ref={musicRef}
        ></audio>
        <button
          className="SoundBtn"
          onClick={() => {
            musicRef.current.volume = 0.3;
            setSound(!sound);
            if (sound === true) {
              musicRef.current.pause();
            } else musicRef.current.play();
          }}
        >
          {sound === false ? (
            <GiSoundOff className="Sound-icon" />
          ) : (
            <GiSoundOn className="Sound-icon" />
          )}
        </button>

        <div className="frame-right"></div>
        <div className="frame-left"></div>
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
      </div>
    </div>
  );
}

export default App;
