import React from 'react';
import PropTypes from 'prop-types';

const IndentDecrease = props => {
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
      <g clipPath="url(#clip0_18_14295)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 6a1 1 0 011-1h10a1 1 0 110 2H11a1 1 0 01-1-1zM7.707 7.293a1 1 0 010 1.414L4.414 12l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0zM10 12a1 1 0 011-1h10a1 1 0 110 2H11a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H11a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14295">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

IndentDecrease.propTypes = {
  color: PropTypes.string
};

export default IndentDecrease;
