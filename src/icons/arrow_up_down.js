import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpDown = props => {
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
      <g clipPath="url(#clip0_18_12616)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3a1 1 0 011 1v13.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L6 17.586V4a1 1 0 011-1zm9.293.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L18 6.414V20a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414l4-4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12616">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowUpDown.propTypes = {
  color: PropTypes.string
};

export default ArrowUpDown;
