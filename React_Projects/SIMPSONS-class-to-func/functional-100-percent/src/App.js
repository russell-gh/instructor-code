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
  const [apiData, setApiData] = useState(undefined);
  const [userInput, setUserInput] = useState("");

  const getApiData = async () => {
    //clear old state
    // setApiData(undefined);

    try {
      const response = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      setApiData(response.data);
    } catch (error) {
      alert("Sorry, the API is down");
    }
  };

  useEffect(() => {
    getApiData();
    console.log("Use effect ran");
  }, []);

  const onInput = (e) => {
    setUserInput(e.target.value); //nasty bug to be explored
  };

  const onDelete = (index) => {
    // console.log(apiData, index);
    const copy = [...apiData];
    copy.splice(index, 1);
    setApiData(copy);
  };

  console.log(apiData);
  return (
    <Interface
      getApiData={getApiData}
      onInput={onInput}
      onDelete={onDelete}
      apiData={apiData}
      userInput={userInput}
    />
  );
};

export default App;
