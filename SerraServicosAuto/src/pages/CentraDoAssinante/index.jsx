import React from "react";
import "./style.css";

const Assinante = () => {
  return (
    <div className="assinante-container">
      <h1>Área do Assinante</h1>

      <div className="perfil">
        <h2>Perfil</h2>
        <p>
          <strong>Nome:</strong> João da Silva
        </p>
        <p>
          <strong>Email:</strong> joao@email.com
        </p>
        <p>
          <strong>Plano:</strong> Premium
        </p>
      </div>

      <div className="beneficios">
        <h2>Benefícios</h2>
        <ul>
          <li>Acesso exclusivo a conteúdos premium</li>
          <li>Suporte prioritário</li>
          <li>Descontos especiais</li>
        </ul>
      </div>

      <div className="pagamentos">
        <h2>Histórico de Pagamentos</h2>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Valor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/03/2025</td>
              <td>R$ 50,00</td>
              <td>Pago</td>
            </tr>
            <tr>
              <td>10/02/2025</td>
              <td>R$ 50,00</td>
              <td>Pago</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="gerenciar">
        <h2>Gerenciar Assinatura</h2>
        <button className="btn">Alterar Plano</button>
        <button className="btn cancel">Cancelar Assinatura</button>
      </div>

      <div className="suporte">
        <h2>Suporte</h2>
        <button className="btn">Fale Conosco</button>
      </div>
    </div>
  );
};

export default Assinante;
