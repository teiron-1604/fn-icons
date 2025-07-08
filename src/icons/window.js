import React from 'react';
import PropTypes from 'prop-types';

const Window = props => {
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
      <path d="M6 9a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M11 8a1 1 0 11-2 0 1 1 0 012 0z"></path>
      <path d="M14 9a1 1 0 100-2 1 1 0 000 2z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zM3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6z"
      ></path>
    </svg>
  );
};

Window.propTypes = {
  color: PropTypes.string
};

export default Window;
