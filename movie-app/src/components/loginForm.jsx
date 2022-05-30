import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};

    if (this.state.account.username.trim() === "")
      errors.username = "Username is required.";

    if (this.state.account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    this.validateProperty(input)

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Paswword"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary m-3">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
