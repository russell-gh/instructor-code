import React, { Component } from "react";
import Characters from "./Characters";

class Interface extends Component {
  render() {
    const { apiData, onInput, onDelete, userInput, getApiData } = this.props;

    return apiData ? (
      <>
        <button onClick={getApiData}>Get random quote</button>
        <Characters
          onInput={onInput}
          onDelete={onDelete}
          apiData={apiData}
          userInput={userInput}
        />
      </>
    ) : (
      <p>Waiting for api data</p>
    );
  }
}

export default Interface;
