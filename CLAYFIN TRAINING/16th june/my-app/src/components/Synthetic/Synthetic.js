import React, { Component } from "react";

export class Synthetic extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = () => {
    this.state.name.length > 0
      ? alert(`${this.state.name}`)
      : alert("Please fill the correct details");
  };
  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default Synthetic;
