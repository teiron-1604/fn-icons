import React from 'react';
import PropTypes from 'prop-types';

const Anticlockwise2Fill = props => {
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
      <g clipPath="url(#clip0_18_13934)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.707 1.293a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414l3 3a1 1 0 101.414-1.414L14.414 6H18a1 1 0 011 1v3a1 1 0 102 0V7a3 3 0 00-3-3h-3.586l1.293-1.293a1 1 0 000-1.414zM8 4H6a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-4a1 1 0 10-2 0v4a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 100-2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13934">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Anticlockwise2Fill.propTypes = {
  color: PropTypes.string
};

export default Anticlockwise2Fill;
