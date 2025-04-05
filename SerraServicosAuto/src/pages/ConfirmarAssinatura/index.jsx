import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ConfirmarAssinatura = () => {
  const navigate = useNavigate();

  const handlePagamento = () => {
    navigate("/pagamento");
  };

  return (
    <div className="confirmar-container">
      <h1>Confirmação de Assinatura</h1>

      <div className="dados-usuario">
        <h2>Seus Dados</h2>
        <p><strong>Nome:</strong> João da Silva</p>
        <p><strong>Email:</strong> joao@email.com</p>
      </div>

      <div className="dados-plano">
        <h2>Plano Escolhido</h2>
        <p><strong>Plano:</strong> Premium</p>
        <p><strong>Valor:</strong> R$ 50,00 / mês</p>
      </div>

      <div className="confirmar-acoes">
        <button className="btn confirmar" onClick={handlePagamento}>
          Confirmar e Pagar
        </button>
        <button className="btn cancelar" onClick={() => navigate("/assinante")}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ConfirmarAssinatura;
