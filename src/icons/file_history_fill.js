import React from 'react';
import PropTypes from 'prop-types';

const FileHistoryFill = props => {
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
      <g clipPath="url(#clip0_18_13097)">
        <path d="M13 6a3 3 0 003 3h5v11a3 3 0 01-3 3h-6.394A7 7 0 103 12.102V4a3 3 0 013-3h7v5zm-5 6a5 5 0 110 10 5 5 0 010-10zm0 2a1 1 0 00-1 1v2.25a1 1 0 00.36.769l1.5 1.25.081.061a1.001 1.001 0 001.275-1.53l-.075-.069L9 16.781V15a1 1 0 00-1-1zm7-13a1 1 0 01.707.293l5 5A1 1 0 0121 7h-5a1 1 0 01-1-1V1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13097">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileHistoryFill.propTypes = {
  color: PropTypes.string
};

export default FileHistoryFill;
