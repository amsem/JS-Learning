import logo from '../logo.svg';
import React from 'react';
export default class Header extends React.Component {
    render() {
      return (
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      )
    }
   }