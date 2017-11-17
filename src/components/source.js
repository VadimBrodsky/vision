import React from 'react';

const Source = ({ url }) => {
  return (
    <source src={url} type="video/mp4" />
  );
}

export default Source;
