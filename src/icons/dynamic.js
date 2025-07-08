import React from 'react';
import PropTypes from 'prop-types';

const Dynamic = props => {
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 6a4 4 0 100 8v4.5a8.5 8.5 0 000-17V8zm0 0a4 4 0 010 8V8z"></path>
    </svg>
  );
};

Dynamic.propTypes = {
  color: PropTypes.string
};

export default Dynamic;
