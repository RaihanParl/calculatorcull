import React, { Component } from 'react';
import './App.css';

class NumberButton extends Component {
  render(){
    return(
      <button className='square' {...this.props}>
      {this.props.number}
      </button>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tmp:'',
      number1:'',
      number2:'',
    }
    this.setNumber = this.setNumber.bind(this);
  }
  deleteNumber(){
      const tmp = this.state.tmp
      if (tmp != null && tmp.length > 0) {
        const newtmp = tmp.substring(0, tmp.length - 1);
        this.setState({
          tmp:newtmp
        })
    }
  }
  clearNumber(){
    this.setState({
      tmp:''
    })
  }
  setNumber(number){
    const tmp = this.state.tmp
    
    if(isNaN(number)){
      if(tmp === ''){
        return
      }
      if((isNaN(tmp.substring(tmp.length-1)))){
        const tmp1 = tmp.substring(0, tmp.length - 1);
        const newtmp = tmp1 + number;
        this.setState({
          tmp:newtmp
        })
      }else{
        this.setState({tmp:tmp + number})
      }
    }else{
      this.setState({tmp:tmp + number})
    }
  }
  calculate(){
    const tmp = this.state.tmp
    if(tmp === ''){
      return
    }
    if(!isNaN(tmp.substring(tmp.length-1))){
      const result = eval(tmp);
      this.setState({tmp:result})
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App">
          <h1>Kalkulator Paung</h1>
           <div className="App-header">
           <input value={this.state.tmp} readOnly/>
           <div className="board-row">
              <NumberButton onClick={()=>this.clearNumber()} number="C"/>
              <NumberButton onClick={()=>this.deleteNumber()} number="CE"/>
              <NumberButton onClick={()=>this.setNumber("/")} number="÷"/>
              <NumberButton onClick={()=>this.setNumber("*")} number="×"/>
            </div>
           <div className="board-row">
              <NumberButton onClick={()=>this.setNumber("7")} number="7"/>
              <NumberButton onClick={()=>this.setNumber("8")} number="8"/>
              <NumberButton onClick={()=>this.setNumber("9")} number="9"/>
              <NumberButton onClick={()=>this.setNumber("-")} number="-"/>
            </div>
            <div className="board-row">
              <NumberButton onClick={()=>this.setNumber("4")} number="4"/>
              <NumberButton onClick={()=>this.setNumber("5")} number="5"/>
              <NumberButton onClick={()=>this.setNumber("6")} number="6"/>
              <NumberButton onClick={()=>this.setNumber("+")} number="+"/>
            </div>
            <div className="board-row">
              <NumberButton onClick={()=>this.setNumber("1")} number="1"/>
              <NumberButton onClick={()=>this.setNumber("2")} number="2"/>
              <NumberButton onClick={()=>this.setNumber("3")} number="3"/>
              <NumberButton onClick={()=>this.calculate()} number="="/>
            </div>
            <div className="board-row">
              <NumberButton className='square long-square' onClick={()=>this.setNumber("0")} number="0"/>
              <NumberButton onClick={()=>this.setNumber(".")} number="."/>
            </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
