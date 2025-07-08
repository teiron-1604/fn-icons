import React from 'react';
import PropTypes from 'prop-types';

const Fullscreen = props => {
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
      <path d="M2 19v-2a1 1 0 112 0v2a1 1 0 001 1h2a1 1 0 110 2H5a3 3 0 01-3-3zm18 0v-2a1 1 0 112 0v2a3 3 0 01-3 3h-2a1 1 0 110-2h2a1 1 0 001-1zM2 7V5a3 3 0 013-3h2a1 1 0 010 2H5a1 1 0 00-1 1v2a1 1 0 01-2 0zm18 0V5a1 1 0 00-1-1h-2a1 1 0 110-2h2a3 3 0 013 3v2a1 1 0 11-2 0z"></path>
    </svg>
  );
};

Fullscreen.propTypes = {
  color: PropTypes.string
};

export default Fullscreen;
