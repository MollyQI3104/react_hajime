import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LanguagePopup extends Component {

    render() {
        return (
          <div className="LanguagePopup">
             <button onClick = {this.props.handleClick1}>日本語</button>
             <button onClick = {this.props.handleClick2}>English</button>
        </div>
        );
      }
    }

    export default LanguagePopup;