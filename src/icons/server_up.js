import React from 'react';
import PropTypes from 'prop-types';

const ServerUp = props => {
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
        d="M11.293 1.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L13 4.414V10a1 1 0 11-2 0V4.414L8.707 6.707a1 1 0 01-1.414-1.414l4-4zM4 15a1 1 0 00-1 1v4a1 1 0 001 1h16a1 1 0 001-1v-4a1 1 0 00-1-1H4zm-3 1a3 3 0 013-3h16a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3v-4zm4 2a1 1 0 011-1h.01a1 1 0 110 2H6a1 1 0 01-1-1zm4 0a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

ServerUp.propTypes = {
  color: PropTypes.string
};

export default ServerUp;
