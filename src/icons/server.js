import React from 'react';
import PropTypes from 'prop-types';

const Server = props => {
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
      <g clipPath="url(#clip0_18_13575)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 3a1 1 0 00-1 1v4a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zM1 4a3 3 0 013-3h16a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3V4zm4 2a1 1 0 011-1h.01a1 1 0 010 2H6a1 1 0 01-1-1zm-1 9a1 1 0 00-1 1v4a1 1 0 001 1h16a1 1 0 001-1v-4a1 1 0 00-1-1H4zm-3 1a3 3 0 013-3h16a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3v-4zm4 2a1 1 0 011-1h.01a1 1 0 110 2H6a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13575">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Server.propTypes = {
  color: PropTypes.string
};

export default Server;
