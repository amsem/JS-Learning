import './App.css';
import React, { Component } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';
class App extends Component{

  state = {
    visible: true,
    whichComponent: "ImageSlider"
  };

  render(){
    if(this.state.whichComponent === "ImageSlider"){
      return(
        <div className="App">
          <ImageSlider/>
          <button 
          onClick={
            () => {
            this.setState({ whichComponent: "Counter" });
            }}>show Counter</button>
        </div>);
    }
    else if(this.state.whichComponent === "Counter"){
      return(
        <div className="App">
          <div className={this.state.visible ? "visible" : "hidden"}>
            <Counter/>
          </div>
          <button 
          onClick={
            () => {
            this.setState({ whichComponent: "Header" });
            }}>show Header</button>
            <button
            onClick={() => {
              this.setState({visible: !this.state.visible});
            }}
            >toggle button</button>

          </div>
      );
    }
    else if(this.state.whichComponent === "Header"){
      return(
        <div className="App">
          <Header/>
          <button 
          onClick={
            () => {
            this.setState({ whichComponent: "ImageSlider" });
            }}>show ImageSlider</button>

          </div>
      );
    }
}
}

export default App;
