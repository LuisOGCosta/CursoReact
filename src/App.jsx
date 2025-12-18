// Importa os estilos CSS do componente App
import "./App.css";

// Importa todos os componentes que serão utilizados na aplicação
import FirstComponent from "./components/FirstComponent.jsx";     // Componente básico com JSX e reutilização
import TemplateExpressions from "./components/TemplateExpressions.jsx"; // Demonstra template expressions (interpolação)
import MyComponent from "./components/MyComponent.jsx";         // Componente simples reutilizável
import Events from "./components/Events.jsx";                   // Demonstra manipulação de eventos
import Challenge from "./components/Challenge.jsx";             // Desafio: soma de dois números

// Componente principal da aplicação
function App() {
  return (
    <div className="App">
      {/* Componente que demonstra estrutura básica do JSX */}
      <FirstComponent />
      
      {/* Componente que mostra como usar variáveis e expressões no JSX */}
      <TemplateExpressions />
      
      {/* Componente simples que pode ser reutilizado */}
      <MyComponent />
      
      {/* Componente que demonstra eventos de clique e renderização condicional */}
      <Events />
      
      {/* Desafio: componente que soma dois números ao clicar no botão */}
      <Challenge />
    </div>
  );
}

export default App;