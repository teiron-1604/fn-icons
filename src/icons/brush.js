import React from 'react';
import PropTypes from 'prop-types';

const Brush = props => {
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
      <g clipPath="url(#clip0_18_13938)">
        <path d="M5 10.9v-1a1 1 0 011-1h3a2 2 0 002-2V4a1 1 0 012 0v2.9a2 2 0 002 2h3a1 1 0 011 1v1H5zm10 10v-3a1 1 0 10-2 0v3h-2v-1a1 1 0 10-2 0v1H6v-8h12v8h-3zm5-8.27a2 2 0 001-1.73v-1a3 3 0 00-3-3h-3V4a3 3 0 00-6 0v2.9H6a3 3 0 00-3 3v1a2 2 0 001 1.73v8.27a2 2 0 002 2h12a2 2 0 002-2v-8.27z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13938">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Brush.propTypes = {
  color: PropTypes.string
};

export default Brush;
