import React, { useState } from "react";
import "./style.css";

const Servicos = () => {
  const [servicos, setServicos] = useState([
    { 
      id: 1, 
      cliente: "Carlos Silva", 
      tipo: "Troca de óleo", 
      data: "15/02/2025", 
      status: "Aguardando aprovação", 
      local: "Oficina", 
      valor: 150, 
      sinal: 50,
      contratoGerado: false
    },
    { 
      id: 2, 
      cliente: "Ana Souza", 
      tipo: "Instalação elétrica", 
      data: "20/02/2025", 
      status: "Aprovado", 
      local: "Residência", 
      valor: 300, 
      sinal: 100,
      contratoGerado: true
    }
  ]);

  const atualizarStatus = (id, novoStatus) => {
    setServicos(servicos.map(servico =>
      servico.id === id ? { ...servico, status: novoStatus } : servico
    ));
  };

  return (
    <div className="servicos-container">
      <h2>Meus Serviços</h2>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Serviço</th>
            <th>Data</th>
            <th>Local</th>
            <th>Status</th>
            <th>Contrato</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(servico => (
            <tr key={servico.id}>
              <td>{servico.cliente}</td>
              <td>{servico.tipo}</td>
              <td>{servico.data}</td>
              <td>{servico.local}</td>
              <td className={`status ${servico.status.toLowerCase().replace(" ", "-")}`}>
                {servico.status}
              </td>
              <td>
                {servico.contratoGerado ? "✅ Sim" : "❌ Não"}
              </td>
              <td>
                <button onClick={() => atualizarStatus(servico.id, "Aprovado")} className="btn-aprovar">✔️</button>
                <button onClick={() => atualizarStatus(servico.id, "Rejeitado")} className="btn-rejeitar">❌</button>
                <button className="btn-contrato">📄 Gerar Contrato</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Servicos;
