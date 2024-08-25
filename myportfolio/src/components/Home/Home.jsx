import React from "react";
import "./Home.css";
import About from "../About/About";
const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Hello there!</h1>
          <p className="hero-subheading">
            I'm Hemanth Sayimpu
            <br />
            a creative Frontend
            <br />
            developer.
          </p>
        </div>
        <div className="scroll-indicator"></div>
      </header>
      <main className="main-content">
        <About />
      </main>
    </div>
  );
};

export default Home;
