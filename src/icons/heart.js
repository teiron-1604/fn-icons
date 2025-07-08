import React from 'react';
import PropTypes from 'prop-types';

const Heart = props => {
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
      <g clipPath="url(#clip0_18_12767)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.904 3.904A6.5 6.5 0 017.5 2c.98 0 1.873.14 2.747.52.613.268 1.185.64 1.753 1.12.568-.48 1.14-.852 1.753-1.12C14.627 2.14 15.52 2 16.5 2A6.5 6.5 0 0123 8.5c0 2.742-1.81 4.753-3.297 6.21l-6.996 6.997a1 1 0 01-1.414 0l-6.994-6.994C2.794 13.258 1 11.25 1 8.5a6.5 6.5 0 011.904-4.596zM7.5 4A4.5 4.5 0 003 8.5c0 1.847 1.2 3.336 2.695 4.781l.012.012L12 19.586l6.3-6.3c1.492-1.463 2.7-2.95 2.7-4.786A4.5 4.5 0 0016.5 4c-.78 0-1.387.11-1.948.354-.568.248-1.152.66-1.845 1.353a1 1 0 01-1.414 0c-.693-.693-1.277-1.105-1.845-1.353C8.887 4.11 8.28 4 7.5 4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12767">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Heart.propTypes = {
  color: PropTypes.string
};

export default Heart;
