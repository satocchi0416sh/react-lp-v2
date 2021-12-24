import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> libeol Pizza </h1>
        <p> あなたにはあなたのピザを</p>
        <Link to="/menu">
          <button> 早速注文する </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
