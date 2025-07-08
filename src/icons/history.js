import React from 'react';
import PropTypes from 'prop-types';

const History = props => {
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
      <g clipPath="url(#clip0_18_14889)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.996 2H12A10 10 0 112 12a1 1 0 112 0 8 8 0 108.002-8A8.75 8.75 0 005.96 6.453L5.414 7H8a1 1 0 110 2H3a1 1 0 01-1-1V3a1 1 0 112 0v2.586l.553-.553.012-.012A10.75 10.75 0 0111.996 2zM12 6a1 1 0 011 1v4.382l3.447 1.724a1 1 0 11-.894 1.788l-4-2A1 1 0 0111 12V7a1 1 0 011-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14889">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

History.propTypes = {
  color: PropTypes.string
};

export default History;
