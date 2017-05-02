import React from 'react';

class Media extends React.Component {
  render() {
    return (
      <source src={this.props.source} type="video/mp4" />
    );
  }
}

export default Media;
