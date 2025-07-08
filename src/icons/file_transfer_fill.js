import React from 'react';
import PropTypes from 'prop-types';

const FileTransferFill = props => {
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
      <g clipPath="url(#clip0_18_12955)">
        <path d="M13 6a3 3 0 003 3h5v11a3 3 0 01-3 3H6a3 3 0 01-3-3v-4h6.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L9.586 14H3V4a3 3 0 013-3h7v5zm2-4.882a3 3 0 011.293.76l3.828 3.829.2.22c.26.317.448.683.56 1.073H16a1 1 0 01-1-1V1.118z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12955">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileTransferFill.propTypes = {
  color: PropTypes.string
};

export default FileTransferFill;
