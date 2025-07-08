import React from 'react';
import PropTypes from 'prop-types';

const FileHistory = props => {
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
      <g clipPath="url(#clip0_18_13093)">
        <path d="M13 16a5 5 0 10-10 0 5 5 0 0010 0zm-6-2a1 1 0 112 0v1.78l1.14.951.076.07a1.001 1.001 0 01-1.275 1.53l-.082-.062-1.5-1.25A1 1 0 017 16.25V14zM3 7V4a3 3 0 013-3h9l.099.005a1 1 0 01.608.288l5 5A1 1 0 0121 7v13a3 3 0 01-3 3h-2a1 1 0 110-2h2a1 1 0 001-1V9h-3a3 3 0 01-3-3V3H6a1 1 0 00-1 1v3a1 1 0 01-2 0zm12 9a7 7 0 11-14 0 7 7 0 0114 0zm0-10a1 1 0 001 1h2.586L15 3.414V6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13093">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileHistory.propTypes = {
  color: PropTypes.string
};

export default FileHistory;
