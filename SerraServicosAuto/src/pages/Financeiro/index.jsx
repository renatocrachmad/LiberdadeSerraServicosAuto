import React, { useState } from "react";
import "./style.css";

const Financeiro = () => {
  // Estado para armazenar os dados financeiros
  const [dados, setDados] = useState([
    { id: 1, servico: "Troca de óleo", custoMaterial: 50, maoDeObra: 30, sinal: 20, valorTotal: 150 },
    { id: 2, servico: "Instalação elétrica", custoMaterial: 100, maoDeObra: 80, sinal: 50, valorTotal: 300 },
    { id: 3, servico: "Corte de cabelo", custoMaterial: 20, maoDeObra: 25, sinal: 10, valorTotal: 80 },
  ]);

  // Função para calcular o lucro líquido
  const calcularLucro = (item) => item.valorTotal - (item.custoMaterial + item.maoDeObra);

  // Função para atualizar os valores editados
  const atualizarDados = (id, campo, valor) => {
    const novosDados = dados.map((item) =>
      item.id === id ? { ...item, [campo]: parseFloat(valor) || 0 } : item
    );
    setDados(novosDados);
  };

  // Função para adicionar um novo serviço à tabela
  const adicionarNovoServico = () => {
    const novoServico = {
      id: dados.length + 1,
      servico: "",
      custoMaterial: 0,
      maoDeObra: 0,
      sinal: 0,
      valorTotal: 0,
    };
    setDados([...dados, novoServico]);
  };

  return (
    <div className="financeiro-container">
      <h2>Financeiro</h2>
      <table>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Custo Material (R$)</th>
            <th>Valor Mão de Obra (R$)</th>
            <th>Valor do Sinal (R$)</th>
            <th>Valor Total (R$)</th>
            <th>Lucro (R$)</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  value={item.servico}
                  onChange={(e) => atualizarDados(item.id, "servico", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.custoMaterial}
                  onChange={(e) => atualizarDados(item.id, "custoMaterial", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.maoDeObra}
                  onChange={(e) => atualizarDados(item.id, "maoDeObra", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.sinal}
                  onChange={(e) => atualizarDados(item.id, "sinal", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.valorTotal}
                  onChange={(e) => atualizarDados(item.id, "valorTotal", e.target.value)}
                />
              </td>
              <td className={calcularLucro(item) >= 0 ? "lucro-positivo" : "lucro-negativo"}>
                R$ {calcularLucro(item).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn-adicionar" onClick={adicionarNovoServico}>
        ➕ Adicionar Serviço
      </button>
    </div>
  );
};

export default Financeiro;
