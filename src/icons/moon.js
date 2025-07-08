import React from 'react';
import PropTypes from 'prop-types';

const Moon = props => {
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
      <g clipPath="url(#clip0_512_25)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.874 4.288a8 8 0 109.838 9.838 7.363 7.363 0 01-9.838-9.838zm-3.43-.603A10 10 0 0112 2a1 1 0 01.707 1.707 5.364 5.364 0 007.586 7.586A1 1 0 0122 12 10 10 0 116.444 3.685z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_512_25">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Moon.propTypes = {
  color: PropTypes.string
};

export default Moon;
