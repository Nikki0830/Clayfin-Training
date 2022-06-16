import React, { Component } from "react";
import Comp3 from "./Comp3";

export class Comp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.name);
    return (
      <>
        <div className="parent2">
          {this.props.name.map((item,index) => {
            return (
              
                <Comp3 key={index} name2={item} />
              
            );
          })}
        </div>
      </>
    );
  }
}

export default Comp2;
