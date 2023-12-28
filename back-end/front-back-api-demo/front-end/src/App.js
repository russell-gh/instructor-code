import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = { apiResponse: null };

  async componentDidMount() {
    const result = await axios.post("http://localhost:6001/getApiData", {});
    console.log(result);
    this.setState({ apiResponse: result.data.result });
  }

  render() {
    const { apiResponse } = this.state;

    //exit early
    if (apiResponse === null) {
      return <p>Waiting for API data!</p>;
    }

    return (
      <>
        <h1>Currency Data</h1>
        <h4>One $ (USD) equals:</h4>
        <p>AUD: {apiResponse.rates.AUD}</p>
        <p>CAD: {apiResponse.rates.CAD}</p>
      </>
    );
  }
}

export default App;
