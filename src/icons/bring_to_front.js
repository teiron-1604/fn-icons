import React from 'react';
import PropTypes from 'prop-types';

const BringToFront = props => {
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
      <g clipPath="url(#clip0_18_14255)">
        <path d="M11 2a3 3 0 013 3v1h1a3 3 0 013 3v1h1a3 3 0 013 3v6a3 3 0 01-3 3h-6a3 3 0 01-3-3v-1H9a3 3 0 01-3-3v-1H5a3 3 0 01-3-3V5a3 3 0 013-3h6zM9 8a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14255">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BringToFront.propTypes = {
  color: PropTypes.string
};

export default BringToFront;
