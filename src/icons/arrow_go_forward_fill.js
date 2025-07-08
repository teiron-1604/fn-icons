import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoForwardFill = props => {
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
      <g clipPath="url(#clip0_18_12638)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.293 6.293a1 1 0 000 1.414L20.586 12l-4.293 4.293a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0zm-5 0a1 1 0 000 1.414L14.586 11H6a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h8.586l-3.293 3.293a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12638">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowGoForwardFill.propTypes = {
  color: PropTypes.string
};

export default ArrowGoForwardFill;
