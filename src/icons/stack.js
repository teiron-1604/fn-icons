import React from 'react';
import PropTypes from 'prop-types';

const Stack = props => {
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
      <g clipPath="url(#clip0_18_15758)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.755 1.27a3 3 0 012.49 0l8.585 3.908a2 2 0 010 3.655l-8.575 3.897a3.003 3.003 0 01-2.49 0L2.19 8.822a2 2 0 010-3.654l8.565-3.898zM12 3a1 1 0 00-.415.09L3.003 6.995 3.015 7l8.58 3.91a1.002 1.002 0 00.83 0l8.591-3.905-.01-.004-8.59-3.91C12.286 3.03 12.143 3 12 3zm-9 9.003a1 1 0 10-2-.005 2 2 0 001.16 1.82l8.607 3.913a3 3 0 002.476 0l8.577-3.899h.002A2 2 0 0023 11.991a1 1 0 00-2 .016l-.004.002-8.578 3.9a1.003 1.003 0 01-.825 0L3 12.002zM2.002 16A1 1 0 013 17.003l8.592 3.906a1.002 1.002 0 00.825 0l8.58-3.9H21a1 1 0 012-.017 2 2 0 01-1.178 1.84h-.002l-8.578 3.9a3 3 0 01-2.475 0L2.16 18.817A2 2 0 011 16.998 1 1 0 012.002 16z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15758">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Stack.propTypes = {
  color: PropTypes.string
};

export default Stack;
