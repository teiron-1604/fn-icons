import React from 'react';
import PropTypes from 'prop-types';

const FileText = props => {
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
      <g clipPath="url(#clip0_18_13053)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.879 1.879A3 3 0 016 1h9a1 1 0 01.707.293l5 5A1 1 0 0121 7v13a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.879-2.121zM18.586 7H16a1 1 0 01-1-1V3.414L18.586 7zM13 3v3a3 3 0 003 3h3v11a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h7zM7 9a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13053">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileText.propTypes = {
  color: PropTypes.string
};

export default FileText;
