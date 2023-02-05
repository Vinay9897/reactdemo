import React from 'react';
class Child extends React.Component {
    constructor() {
        super()
        this.state = {
            nameValue: null
        }
    }
    handleChange = () => {
        let newValue = 'Jack';
        this.setState({ nameValue: newValue });
        this.props.update(newValue);
    }
    render() {
        return (<>
            <button onClick={this.handleChange}>Change</button>
        </>)
    }
}
export default Child;
