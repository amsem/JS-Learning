import React from "react";

export default class Counter extends React.Component {
        state = {
            count:0
        };
    
    componentWillUnmount(){
        console.log("unmouting....");
    };
    componentDidMount() {
        console.log("mounting.....");
    };
    handleButtonClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };


    render() {
      return (
        <div>
            <div>count : {this.state.count}</div>
            <button onClick={this.handleButtonClick}>ADD 1</button>
            <button onClick={this.handleDecrement}>Minus 1</button>
        </div>
      )
    }
   }