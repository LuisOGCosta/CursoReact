// Importa React (opcional no React 17+, mas boa prática manter)
import React from "react";

// Componente de desafio: demonstra soma de dois números
const Challenge = () => {
  // Variáveis numéricas para a operação
  const a = 10;
  const b = 15;

  return (
    <div>
      {/* Exibe o valor da variável 'a' */}
      <p>A: {a}</p>
      
      {/* Exibe o valor da variável 'b' */}
      <p>B: {b}</p>
      
      {/* Botão que executa a soma e mostra o resultado no console */}
      {/* Usa arrow function inline para somar a + b */}
      <button onClick={() => console.log(a + b)}>Somar!</button>
    </div>
  );
};

// Exporta o componente de desafio
export default Challenge;