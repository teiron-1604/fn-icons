import React from 'react';
import PropTypes from 'prop-types';

const ServerDown = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.707 6.707l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L11 7.586V2a1 1 0 112 0v5.586l2.293-2.293a1 1 0 111.414 1.414zM3 16a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm1-3a3 3 0 00-3 3v4a3 3 0 003 3h16a3 3 0 003-3v-4a3 3 0 00-3-3H4zm2 4a1 1 0 100 2h.01a1 1 0 100-2H6zm4 0a1 1 0 100 2h.01a1 1 0 100-2H10z"
      ></path>
    </svg>
  );
};

ServerDown.propTypes = {
  color: PropTypes.string
};

export default ServerDown;
