import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import "../../public/assets/Navbar.css";

const Navbar = ({ currentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">SORTING VISUALIZER</Link>
        </div>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link
            to="/"
            className={currentSection === "home" ? "active" : ""}
            onClick={closeMenu}
          >
            HOME
          </Link>


          <Link
            to="/visualizer"
            className={location.pathname === "/visualizer" ? "active" : ""}
            onClick={closeMenu}
          >
            GET STARTED
          </Link>
        </nav>

        <div className="menu-btn" onClick={toggleMenu}>
          <Menu size={24} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;