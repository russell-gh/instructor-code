import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Help from "./components/Help";

class App extends Component {
  state = { screen: 0 };

  setScreen = (screen) => {
    this.setState({ screen });
  };

  componentDidMount() {
    const state = localStorage.getItem("state");

    if (state) {
      const stateObj = JSON.parse(state);
      this.setState({ ...stateObj });
    }
  }

  //once user has logged in
  onLogin = () => {
    localStorage.setItem("state", JSON.stringify({ ...this.state, screen: 1 }));
    this.setState({ screen: 1 });
  };

  render() {
    return (
      <>
        <nav>
          <button onClick={() => this.setScreen(0)}>Login</button>
          <button onClick={() => this.setScreen(1)}>Dashboard</button>
          <button onClick={() => this.setScreen(2)}>Help</button>
        </nav>
        <main>
          {this.state.screen === 0 && <Login onLogin={this.onLogin} />}
          {this.state.screen === 1 && <Dashboard />}
          {this.state.screen === 2 && <Help />}
        </main>
      </>
    );
  }
}

export default App;
