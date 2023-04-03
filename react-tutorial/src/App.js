import './App.css';
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
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
      <Body text1 = "hello"/>
    </div>
  );
}

export default App;
