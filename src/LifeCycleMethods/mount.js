import React, { Component } from 'react';

class MountDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }
    start = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate() {
        this.interval = this.setInterval(this.start, 1000);
    }


    render() {
        return (
            <React.Fragment>
                <Updates new={this.state.count} />
            </React.Fragment>
        )
    };
}
class Updates extends React.Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.new <= 3) {
            console.log('shouldComponentUpdate:', newProps);
            return false;
        } else {
            return true;
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Previous value destroyed:', prevProps);
        console.log('Updated');
    }
    render() {
        return (<React.Fragment>
            <h2> Seconds Elapsed: {this.props.new} </h2>
        </React.Fragment>);
    }
}

export default MountDemo;