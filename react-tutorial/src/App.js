import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Header extends Component {
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

function App() {
  const add = (a,b) => a - b;
  return (
    <div className="App">
      <Header title="Hello"
      num={5} 
      arr = {[1,2,3]} 
      Random={add} 
      myObj={{
        a: 2,
        b: 9
      }} />
    </div>
  );
}

export default App;
