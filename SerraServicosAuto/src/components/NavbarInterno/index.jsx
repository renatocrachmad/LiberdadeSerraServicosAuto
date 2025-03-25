import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavbarInterno = () => {
  return (
    <nav className="navbar">
      <h1>Serra Serviços Auto</h1>
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
