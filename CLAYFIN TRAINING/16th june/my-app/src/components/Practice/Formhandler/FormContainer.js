import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import { FormProvider } from "./Contextfile";
import FormContainer2 from "./FormContainer2";

export class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        age: "",
        email: "",
        pass: "",
        cwd: "",
        next: true,
      }
     
    };
  }

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Submitted");
  //   };

  handleClick = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      ...prevState.user,
      next: false,
    }));
    // this.setState((prevState) => ({
    //     ...prevState.userDetails,
    //     userName: "davis",
    //   }));
    console.log("jgjgjgj", this.state.user);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };

  render() {
    return (
      <>
        {this.state.user.next && (
          <div>
            <Input
              type={"text"}
              name={"name"}
              title={"Name"}
              placeholder={"Enter your name"}
              isRequired={true}
              value={this.state.user.name}
              handleChange={this.handleChange}
            />
            <Input
              type={"number"}
              name={"age"}
              title={"Age"}
              value={this.state.user.age}
              placeholder={"Enter your age"}
              isRequired={true}
              handleChange={this.handleChange}
            />

            <Input
              type={"text"}
              name={"city"}
              title={"City"}
              value={this.state.user.city}
              placeholder={"Enter your city"}
              isRequired={true}
              handleChange={this.handleChange}
            />

            <Input
              type={"email"}
              name={"email"}
              title={"Email"}
              value={this.state.user.email}
              isRequired={true}
              placeholder={"Enter your Email"}
              handleChange={this.handleChange}
            />

            <Input
              type={"password"}
              name={"pass"}
              isRequired={true}
              value={this.state.user.pass}
              title={"Password"}
              placeholder={"Enter your Password"}
              handleChange={this.handleChange}
            />

            <Input
              type={"password"}
              name={"cpw"}
              isRequired={true}
              value={this.state.user.cpw}
              title={"Password"}
              placeholder={"Enter for confirm password"}
              handleChange={this.handleChange}
            />

            <Button
              title={"Submit"}
              // style={btnStyle}
              // action={this.handleSubmit}
              onClick={this.handleClick}
            />
          </div>
        )}
        {!this.state.user.next && (
          <FormProvider value={this.state.user}>
            <FormContainer2 />
          </FormProvider>
        )}
      </>
    );
  }
}

// const btnStyle = {
//   margin: "20px 20px 15px 15px",
// };

export default FormContainer;
