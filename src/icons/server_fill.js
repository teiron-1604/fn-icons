import React from 'react';
import PropTypes from 'prop-types';

const ServerFill = props => {
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
      <g clipPath="url(#clip0_18_13579)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 1a3 3 0 00-3 3v4a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3H4zm0 12a3 3 0 00-3 3v4a3 3 0 003 3h16a3 3 0 003-3v-4a3 3 0 00-3-3H4zm2-8a1 1 0 000 2h.01a1 1 0 000-2H6zm0 12a1 1 0 100 2h.01a1 1 0 100-2H6z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13579">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ServerFill.propTypes = {
  color: PropTypes.string
};

export default ServerFill;
