import React, { useState } from "react";
import "./style.css";

const Sobre = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula envio - aqui você pode integrar com backend ou serviço de e-mail
    alert("Mensagem enviada com sucesso! 📬");
    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");
  };

  return (
    <div className="sobre-container">
      <h2>Sobre a Plataforma</h2>
      <p className="descricao">
        Bem-vindo à nossa plataforma! Nosso objetivo é oferecer um ambiente fácil e eficiente
        para você acessar serviços, enviar sugestões, tirar dúvidas e registrar reclamações.
      </p>

      <form onSubmit={handleSubmit} className="form-contato">
        <h3>Fale Conosco 📩</h3>

        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          required
        />
        <textarea
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Sobre;
