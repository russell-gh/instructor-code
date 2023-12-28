import React, { Component } from "react";

class Search extends Component {
  //when the user changes a drop down or enters some text, store
  //the id and value on the state of app
  onInput = (e) => {
    this.props.setSearchConfig(e.target.id, e.target.value);
  };

  render() {
    return (
      <>
        <h1>Search for Love!</h1>
        <p>Search by location</p>
        <input id="location" onInput={this.onInput} type="text" />

        <p>Users who are interested in</p>
        <select id="sex" onChange={this.onInput}>
          <option value="2">Either</option>
          <option value="0">Female</option>
          <option value="1">Male</option>
        </select>
        <br></br>
        <button onClick={() => this.props.setScreenMode(2)}>Search</button>
      </>
    );
  }
}

export default Search;
