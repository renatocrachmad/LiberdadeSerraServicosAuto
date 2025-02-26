import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.css";

const Home = () => {
  const navigate = useNavigate();

  // Função para redirecionar ao clicar em uma data
  const handleDateClick = (date) => {
    const dataFormatada = date.toISOString().split("T")[0]; // Formata a data para YYYY-MM-DD
    navigate(`/servicos?data=${dataFormatada}`); // Passa a data como parâmetro na URL
  };

  return (
    <div className="home-container">
      <h2>Serra Serviços Auto</h2>
      <Calendar
        onClickDay={handleDateClick} // Chama a função ao clicar em uma data
      />
    </div>
  );
};

export default Home;
