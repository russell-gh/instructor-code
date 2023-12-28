// import React, { Component } from "react";

// class Quote extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.quote}</p>
//         <button onClick={() => this.props.onDelete(this.props.index)}>
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

// export default Quote;

const Quote = (props) => {
  return (
    <div>
      <p>{props.quote}</p>
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
    </div>
  );
};

export default Quote;
