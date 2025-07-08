import React from 'react';
import PropTypes from 'prop-types';

const FileTransfer = props => {
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
      <g clipPath="url(#clip0_18_12951)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.879 1.879A3 3 0 016 1h9a1 1 0 01.707.293l5 5A1 1 0 0121 7v13a3 3 0 01-3 3H4a1 1 0 110-2h14a1 1 0 001-1V9h-3a3 3 0 01-3-3V3H6a1 1 0 00-1 1v4a1 1 0 01-2 0V4a3 3 0 01.879-2.121zM15 3.414V6a1 1 0 001 1h2.586L15 3.414zm-6.707 7.879a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L9.586 16H2a1 1 0 110-2h7.586l-1.293-1.293a1 1 0 010-1.414z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12951">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileTransfer.propTypes = {
  color: PropTypes.string
};

export default FileTransfer;
