import axios from "axios";
import Characters from "./components/Characters";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    async function getApiData() {
      try {
        const response = await axios.get(
          "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
        );
        console.log(response.data);
        setCharacters(response.data);
      } catch (error) {
        console.log("Error", error);
        alert("Sorry, the API is down!");
      }
    }
    getApiData();
  }, []);

  const onDelete = (itemNo) => {
    console.log("OnDeleteClicked");
    const charactersNew = [...characters];
    charactersNew.splice(itemNo, 1);
    setCharacters(charactersNew);
  };

  return (
    <>
      {characters ? (
        <Characters onDelete={onDelete} characters={characters} />
      ) : (
        <div>Loading, please wait</div>
      )}
    </>
  );
};

export default App;
