import React from 'react';
import PropTypes from 'prop-types';

const FileRaw = props => {
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
      <g clipPath="url(#clip0_746_104)">
        <path d="M7 13c0-1.893.658-3.63 1.756-5H3v10h5.756A7.966 7.966 0 017 13zm10 0a1 1 0 112 0 4 4 0 01-4 4 1 1 0 110-2 2 2 0 002-2zM4 15v-4a1 1 0 112 0v4a1 1 0 11-2 0zm7-2a4 4 0 014-4 1 1 0 110 2 2 2 0 00-2 2 1 1 0 11-2 0zM5 6h2.5v-.5H5V6zm4 7a5.997 5.997 0 002.908 5.144l.346.192A5.97 5.97 0 0015 19a5.97 5.97 0 003.092-.856l.308-.2a6.04 6.04 0 001.744-1.852l.192-.346A5.97 5.97 0 0021 13a5.97 5.97 0 00-.664-2.746l-.192-.346A6.04 6.04 0 0018.4 8.056l-.308-.2A5.969 5.969 0 0015 7a5.97 5.97 0 00-2.746.664l-.346.192A5.997 5.997 0 009 13zm14 0a7.968 7.968 0 01-1 3.875V19a1 1 0 01-1 1h-2.125c-1.149.637-2.47 1-3.875 1a7.968 7.968 0 01-3.875-1H1V6h2V4.5l.005-.103A1 1 0 014 3.5h4.5l.103.005A1 1 0 019.5 4.5V6h1.625c1.149-.637 2.47-1 3.875-1 1.404 0 2.726.363 3.875 1H21l.102.005A1 1 0 0122 7v2.124A7.968 7.968 0 0123 13z"></path>
      </g>
      <defs>
        <clipPath id="clip0_746_104">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileRaw.propTypes = {
  color: PropTypes.string
};

export default FileRaw;
