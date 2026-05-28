import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Landingpage from "./Landingpage/Landingpage";
import { useEffect } from "react";
import About from "./Welcomedisplay/About";
import NotFound from "./Not-found";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;