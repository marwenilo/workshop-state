import React, { Component } from 'react'

export default class Input extends Component {

    state = {
        count: 1,
        name: "Marwen",
        check:false
      
    };
    inc=()=>{
      this.setState({
        count: this.state.count + 1
      });
    }
    dec=()=>{
      this.setState({
        id: this.state.count -1
      });
    }
    handleChange=(e)=>{
    if (e.target.value.length>6){
      this.setState({
        name:e.target.value
      }) 
    }
     
    }
    changeColor = (e)=>{
      this.setState({
        check:!this.state.check
      })
    }
  
  
    render() {
  
      return (
        
        <div className={this.state.check? "red":"container" }>
          <h1>{this.state.id}</h1>
          <h1>{this.state.name}</h1>
          <div className="btn-container">
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
          </div>
       
          <input onChange={this. handleChange} placeholder={this.state.name} />
          <button onClick={this.changeColor} className="changeColor">  Change color of the body</button>
  {/* <button onClick={this.handleClick()}>Change The Number</button> eerrrrrrerererererererere */} 
          
        </div>
      );
    }
  }


