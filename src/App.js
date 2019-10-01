import React from 'react';
import './App.css';

//permite devolver que es lo queremos 'pintar en la pantalla'
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld text="texto1" /> 
      <Helloworld text="texto2" /> 
      <Helloworld text="texto3" /> 
      </div>
  );
}

//Componente
function Helloworld(props){
  return (
    <div>{props.text}</div>
  );
}

export default App;