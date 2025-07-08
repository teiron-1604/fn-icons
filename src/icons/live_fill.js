import React from 'react';
import PropTypes from 'prop-types';

const LiveFill = props => {
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
      <g clipPath="url(#clip0_18_15247)">
        <path d="M17 6.5c0 1.273-.68 2.388-1.697 3H16.5a2 2 0 012 2v.46l3.094-1.374A1 1 0 0123 11.5v8a1 1 0 01-1.406.914L18.5 19.04v.461a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2h1.697a3.5 3.5 0 113.605 0h3.395A3.5 3.5 0 1117 6.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15247">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LiveFill.propTypes = {
  color: PropTypes.string
};

export default LiveFill;
