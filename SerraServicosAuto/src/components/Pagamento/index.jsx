import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import JsBarcode from "jsbarcode";
import "./style.css";

const Pagamento = () => {
  const navigate = useNavigate();
  const [metodo, setMetodo] = useState("");
  const chavePix = "pix-joao@email.com";
  const [copiado, setCopiado] = useState(false);

  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [erros, setErros] = useState({});

  const copiarChavePix = () => {
    navigator.clipboard.writeText(chavePix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const gerarBoletoPDF = () => {
    const codigoNumerico = "23793381276000212345672000000002187620000005000";
    const codigoFormatado = "23793.38127 60002.123456 72000.000002 1 87620000005000";

    const doc = new jsPDF();

    // Conteúdo do boleto
    doc.setFontSize(18);
    doc.text("BOLETO DE ASSINATURA", 20, 20);

    doc.setFontSize(12);
    doc.text("Nome: João da Silva", 20, 40);
    doc.text("Email: joao@email.com", 20, 50);
    doc.text("Plano: Premium", 20, 60);
    doc.text("Valor: R$ 50,00", 20, 70);
    doc.text("Vencimento: 20/02/2025", 20, 80);

    // Texto do código de barras
    doc.setFont("courier", "bold");
    doc.setFontSize(10);
    doc.text(codigoFormatado, 20, 100);

    // Geração do código de barras via JsBarcode
    const canvas = document.createElement("canvas");
    JsBarcode(canvas, codigoNumerico, {
      format: "CODE128",
      displayValue: false,
      width: 1.2,
      height: 40,
      margin: 0,
    });

    const imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 20, 105, 170, 30);

    doc.save("boleto_assinatura.pdf");
  };

  const validarCartao = () => {
    const novosErros = {};

    if (!/^\d{16}$/.test(numeroCartao)) {
      novosErros.numeroCartao = "Número do cartão deve conter 16 dígitos";
    }

    if (!nomeCartao.trim()) {
      novosErros.nomeCartao = "Nome no cartão é obrigatório";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(validade)) {
      novosErros.validade = "Formato inválido (MM/AA)";
    } else {
      const [mes, ano] = validade.split("/");
      const dataAtual = new Date();
      const validadeData = new Date(`20${ano}`, mes); // Mês base 0
      if (validadeData <= dataAtual) {
        novosErros.validade = "Data de validade já passou";
      }
    }

    if (!/^\d{3}$/.test(cvv)) {
      novosErros.cvv = "CVV deve conter 3 dígitos";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const confirmarPagamento = () => {
    if (metodo === "cartao") {
      if (!validarCartao()) return;
    }

    alert("Pagamento realizado com sucesso!");
    navigate("/home");
  };

  return (
    <div className="pagamento-container">
      <h1>Escolha o Método de Pagamento</h1>

      <div className="metodos">
        <label>
          <input
            type="radio"
            name="metodo"
            value="boleto"
            onChange={(e) => setMetodo(e.target.value)}
          />
          Boleto
        </label>
        <label>
          <input
            type="radio"
            name="metodo"
            value="cartao"
            onChange={(e) => setMetodo(e.target.value)}
          />
          Cartão
        </label>
        <label>
          <input
            type="radio"
            name="metodo"
            value="pix"
            onChange={(e) => setMetodo(e.target.value)}
          />
          Pix
        </label>
      </div>

      {metodo === "boleto" && (
        <div className="boleto">
          <p>Seu boleto foi gerado!</p>
          <button className="btn" onClick={gerarBoletoPDF}>
            Imprimir Boleto
          </button>
        </div>
      )}

      {metodo === "cartao" && (
        <div className="cartao">
          <input
            placeholder="Número do Cartão"
            value={numeroCartao}
            onChange={(e) => setNumeroCartao(e.target.value)}
          />
          {erros.numeroCartao && <p className="erro">{erros.numeroCartao}</p>}

          <input
            placeholder="Nome no Cartão"
            value={nomeCartao}
            onChange={(e) => setNomeCartao(e.target.value)}
          />
          {erros.nomeCartao && <p className="erro">{erros.nomeCartao}</p>}

          <input
            placeholder="Validade (MM/AA)"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
          />
          {erros.validade && <p className="erro">{erros.validade}</p>}

          <input
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          {erros.cvv && <p className="erro">{erros.cvv}</p>}
        </div>
      )}

      {metodo === "pix" && (
        <div className="pix">
          <p>Chave Pix:</p>
          <div className="chave">{chavePix}</div>
          <button className="btn" onClick={copiarChavePix}>
            {copiado ? "Chave Copiada!" : "Copiar Chave Pix"}
          </button>
        </div>
      )}

      <button className="btn confirmar" onClick={confirmarPagamento}>
        Confirmar Pagamento
      </button>
    </div>
  );
};

export default Pagamento;
