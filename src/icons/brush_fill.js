import React from 'react';
import PropTypes from 'prop-types';

const BrushFill = props => {
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
      <g clipPath="url(#clip0_18_13942)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.586 22.314A2 2 0 006 22.9h12a2 2 0 002-2v-8.268a2 2 0 001-1.732v-1a3 3 0 00-3-3h-3V4a3 3 0 00-6 0v2.9H6a3 3 0 00-3 3v1a2 2 0 001 1.732V20.9a2 2 0 00.586 1.414zM6 12.9h12v8h-3v-3a1 1 0 10-2 0v3h-2v-1a1 1 0 10-2 0v1H6v-8z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13942">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BrushFill.propTypes = {
  color: PropTypes.string
};

export default BrushFill;
