import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
    closeMenu();
  };

  // Handle hash changes on page load
  useEffect(() => {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
      closeMenu();
    };
  
    const handleHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash && (hash === "projects" || hash === "contact")) {
        scrollToSection(hash);
      }
    };
  
    handleHash();
    window.addEventListener("hashchange", handleHash);
  
    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []); // Now no dependencies needed

  return (
    <section>
      <header className="fixed top-0 left-0 w-full h-15 bg-emerald-green shadow-md z-50 mb-60 px-4 tablet:max-xl:px-5 xl:px-30">
        <nav className="px-5 py-3 flex justify-between items-center">
          <Link to="/" className="text-white">
            <h3
              className="text-3xl font-extrabold font-primary"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Tipotek
            </h3>
          </Link>

          <div className="hidden tablet:flex items-center">
            <ul className="flex justify-around gap-8 text-xl text-white font-extrabold font-primary">
              <li data-aos="zoom-in" data-aos-delay="1500">
                <Link to="/about">
                  <h4 className="hover:bg-white hover:text-black rounded-lg px-6">
                    About
                  </h4>
                </Link>
              </li>
              <li data-aos="zoom-in" data-aos-delay="1500">
                <Link
                  to="/#projects"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}}
                >
                  <h4 className="hover:bg-white hover:text-black rounded-lg px-2">
                    Projects
                  </h4>
                </Link>
              </li>
              <li data-aos="zoom-in" data-aos-delay="1500">
                <Link
                  to="/#contact"
                  
                >
                  <h4 className="hover:bg-white hover:text-black rounded-lg px-2">
                    Contact
                  </h4>
                </Link>
              </li>
            </ul>
          </div>

          <button
            onClick={toggleMenu}
            className="text-2xl cursor-pointer text-white font-bold focus:outline-none tablet:hidden transition-transform duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            {isOpen ? <FaTimes /> : <RiMenu2Line />}
          </button>
        </nav>

        <div
          className={`fixed top-15 right-0 w-full h-100 bg-emerald-200 py-6 px-8 shadow-lg
          transform transition-all duration-500 ease-in-out tablet:hidden ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          }`}
        >
          <div className="mt-2 text-xl flex justify-center ">
            <ul className="space-y-15 text-2xl text-black font-bold font-primary px-60">
              <li
                className={`transition-all duration-500 ease-in-out transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "0.5s" : "0s" }}
              >
                <Link to="/about" onClick={closeMenu}>
                  <h4 className="hover:bg-white hover:text-black rounded-lg p-4 text-center">
                    About
                  </h4>
                </Link>
              </li>
              <li
                className={`transition-all duration-500 ease-in-out transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "0.7s" : "0s" }}
              >
                <Link
                  to="/#projects"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      scrollToSection("projects");
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  <h4 className="hover:bg-white hover:text-black rounded-lg p-4 text-center">
                    Projects
                  </h4>
                </Link>
              </li>
              <li
                className={`transition-all duration-500 ease-in-out transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "0.9s" : "0s" }}
              >
                <Link
                  to="/#contact"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      scrollToSection("contact");
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  <h4 className="hover:bg-white hover:text-black rounded-lg p-4 text-center">
                    Contact
                  </h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;