import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="navbar">
        <button className="navbarButtons" onClick={() => navigate("/about")}>
          About
        </button>
        <button className="navbarButtons" onClick={() => navigate("/contact")}>
          Contact
        </button>
      </div>
      <h3>
        Discover our user-friendly Shopping Cart app built with React! Easily
        add and remove items to your cart by simply typing them in. Enjoy a
        hassle-free shopping experience with quick and convenient item
        management. Start filling your cart with the things you love!
      </h3>
      <div>
        <button
          onClick={() => navigate("/shoppingCart")}
          className="shoppingCart"
        >
          Shopping List
        </button>
      </div>
    </div>
  );
}

export default Home;
