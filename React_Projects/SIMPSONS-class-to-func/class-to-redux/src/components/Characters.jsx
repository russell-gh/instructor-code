import React, { Component } from "react";
import { connect } from "react-redux";
import Character from "./Character";
import { ON_USER_INPUT } from "../redux/types";

class Characters extends Component {
  render() {
    const { apiData, filteredApiData } = this.props;

    const dataToUse = filteredApiData ? filteredApiData : apiData;

    return (
      <>
        <label>Search</label>
        <input
          onInput={(e) =>
            this.props.dispatch({
              type: ON_USER_INPUT,
              payload: e.target.value,
            })
          }
          type="text"
        />

        <h4>Total Likes</h4>
        <h3>{this.props.likesCount ? this.props.likesCount : 0}</h3>

        {dataToUse.map((character, index) => {
          return <Character key={index} index={index} character={character} />;
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiData: state.apiData,
    filteredApiData: state.filteredApiData,
    likesCount: state.likesCount,
  };
}

export default connect(mapStateToProps)(Characters);
