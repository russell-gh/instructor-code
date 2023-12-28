import React, { Component } from "react";
import { connect } from "react-redux";
import Characters from "./Characters";

class Interface extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.apiData.length ? <Characters /> : <p>Loading API data</p>}
      </>
    );
  }
}

function mapStateToProps(state) {
  return { apiData: state.apiData };
}

export default connect(mapStateToProps)(Interface);
