import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [day, setDay] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("I act like component did update!");
  }, [day, 5000]);

  return (
    <div>
      Hello World! - {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          setDay(day + 1);
        }}
      >
        Add day
      </button>
      <input
        value={text}
        onInput={(e) => setText(e.target.value)}
        type="text"
      />
      {text}
    </div>
  );
};

export default App;
