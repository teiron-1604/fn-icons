import React from 'react';
import PropTypes from 'prop-types';

const DownloadIn = props => {
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
        d="M12 2a1 1 0 011 1v9.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L11 12.586V3a1 1 0 011-1zM3 14a1 1 0 011 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

DownloadIn.propTypes = {
  color: PropTypes.string
};

export default DownloadIn;
