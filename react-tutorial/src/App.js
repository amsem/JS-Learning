import './App.css';
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Counter from './components/Counter';
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
      <Counter initialCounter={0}/>
      <Counter initialCounter={10}/>
    </div>
  );
}

export default App;
