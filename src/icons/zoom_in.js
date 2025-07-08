import React from 'react';
import PropTypes from 'prop-types';

const ZoomIn = props => {
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
      <g clipPath="url(#clip0_237_53)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2zm1 5.465a1 1 0 10-2 0V10H7.464a1 1 0 000 2H10v2.536a1 1 0 102 0V12h2.536a1 1 0 100-2H12V7.465z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_237_53">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ZoomIn.propTypes = {
  color: PropTypes.string
};

export default ZoomIn;
