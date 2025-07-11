import React from 'react';
import PropTypes from 'prop-types';

const SmileyHappyPlus = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 7c2 0 3.667.333 5 1a5 5 0 11-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 012.45 2h-4.9A2.5 2.5 0 018.5 7zm7 0a2.5 2.5 0 012.45 2h-4.9a2.5 2.5 0 012.45-2z"></path>
    </svg>
  );
};

SmileyHappyPlus.propTypes = {
  color: PropTypes.string
};

export default SmileyHappyPlus;
