import React, { Component } from "react";
import { connect } from "react-redux";
import { NEW_SEARCH } from "../types";

class SearchInterface extends Component {
  state = { searchOption: "name", searchOptions: ["name", "location"] };

  onChange = (e) => {
    console.log(e.target.value);

    this.setState({ searchOption: e.target.value });
  };

  render() {
    const listOfKeys = Object.keys(this.props.users[0]);
    listOfKeys.shift();
    console.log(listOfKeys);

    return (
      <>
        <input
          onInput={(e) => {
            this.setState({ searchInput: e.target.value });
          }}
          type="text"
        />
        <select onChange={this.onChange} name="select">
          {listOfKeys.map((item) => {
            console.log(item);
            return <option value={item}>{item}</option>;
          })}
        </select>
        <button
          onClick={() =>
            this.props.dispatch({
              type: NEW_SEARCH,
              searchInput: this.state.searchInput,
              searchOption: this.state.searchOption,
            })
          }
        >
          Search
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(SearchInterface);
