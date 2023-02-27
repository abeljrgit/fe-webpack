import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return <section>This is home count is {this.props.count}</section>;
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps, null)(Home);
