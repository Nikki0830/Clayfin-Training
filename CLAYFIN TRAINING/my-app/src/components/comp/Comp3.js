import React, { Component } from "react";
import "./user.css"
export class Comp3 extends Component {
  render() {
    return (
      <>
        <div className="user-list">
            <h1>Name:{this.props.name2.name1}</h1>
            <h3>Age:{this.props.name2.Age}</h3>
            <h3>City:{this.props.name2.city}</h3>
        </div>
      </>
    );
  }
}

export default Comp3;
