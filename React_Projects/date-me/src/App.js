import React, { Component } from "react";
import Register from "./component/Register";
import Search from "./component/Search";
import Results from "./component/Results";
import Profile from "./component/Profile";

class App extends Component {
  //sets initial state
  state = { screenMode: 0, searchConfig: { sex: 2 } };

  //sets the screen mode to decide which component is on the screen
  setScreenMode = (mode) => {
    this.setState({ screenMode: mode });
  };

  //sets state to contain the value the user entered in the search
  //and the name of the search box
  setSearchConfig = (key, value) => {
    this.setState({
      searchConfig: { ...this.state.searchConfig, [key]: value },
    });
  };

  //sets in the state the id of the member the user likes
  setProfileUser = (id) => {
    this.setState({ profileUserId: id, screenMode: 3 });
    console.log(id);
  };

  render() {
    return (
      <>
        <h1>Date-Me App</h1>

        <div>
          {this.state.screenMode === 0 && (
            <Register setScreenMode={this.setScreenMode} />
          )}

          {this.state.screenMode === 1 && (
            <Search
              setSearchConfig={this.setSearchConfig}
              setScreenMode={this.setScreenMode}
            />
          )}

          {this.state.screenMode === 2 && (
            <Results
              setProfileUser={this.setProfileUser}
              searchConfig={this.state.searchConfig}
            />
          )}

          {this.state.screenMode === 3 && (
            <Profile id={this.state.profileUserId} />
          )}
        </div>
      </>
    );
  }
}

export default App;
