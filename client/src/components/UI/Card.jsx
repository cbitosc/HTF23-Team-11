import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ name, des, img }) => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleDonateNowClick = () => {
    if (user) {
      // User is logged in, navigate to food donation route
      navigate("/dashboard");
    } else {
      // User is not logged in, navigate to signup route
      navigate("/signup");
    }
  };
  return (
    <div className="partner-card">
      <img src={img} alt="Ngo pic" />
      <div class="card-content">
        <h2 className="card-heading">{name}</h2>
        <p className="card-description">{des}</p>
        <button className="btn-card" onClick={handleDonateNowClick}>Donate Now</button>
      </div>
    </div>
  );
};

export default Card;
