// import React, { Component } from "react";

// class App extends Component {
//   state = {};

//   componentDidMount() {
//     this.getApiData();
//   }

//   onDelete = (index) => {
//     const apiData = this.state.apiData;
//     apiData.splice(index, 1);
//     this.setState({ apiData });
//   };

//   getApiData = async () => {
//     //clear old state
//     this.setState({ apiData: undefined });

//     try {
//       const response = await axios.get(
//         "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
//       );

//       this.setState({ apiData: response.data });
//     } catch (error) {
//       alert("Sorry, the API is down");
//     }
//   };

//   onInput = (e) => {
//     this.setState({ userInput: e.target.value });
//   };

//   render() {
//     return (
//       <Interface
//         getApiData={this.getApiData}
//         onInput={this.onInput}
//         onDelete={this.onDelete}
//         apiData={this.state.apiData}
//         userInput={this.state.userInput}
//       />
//     );
//   }
// }

// export default App;

import axios from "axios";
import Interface from "./components/Interface";
import { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState({});

  const getApiData = async () => {
    //clear old state
    setState({ ...state, apiData: undefined });

    try {
      const response = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );

      setState({ ...state, apiData: response.data });
    } catch (error) {
      alert("Sorry, the API is down");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const onInput = (e) => {
    setState({ ...state, userInput: e.target.value }); //nasty bug to be explored
  };

  const onDelete = (index) => {
    const apiData = state.apiData;
    apiData.splice(index, 1);
    setState({ ...state, apiData });
  };

  console.log(state);
  return (
    <Interface
      getApiData={getApiData}
      onInput={onInput}
      onDelete={onDelete}
      apiData={state.apiData}
      userInput={state.userInput}
    />
  );
};

export default App;
