import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
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
      <g clipPath="url(#clip0_18_14330)">
        <path d="M1 12a6 6 0 016-6h2a1 1 0 010 2H7a4 4 0 000 8h2a1 1 0 110 2H7a6 6 0 01-6-6zm20 0a4 4 0 00-4-4h-2a1 1 0 110-2h2a6 6 0 010 12h-2a1 1 0 110-2h2a4 4 0 004-4zm-5-1a1 1 0 110 2H8a1 1 0 110-2h8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14330">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Link.propTypes = {
  color: PropTypes.string
};

export default Link;
