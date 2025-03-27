import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png"; // ✅ Importando a logo
import "./style.css";

const NavbarInterno = () => {
  const [localidade, setLocalidade] = useState("Petrópolis, RJ"); // Estado inicial

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

      {/* 🔥 Campo de seleção de localidade */}
      <div className="localidade-container">
        <label htmlFor="localidade">Localidade:</label>
        <select
          id="localidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
        >
          <option value="Petrópolis, RJ">Petrópolis, RJ</option>
          {/* Futuramente, mais localidades podem ser adicionadas aqui */}
        </select>
      </div>
    </nav>
  );
};

export default NavbarInterno;
