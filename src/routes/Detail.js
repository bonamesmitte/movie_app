import React, { Component } from 'react';
import './Detail.css';

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
      return (
        <div className="detail_box">
          <p>{location.state.summary}</p>
        </div>
      );
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
