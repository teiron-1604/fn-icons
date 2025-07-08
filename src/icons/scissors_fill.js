import React from 'react';
import PropTypes from 'prop-types';

const ScissorsFill = props => {
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
      <g clipPath="url(#clip0_18_13958)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.532 14.054a4 4 0 101.414 1.414l2.554-2.554 2.554 2.554a4 4 0 101.414-1.414l-3.252-3.252-.009-.01a.395.395 0 00-.009-.008l-7.99-7.991a1 1 0 00-1.415 1.414l7.293 7.293-2.554 2.554zm6.06-4.647a1 1 0 010-1.414l5.2-5.2a1 1 0 011.415 1.414l-5.2 5.2a1 1 0 01-1.414 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13958">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ScissorsFill.propTypes = {
  color: PropTypes.string
};

export default ScissorsFill;
