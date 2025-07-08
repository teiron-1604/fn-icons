import React from 'react';
import PropTypes from 'prop-types';

const Anticlockwise = props => {
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
      <g clipPath="url(#clip0_18_13922)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.293 7.293a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L7 8.586V5a1 1 0 011-1h3a1 1 0 100-2H8a3 3 0 00-3 3v3.586L3.707 7.293a1 1 0 00-1.414 0zM5 15v2a3 3 0 003 3h11a3 3 0 003-3V5a3 3 0 00-3-3h-4a1 1 0 100 2h4a1 1 0 011 1v12a1 1 0 01-1 1H8a1 1 0 01-1-1v-2a1 1 0 10-2 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13922">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Anticlockwise.propTypes = {
  color: PropTypes.string
};

export default Anticlockwise;
