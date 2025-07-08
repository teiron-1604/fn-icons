import React from 'react';
import PropTypes from 'prop-types';

const ClosedCaptioningFill = props => {
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
      <g clipPath="url(#clip0_18_15130)">
        <path d="M20 3a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h16zM9 8c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.041 3.44c.474-.282.47-.929.08-1.319-.39-.39-1.029-.356-1.559-.201a2 2 0 11.001-3.84c.53.155 1.17.19 1.56-.201.39-.39.394-1.036-.08-1.318A3.979 3.979 0 009 8zm7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.041 3.44c.474-.282.47-.928.08-1.319-.39-.39-1.028-.357-1.557-.201a2 2 0 110-3.84c.53.155 1.168.19 1.559-.201.39-.39.394-1.036-.08-1.318A3.979 3.979 0 0016 8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15130">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ClosedCaptioningFill.propTypes = {
  color: PropTypes.string
};

export default ClosedCaptioningFill;
