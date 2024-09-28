import React from "react";
import "./Footer.css";
// import fb from "../../assets/fbimage.jpeg";
// import twitter from "../../assets/twitterimage.jpeg";
// import instagram from "../../assets/instimage.jpeg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer_links">
          <div className="sb__footer_links_div">
            <h4>For Business</h4>
            <a href="/">
              <p>Employer</p>
            </a>
            <a href="/">
              <p>Employee</p>
            </a>
          </div>

          <div className="sb__footer_links_div">
            <h4>Resources</h4>
            <a href="/">
              <p>Resource 1</p>
            </a>
            <a href="/">
              <p>Resource 2</p>
            </a>
            <a href="/">
              <p>Resource 3</p>
            </a>
          </div>

          <div className="sb__footer_links_div">
            <h4>Partners</h4>
            <a href="/">
              <p>Swing Tech</p>
            </a>
          </div>

          <div className="sb__footer_links_div">
            <h4>Company</h4>
            <a href="/">
              <p>About</p>
            </a>
            <a href="/">
              <p>Press</p>
            </a>
            <a href="/">
              <p>Careers</p>
            </a>
            <a href="/">
              <p>Contact</p>
            </a>
          </div>

          <div className="sb__footer_links_div">
            <h4>Coming soon on</h4>
            <div className="social_media">
              {/* <img src={fb} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
              <img src={instagram} alt="Instagram" /> */}
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        <hr />
        <div className="sb__footer_below">
          <div className="sb__footer_copyright">
            <p>
              &copy; {new Date().getFullYear()} HamsterPOS - All rights reserved.
            </p>
          </div>
          <div className="sb__footer_below_links">
            <a href="">
              <p>Term & Condition</p>
            </a>
            <a href="">
              <p>Privacy</p>
            </a>
            <a href="">
              <p>Security</p>
            </a>
            <a href="">
              <p>Cookie Declaration</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
