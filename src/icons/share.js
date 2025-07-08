import React from 'react';
import PropTypes from 'prop-types';

const Share = props => {
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
      <path d="M20 19a2 2 0 00-3.666-1.106 1.016 1.016 0 01-.112.193A2 2 0 1020 19zM8 12a2 2 0 10-4 0 2 2 0 004 0zm12-7a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 01-6.842 2.814l-5.31 3.098a4 4 0 010 2.174l5.313 3.096a4 4 0 11-1.01 1.727l-5.31-3.095a4 4 0 110-5.629l5.31-3.098A4.002 4.002 0 0118 1a4 4 0 014 4z"></path>
    </svg>
  );
};

Share.propTypes = {
  color: PropTypes.string
};

export default Share;
