import React from 'react';

const Media = ({ source }) => {
  return (
    <source src={source} type="video/mp4" />
  );
}

export default Media;
