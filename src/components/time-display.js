import React from 'react';
import TimeFormat from '../helpers/time-format';

const TimeDisplay = ({ currentTime, totalTime }) => {
  const current = new TimeFormat(currentTime);
  const total = new TimeFormat(totalTime);
  return (
    <div>
      <output>{ current.minuteSeconds() }</output>
      <span>/</span>
      <output>{ total.minuteSeconds() }</output>
    </div>
  );
};

export default TimeDisplay;
