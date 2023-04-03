import logo from '../logo.svg';
import React from 'react';
class Header extends React.Component {
    render() {
      return (
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>
          {this.props.title}
          </h1>
          <div>
          {this.props.num}
          </div>
          <div>
          {JSON.stringify(this.props.myObj)}
          </div>
          <div>{this.props.arr[2]}</div>
          <div>{this.props.Random(9,1)}</div>
        </header>
      )
    }
   }
   export default Header;