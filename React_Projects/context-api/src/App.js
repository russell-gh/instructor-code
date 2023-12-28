import logo from "./logo.svg";
import "./App.css";
import Toolbar from "./Toolbar";
import React, { Component } from "react";

const ThemeContext = React.createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;
