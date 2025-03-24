import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Landingpage from "./Landingpage/Landingpage";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
