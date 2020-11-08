import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // INICIO, JOGANDO, FIM
  const [estado, setEstado] = useState("INICIO");
  const [palpite, setPalpite] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [numeroPalpites, setNumeroPalpites] = useState();

  const iniciarJogo = () => {
    setNumeroPalpites(1);
    setMin(0);
    setMax(300);
    setPalpite(150);
    setEstado("JOGANDO");
  };

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    let proximoPalpite = parseInt((min + palpite) / 2, 10);
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    let proximoPalpite = parseInt((palpite + max) / 2, 10);
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "INICIO") {
    return (
      <div className="App">
        <button onClick={iniciarJogo}>Começar jogo!</button>
      </div>
    );
  } else if (estado === "FIM") {
    return (
      <div className="App">
        <p>Acertei seu número em {numeroPalpites} tentativas!</p>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O número é {palpite} ?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
