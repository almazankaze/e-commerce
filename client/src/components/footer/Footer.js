import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-info-container">
              <h4>MeTech@example.com</h4>
            </div>
            <div className="footer-info-container">
              <h4>0555-010101</h4>
            </div>
            <div className="footer-info-container">
              <h4>123 fake st, Nowhere</h4>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Useful Links</h4>
            <div className="footer-links">
              <div className="footer-link">
                <p>Terms & Conditions</p>
              </div>
              <div className="footer-link">
                <p>New Products</p>
              </div>
              <div className="footer-link">
                <p>Best sales</p>
              </div>
              <div className="footer-link">
                <p>Secure payment</p>
              </div>
              <div className="footer-link">
                <p>Services</p>
              </div>
              <div className="footer-link">
                <p>Delivery</p>
              </div>
              <div className="footer-link">
                <p>Legal Notice</p>
              </div>
              <div className="footer-link">
                <p>About us</p>
              </div>
              <div className="footer-link">
                <p>Careers</p>
              </div>
              <div className="footer-link">
                <p>Contact us</p>
              </div>
              <div className="footer-link">
                <p>Stores</p>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Be the first to know it</h4>
            <form>
              <input type="email" className="" required />
            </form>
            <div className="footer-social-icons">
              <div className="social-icon icon-inst">
                <InstagramIcon />
              </div>
              <div className="social-icon icon-face">
                <FacebookOutlinedIcon />
              </div>
              <div className="social-icon icon-twit">
                <TwitterIcon />
              </div>
              <div className="social-icon icon-you">
                <YouTubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
