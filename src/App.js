import React from 'react';
import './App.css';

//permite devolver que es lo queremos 'pintar en la pantalla'
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld text="texto1" subtitulo= "sub1" /> 
      <Helloworld text="texto2" subtitulo= "sub1" /> 
      <Helloworld text="texto3" subtitulo= "sub1" /> 
      </div>
  );
}

class Helloworld extends React.Component{

  state = {
    show: true
  }

  cambiarEstado = () => {
    //alert("hola");
    this.setState({show: false});
  }

  render(){
    if(this.state.show){
      return(
        <div id= "hello">
          <h3>{this.props.subtitulo}</h3>
          <p>{this.props.text}</p>
          <button onClick={this.cambiarEstado} >Cambiar estado</button>
        </div>
      )
    }else{
      return <h3>No elements</h3>
    }
  }
}

/*
//Componente
function Helloworld(props){
  return (
    <div>{props.text}</div>
  );
}
*/

export default App;