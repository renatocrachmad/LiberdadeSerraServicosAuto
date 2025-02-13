import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Cadastro = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("cliente");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    alert("Cadastro realizado com sucesso!");
    navigate("/");
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <select onChange={(e) => setTipo(e.target.value)} value={tipo}>
        <option value="cliente">Cliente</option>
        <option value="prestador">Prestador de Serviço</option>
      </select>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;
