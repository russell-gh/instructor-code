import React, { Component } from "react";
import User from "./User";
import SearchInterface from "./SearchInterface";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    const { users, filteredUsers } = this.props;

    const usersToShow =
      filteredUsers && filteredUsers.length > 0 ? filteredUsers : users;

    return (
      <>
        <SearchInterface />
        {usersToShow.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} />
            </div>
          );
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users, filteredUsers: state.filteredUsers };
}

export default connect(mapStateToProps)(Search);
