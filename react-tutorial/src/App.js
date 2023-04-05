import './App.css';
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';
function App() {
  const add = (a,b) => a - b;
  return (
    <div className="App">
      <ImageSlider/>
     
      <Body text1 = "hello"/>
      <Counter initialCounter={0}/>
      <Counter initialCounter={10}/>
    </div>
  );
}

export default App;
