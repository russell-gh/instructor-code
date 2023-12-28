import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";

class App extends Component {
  state = { screen: 0 };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      this.setState({ screen: 2 });
    }
  }

  setScreen = (screen) => {
    console.log(">>>", screen);
    this.setState({ screen: screen });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <nav>
          <button
            onClick={() => {
              this.setState({ screen: 0 });
            }}
          >
            Signup
          </button>
          <button
            onClick={() => {
              this.setState({
                screen: 1,
              });
            }}
          >
            Login
          </button>
        </nav>

        {this.state.screen === 0 && <Signup setScreen={this.setScreen} />}

        {this.state.screen === 1 && <Login setScreen={this.setScreen} />}

        {this.state.screen === 2 && <Dashboard setScreen={this.setScreen} />}
      </>
    );
  }
}

export default App;
