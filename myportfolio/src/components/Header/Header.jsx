import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div className="header__nav-button">
        <button className="nav-toggle-button">
          <span className="nav-icon">&#9776;</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
