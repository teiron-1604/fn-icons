import React from 'react';
import PropTypes from 'prop-types';

const CameraFill = props => {
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
      <g clipPath="url(#clip0_18_15092)">
        <path d="M14.5 3a1 1 0 01.769.36l2.2 2.64H20a3 3 0 013 3v9a3 3 0 01-3 3H4a3 3 0 01-3-3V9a3 3 0 013-3h2.531l2.2-2.64A1 1 0 019.5 3h5zM12 9a4 4 0 100 8 4 4 0 000-8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15092">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CameraFill.propTypes = {
  color: PropTypes.string
};

export default CameraFill;
