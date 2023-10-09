import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="heading-footer">
        ShareThe<span>MEAL</span>
      </div>
      <div className="div1">
        <h4 className="footer-h4">Who We Are</h4>
        <Link to="/aboutus"><p className="footer-p">About Us</p></Link>
        <Link to="/ourvision"><p className="footer-p">Our Vision</p></Link>
        <Link><p className="footer-p">Contact</p></Link>
      </div>
      <div className="div2">
        <h4 className="footer-h4">Get Involved</h4>
        <Link className="link" to="/dashboard/food">
          <p className="footer-p">Request For Food</p>
        </Link>
        <p className="footer-p">Partner with Us</p>


      </div>
      <div className="div3">
        <h4 className='footer-h4 className="footer-p"'>Socials</h4>
        <div className="footer-icons">
          <p className="footer-p">
            <FaInstagram size={40} />
          </p>
          <p className="footer-p">
            <FaTwitter size={40} />
          </p>
          <p className="footer-p">
            <FaFacebook size={40} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
