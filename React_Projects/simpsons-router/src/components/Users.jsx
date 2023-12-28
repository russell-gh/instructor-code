import React from "react";

const Users = (props) => {
  return (
    <p>
      This is the users Component! The product id was {props.match.params.id}
    </p>
  );
};

export default Users;
