import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> ホーム </Link>
          <Link to="/menu"> メニュー </Link>
          <Link to="/about">  LibeolPizzaとは </Link>
          <Link to="/contact"> お問い合わせ </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> ホーム </Link>
        <Link to="/menu"> メニュー </Link>
        <Link to="/about"> LibeolPizzaとは </Link>
        <Link to="/contact"> お問い合わせ </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
