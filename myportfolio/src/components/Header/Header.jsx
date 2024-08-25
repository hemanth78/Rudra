import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from './Logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuFullyOpen, setIsMenuFullyOpen] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarClass, setNavbarClass] = useState("navbar-slide-down");

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
    setNavbarClass(isMenuOpen ? "navbar-menu-open" : "navbar-slide-down");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setNavbarClass(window.scrollY > lastScrollY ? "navbar-slide-up" : "navbar-slide-down");
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const handleTransitionEnd = useCallback(() => {
    setIsMenuFullyOpen(isMenuOpen);
    setAnimateLinks(isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar ${navbarClass}`}>
        <div className="navbar-logo">
          <Link to="/"><img className="logo" src={logo} alt="" /></Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          &#9776;
        </button>
      </nav>
      <div className={`navbar-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu} onTransitionEnd={handleTransitionEnd}>
        <div
          className={`navbar-links ${isMenuFullyOpen ? "show-links" : ""} ${animateLinks ? "animate-links" : ""}`}
          onClick={(e) => e.stopPropagation()}>
          {navLinks.map((link, index) => (
            <Link key={link.name} to={link.path} onClick={closeMenu} style={{ animationDelay: `${index * 0.3}s` }}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
