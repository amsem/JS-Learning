import React from "react";

export default class Form extends React.Component {
    
    state = {
        name: "",
        text: "",
        checked: false,
        response: "No"
    }
    
    handleChange = (event) => {
        this.setState({name: event.target.value});
    };
    handleText = (e) => {
        this.setState({text: e.target.value});
    };
    handleCheck = (event) => {
        this.setState({checked: event.target.checked});
    };
    handleSelect = (event) => {
        this.setState({response: event.target.response});
    };
    handleSubmit = () => {
        console.log(this.state);
    };
    render() {
        return <div className="visible">
            <input value={this.state.name} onChange={this.handleChange} />
            <textarea value={this.state.text} onChange={this.handleText} />
            <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>
            <select value={this.state.response} onChange={this.handleSelect}>
                <option>Yes</option>
                <option>No</option>
                <option>IDK</option>
            </select>
            <button onClick={this.handleSubmit}>SUBMIT</button>
        </div>
    }
}