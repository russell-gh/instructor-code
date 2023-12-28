import React from "react";

function Component(props) {
  return (
    <button>
      {props.left}
      {props.text}
      {props.right}
    </button>
  );
}

export default Component;
