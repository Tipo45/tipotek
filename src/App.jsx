import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Landingpage from "./Landingpage/Landingpage";
import { useEffect } from "react";
import About from "./Welcomedisplay/About";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
