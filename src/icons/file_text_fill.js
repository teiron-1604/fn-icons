import React from 'react';
import PropTypes from 'prop-types';

const FileTextFill = props => {
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
      <g clipPath="url(#clip0_18_13057)">
        <path d="M13 6a3 3 0 003 3h5v11a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h7v5zM8 16a1 1 0 100 2h8a1 1 0 100-2H8zm0-4a1 1 0 100 2h8a1 1 0 100-2H8zm0-4a1 1 0 000 2h2a1 1 0 100-2H8zm7-7a1 1 0 01.707.293l5 5A1 1 0 0121 7h-5a1 1 0 01-1-1V1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13057">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileTextFill.propTypes = {
  color: PropTypes.string
};

export default FileTextFill;
