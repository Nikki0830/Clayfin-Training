import React, { Component, useContext } from "react";
// import { productProvider } from "./productContext";
import ProductContext, { ProductProvider } from "./ProductContext";
import axios from "axios";
import "./Cards.css";

export class Cards extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((resp) => {
        const p = resp.data;
        this.setState({ users: p });
        console.log(this.state.users);
      })
      .catch((err) => {
        console.log("error");
      });
  }

  render() {
    console.log(this.state.users);
    return (
      <>
        <ProductProvider value={this.state.users}>
          <ProductChild />
        </ProductProvider>
      </>
    );
  }
}

function ProductChild() {
  const data = useContext(ProductContext);
  console.log("jjjj", data);
  return (
    <div>
      {data.map((elem) => {
        return (
          <>
            <div className="main_div">
              <div className="box">
                <h1>
                  {elem.id} {elem.name} {elem.username} {elem.email}
                </h1>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Cards;
