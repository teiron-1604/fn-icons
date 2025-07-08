import React from 'react';
import PropTypes from 'prop-types';

const FileZipFill = props => {
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
      <g clipPath="url(#clip0_18_13145)">
        <path d="M14.172 1a3 3 0 012.121.879l3.828 3.828.2.22A3 3 0 0121 7.828V20a3 3 0 01-3 3h-8a3 3 0 001-5.826V16a1 1 0 10-2 0v1.174A2.998 2.998 0 0010 23H6a3 3 0 01-3-3V4a3 3 0 013-3h8.172zM10 19a1 1 0 110 2 1 1 0 010-2zm0-9a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm0-5a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13145">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileZipFill.propTypes = {
  color: PropTypes.string
};

export default FileZipFill;
