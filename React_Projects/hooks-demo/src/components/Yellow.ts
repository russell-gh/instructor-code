import React from "react";

const Yellow = (props) => {
  return (
    <>
      {/* eslint-disable */}
      {props.active ? (
        <div className="light caution on"></div>
      ) : (
        <div className="light caution"></div>
      )
      {/* eslint-enable */}
    </>
  );
};

export default Yellow;
