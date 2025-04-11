import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section1">
          <img
            src="/images/logo.svg"
            alt="Swiggy Logo"
            className="footer-logo"
          />
          <p>© 2025 Swiggy Limited</p>
        </div>
        <div className="griddisplay">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Swiggy Genie</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact us</h4>
            <ul>
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Available in:</h4>
            <ul>
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Life at Swiggy</h4>
            <ul>
              <li>Explore With Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Social Links</h4>
            <ul className="social-links">
              <li>
                <img src="/images/icon-facebook.svg" />
              </li>
              <li>
                <img src="/images/icon-instagram.svg" />
              </li>
              <li>
                <img src="/images/icon-pinterest.svg" />
              </li>
              <li>
                <img src="/images/Linkedin.svg" />
              </li>
              <li>
                <img src="/images/Twitter.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>For a better experience, download the Swiggy app now</p>
        <div className="app-links">
          <img src="/images/apple.png" alt="App Store" />
          <img src="/images/google.png" alt="Google Play" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
