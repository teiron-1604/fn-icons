import React from 'react';
import PropTypes from 'prop-types';

const Hd4k = props => {
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
      <g clipPath="url(#clip0_18_15029)">
        <path d="M20 3a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h16zM4 5a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1H4zm5.5 3.5a1 1 0 011 1v2h.5a1 1 0 110 2h-.5V15a1 1 0 11-2 0v-1.5h-2a1 1 0 01-1-1v-3a1 1 0 012 0v2h1v-2a1 1 0 011-1zm6.719.375a1 1 0 011.562 1.25l-1.544 1.929 1.595 2.391.053.088a1 1 0 01-1.657 1.104l-.06-.082-1.668-2.502V15a1 1 0 11-2 0V9.5a1 1 0 112 0v1.523l1.719-2.148z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15029">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hd4k.propTypes = {
  color: PropTypes.string
};

export default Hd4k;
