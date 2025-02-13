import React, { useState } from "react";
import "./style.css";

const BuscarPrestadores = () => {
  const [busca, setBusca] = useState("");
  const [prestadores, setPrestadores] = useState([
    { id: 1, nome: "João Mecânico", empresa: "Oficina Rápida", tipo: "Mecânico", telefone: "99999-9999" },
    { id: 2, nome: "Marcos", empresa: "LG Reparos ", tipo: "Lanterneiro", telefone: "98888-8888" },
    { id: 3, nome: "Carlos Eletricista", empresa: "EletroTech", tipo: "Eletricista", telefone: "97777-7777" },
  ]);

  // Filtrando prestadores com base na busca
  const prestadoresFiltrados = prestadores.filter(
    (prestador) =>
      prestador.nome.toLowerCase().includes(busca.toLowerCase()) ||
      prestador.empresa.toLowerCase().includes(busca.toLowerCase()) ||
      prestador.tipo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="buscar-container">
      <h2>Buscar Prestadores</h2>
      <input
        type="text"
        placeholder="Digite o nome, empresa ou tipo de serviço..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <ul>
        {prestadoresFiltrados.length > 0 ? (
          prestadoresFiltrados.map((prestador) => (
            <li key={prestador.id}>
              <strong>{prestador.nome}</strong> - {prestador.empresa} ({prestador.tipo})
              <span>📞 {prestador.telefone}</span>
            </li>
          ))
        ) : (
          <p>Nenhum prestador encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default BuscarPrestadores;
