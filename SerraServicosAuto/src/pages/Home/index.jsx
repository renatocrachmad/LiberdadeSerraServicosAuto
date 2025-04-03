import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const propagandas = [
  {
    id: 1,
    nome: "Troca de óleo rápida",
    imagem: "/assets/propaganda1.jpg",
    link: "https://empresa1.com",
  },
  {
    id: 2,
    nome: "Pintura Automotiva Premium",
    imagem: "/assets/propaganda2.jpg",
    link: "https://empresa2.com",
  },
  {
    id: 3,
    nome: "Oficina Mecânica 24h",
    imagem: "/assets/propaganda3.jpg",
    link: "https://empresa3.com",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Serra Serviços Auto</h2>

      {/* Container de Propagandas */}
      <div className="propaganda-container">
        <h3>Parceiros e Ofertas</h3>
        {propagandas.map((propaganda) => (
          <a
            key={propaganda.id}
            href={propaganda.link}
            target="_blank"
            rel="noopener noreferrer"
            className="propaganda-item"
          >
            <img
              src={propaganda.imagem}
              alt={propaganda.nome}
              className="propaganda-img"
            />
            <p>{propaganda.nome}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
