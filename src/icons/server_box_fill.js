import React from 'react';
import PropTypes from 'prop-types';

const ServerBoxFill = props => {
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
        d="M7.24 3h9.52a3.002 3.002 0 012.685 1.664v.001l3.45 6.887A1 1 0 0123 12v6a3 3 0 01-3 3H4a3 3 0 01-3-3v-6a1 1 0 01.106-.448l3.448-6.887.001-.001A3 3 0 017.24 3zM21 13H3v5a1 1 0 001 1h16a1 1 0 001-1v-5zM5 16a1 1 0 011-1h.01a1 1 0 110 2H6a1 1 0 01-1-1zm4 0a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

ServerBoxFill.propTypes = {
  color: PropTypes.string
};

export default ServerBoxFill;
