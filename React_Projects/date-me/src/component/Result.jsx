import React from "react";

const Result = (props) => {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
      <button onClick={() => props.setProfileUser(props.id)}>
        I am interested
      </button>
    </>
  );
};

export default Result;
