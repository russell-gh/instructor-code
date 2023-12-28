import React from "react";

const Red = (props) => {
  return (
    <>
      {props.active ? (
        <div className="light stop on"></div>
      ) : (
        <div className="light stop"></div>
      )}
    </>
  );
};

export default Red;
