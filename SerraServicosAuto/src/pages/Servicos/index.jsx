import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "./style.css";

const Servicos = () => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const servicosSalvos = JSON.parse(localStorage.getItem("servicosPrestador")) || [];

    // Exemplo fixo (pode remover se quiser exibir só os do localStorage)
    const exemplosFixos = [
      {
        id: 1,
        cliente: "Carlos Silva",
        tipo: "Troca de óleo",
        descricao: "Troca completa do óleo do motor com filtro novo.",
        data: "15/02/2025",
        status: "Aguardando aprovação",
        local: "Oficina",
        valor: 150,
        sinal: 50,
        contratoGerado: false,
      },
      {
        id: 2,
        cliente: "Ana Souza",
        tipo: "Instalação elétrica",
        descricao: "Instalação de novo quadro de distribuição elétrica.",
        data: "20/02/2025",
        status: "Aprovado",
        local: "Residência",
        valor: 300,
        sinal: 100,
        contratoGerado: true,
      },
    ];

    setServicos([...exemplosFixos, ...servicosSalvos]);
  }, []);

  const atualizarStatus = (id, novoStatus) => {
    const atualizados = servicos.map((servico) =>
      servico.id === id ? { ...servico, status: novoStatus } : servico
    );
    setServicos(atualizados);
    localStorage.setItem("servicosPrestador", JSON.stringify(atualizados));
  };

  const gerarContrato = (servico) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Contrato de Prestação de Serviço", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Cliente: ${servico.cliente}`, 20, 40);
    doc.text(`Serviço: ${servico.tipo}`, 20, 50);
    doc.text(`Descrição: ${servico.descricao}`, 20, 60, { maxWidth: 170 });
    doc.text(`Data: ${servico.data}`, 20, 80);
    doc.text(`Local: ${servico.local}`, 20, 90);
    doc.text(`Valor Total: R$ ${servico.valor.toFixed(2)}`, 20, 100);
    doc.text(`Valor do Sinal: R$ ${servico.sinal.toFixed(2)}`, 20, 110);
    doc.text(`Status: ${servico.status}`, 20, 120);

    doc.text(
      "Ao assinar este contrato, ambas as partes concordam com os termos estabelecidos acima.",
      20,
      140,
      { maxWidth: 170 }
    );

    doc.text("_________________________", 20, 170);
    doc.text("Assinatura do Cliente", 20, 180);
    doc.text("_________________________", 120, 170);
    doc.text("Assinatura do Prestador", 120, 180);

    doc.save(`Contrato_${servico.cliente}.pdf`);

    const atualizados = servicos.map((s) =>
      s.id === servico.id ? { ...s, contratoGerado: true } : s
    );
    setServicos(atualizados);
    localStorage.setItem("servicosPrestador", JSON.stringify(atualizados));
  };

  return (
    <div className="servicos-container">
      <h2>Meus Serviços</h2>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Serviço</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Local</th>
            <th>Status</th>
            <th>Contrato</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((servico) => (
            <tr key={servico.id}>
              <td>{servico.cliente}</td>
              <td>{servico.tipo}</td>
              <td>{servico.descricao}</td>
              <td>{servico.data}</td>
              <td>{servico.local}</td>
              <td
                className={`status ${servico.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {servico.status}
              </td>
              <td>{servico.contratoGerado ? "✅ Sim" : "❌ Não"}</td>
              <td>
                <button
                  onClick={() => atualizarStatus(servico.id, "Aprovado")}
                  className="btn-aprovar"
                >
                  ✔️
                </button>
                <button
                  onClick={() => atualizarStatus(servico.id, "Rejeitado")}
                  className="btn-rejeitar"
                >
                  ❌
                </button>
                <button
                  onClick={() => gerarContrato(servico)}
                  className="btn-contrato"
                >
                  📄 Gerar Contrato
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Servicos;
