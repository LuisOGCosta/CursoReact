// Importa o componente MyComponent para reutilização
import MyComponent from "./MyComponent";

// Componente funcional que demonstra a estrutura básica do JSX
const FirstComponent = () => {
  // Comentário em JavaScript - demonstra como comentar no código JS
  return (
    <div>
      {/* Comentário em JSX - demonstra como comentar dentro do JSX */}
      
      {/* Elemento h1 simples */}
      <h1>Título</h1>
      
      {/* Parágrafo com className (equivale ao class do HTML) */}
      <p className="text">Testando alguma classe</p>
      
      {/* Reutilização de componente - MyComponent é renderizado aqui */}
      <MyComponent />
    </div>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default FirstComponent;