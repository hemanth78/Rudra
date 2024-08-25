import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__heading">Like What You See?</h2>
        <h1 className="contact__title">Let's Talk</h1>
        <div className="contact__info">
          <a href="mailto:hemathsayimpiu78@gmail.com" className="contact__email">
            hemathsayimpiu78@gmail.com
          </a>
          <div className="contact__social">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr className="contact__divider" />
      </div>
    </section>
  );
};

export default Contact;
