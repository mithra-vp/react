import React, { Component } from 'react'

export default class ShouldUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "Hello" };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        if (this.state.text === nextState.text) {
            return false; // no re-render
        }
        return true;
    }

    updateText = () => {
        this.setState({ text: "Heii" }); 
    };

    changeText = () => {
        this.setState({ text: "Hi there!" });
    };
    render() {
        console.log("Render called");
        return (
            <div>
                <h2>{this.state.text}</h2>
                <button onClick={this.updateText}>Update (same text)</button>
                <button onClick={this.changeText}>Change (new text)</button>
            </div>
        )
    }
}
