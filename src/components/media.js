import React from 'react';

const Media = (props) => {
  return (
    <source src={props.source} type="video/mp4" />
  );
}

export default Media;
