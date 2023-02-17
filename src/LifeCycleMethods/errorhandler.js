import React from 'react';
class ErrorHandlers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorInfo: null,
        };
    }
    componentDidCatch(error, info) {
        this.setState({
            error: error,
            info: info,
        });
    }
    render() {
        if (this.state.error) {
            return (
                <React.Fragment>
                    <h5>Sorry. Counter value is greater than 5</h5>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo}
                    </details>
                </React.Fragment>
            );
        }
        return this.props.children;
    }
}

export default ErrorHandlers;