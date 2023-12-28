import React, { Component } from 'react';

class  extends Component {
    state = {  }
    render() { 
        return ( <h1 onClick={() => this.props.changeName('Sally')}>{this.props.name}</h1> );
    }
}
 
export default ;
