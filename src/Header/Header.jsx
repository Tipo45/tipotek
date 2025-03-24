import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); 
  }; 

  const scrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); 
  };


  return (
    <section>
      <header className="fixed top-0 left-0 w-full h-15 bg-emerald-green shadow-md z-50 mb-60 px-4 tablet:max-xl:px-5 xl:px-30">
        <nav className="px-5 py-3 flex justify-between items-center">
          <Link to="/" className="text-white">
            <h3 className="text-3xl font-extrabold font-primary">
              Tipo&apos;s
            </h3>
          </Link>

          <div className="hidden tablet:flex items-center">
            <ul className="flex justify-around gap-8 text-xl text-white font-extrabold font-primary">
              <li>
                <Link to="/" onClick={closeMenu}>
                  <h4 className="hover:bg-white hover:text-black rounded-lg px-6">
                    About
                  </h4>
                </Link>
              </li>
              <li>
                <button onClick={scrollToProjects}>
                  <h4 className="hover:bg-white hover:text-black rounded-lg px-2">
                    Projects
                  </h4>
                </button>
              </li>
              <li>
                <button onClick={scrollToContact} >
                  <h4 className="hover:bg-white hover:text-black rounded-lg px-2">
                    Contact
                  </h4>
                </button>
              </li>
            </ul>
          </div>

          <button
            onClick={toggleMenu}
            className="text-2xl cursor-pointer text-white font-bold focus:outline-none tablet:hidden transition-transform duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-duration="2000"
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
          <div className="mt-2 text-xl text-center ">
            <ul className="space-y-15 text-2xl text-black font-bold font-primary px-60">
              <li>
                <Link to="/" onClick={closeMenu}>
                  <h4 className="hover:bg-white hover:text-black rounded-lg p-4">
                    About
                  </h4>
                </Link>
              </li>
              <li>
                <button onClick={scrollToProjects}>
                  <h4 className="hover:bg-white hover:text-black rounded-lg p-4">
                    Projects
                  </h4>
                </button>
              </li>
              <li>
                <button onClick={scrollToContact}>
                  <h4 className="hover:bg-white hover:text-black rounded-lg p-4">
                    Contact
                  </h4>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
