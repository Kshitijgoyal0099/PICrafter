import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© {year} PICrafter. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-right"></div>
    </footer>
  );
}

export default Footer;
