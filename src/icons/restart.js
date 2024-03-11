import React from 'react';
import PropTypes from 'prop-types';

const Restart = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M18.537 19.567A9.962 9.962 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 10-2.46 5.772l.997 1.795z"></path>
    </svg>
  );
};

Restart.propTypes = {
  color: PropTypes.string
};

Restart.defaultProps = {
  color: 'currentColor'
};

export default Restart;
