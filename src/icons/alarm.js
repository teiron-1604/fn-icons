import React from 'react';
import PropTypes from 'prop-types';

const Alarm = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M12 22a9 9 0 110-18 9 9 0 010 18zm0-2a7 7 0 10-.001-14 7 7 0 000 14zm1-7h3v2h-5V8h2v5zM1.745 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.746 6.282zm16.97-3.535l3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z"></path>
    </svg>
  );
};

Alarm.propTypes = {
  color: PropTypes.string
};

export default Alarm;
