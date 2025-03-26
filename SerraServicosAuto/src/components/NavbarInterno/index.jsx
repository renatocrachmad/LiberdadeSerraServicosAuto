import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png"; // ✅ Importando a logo
import "./style.css";

const NavbarInterno = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Serra Serviços Auto" /> {/* ✅ Logo adicionada */}
        <h1>Serra Serviços Auto</h1>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/buscar-prestadores">Buscar Prestadores</Link>
        </li>
        <li>
          <Link to="/financeiro">Financeiro</Link>
        </li>
        <li>
          <Link to="/servicos">Meus Serviços</Link>
        </li>
        <li>
          <Link to="/perfil-prestador">Perfil Prestador</Link>
        </li>
        <li>
          <Link to="/">Sair</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarInterno;
