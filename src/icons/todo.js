import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => {
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
      <g clipPath="url(#clip0_18_13149)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3a2 2 0 012-2h6a2 2 0 012 2h1a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h1zm0 2H6a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-1a2 2 0 01-2 2H9a2 2 0 01-2-2zm8 0H9V3h6v2zm-8 6a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm4 0a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm-4 5a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm4 0a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13149">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Todo.propTypes = {
  color: PropTypes.string
};

export default Todo;
