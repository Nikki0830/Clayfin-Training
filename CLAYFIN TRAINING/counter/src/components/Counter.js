import React, { Component } from "react";
import "./Counter.css";
export class Counter extends Component {
  state = { Counter: 0 };
  handleInc = () => {
    this.setState({
      Counter: this.state.Counter + 1,
    });
  };
  handleDec = () => {
    this.setState({
      Counter: this.state.Counter - 1,
    });
  };

  render() {
    return (
      <>
        <div
          className="container"
          style={{
            backgroundColor: "blue",
            width: "100px",
            height: "100px",
            backgroundColor:
              this.state.Counter == 0
                ? "green"
                : this.state.Counter > 0
                ? "yellow"
                : "red",
          }}
        ></div>
        <h1 className="h1">{this.state.Counter}</h1>
        <button className="button1" onClick={this.handleInc}>+</button>
        <button className="button2" onClick={this.handleDec}>-</button>
      </>
    );
  }
}

export default Counter;
