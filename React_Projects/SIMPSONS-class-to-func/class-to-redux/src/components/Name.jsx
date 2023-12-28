import { TOGGLE_LIKE } from "../redux/types";
import { findLikeIndex } from "../utils/";
import { useDispatch, useSelector } from "react-redux";

const Name = (props) => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiData);

  const index = findLikeIndex(this.props.apiData, this.props.name);

  return (
    <div>
      <h4>{props.name}</h4>
      <button
        onClick={() =>
          dispatch({
            type: TOGGLE_LIKE,
            payload: props.name,
          })
        }
      >
        Like
      </button>
      {apiData[index].likes && <p>You like this character!</p>}
    </div>
  );
};

export default Name;

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { TOGGLE_LIKE } from "../redux/types";
// import { findLikeIndex } from "../utils/";

// class Name extends Component {
//   render() {
//     const index = findLikeIndex(this.props.apiData, this.props.name);

//     return (
//       <div>
//         <h4>{this.props.name}</h4>
//         <button
//           onClick={() =>
//             this.props.dispatch({
//               type: TOGGLE_LIKE,
//               payload: this.props.name,
//             })
//           }
//         >
//           Like
//         </button>
//         {this.props.apiData[index].likes && <p>You like this character!</p>}
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { apiData: state.apiData };
// }

// export default connect(mapStateToProps)(Name);
