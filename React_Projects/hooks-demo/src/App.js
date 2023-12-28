import React, { Component } from "react";
import "./App.css";
import Green from "./components/Green";
import Red from "./components/Red";
import Yellow from "./components/Yellow";

class App extends Component {
  state = { red: true, yellow: false, green: false };

  componentDidMount() {
    this.onAutoClick();
  }

  onAutoClick = () => {
    //here goes the sequence logic

    const pattern = [
      { red: true, yellow: false, green: false },
      { red: false, yellow: true, green: false },
      { red: false, yellow: true, green: true },
      { red: false, yellow: false, green: true },
    ];

    pattern.reverse();

    let i = 0;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (i > pattern.length - 1) i = 0;

      this.setState(pattern[i]);
      i++;
    }, 1000);
  };

  render() {
    return (
      <>
        <h1>Russells Traffic Lights</h1>
        <div className="outer">
          <div className="inner">
            <Red active={this.state.red} />
            <Yellow active={this.state.yellow} />
            <Green active={this.state.green} />
          </div>
        </div>

        <button
          onClick={() => {
            this.setState({ green: !this.state.green });
          }}
          className="go"
        >
          Go
        </button>
        <button
          onClick={() => {
            this.setState({ yellow: !this.state.yellow });
          }}
          className="caution"
        >
          Caution
        </button>
        <button
          onClick={() => {
            this.setState({ red: !this.state.red });
          }}
          className="stop"
        >
          Stop
        </button>
        <button onClick={this.onAutoClick} className="autogo">
          Auto
        </button>
      </>
    );
  }
}

export default App;
