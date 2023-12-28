import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  state = {};

  componentDidMount() {
    this.getPrivateData();
  }

  getPrivateData = async () => {
    const response = await axios.get(
      `http://localhost:6001/get/${localStorage.getItem("email")}`,
      { headers: { token: localStorage.getItem("token") } }
    );

    console.log(response);

    this.setState({ userProfile: response.data.payload });
  };

  logout = async () => {
    const response = await axios.delete(
      `http://localhost:6001/logout/${localStorage.getItem("email")}`,
      { headers: { token: localStorage.getItem("token") } }
    );

    localStorage.clear();

    this.props.setScreen(0);
  };

  delete = async () => {
    const response = await axios.delete(
      `http://localhost:6001/delete/${localStorage.getItem("email")}`,
      { headers: { token: localStorage.getItem("token") } }
    );

    localStorage.clear();

    this.props.setScreen(0);
  };

  render() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        <button onClick={this.delete}>Delete</button>
        Dashboard
        <p>
          Your age is {this.state.userProfile && this.state.userProfile.age}
        </p>
      </div>
    );
  }
}

export default Dashboard;
