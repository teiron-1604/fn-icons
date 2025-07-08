import React from 'react';
import PropTypes from 'prop-types';

const FileInfoFill = props => {
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
      <g clipPath="url(#clip0_18_13081)">
        <path d="M15.099 1.005a1 1 0 01.608.288l5 5A1 1 0 0121 7v13a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h9l.099.005zM12 12a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm0-4a1 1 0 100 2 1 1 0 000-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13081">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileInfoFill.propTypes = {
  color: PropTypes.string
};

export default FileInfoFill;
