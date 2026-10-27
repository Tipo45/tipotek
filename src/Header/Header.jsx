import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const goToSection = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${sectionId}`);
  };

  // Scroll to a section after navigating to /#projects or /#contact.
  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = location.hash.slice(1);

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.pathname, location.hash]);

  // Close with Escape and prevent background scrolling on mobile.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const renderNavLink = (item, mobile = false) => {
    const baseClass = mobile
      ? "block w-full rounded-xl px-5 py-4 text-center text-lg font-semibold text-slate-900 transition-colors hover:bg-primary hover:text-white"
      : "rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-primary lg:text-base";

    if (item.section) {
      return (
        <button
          type="button"
          onClick={() => goToSection(item.section)}
          className={`${baseClass} cursor-pointer`}
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link to={item.path} onClick={closeMenu} className={baseClass}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950 backdrop-blur-lg">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8 tablet:px-10 xl:px-12 2xl:px-0">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-primary text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-primary lg:text-3xl"
          aria-label="Tipotek home page"
        >
          Tipotek<span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-2 tablet:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group">
              {renderNavLink(item)}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-xl text-2xl text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary tablet:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <RiMenu2Line />}
        </button>
      </nav>

      <div
        className={`absolute inset-x-0 top-18 border-b border-white/10 bg-white px-5 py-6 shadow-xl transition-all duration-300 tablet:hidden ${isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-3 opacity-0"
          }`}
      >
        <ul className="mx-auto space-y-2">
          {navItems.map((item) => (
            <li key={item.label} className="w-full">
              {renderNavLink(item, true)}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;