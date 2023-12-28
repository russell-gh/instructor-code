import React, { Component } from "react";
const fakeData = require("../fakeData");

class Profile extends Component {
  render() {
    console.log(this.props);
    const filtered = fakeData.userData.filter((item) => {
      console.log(item.id, this.props.id);
      return item.id === this.props.id;
    });

    console.log(filtered);

    return (
      <>
        <h1>Profile details!</h1>
        <p>{filtered[0].name}</p>
        <p>{filtered[0].location}</p>
        <p>.... more details</p>
      </>
    );
  }
}

export default Profile;
