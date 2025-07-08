import React from 'react';
import PropTypes from 'prop-types';

const HeartFill = props => {
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
      <g clipPath="url(#clip0_18_12771)">
        <path d="M16.5 2A6.5 6.5 0 0123 8.5c0 2.742-1.81 4.753-3.297 6.21l-6.996 6.997a1 1 0 01-1.414 0l-6.994-6.994C2.794 13.258 1 11.249 1 8.5A6.5 6.5 0 017.5 2c.98 0 1.873.14 2.747.52.613.267 1.185.64 1.753 1.12.568-.48 1.14-.853 1.753-1.12C14.627 2.14 15.52 2 16.5 2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12771">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

HeartFill.propTypes = {
  color: PropTypes.string
};

export default HeartFill;
