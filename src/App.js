import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    const { title } = this.props;

    return <div>{title}</div>;
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};
