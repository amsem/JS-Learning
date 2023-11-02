import React from "react";

 const initialState = {
    username: "",
        email:"",
        password:"",
        usernameError: "",
        emailError:"",
        passwordError:""
 }
export default class Form extends React.Component {
    
    state = initialState;
    
    handleChange = (event) => {
        const checked = event.target.type === "checkbox"
        this.setState({
            [event.target.name]: checked
            ? event.target.checked
            : event.target.value
        });
    };
    validate = () => {
        let usernameError= "" ;
        let emailError= "" ;
       // let passwordError = "" ;
        if(!this.state.username){
            usernameError = "Enter a valid UserName";
        }
        if(!this.state.email.includes("@")){
            emailError = "invalid email !";
        }
        if(emailError || usernameError){
            this.setState({ emailError, usernameError })
            return false;
        }
        return true;
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
        console.log(this.state);
        this.setState(initialState);
        }

    };
    render() {
        return <form className="visible" onSubmit={this.handleSubmit}>
            <div>
            <input 
            placeholder="username"
            name="username"
            value={this.state.name} 
            onChange={this.handleChange} 
            />
            <div style={{fontSize: 18, color: "red"}}>{this.state.usernameError}</div>
            </div>
            <div>
            <input 
            placeholder="email"
            name="email"
            value={this.state.name} 
            onChange={this.handleChange} 
            />
             <div style={{fontSize: 18, color: "red"}}>{this.state.emailError}</div>
            </div>
            <div>
            <input 
            placeholder="password"
            type="password"
            name="pasword"
            value={this.state.name} 
            onChange={this.handleChange} 
            />
             <div style={{fontSize: 18, color: "red"}}>{this.state.passwordError}</div>
            </div>
            <button type="submit">submit</button>
        </form>
    }
}