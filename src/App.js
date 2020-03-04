import React, { Component } from 'react'
import './App.css';
 class App extends Component {
state={
  count:0,
  name:"Marwen",
  isClicked :false

}

inc=()=>{
  this.setState({
    count : this.state.count + 1,
    num:1
  })
}

dec =()=>{
  this.setState({
    count : this.state.count -1,
    num:this.state.num + 1
  })
}

handleChange=(o)=>{
  if(o.target.value.length>3){
    this.setState({
      name:o.target.value
    })
  
  }


}



changeColor=()=>{
  this.setState({
    isClicked:!this.state.isClicked
  })
}






  render() {
    return (
      <div className={this.state.isClicked?"red":"container"}>
        <h1>{this.state.count}</h1>
         <div className="btn-container">
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
          </div>

          <h1>{this.state.name}</h1>
          <input  onChange={this.handleChange}      />
          <button className="changeColor" onClick={ this.changeColor}     >Click me to change color</button>
      </div>
    )
  }
}
export default App
