import React from 'react';
import PropTypes from 'prop-types';

const LinkM = props => {
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
      <g clipPath="url(#clip0_18_14335)">
        <path d="M3 12a5 5 0 015-5h1.6l.102.005a1 1 0 010 1.99L9.6 9H8a3 3 0 000 6h1.6l.102.005a1 1 0 010 1.99L9.6 17H8a5 5 0 01-5-5zm16 0a3 3 0 00-2.703-2.985L16 9h-1.6a1 1 0 110-2H16l.248.006a5 5 0 010 9.988L16 17h-1.6a1 1 0 110-2H16l.297-.015A3 3 0 0019 12zm-3.8-1l.102.005a1 1 0 010 1.99L15.2 13H8.8a1 1 0 010-2h6.4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14335">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LinkM.propTypes = {
  color: PropTypes.string
};

export default LinkM;
