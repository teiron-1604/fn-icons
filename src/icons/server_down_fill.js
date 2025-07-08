import React from 'react';
import PropTypes from 'prop-types';

const ServerDownFill = props => {
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
        d="M12.707 10.707l4-4a1 1 0 00-1.414-1.414L13 7.586V2a1 1 0 10-2 0v5.586L8.707 5.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0zM1 16a3 3 0 013-3h16a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3v-4zm4 2a1 1 0 011-1h.01a1 1 0 110 2H6a1 1 0 01-1-1zm4 0a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

ServerDownFill.propTypes = {
  color: PropTypes.string
};

export default ServerDownFill;
