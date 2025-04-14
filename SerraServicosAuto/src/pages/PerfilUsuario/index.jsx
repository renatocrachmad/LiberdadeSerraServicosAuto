import React, { useState } from "react";
import "./style.css";

// ✅ Imagem Base64 embutida
const base64Default =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAMFBMVEX///8AAAD8/PyUlJQbGxsZGRl5eXnk5OShoaFvb28fHx+vr6+qqqrw8PBYWFg/Pz/kB+XRAAAEXElEQVR4nO2cW5LCIAyGO2Hd//9LRNABGYrpfR+5vGEObck4pLd2prqEDZNBfbiPPB5HoPB7HY7HY7HY7HY7HY7HY7HY7PYv+ffX3X8Jk5U6vba9XeNeLgu0pv3u3n4zND5b4vo3Un1U1VV6XMqrHdsG1EJSlrZ5t1c+ttUty96jGbc+8umx7QtZ3JvT69Ryy2NS5VuNdqVvL8Vm+qqgMnvz6IuvyxvbpOYZwX63aZ9Ho9E4PB4Pht0pjPYv3uSos/ERm90Z9w39i1LdbMQvvFV6mqqqnr/V1bNWlpW9/UeVab0TZX+4iMNFt7zZ1uDJrU6bGGeG+7R53F0jk2+53jlxY3T/vqOvHZVHT4A+MElPXY/urRJVu5z7x5KdnNOcbaKMlI90ZlmvM7m3YJyyzP54+rjPVRZZuy1LddzXNdoFZ9H09Pv4hY9wPE+5rKaXk3VJP4p7nWPGtdv2LZ9U2Q2cJ6rKPWX4r3fGHx4by8X9K3M/JN7GMzq5n5sTwz5yk3WHmZJ1mWm5e3O/ieR+xX9pzzB+STvRfsl6psuP7KQzK+ukD+qQTu13k55u3Ke7Xg7G4zH49Ho9Ho9Ho9Ho9Ho9Ho9Ho/H8Z5hNnPtR6oAMAAAAASUVORK5CYII=";

const PerfilUsuario = () => {
  const [nome, setNome] = useState("João da Silva");
  const [cpf, setCpf] = useState("123.456.789-00");
  const [email, setEmail] = useState("joao@email.com");
  const [tipo, setTipo] = useState("cliente"); // ou "prestador"
  const [logo, setLogo] = useState(base64Default);

  const handleAtualizar = () => {
    alert("✅ Dados atualizados com sucesso!");
  };

  const handleExcluir = () => {
    if (window.confirm("Tem certeza que deseja excluir sua conta?")) {
      alert("❌ Conta deletada.");
    }
  };

  return (
    <div className="perfil-container">
      <h2>Meu Perfil</h2>

      <div className="foto-perfil">
        <img src={logo} alt="Foto de Perfil" />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => setLogo(reader.result);
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>

      <div className="form-perfil">
        <label>Nome:</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />

        <label>CPF:</label>
        <input value={cpf} onChange={(e) => setCpf(e.target.value)} />

        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Tipo de Conta:</label>
        <input value={tipo} disabled />

        <div className="botoes-perfil">
          <button className="btn atualizar" onClick={handleAtualizar}>
            💾 Atualizar
          </button>
          <button className="btn deletar" onClick={handleExcluir}>
            🗑️ Excluir Conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
