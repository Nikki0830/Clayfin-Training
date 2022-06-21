import React, { Component } from "react";
import { ProductProvider } from "./Contextfile";
import Contextfile3 from "./Contextfile3";

export class Contextfile2 extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "nikita",
        age: 24,
      },
    };
  }
  render() {
    return (
      <ProductProvider value={this.state.user}>
        <Contextfile3 />
      </ProductProvider>
    );
  }
}

export default Contextfile2;
