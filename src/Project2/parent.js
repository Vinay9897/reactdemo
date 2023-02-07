import React from "react";
import Child from './child.js';
// class comp to class component
// passing method as a props
class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'vinay',
        }
    }
    update = (value) => {
        console.log(value);
        let newValue = value;
        this.setState({ name: newValue })
    }
    render() {
        return (<>
            <h1>{this.state.name}</h1><br></br>
            <Child update={this.update}></Child>
        </>)
    };
};

export default Parent;