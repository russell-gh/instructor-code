import React from "react";
import axios from "axios";
//import Search from "./Search";
import AddProfile from "./AddProfile";
import ViewUserProfile from "./ViewUserProfile";
import Welcome from "./Welcome";
import Header from "./Header";
import "./App.css";
import Pagination from "./Pagination";
import ListItem from "./ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentDisplay: "search",
      registered: false,
      currentProfile: {},
      currentPage: 1
    };
    // values for display: 'loading', 'register', 'search', 'viewProfile'
  }

  componentDidMount() {
    axios
      .get("https://melroune.github.io/starwars-api/api//all.json")
      .then(response => {
        // set the result as state
        this.setState({ data: response.data });
      });
  }

  addNewUserToTheList = user => {
    this.state.data.push(user);
  };

  setCurrentDisplay = display => {
    this.setState({
      currentDisplay: display
    });
  };

  setRegistration = val => {
    this.setState({ registered: val });
  };

  setCurrentProfile = user => {
    this.setState({ currentProfile: user });
  };

  handleClick = pageNumber => {
    console.log("button clicked! " + pageNumber);
    this.setState({ currentPage: pageNumber });
  };

  renderInterface() {
    if (this.state.currentDisplay === "loading") {
      return <Welcome setCurrentDisplay={this.setCurrentDisplay} />;
    }
    if (this.state.currentDisplay === "register") {
      return (
        <div>
          <Header />
          <AddProfile
            setCurrentProfile={this.setCurrentProfile}
            setCurrentDisplay={this.setCurrentDisplay}
            setRegistration={this.setRegistration}
            addNewUserToTheList={this.addNewUserToTheList}
          />
        </div>
      );
    }
    if (this.state.currentDisplay === "search") {
      return (
        <div>
          <Header />
          <Pagination
            totalRecords={87}
            recordsPerPage={10}
            buttonsBeforeAfter={2}
            handleClick={this.handleClick}
            currentPage={this.state.currentPage}
          />
          {this.state.data
            .slice(
              (this.state.currentPage - 1) * 10,
              this.state.currentPage * 10 + 10
            )
            .map((i, index) => {
              return <ListItem key={index} {...i} />;
            })}
          {/* <Search
            data={this.state.data}
            setCurrentProfile={this.setCurrentProfile}
            setCurrentDisplay={this.setCurrentDisplay}
            currentPage={this.state.currentPage}
            recordsPerPage={10}
          /> */}
        </div>
      );
    }
    if (this.state.currentDisplay === "viewProfile") {
      return (
        <div>
          <Header />
          <ViewUserProfile
            currentProfile={this.state.currentProfile}
            setCurrentDisplay={this.setCurrentDisplay}
          />
        </div>
      );
    }
  }

  render() {
    return <div className="App">{this.renderInterface()}</div>;
  }
}

export default App;
