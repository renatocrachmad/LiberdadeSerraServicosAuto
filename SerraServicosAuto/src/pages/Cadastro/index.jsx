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

  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [nomePrestador, setNomePrestador] = useState("");
  const [tipoServico, setTipoServico] = useState("");
  const [logo, setLogo] = useState(null);

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Cadastro realizado com sucesso!");

    // ✅ Redirecionamento baseado no tipo de usuário
    if (tipo === "prestador") {
      navigate("/perfil-prestador"); // Redireciona para a página do prestador
    } else {
      navigate("/home"); // Redireciona para a home se for cliente
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>

      <label>Selecione o tipo de cadastro:</label>
      <select onChange={(e) => setTipo(e.target.value)} value={tipo}>
        <option value="cliente">Cliente</option>
        <option value="prestador">Prestador de Serviço</option>
      </select>

      {tipo === "prestador" && (
        <div className="prestador-container">
          <input
            type="text"
            placeholder="Nome da Empresa"
            value={nomeEmpresa}
            onChange={(e) => setNomeEmpresa(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome do Prestador"
            value={nomePrestador}
            onChange={(e) => setNomePrestador(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tipo de Serviço"
            value={tipoServico}
            onChange={(e) => setTipoServico(e.target.value)}
          />
          <label className="file-label">Logo da Empresa:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </div>
      )}

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
