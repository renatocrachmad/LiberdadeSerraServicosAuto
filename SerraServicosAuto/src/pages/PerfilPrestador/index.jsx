import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.css";

const PerfilPrestador = () => {
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [observacoes, setObservacoes] = useState("");
  const [reservas, setReservas] = useState([]);
  const capacidadeMaxima = 5; // Número máximo de reservas por dia

  // Simulação de datas indisponíveis
  const datasIndisponiveis = ["2025-02-20", "2025-02-25"];

  // Função para verificar se a data já atingiu a capacidade máxima
  const verificarDisponibilidade = (data) => {
    const dataFormatada = data.toISOString().split("T")[0];
    const reservasNaData = reservas.filter((reserva) => reserva.data === dataFormatada);
    return reservasNaData.length < capacidadeMaxima && !datasIndisponiveis.includes(dataFormatada);
  };

  // Função para processar a reserva
  const confirmarReserva = () => {
    if (!dataSelecionada) {
      alert("Por favor, selecione uma data disponível.");
      return;
    }

    const dataFormatada = dataSelecionada.toISOString().split("T")[0];

    if (!verificarDisponibilidade(dataSelecionada)) {
      alert("Esta data não está disponível. Escolha outra.");
      return;
    }

    const novaReserva = { data: dataFormatada, observacoes };
    setReservas([...reservas, novaReserva]);
    setObservacoes("");

    alert(`Reserva confirmada para ${dataFormatada}. Um e-mail foi enviado ao cliente.`);
  };

  return (
    <div className="perfil-container">
      <h2>Perfil do Prestador</h2>

      <div className="calendario-container">
        <h3>Agenda de Eventos</h3>
        <Calendar
          onClickDay={(date) => setDataSelecionada(date)}
          tileClassName={({ date }) => {
            const dataFormatada = date.toISOString().split("T")[0];
            if (datasIndisponiveis.includes(dataFormatada)) {
              return "indisponivel";
            }
            if (reservas.some((reserva) => reserva.data === dataFormatada)) {
              return "reservado";
            }
            return "disponivel";
          }}
        />
      </div>

      {dataSelecionada && (
        <div className="reserva-container">
          <h3>Confirmação de Reserva</h3>
          <p>Data Selecionada: {dataSelecionada.toISOString().split("T")[0]}</p>
          <textarea
            placeholder="Adicione observações..."
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
          />
          <button onClick={confirmarReserva}>Confirmar Reserva</button>
        </div>
      )}

      <div className="reservas-lista">
        <h3>Reservas Confirmadas</h3>
        <ul>
          {reservas.map((reserva, index) => (
            <li key={index}>
              {reserva.data} - {reserva.observacoes || "Sem observações"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PerfilPrestador;
