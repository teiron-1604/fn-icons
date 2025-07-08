import React from 'react';
import PropTypes from 'prop-types';

const UDisk = props => {
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
      <g clipPath="url(#clip0_18_13634)">
        <path d="M6 10a1 1 0 011-1h10a1 1 0 011 1v8a4 4 0 01-4 4h-4a4 4 0 01-4-4v-8z"></path>
        <path d="M8 9v1H7V9h1zm8 0h1v1h-1V9zm0-7V1a1 1 0 011 1h-1zM8 2H7a1 1 0 011-1v1zm0 7V8h8v2H8V9zm8 0h-1V2h2v7h-1zm0-7v1H8V1h8v1zM8 2h1v7H7V2h1z"></path>
        <path d="M12 5v1"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 18v-8h10v8a3 3 0 01-3 3h-4a3 3 0 01-3-3zM17 8V2a1 1 0 00-1-1H8a1 1 0 00-1 1v6a2 2 0 00-2 2v8a5 5 0 005 5h4a5 5 0 005-5v-8a2 2 0 00-2-2zM9 3v5h6V3H9zm4 2a1 1 0 10-2 0v1a1 1 0 102 0V5z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13634">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UDisk.propTypes = {
  color: PropTypes.string
};

export default UDisk;
