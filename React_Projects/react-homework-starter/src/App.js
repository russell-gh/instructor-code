import React, { useState, useEffect } from "react";
import Axios from "axios";

const App = () => {
  //the api data is stored here
  const [data, setData] = useState(null);

  //get the api data
  useEffect(async () => {
    const response = await Axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
    );
    //store the api data
    setData(response.data);
  }, []);

  //check the api data exists
  console.log(data);

  return <h1>Your work stats here!</h1>;
};

export default App;
