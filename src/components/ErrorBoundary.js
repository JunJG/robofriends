import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        // Kinda similar to try-catch in JS
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops, we have some errors.. this is not good.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;