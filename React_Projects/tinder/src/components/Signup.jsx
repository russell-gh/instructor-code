import React, { Component } from "react";
import { connect } from "react-redux";
import Joi from "joi";

class Signup extends Component {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required().min(5).max(20),
    password: Joi.string().required().min(8).max(16),
  };

  onInput = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = async () => {
    //validate user input
    const joiObject = Joi.object(this.schema);

    try {
      await joiObject.validateAsync(this.state.data, { abortEarly: false });
      this.props.dispatch({ type: "SET_NEW_USER", payload: this.state });
    } catch (errors) {
      const errorsMod = {};
      errors.details.map((error) => {
        console.log(error);
        errorsMod[error.context.key] = error.message;
      });
      this.setState({ errors: errorsMod });
    }
  };

  // addAttribute = (e) => {
  //   // console.log(e.target.value);
  //   const newCustomAtr = [...this.state.customAtr];
  //   newCustomAtr.push({ atrName: this.state.customKey, atrValue: null });
  //   this.setState({ customAtr: newCustomAtr });
  // };

  // onCustomArt = (e) => {
  //   const newInputAtr = { ...this.state.inputAtr };
  //   newInputAtr[e.target.name] = e.target.value;
  //   this.setState({ inputAtr: newInputAtr });
  // };

  render() {
    console.log(this.state);
    return (
      <>
        <div style={{ display: "flex" }}>
          <div>
            <input onInput={this.onInput} type="text" name="username" />
            <label htmlFor="username">Username</label>
            {this.state.errors.username}
          </div>
          <div>
            <input onInput={this.onInput} type="password" name="password" />
            <label htmlFor="password">Password</label>
            {this.state.errors.password}
          </div>
          <div>
            {/* {this.state.username.length > 5 &&
              this.state.password.length > 5 && ( */}
            <button onClick={this.onSubmit}>Submit</button>
            {/* )} */}
          </div>
        </div>

        <div>
          <input onInput={this.onInput} type="text" name="customKey"></input>
          <button onClick={this.addAttribute}>Add attribute</button>
        </div>

        <div>
          {/* {this.state.customAtr.map((item) => {
            return (
              <>
                <div>
                  <input
                    onInput={this.onCustomArt}
                    type="text"
                    name={item.atrName}
                  ></input>
                  <label htmlFor={item.atrName}>{item.atrName}</label>
                </div>
              </>
            );
          })} */}
        </div>

        <button onClick={this.onSubmit}>Submit</button>
      </>
    );
  }
}

export default connect()(Signup);
