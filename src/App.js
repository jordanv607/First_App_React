import React from 'react';

var listNames = [];

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        listNames.push(' ' + this.state.name);
        //llamar a display
        alert(listNames.toString());
    }

    myChangeHandler = (event) => {
        this.setState({name: event.target.value}); //username: event.target.value
    }

    render(){
     return(
       <form onSubmit={this.handleSubmit}>
        <label>
        Name:
        <input type="text" name="name" onChange={this.myChangeHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
    }
  }

  export default App;