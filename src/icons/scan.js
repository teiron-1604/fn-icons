import React from 'react';
import PropTypes from 'prop-types';

const Scan = props => {
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
        d="M5 4a1 1 0 00-1 1v2a1 1 0 01-2 0V5a3 3 0 013-3h2a1 1 0 010 2H5zm11-1a1 1 0 011-1h2a3 3 0 013 3v2a1 1 0 11-2 0V5a1 1 0 00-1-1h-2a1 1 0 01-1-1zM6 12a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zm-3 4a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 110 2H5a3 3 0 01-3-3v-2a1 1 0 011-1zm18 0a1 1 0 011 1v2a3 3 0 01-3 3h-2a1 1 0 110-2h2a1 1 0 001-1v-2a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

Scan.propTypes = {
  color: PropTypes.string
};

export default Scan;
