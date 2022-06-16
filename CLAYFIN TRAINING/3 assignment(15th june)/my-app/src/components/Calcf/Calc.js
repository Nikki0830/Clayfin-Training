import React, { Component } from "react";
import Calc2 from "./Calc2";

export class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      ope: "+",
    };

    this.handleChange3 = this.handleChange3.bind(this);
  }

  handleChange3(e) {
    this.setState({ ...this.state, ope: e.target.value });
  }
  render() {
    console.log(this.state);
    return (
      <>
        <input
          type="Number"
          onChange={(e) => {
            this.setState({ ...this.state, num1: e.target.value });
          }}
        ></input>
        <input
          type="Number"
          onChange={(e) => {
            this.setState({ ...this.state, num2: e.target.value });
          }}
        ></input>
        <select value={this.state.ope} onChange={this.handleChange3}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <Calc2
          num={this.state.num1}
          num3={this.state.num2}
          num4={this.state.ope}
        />
      </>
    );
  }
}

export default Calc;
