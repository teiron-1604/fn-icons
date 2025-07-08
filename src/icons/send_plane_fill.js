import React from 'react';
import PropTypes from 'prop-types';

const SendPlaneFill = props => {
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
      <g clipPath="url(#clip0_18_15761)">
        <path d="M21.67 1.056a1 1 0 011.274 1.274l-7 20a1.001 1.001 0 01-1.838.118l-3-6a1 1 0 01.08-1.029L17.7 6.3l-9.119 6.514a1 1 0 01-1.028.08l-6-3a1 1 0 01.117-1.838l20-7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15761">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SendPlaneFill.propTypes = {
  color: PropTypes.string
};

export default SendPlaneFill;
