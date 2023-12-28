import React, { Component } from "react";
import Joi from "joi";

class App extends Component {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  onInput = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = async () => {
    const r = Joi.object(this.schema);
    try {
      const result = await r.validateAsync(this.state.data, {
        //may not be asyn ref console.log needed!!!
        abortEarly: false,
      });
      console.log(result);
    } catch (errors) {
      const errorsMod = {};
      errors.details.map((error) => {
        console.log(error);
        errorsMod[error.context.key] = error.message;
      });
      console.log(errorsMod);
      this.setState({ errors: errorsMod });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <input onInput={this.onInput} type="text" name="username" />
        {this.state.errors.username}
        <input onInput={this.onInput} type="text" name="password" />
        {this.state.errors.password}
        <input onInput={this.onInput} type="text" name="name" />
        {this.state.errors.name}
        <button onClick={this.onSubmit}>Submit</button>
      </>
    );
  }
}

export default App;
