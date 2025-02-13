import React, { useState } from "react";
import "./style.css";

const Financeiro = () => {
  // Dados financeiros simulados
  const [dados, setDados] = useState([
    { id: 1, servico: "Troca de óleo", custo: 50, sinal: 20, valorTotal: 150 },
    { id: 2, servico: "Instalação elétrica", custo: 100, sinal: 50, valorTotal: 300 },
    { id: 3, servico: "Corte de cabelo", custo: 20, sinal: 10, valorTotal: 80 },
  ]);

  // Função para calcular lucro líquido
  const calcularLucro = (item) => item.valorTotal - item.custo;

  return (
    <div className="financeiro-container">
      <h2>Financeiro</h2>
      <table>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Custo</th>
            <th>Valor do Sinal</th>
            <th>Valor Total</th>
            <th>Lucro</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.servico}</td>
              <td>R$ {item.custo.toFixed(2)}</td>
              <td>R$ {item.sinal.toFixed(2)}</td>
              <td>R$ {item.valorTotal.toFixed(2)}</td>
              <td className={calcularLucro(item) >= 0 ? "lucro-positivo" : "lucro-negativo"}>
                R$ {calcularLucro(item).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Financeiro;
