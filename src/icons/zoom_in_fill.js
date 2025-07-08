import React from 'react';
import PropTypes from 'prop-types';

const ZoomInFill = props => {
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
      <g clipPath="url(#clip0_237_96)">
        <path d="M11 2a9 9 0 019 9 8.963 8.963 0 01-1.968 5.618l3.675 3.675a1 1 0 11-1.414 1.414l-3.675-3.675A8.963 8.963 0 0111 20a9 9 0 110-18zm0 4.465a1 1 0 00-1 1V10H7.465a1 1 0 000 2H10v2.535a1 1 0 002 0V12h2.535a1 1 0 000-2H12V7.465a1 1 0 00-1-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_237_96">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ZoomInFill.propTypes = {
  color: PropTypes.string
};

export default ZoomInFill;
