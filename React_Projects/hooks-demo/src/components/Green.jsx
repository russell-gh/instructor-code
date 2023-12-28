/* eslint-disable react/prop-types */

import React from "react";

const Green = (props) => {
  return (
    <>
      <div className={props.active ? "light go on" : "light go"}></div>
    </>
  );
};

export default Green;
