import React from "react";

export default class FetchData extends React.Component {
    
    state = {
        loading: true,
        people: []
    };
    async componentDidMount(){
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({people: data.results, loading: false});
    };
    render(){
        if (this.state.loading){
            return <div>loading</div>
        }
        if (!this.state.people.length){
            return <div>no data</div>
        }
        return(<div>
            {this.state.people.map(person => (
                <div key={person.login.uuid}>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img src={person.picture.large}/>
                </div>
            ))}
                </div>
                );
    }
}