import React, { Component } from "react";
import Comp2 from "./Comp2";

export class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empList: [
        { name1: "Nikita", Age: 24, city: "Chennai" },
        { name1: "Nikki", Age: 25, city: "Bangalore" },
        { name1: "Niki", Age: 24, city: "Odisha" },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="parent1">
          <Comp2 name={this.state.empList} />
        </div>
      </>
    );
  }
}

export default Comp;
