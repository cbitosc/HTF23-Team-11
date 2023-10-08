import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import { Link } from "react-router-dom";


const Navbar = ({ token }) => {
  const { id } = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="main">
      <div className="logo">
        <Link to="/"><h2>
          ShareThe
          <span>MEAL</span>
        </h2></Link>
      </div>
      <div className={showMenu ? "nav-items mobile-menu-link" : "nav-items"}>
        <ul>
          <li>
            <Link to="/">
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              Home
            </a></Link>
          </li>
          <li>
            <Link to="/aboutus">
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              About Us
            </a></Link>
          </li>
          <li>
            <Link to="/ourvision">
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              Our Vision
            </a>
            </Link>
          </li>
          <li>
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="header-login">
        {
          // if token is present then show logout button else show login and signup button
          token ? (
            <div>
              <Link className="link" to="/dashboard/food">
                <button className="btn-nav">Dashboard</button>
              </Link>
              <Link className="link" to="/cartsection">
                <button className="btn-nav">Cart</button>
              </Link>
            </div>
          ) : (
            <div className="l-btn">
              <Link  className="link" to="/login">
                <button className="btn-nav">Login</button>
              </Link>
              <Link className="link" to="/signup">
                <button className="btn-nav">Signup</button>
              </Link>
            </div>
          )
        }
        <div className="hamburger-menu">
          <a href="#" onClick={handleClick}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;