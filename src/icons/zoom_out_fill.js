import React from 'react';
import PropTypes from 'prop-types';

const ZoomOutFill = props => {
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
      <g clipPath="url(#clip0_237_114)">
        <path d="M11 2a9 9 0 019 9 8.963 8.963 0 01-1.968 5.618l3.675 3.675a1 1 0 11-1.414 1.414l-3.675-3.675A8.963 8.963 0 0111 20a9 9 0 110-18zm-3.535 8a1 1 0 000 2h7.07a1 1 0 000-2h-7.07z"></path>
      </g>
      <defs>
        <clipPath id="clip0_237_114">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ZoomOutFill.propTypes = {
  color: PropTypes.string
};

export default ZoomOutFill;
