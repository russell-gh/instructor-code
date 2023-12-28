import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <>
        <h1>My counter</h1>
        <p>The count is {this.props.count}</p>
        <button onClick={() => this.props.dispatch({ type: "INCREMENT" })}>
          Add
        </button>
        <button onClick={() => this.props.dispatch({ type: "DECREMENT" })}>
          Minus
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(App);

// import { useSelector, useDispatch } from "react-redux";
// import React from "react";

// const App = () => {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1>My counter</h1>
//       <p>The count is {count}</p>

//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>

//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Remove</button>
//     </>
//   );
// };

// export default App;
