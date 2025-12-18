// Componente que demonstra manipulação de eventos e renderização condicional
const Events = () => {
  // Função que manipula eventos - recebe o evento como parâmetro
  const handleMyEvent = (e) => {
    console.log(e); // Mostra o objeto do evento no console
    console.log("Ativou o evento!"); // Mensagem de confirmação
  };

  // Função que demonstra renderização condicional
  // Retorna JSX diferente baseado no parâmetro recebido
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      {/* Evento com função externa */}
      <div>
        {/* Botão que chama a função handleMyEvent quando clicado */}
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      
      {/* Eventos com lógica inline (arrow functions) */}
      <div>
        {/* Arrow function simples inline */}
        <button onClick={() => console.log("Clicou")}>
          Clique aqui também!
        </button>
        
        {/* Arrow function com bloco de código mais complexo */}
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deve existir xD");
            }
          }}
        >
          Clica aqui, por favor!
        </button>
      </div>
      
      {/* Chamadas da função de renderização condicional */}
      {/* Chama com true - mostra primeira mensagem */}
      {renderSomething(true)}
      
      {/* Chama com false - mostra segunda mensagem */}
      {renderSomething(false)}
    </div>
  );
};

// Exporta o componente
export default Events;