import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MenuSanduiche = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Botão hamburguer FORA do menuRef */}
      <button
        className={`hamburguer ${menuAberto ? "open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setMenuAberto(!menuAberto);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu lateral DENTRO do ref */}
      <nav
        className={`menu-lateral ${menuAberto ? "ativo" : ""}`}
        ref={menuRef}
      >
        <ul>
          <li>
            <Link to="/perfil-usuario" onClick={() => setMenuAberto(false)}>
              Perfil Usuario
            </Link>
          </li>
          <li>
            <Link to="/home" onClick={() => setMenuAberto(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/agendar-servico" onClick={() => setMenuAberto(false)}>
              Agendar Serviço
            </Link>
          </li>
          <li>
            <Link to="/servicos-agendados" onClick={() => setMenuAberto(false)}>
              Serviços Agendados
            </Link>
          </li>
          <li>
            <Link to="/financeiro" onClick={() => setMenuAberto(false)}>
              Financeiro
            </Link>
          </li>
          <li>
            <Link to="/servicos" onClick={() => setMenuAberto(false)}>
              Meus Serviços
            </Link>
          </li>
          <li>
            <Link to="/assinante" onClick={() => setMenuAberto(false)}>
              Assinante
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={() => setMenuAberto(false)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuAberto(false)}>
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuSanduiche;
