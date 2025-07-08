import React from 'react';
import PropTypes from 'prop-types';

const Nas = props => {
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
      <g clipPath="url(#clip0_308_116)">
        <path d="M20 1a3 3 0 013 3v16a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h16zM7 21h6V3H7v18zm8 0h5a1 1 0 001-1V4a1 1 0 00-1-1h-5v18zM4 8a1 1 0 100 2 1 1 0 000-2zm6-3a1 1 0 011 1v3a1 1 0 11-2 0V6a1 1 0 011-1zm8 0a1 1 0 011 1v3a1 1 0 11-2 0V6a1 1 0 011-1zM4 5a1 1 0 100 2 1 1 0 000-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_308_116">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Nas.propTypes = {
  color: PropTypes.string
};

export default Nas;
