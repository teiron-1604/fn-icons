import React from 'react';
import PropTypes from 'prop-types';

const Clockwise = props => {
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
      <g clipPath="url(#clip0_2297_1307)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.707 8.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L17 9.586V6a1 1 0 00-1-1h-3a1 1 0 110-2h3a3 3 0 013 3v3.586l1.293-1.293a1 1 0 011.414 0zM19 16v2a3 3 0 01-3 3H5a3 3 0 01-3-3V6a3 3 0 013-3h4a1 1 0 110 2H5a1 1 0 00-1 1v12a1 1 0 001 1h11a1 1 0 001-1v-2a1 1 0 112 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2297_1307">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Clockwise.propTypes = {
  color: PropTypes.string
};

export default Clockwise;
