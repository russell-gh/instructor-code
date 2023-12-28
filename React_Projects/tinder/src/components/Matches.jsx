import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class Matches extends Component {
  render() {
    const { users, likes, dispatch } = this.props;

    //remove users that are not in the likes array
    let usersToShow = [...users];

    usersToShow = usersToShow.filter((user) => {
      return likes.includes(user.id);
    });

    return usersToShow.map((user) => {
      return (
        <div key={user.id}>
          <User user={user} />
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    likes: state.likes,
  };
}

export default connect(mapStateToProps)(Matches);
