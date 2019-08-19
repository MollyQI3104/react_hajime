import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LanguagePopup from './LanguagePopup';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title:'welcome',isSelect:false};
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  
  }

handleClick1()
{
  this.setState(state => ({
    title: 'こんにちは'
  }));
}
handleClick2()
{
  this.setState(state => ({
    title: 'Welcome'
  }));
}

handleClick3()
{
  this.setState(
    state =>(
      {
        isSelect:true
      }
    )

  );
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
     
          <h2>{this.state.title}</h2>
          {/* <button onClick={this.handleClick1}>日本語</button>
          <button onClick={this.handleClick2}>English</button> */}
          <button onClick={this.handleClick3}>Language</button>
          {
            this.state.isSelect &&  <LanguagePopup handleClick1={this.handleClick1}
            handleClick2={this.handleClick2}
            />
          }
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
