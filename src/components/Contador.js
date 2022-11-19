import React from "react";
let num = 0;
export default function Contador() {
  const [valor, setValor] = React.useState(0);

  return (
    <div className="calculator">
      <h1>Contador</h1>
      <div className="cell">
        <button onClick={() => setValor(valor + 1)} className="plus">
          +
        </button>
        <div className="value">{valor}</div>
        <button onClick={() => setValor(valor - 1)} className="minus">
          -
        </button>
      </div>
    </div>
  );
}
