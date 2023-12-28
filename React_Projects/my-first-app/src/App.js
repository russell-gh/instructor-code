import React, { Component } from "react";

class App extends Component {
  state = { myName: "Russell" };

  changeName = (newName) => {
    this.setState({ myName: newName }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            onInput={(e) => {
              console.log(e.target.value);
            }}
          ></input>
        </div>
      </>
    );
  }
}

export default App;
