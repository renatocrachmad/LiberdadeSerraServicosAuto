import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrarSenha, setLembrarSenha] = useState(false);

  const handleLogin = () => {
    if (login === "admin" && senha === "123") {
      navigate("/home");
    } else {
      alert("Login ou senha incorretos");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type={mostrarSenha ? "text" : "password"}
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={() => setMostrarSenha(!mostrarSenha)}>👁</button>
      <label>
        <input
          type="checkbox"
          checked={lembrarSenha}
          onChange={() => setLembrarSenha(!lembrarSenha)}
        />
        Lembrar senha
      </label>
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={() => navigate("/cadastro")}>Cadastrar-se</button>
    </div>
  );
};

export default Login;
