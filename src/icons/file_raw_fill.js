import React from 'react';
import PropTypes from 'prop-types';

const FileRawFill = props => {
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
      <g clipPath="url(#clip0_746_123)">
        <path d="M8.603 3.505A1 1 0 019.5 4.5V6h1.625c1.149-.637 2.47-1 3.875-1 1.404 0 2.726.363 3.875 1H21l.102.005A1 1 0 0122 7v2.124A7.968 7.968 0 0123 13a7.968 7.968 0 01-1 3.875V19a1 1 0 01-1 1h-2.125c-1.149.637-2.47 1-3.875 1a7.968 7.968 0 01-3.875-1H1V6h2V4.5l.005-.103A1 1 0 014 3.5h4.5l.103.005zM18 12a1 1 0 00-1 1 2 2 0 01-2 2 1 1 0 100 2 4 4 0 004-4 1 1 0 00-1-1zM5 10a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm10-1a4 4 0 00-4 4 1 1 0 102 0 2 2 0 012-2 1 1 0 100-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_746_123">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileRawFill.propTypes = {
  color: PropTypes.string
};

export default FileRawFill;
