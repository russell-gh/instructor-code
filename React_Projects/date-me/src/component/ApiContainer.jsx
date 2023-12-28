import React, { Component } from 'react';

class ApiContainer extends Component {
    state = { apiData: [] }

    componentDidMount() {
        axios.get('myApiUrl');
    }

    render() { 
        return (  );
    }
}
 
export default ApiContainer;