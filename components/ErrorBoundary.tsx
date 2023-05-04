import React from "react";

interface ErrorBoundaryProps {
    hasError:boolean;
    children: React.FC
}
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        // Define a state variable to track whether is an error or not
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log({ error, errorInfo })
    }
    render() {
        // @ts-ignore
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again?
                    </button>
                </div>
            )
        }
        // @ts-ignore
        return <><h1>xx</h1>{this.props.children}</>
    }
}

export default ErrorBoundary
