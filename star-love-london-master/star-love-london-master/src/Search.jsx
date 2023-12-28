import React from "react";
// import axios from "axios";
import Fuse from "fuse.js";
import ListItem from "./ListItem";
// import Spinner from "./Spinner";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      search: "",
      category: ""
    };
  }

  // componentDidMount() {
  //   // fetch the data from the api
  //   axios
  //     .get("https://melroune.github.io/starwars-api/api//all.json")
  //     .then(response => {
  //       // set the result as state
  //       this.setState({ data: response.data });
  //     });
  // }

  handleInputChange = e => {
    // get the value from input
    let input = e.target.value;
    // format all lowercase
    input = input.toLowerCase();
    // set in state
    this.setState({ search: input });
  };

  handleCategoryChange = e => {
    // set search category in state
    this.setState({ category: e.target.value });
  };

  renderList = () => {
    const category = this.state.category;
    const search = this.state.search;
    let list = [];
    // if there is no query or category
    if (category === "" || search === "") {
      // set the list to all the data
      list = this.props.data;
    } else {
      // else filter the list
      const options = {
        keys: [category]
      };
      const fuse = new Fuse(this.props.data, options);

      list = fuse.search(this.state.search);
    }

    // map over the results to render
    return list.map((element, index) => {
      return (
        <ListItem
          key={index}
          {...element}
          setProfile={this.props.setCurrentProfile}
          setDisplay={this.props.setCurrentDisplay}
        />
      );
    });
  };

  render() {
    //console.log(list);
    return (
      <div className="container">
        <form className="form-inline my-2 my-lg-0">
          <select
            className="custom-select my-1 mr-sm-2"
            name="select"
            onChange={this.handleCategoryChange}
          >
            <option defaultValue>Categories...</option>
            <option value="name">Name</option>
            <option value="height">Height</option>
            <option value="mass">Mass</option>
            <option value="eyeColor">Eye Color</option>
            <option value="gender">Gender</option>
            <option value="skinColor">Skin Color</option>
            <option value="species">Species</option>
            <option value="homeworld">Homeworld</option>
          </select>
          <input
            className="form-control mr-sm-2"
            name="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

export default Search;
