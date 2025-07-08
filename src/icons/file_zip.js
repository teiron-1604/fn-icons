import React from 'react';
import PropTypes from 'prop-types';

const FileZip = props => {
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
      <g clipPath="url(#clip0_18_13141)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.879 1.879A3 3 0 016 1h9a1 1 0 01.707.293l5 5A1 1 0 0121 7v13a3 3 0 01-3 3h-2.5a1 1 0 110-2H18a1 1 0 001-1V9h-3a3 3 0 01-3-3V3H6a1 1 0 00-1 1v16a1 1 0 00.137.505 1 1 0 11-1.726 1.01A3 3 0 013 20V4a3 3 0 01.879-2.121zM15 3.414V6a1 1 0 001 1h2.586L15 3.414zM10 5a1 1 0 011 1v1a1 1 0 11-2 0V6a1 1 0 011-1zm0 5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0 5a1 1 0 011 1v1.17a3.001 3.001 0 11-2 0V16a1 1 0 011-1zm0 4a1 1 0 100 2 1 1 0 000-2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13141">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileZip.propTypes = {
  color: PropTypes.string
};

export default FileZip;
