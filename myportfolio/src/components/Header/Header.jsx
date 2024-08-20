import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle menu open/close for mobile view
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  // Render links based on window width
  const renderLinks = () => (
    <>
      <Link to="/" onClick={isMenuOpen ? toggleMenu : null}>
        Home
      </Link>
      <Link to="/about" onClick={isMenuOpen ? toggleMenu : null}>
        About
      </Link>
      <Link to="/projects" onClick={isMenuOpen ? toggleMenu : null}>
        Projects
      </Link>
      <Link to="/contact" onClick={isMenuOpen ? toggleMenu : null}>
        Contact
      </Link>
    </>
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">My Portfolio</Link>
      </div>
      {windowWidth > 768 ? (
        <div className="nav-links">{renderLinks()}</div>
      ) : (
        <>
          <div className="nav-toggle-button" onClick={toggleMenu}>
            &#9776;
          </div>
          {isMenuOpen && <div className="nav-links-mobile">{renderLinks()}</div>}
        </>
      )}
    </nav>
  );
};

export default Header;
