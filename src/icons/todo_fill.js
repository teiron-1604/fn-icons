import React from 'react';
import PropTypes from 'prop-types';

const TodoFill = props => {
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
      <g clipPath="url(#clip0_18_13153)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 1a2 2 0 00-2 2H6a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3h-1a2 2 0 00-2-2H9zm0 3a1 1 0 001 1h4a1 1 0 100-2h-4a1 1 0 00-1 1zm-1 6a1 1 0 100 2h.01a1 1 0 100-2H8zm4 0a1 1 0 100 2h4a1 1 0 100-2h-4zm-4 5a1 1 0 100 2h.01a1 1 0 100-2H8zm4 0a1 1 0 100 2h4a1 1 0 100-2h-4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13153">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

TodoFill.propTypes = {
  color: PropTypes.string
};

export default TodoFill;
