import React from "react";
import "./App.css";

class UserProfile extends React.Component {
  state = {
    data: "",
    brokenHeartClass: "btn btn-light heart-broken",
    fullHeartClass: "btn btn-light heart"
  };

  hideFullHeart = () => {
    this.setState({ fullHeartClass: "hide-element" });
  };

  hideBrokenHeart = () => {
    this.setState({ brokenHeartClass: "hide-element" });
  };

  render() {
    return (
      <div className="card bg-warning text-light">
        <img
          src={this.props.currentProfile.image}
          className="card-img-top"
          alt={this.props.currentProfile.name}
        />
        <div className="card-body">
          {!this.props.currentProfile.currentUser && (
            <div className="btn-container">
              <button
                className={this.state.fullHeartClass}
                onClick={() => this.hideBrokenHeart()}
              >
                <i className="fas fa-heart"></i>{" "}
              </button>

              <button
                className={this.state.brokenHeartClass}
                onClick={() => this.hideFullHeart()}
              >
                <i className="fas fa-heart-broken"></i>{" "}
              </button>
            </div>
          )}

          <h5 className="card-title text-dark">
            Name: {this.props.currentProfile.name}
          </h5>

          <p className="card-text text-dark">
            <span className="jedi">Height</span>:{" "}
            {this.props.currentProfile.height}
          </p>
          <p className="card-text text-dark">
            <span className="jedi">Mass</span>: {this.props.currentProfile.mass}
          </p>
          <p className="card-text text-dark">
            <span className="jedi">Gender</span>:{" "}
            {this.props.currentProfile.gender}
          </p>
          <p className="card-text text-dark">
            <span className="jedi">Eye color</span>:{" "}
            {this.props.currentProfile.eyeColor}
          </p>
          <p className="card-text text-dark">
            <span className="jedi">Species</span>:{" "}
            {this.props.currentProfile.species}
          </p>
          <p className="card-text text-dark">
            <span className="jedi">Skin color</span>:{" "}
            {this.props.currentProfile.skinColor}
          </p>
          <p className="card-text text-dark">
            <span className="jedi">Homeworld</span>:{" "}
            {this.props.currentProfile.homeworld}
          </p>
        </div>
        <div className="btn-container wideButtonContainer">
          <button
            onClick={() => this.props.setCurrentDisplay("search")}
            type="button"
            className="btn btn-light search"
          >
            Search for Love
          </button>
        </div>
      </div>
    );
  }
}

export default UserProfile;
