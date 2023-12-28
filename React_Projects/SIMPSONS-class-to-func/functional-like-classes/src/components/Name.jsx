// import React, { Component } from "react";

// class Name extends Component {
//   state = { liked: false };

//   render() {
//     return (
//       <div>
//         <h4>{this.props.name}</h4>
//         <button onClick={() => this.setState({ liked: !this.state.liked })}>
//           Like
//         </button>
//         {this.state.liked && <p>You like this character!</p>}
//       </div>
//     );
//   }
// }

// export default Name;

import { useState } from "react";

const Name = (props) => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h4>{props.name}</h4>
      <button onClick={() => setLiked(!liked)}>Like</button>
      {liked && <p>You like this character!</p>}
    </div>
  );
};

export default Name;
