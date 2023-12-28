import React, { Component } from "react";
import Post from "./Post";
import { FaStream, FaBars, FaSearch } from "react-icons/fa";

class Searchposts extends Component {
  state = { show: false };
  render() {
    return (
      <>
        <div className="search-pages">
          <h1>Search</h1>
          <button className="bigbuttons">Posts</button>
          <button className="bigbuttons">Players</button>
          <form>
            <input type="text" name="search" placeholder="Search" />
            <button className="button-in-bar" type="submit">
              <FaSearch />
            </button>
          </form>
          <div className="filter">
            <p
              className="fa-icon"
              onClick={() => {
                this.setState({ show: !this.state.show });
              }}
            >
              {this.state.show ? <FaStream /> : <FaBars />} Filters
            </p>
            {this.state.show ? (
              <div>
                <input type="text" name="location" placeholder="Location" />
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="{this.date}"
                  min="2021-05-01"
                  max="2022-12-31"
                ></input>
              </div>
            ) : null}
          </div>
        </div>
        <Post />
        <Post />
      </>
    );
  }
}

export default Searchposts;
