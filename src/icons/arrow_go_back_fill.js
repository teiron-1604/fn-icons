import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoBackFill = props => {
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
      <g clipPath="url(#clip0_18_12626)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.707 6.293a1 1 0 010 1.414L3.414 12l4.293 4.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0zm5 0a1 1 0 010 1.414L9.414 11H18a5 5 0 015 5v2a1 1 0 11-2 0v-2a3 3 0 00-3-3H9.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12626">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowGoBackFill.propTypes = {
  color: PropTypes.string
};

export default ArrowGoBackFill;
