import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Tipo from "../Welcomedisplay/Tipo";
import Contact from "../Welcomedisplay/Contact";
import Portfolio from "../Welcomedisplay/Portfolio";

const Landingpage = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollTo = (position) => {
    window.scrollTo({
      top: position === "top" ? 0 : document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setIsAtTop(false);
    } else if (scrollTop === 0) {
      setIsAtTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="m-0 p-0 box-border overflow-hidden">
      <Header />
      <main className="py-4 px-0 tablet:max-xl:px-5 xl:px-30 rounded-lg">
        <Tipo />
        <Portfolio />
        <Contact />
      </main>
      {/* <Footer /> */}
      <button
        className="fixed bottom-8 right-8 p-4 bg-darker-emerald-green text-white rounded-full shadow-lg cursor-pointer hover:bg-darker-emerald-green transition-all duration-300 z-50 tablet:invisible"
        data-aos="fade-left"
        data-aos-duration="500"
        onClick={() => scrollTo(isAtTop ? "bottom" : "top")}
        aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
      >
        {isAtTop ? <FaArrowDown size={24} /> : <FaArrowUp size={24} />}
      </button>
    </div>
  );
};

export default Landingpage;
