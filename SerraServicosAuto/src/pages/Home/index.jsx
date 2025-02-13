import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Serra Serviços Auto </h2>
      <Calendar />
    </div>
  );
};

export default Home;
