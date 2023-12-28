import React from "react";
import "./App.css";
import Movielist from "./Movielist";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        asdasdasd
        <Nav />
        <Movielist />
      </div>
    </MovieProvider>
  );
}

export default App;
