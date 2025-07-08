import React from 'react';
import PropTypes from 'prop-types';

const DownloadInFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.293 15.707a.997.997 0 001.414 0l5-5a.995.995 0 00.287-.595A.998.998 0 0017 9h-4V3a1 1 0 10-2 0v6H6.998a.997.997 0 00-.735.324 1 1 0 00.03 1.383l5 5zM4 15a1 1 0 10-2 0v4a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 10-2 0v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"
      ></path>
    </svg>
  );
};

DownloadInFill.propTypes = {
  color: PropTypes.string
};

export default DownloadInFill;
