import React from 'react';
import PropTypes from 'prop-types';

const FileInfo = props => {
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
      <g clipPath="url(#clip0_18_13077)">
        <path d="M15.099 1.005a1 1 0 01.608.288l5 5A1 1 0 0121 7v13a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h9l.099.005zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V7.414L14.586 3H6zm6 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-4a1 1 0 110 2 1 1 0 010-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13077">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileInfo.propTypes = {
  color: PropTypes.string
};

export default FileInfo;
