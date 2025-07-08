import React from 'react';
import PropTypes from 'prop-types';

const VidiconFill = props => {
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
      <g clipPath="url(#clip0_18_15578)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 8.759V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3v-1.132l3.668 2.446a1.502 1.502 0 002.119-.477 1.5 1.5 0 00.213-.77V7.87a1.5 1.5 0 00-2.256-1.296L17 8.76z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15578">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VidiconFill.propTypes = {
  color: PropTypes.string
};

export default VidiconFill;
