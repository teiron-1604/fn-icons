import React from 'react';
import PropTypes from 'prop-types';

const UploadIn = props => {
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
        d="M11.293 2.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L13 5.414V15a1 1 0 11-2 0V5.414L7.707 8.707a1 1 0 01-1.414-1.414l5-5zM3 14a1 1 0 011 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

UploadIn.propTypes = {
  color: PropTypes.string
};

export default UploadIn;
