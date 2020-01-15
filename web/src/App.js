import React, { useState } from 'react';
import Header from './Header';

// Três conceitos principais do React
// * Componente: Bloco isolado de HTML, CSS e JS, o qual não intefere no restante da aplicação
// * Propriedade: Informaçõwes que um componente PAI passa para um componente filho
// * Estado: Informações mantidas pelo componente (Lembrar: Conceito de imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title="Dashboad"/>
  <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
   
   </>
  );
}

export default App;
