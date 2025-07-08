import React from 'react';
import PropTypes from 'prop-types';

const CheckDouble = props => {
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
      <g clipPath="url(#clip0_18_14825)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L7 15.586 17.293 5.293a1 1 0 011.414 0zm4 4a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-1.5-1.5a1 1 0 011.414-1.414l.793.793 6.793-6.793a1 1 0 011.414 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14825">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CheckDouble.propTypes = {
  color: PropTypes.string
};

export default CheckDouble;
