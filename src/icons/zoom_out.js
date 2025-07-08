import React from 'react';
import PropTypes from 'prop-types';

const ZoomOut = props => {
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
      <g clipPath="url(#clip0_237_101)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2zm3.536 10a1 1 0 100-2H7.464a1 1 0 000 2h7.072z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_237_101">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ZoomOut.propTypes = {
  color: PropTypes.string
};

export default ZoomOut;
