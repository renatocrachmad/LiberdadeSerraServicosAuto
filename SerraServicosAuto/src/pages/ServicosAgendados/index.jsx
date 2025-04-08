import React, { useState, useEffect } from "react";
import "./style.css";

const ServicosAgendados = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [edicao, setEdicao] = useState({
    data: "",
    horario: "",
    descricao: "",
  });

  useEffect(() => {
    const agendamentosSalvos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    setAgendamentos(agendamentosSalvos);
  }, []);

  const verificarConflito = (indexAtual) => {
    return agendamentos.some((item, idx) => {
      return (
        idx !== indexAtual &&
        item.data === edicao.data &&
        item.horario === edicao.horario
      );
    });
  };

  const salvarEdicao = (index) => {
    if (verificarConflito(index)) {
      alert("⚠️ Já existe um serviço agendado para esta data e horário.");
      return;
    }

    const atualizados = [...agendamentos];
    atualizados[index] = {
      ...atualizados[index],
      data: edicao.data,
      horario: edicao.horario,
      descricao: edicao.descricao,
    };
    setAgendamentos(atualizados);
    localStorage.setItem("agendamentos", JSON.stringify(atualizados));
    setEditandoIndex(null);
  };

  const cancelarEdicao = () => {
    setEditandoIndex(null);
    setEdicao({ data: "", horario: "", descricao: "" });
  };

  const deletarAgendamento = (index) => {
    const confirmar = window.confirm("Deseja realmente excluir este agendamento?");
    if (confirmar) {
      const atualizados = agendamentos.filter((_, i) => i !== index);
      setAgendamentos(atualizados);
      localStorage.setItem("agendamentos", JSON.stringify(atualizados));
    }
  };

  const formatarData = (dataIso) => {
    const [ano, mes, dia] = dataIso.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="servicos-agendados-container">
      <h2>Serviços Agendados</h2>
      {agendamentos.length === 0 ? (
        <p>🔎 Nenhum serviço agendado no momento.</p>
      ) : (
        <ul className="lista-agendamentos">
          {agendamentos.map((item, index) => (
            <li key={index} className="item-agendamento">
              <div className="item-info-group">
                <div><strong>Serviço:</strong> {item.tipoServico}</div>
                <div><strong>Prestador:</strong> {item.prestador || "Não definido"}</div>
              </div>

              {editandoIndex === index ? (
                <>
                  <div className="item-info-group">
                    <div>
                      <label><strong>Data:</strong></label>
                      <input
                        type="date"
                        value={edicao.data}
                        onChange={(e) => setEdicao({ ...edicao, data: e.target.value })}
                      />
                    </div>
                    <div>
                      <label><strong>Horário:</strong></label>
                      <input
                        type="time"
                        value={edicao.horario}
                        onChange={(e) => setEdicao({ ...edicao, horario: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label><strong>Descrição:</strong></label>
                    <textarea
                      value={edicao.descricao}
                      onChange={(e) => setEdicao({ ...edicao, descricao: e.target.value })}
                    />
                  </div>

                  <div className="botoes-agendamento">
                    <button onClick={() => salvarEdicao(index)}>💾 Salvar</button>
                    <button onClick={cancelarEdicao}>❌ Cancelar</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="item-info-group">
                    <div>
                      <strong>Data e Hora:</strong> {formatarData(item.data)} - {item.horario}
                    </div>
                    <div>
                      <strong>Descrição:</strong> {item.descricao || "Nenhuma observação"}
                    </div>
                  </div>

                  <div className="botoes-agendamento">
                    <button
                      onClick={() => {
                        setEditandoIndex(index);
                        setEdicao({
                          data: item.data,
                          horario: item.horario,
                          descricao: item.descricao || "",
                        });
                      }}
                    >
                      ✏️ Editar
                    </button>
                    <button onClick={() => deletarAgendamento(index)}>🗑️ Excluir</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicosAgendados;
