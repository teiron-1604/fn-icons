import React from 'react';
import PropTypes from 'prop-types';

const ShutDownFill = props => {
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
      <g clipPath="url(#clip0_134_244)">
        <path d="M13 3.154c0-.591.513-1.058 1.091-.935C18.611 3.181 22 7.194 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-4.806 3.39-8.82 7.909-9.78.578-.124 1.091.343 1.091.934V11a1 1 0 102 0V3.154z"></path>
      </g>
      <defs>
        <clipPath id="clip0_134_244">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShutDownFill.propTypes = {
  color: PropTypes.string
};

export default ShutDownFill;
