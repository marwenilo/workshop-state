import React, { Component } from 'react'
import Input from './workshop/Input'
import './App.css';


class App extends Component {

    state = {
      id: 1,
      name: "Marwen"
    
  };
  handleClick=()=>{
    this.setState({
      id: this.state.id + 1
    });
  }
  handleClickn=()=>{
    this.setState({
      id: this.state.id -1
    });
  }
  handleChange=(e)=>{
  if (e.target.value.length>6){
    this.setState({
      name:e.target.value
    }) 
  }
   
  }


  render() {

    return (
      
      <div className="container">
        <h1>{this.state.id}</h1>
        <h1>{this.state.name}</h1>
        <div className="btn-container">
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleClickn}>-</button>
        </div>
        <Input change={this. handleChange} name={this.state.name} />
   {  /*  <button onClick={this.handleClick()}>Change The Number</button> eerrrrrrerererererererere */}
      </div>
    );
  }
}


export default App;

