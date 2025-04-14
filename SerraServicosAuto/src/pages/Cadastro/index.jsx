import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api"; 
import "./style.css";

const Cadastro = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("cliente");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [nomePrestador, setNomePrestador] = useState("");
  const [tipoServico, setTipoServico] = useState("");
  const [logo, setLogo] = useState(null);

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert("❌ As senhas não coincidem!");
      return;
    }

    try {
      if (tipo === "cliente") {
        await api.post("/clientes", {
          nome,
          cpf,
          email,
          senha,
        });
        alert("✅ Cliente cadastrado com sucesso!");
        navigate("/home");

      } else {
        // Envio de dados do prestador
        const formData = new FormData();
        formData.append("nomeEmpresa", nomeEmpresa);
        formData.append("nomePrestador", nomePrestador);
        formData.append("tipoServico", tipoServico);
        formData.append("email", email);
        formData.append("senha", senha);
        if (logo) {
          formData.append("logo", logo);
        }

        await api.post("/prestadores", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("✅ Prestador cadastrado com sucesso!");
        navigate("/perfil-prestador");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("❌ Erro ao cadastrar. Verifique os dados ou tente novamente.");
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
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
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
