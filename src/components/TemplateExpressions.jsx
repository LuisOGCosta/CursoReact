// Componente que demonstra Template Expressions (interpolação de variáveis)
const TemplateExpressions = () => {
  // Variável simples do tipo string
  const name = "Matheus";
  
  // Objeto com propriedades - demonstra acesso a propriedades de objetos
  const data = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      {/* Interpolação de variável simples usando chaves {} */}
      <h1>Olá {name}, tudo bem?</h1>
      
      {/* Acesso a propriedade de objeto usando notação de ponto */}
      <p>Você atua como: {data.job}</p>
      
      {/* Expressão matemática - qualquer expressão JS válida pode ser usada */}
      <p>{8 + 10}</p>
    </div>
  );
};

// Exporta o componente
export default TemplateExpressions;