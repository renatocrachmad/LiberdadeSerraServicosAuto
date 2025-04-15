import React from "react";
import logo from "../../assets/logo.png"; // Caminho correto para a imagem
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
