import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

// function Detail({ location }) {
//   console.log(location);
//   return <span>Hello</span>;
// }

export default Detail;
