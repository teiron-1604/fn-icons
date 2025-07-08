import React from 'react';
import PropTypes from 'prop-types';

const Movie2 = props => {
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
      <g clipPath="url(#clip0_18_15280)">
        <path d="M12 1c6.075 0 11 4.925 11 11 0 3.722-1.85 7.01-4.68 9H22a1 1 0 110 2H12C5.925 23 1 18.075 1 12S5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 11a2 2 0 110 4 2 2 0 010-4zm-4-4a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zm-4-4a2 2 0 110 4 2 2 0 010-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15280">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Movie2.propTypes = {
  color: PropTypes.string
};

export default Movie2;
