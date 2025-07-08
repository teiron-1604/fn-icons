import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftRight = props => {
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
      <g clipPath="url(#clip0_18_12610)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 17a1 1 0 011-1h13.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L17.586 18H4a1 1 0 01-1-1zm.293-9.293a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L6.414 6H20a1 1 0 110 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12610">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftRight.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftRight;
