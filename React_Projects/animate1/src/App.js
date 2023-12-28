import logo from "./logo.svg";
import "./App.css";
import Animate from "./Animate";
import { useState } from "react";

function App() {
  const [a, sA] = useState(false);

  return (
    <div className="App">
      <Animate in={a} />
      <button onClick={() => sA(!a)}>Toggle</button>
    </div>
  );
}

export default App;
