import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./style.css";

const NavbarInterno = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo Serra Serviços Auto" />
        <h1>Serra Serviços Auto</h1>
      </div>

      {/* 🍔 Botão Hamburguer */}
      <div className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
        <span className={`bar ${menuAberto ? "open" : ""}`}></span>
        <span className={`bar ${menuAberto ? "open" : ""}`}></span>
        <span className={`bar ${menuAberto ? "open" : ""}`}></span>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuAberto ? "active" : ""}`}>
        <li><Link to="/perfil-usuario" onClick={() => setMenuAberto(false)}>Perfil Usuario</Link></li>
        <li><Link to="/home" onClick={() => setMenuAberto(false)}>Home</Link></li>
        <li><Link to="/agendar-servico" onClick={() => setMenuAberto(false)}>Agendar Serviço</Link></li>
        <li><Link to="/servicos-agendados" onClick={() => setMenuAberto(false)}>Servicos Agendados</Link></li>
        <li><Link to="/financeiro" onClick={() => setMenuAberto(false)}>Financeiro</Link></li>
        <li><Link to="/servicos" onClick={() => setMenuAberto(false)}>Meus Serviços</Link></li>
        <li><Link to="/assinante" onClick={() => setMenuAberto(false)}>Assinante</Link></li>        
        <li><Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link></li>
        <li><Link to="/" onClick={() => setMenuAberto(false)}>Sair</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarInterno;
