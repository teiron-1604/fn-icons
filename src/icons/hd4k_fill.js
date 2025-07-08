import React from 'react';
import PropTypes from 'prop-types';

const Hd4kFill = props => {
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
      <g clipPath="url(#clip0_18_15035)">
        <path d="M20 3a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h16zM9.5 8.5a1 1 0 00-1 1v2h-1v-2a1 1 0 00-2 0v4h3V15a1 1 0 102 0v-1.5h.5a1 1 0 100-2h-.5v-2a1 1 0 00-1-1zm8.125.219a1 1 0 00-1.406.156L14.5 11.023V9.5a1 1 0 10-2 0V15a1 1 0 102 0v-1.947l1.668 2.502.06.082a1 1 0 001.657-1.104l-.053-.088-1.595-2.391 1.544-1.929a1 1 0 00-.156-1.406z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15035">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hd4kFill.propTypes = {
  color: PropTypes.string
};

export default Hd4kFill;
