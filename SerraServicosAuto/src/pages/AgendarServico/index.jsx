import React, { useState } from "react";
import { Button } from "../../components";
import { Input } from "../../components";
import { Modal } from "../../components";
import { Textarea } from "../../components";
import { Select } from "../../components";

const servicos = [
  "Troca de óleo",
  "Revisão geral",
  "Balanceamento",
  "Pintura",
  "Funilaria",
];
const prestadores = ["João Mecânico", "Oficina do Pedro", "Auto Center Maria"];

const AgendarServico = () => {
  const [busca, setBusca] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [agendamento, setAgendamento] = useState({
    data: "",
    horario: "",
    tipoServico: "",
    descricao: "",
  });

  const resultados = [...servicos, ...prestadores].filter((item) =>
    item.toLowerCase().includes(busca.toLowerCase())
  );

  const abrirModal = (item) => {
    setAgendamento((prev) => ({ ...prev, tipoServico: item }));
    setModalAberto(true);
  };

  const fecharModal = () => setModalAberto(false);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Agendar Serviço</h2>
      <Input
        placeholder="Pesquisar serviço ou prestador"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mb-4"
      />
      <ul>
        {resultados.map((item, index) => (
          <li
            key={index}
            className="p-2 bg-gray-200 rounded cursor-pointer mb-2"
            onClick={() => abrirModal(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <Modal isOpen={modalAberto} onClose={fecharModal}>
        <h3 className="text-lg font-bold">Agendar {agendamento.tipoServico}</h3>
        <Input
          type="date"
          value={agendamento.data}
          onChange={(e) =>
            setAgendamento({ ...agendamento, data: e.target.value })
          }
          className="mt-2"
        />
        <Input
          type="time"
          value={agendamento.horario}
          onChange={(e) =>
            setAgendamento({ ...agendamento, horario: e.target.value })
          }
          className="mt-2"
        />
        <Textarea
          placeholder="Descrição (máx. 200 caracteres)"
          value={agendamento.descricao}
          onChange={(e) => {
            if (e.target.value.length <= 200) {
              setAgendamento({ ...agendamento, descricao: e.target.value });
            }
          }}
          className="mt-2"
        />
        <Button className="mt-4" onClick={fecharModal}>
          Concluído
        </Button>
      </Modal>
    </div>
  );
};

export default AgendarServico;
