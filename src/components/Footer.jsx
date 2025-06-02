import React, { useRef, useEffect } from "react";
import { Github, Linkedin, Mail, User } from "lucide-react";
import "../../public/assets/Footer.css";

const Footer = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "/" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="footer" id="about" ref={aboutRef}>
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/divyanshu-upadhyay-a227421b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/div-up"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
        </div>

        <div className="footer-menu">
          <a href="/#">HOME</a>
        </div>

        <div className="creator-info">
          <div className="creator">
            <User size={20} />
            <p>Divyanshu Upadhyay</p>
          </div>

          <div className="contact">
            <p>CONTACT ME:</p>
            <a href="mailto:divyanshukr786@gmail.com">
              <Mail size={16} />
              <span>divyanshukr786@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;