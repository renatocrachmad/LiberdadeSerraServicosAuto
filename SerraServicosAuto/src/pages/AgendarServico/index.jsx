import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Modal, Textarea } from "../../components";
import "./style.css";

const servicos = ["Troca de óleo", "Revisão geral", "Balanceamento", "Pintura", "Funilaria"];

const prestadores = [
  { id: 1, nome: "João Mecânico", empresa: "Oficina Rápida", tipo: "Mecânico", telefone: "99999-9999" },
  { id: 2, nome: "Marcos", empresa: "LG Reparos", tipo: "Lanterneiro", telefone: "98888-8888" },
  { id: 3, nome: "Carlos Eletricista", empresa: "EletroTech", tipo: "Eletricista", telefone: "97777-7777" },
  { id: 4, nome: "Lucas", empresa: "Gw Reparos", tipo: "Lanterneiro", telefone: "98888-8889" },
];

const AgendarServico = () => {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [agendamento, setAgendamento] = useState({
    data: "",
    horario: "",
    tipoServico: "",
    descricao: "",
    prestador: "",
  });

  const resultadosServicos = servicos.filter((servico) =>
    servico.toLowerCase().includes(busca.toLowerCase())
  );

  const resultadosPrestadores = prestadores.filter(
    (prestador) =>
      prestador.nome.toLowerCase().includes(busca.toLowerCase()) ||
      prestador.empresa.toLowerCase().includes(busca.toLowerCase()) ||
      prestador.tipo.toLowerCase().includes(busca.toLowerCase())
  );

  const abrirModal = (item, prestador = "") => {
    setAgendamento((prev) => ({
      ...prev,
      tipoServico: item,
      prestador: prestador,
    }));
    setModalAberto(true);
    setMensagemSucesso("");
  };

  const existeConflito = () => {
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    return agendamentos.some(
      (a) => a.data === agendamento.data && a.horario === agendamento.horario
    );
  };

  const concluirAgendamento = () => {
    if (!agendamento.data || !agendamento.horario || !agendamento.tipoServico) {
      alert("⚠️ Preencha todos os campos obrigatórios.");
      return;
    }

    if (existeConflito()) {
      alert("⚠️ Já existe um serviço agendado para esta data e horário.");
      return;
    }

    // Salvar para o cliente
    const agendamentosSalvos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    localStorage.setItem("agendamentos", JSON.stringify([...agendamentosSalvos, agendamento]));

    // Criar objeto para o prestador
    const novoServico = {
      id: crypto.randomUUID(),
      cliente: "Cliente Atual", // Se você tiver login, substitua pelo nome real
      tipo: agendamento.tipoServico,
      descricao: agendamento.descricao,
      data: new Date(agendamento.data).toLocaleDateString("pt-BR"),
      status: "Aguardando aprovação",
      local: "Oficina", // Você pode adaptar isso se tiver campo local
      valor: 100,
      sinal: 30,
      contratoGerado: false
    };

    // Salvar para o prestador
    const servicosPrestador = JSON.parse(localStorage.getItem("servicosPrestador")) || [];
    localStorage.setItem("servicosPrestador", JSON.stringify([...servicosPrestador, novoServico]));

    setModalAberto(false);
    setMensagemSucesso("✅ Agendamento realizado com sucesso!");
    navigate("/servicos-agendados");
  };

  return (
    <div className="buscar-container">
      <h2>Agendar Serviço & Buscar Prestadores</h2>

      <Input
        placeholder="Buscar serviço ou prestador..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {mensagemSucesso && <p className="sucesso-msg">{mensagemSucesso}</p>}

      <h3>Serviços Disponíveis</h3>
      <ul>
        {resultadosServicos.map((servico, index) => (
          <li key={index} className="servico-item" onClick={() => abrirModal(servico)}>
            {servico}
          </li>
        ))}
      </ul>

      <h3>Prestadores Disponíveis</h3>
      <ul>
        {resultadosPrestadores.length > 0 ? (
          resultadosPrestadores.map((prestador) => (
            <li key={prestador.id} className="prestador-item">
              <div>
                <strong>{prestador.nome}</strong> - {prestador.empresa} ({prestador.tipo})
              </div>
              <span>📞 {prestador.telefone}</span>
              <Button onClick={() => abrirModal(prestador.tipo, prestador.nome)}>Agendar</Button>
            </li>
          ))
        ) : (
          <p>Nenhum prestador encontrado.</p>
        )}
      </ul>

      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)}>
        <h3 className="text-lg font-bold">
          Agendar {agendamento.tipoServico} {agendamento.prestador && `com ${agendamento.prestador}`}
        </h3>
        <Input
          type="date"
          value={agendamento.data}
          onChange={(e) => setAgendamento({ ...agendamento, data: e.target.value })}
        />
        <Input
          type="time"
          value={agendamento.horario}
          onChange={(e) => setAgendamento({ ...agendamento, horario: e.target.value })}
        />
        <Textarea
          placeholder="Descrição (máx. 200 caracteres)"
          value={agendamento.descricao}
          onChange={(e) => {
            if (e.target.value.length <= 200) {
              setAgendamento({ ...agendamento, descricao: e.target.value });
            }
          }}
        />
        <Button className="mt-4" onClick={concluirAgendamento}>
          Concluído
        </Button>
      </Modal>
    </div>
  );
};

export default AgendarServico;
