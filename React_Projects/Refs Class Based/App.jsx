import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.textInput} />
      </div>
    );
  }
}

export default App;
