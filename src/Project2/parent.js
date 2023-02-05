import React from "react";
import Child from './child.js';

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'vinay',
        }
    }
    update = (value) => {
        let newValue = value;
        this.setState({ newValue })
    }
    render() {
        return (<ReactFragment>
            <h1>{this.state.name}</h1><br></br>
            <Child nameValue={this.state.name} update={this.update}></Child>
        </ReactFragment >)
    }
}