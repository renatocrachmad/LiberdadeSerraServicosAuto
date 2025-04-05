import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Assinante = () => {
  const [assinaturaAtiva, setAssinaturaAtiva] = useState(false);
  const navigate = useNavigate();

  const handleAssinar = () => {
    navigate("/confirmar-assinatura");
  };

  const handleFaleConosco = () => {
    navigate("/sobre");
  };

  return (
    <div className="assinante-container">
      <h1>Área do Assinante</h1>

      {!assinaturaAtiva ? (
        <div className="assinatura-box">
          <p>Ainda não possui uma assinatura?</p>
          <button className="btn assinar" onClick={handleAssinar}>
            Assinar Agora
          </button>
        </div>
      ) : (
        <>
          {/* ... restante do conteúdo permanece igual ... */}
          <div className="suporte">
            <h2>Suporte</h2>
            <button className="btn" onClick={handleFaleConosco}>
              Fale Conosco
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Assinante;
