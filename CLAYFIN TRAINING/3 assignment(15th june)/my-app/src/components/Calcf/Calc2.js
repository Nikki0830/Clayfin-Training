import React, { Component } from "react";
import Calc from "./Calc";

export default class Calc2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: 0,
    };
  }
  handleClick = (num1,num2,operator) =>{
    if (operator == "+") {
      this.setState({ res: Number(num1) + Number(num2) });
    }
    if (operator == "*") {
      this.setState({ res: Number(num1) * Number(num2) });
    }
    if (operator == "-") {
      this.setState({ res: Number(num1) - Number(num2) });
    }
    if (operator == "/") {
      this.setState({ res: Number(num1) / Number(num2) });
    }
  };
  render() {
    const { num, num3, num4 } = this.props;
    return (
      <>
        <button
          onClick={() => {
            this.handleClick(num, num3, num4);
          }}
        >
          Click
        </button>
        <h1>{this.state.res}</h1>
      </>
    );
  }
}
