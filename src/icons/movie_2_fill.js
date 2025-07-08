import React from 'react';
import PropTypes from 'prop-types';

const Movie2Fill = props => {
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
      <g clipPath="url(#clip0_18_15285)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11 0 3.722-1.85 7.01-4.68 9H22a1 1 0 110 2H12C5.925 23 1 18.075 1 12S5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18z"
        ></path>
        <path d="M12.213 2.17a9.646 9.646 0 010 19.292c-5.327 0-9.646-4.318-9.647-9.646 0-5.327 4.32-9.646 9.647-9.646zM11.999 14a2 2 0 100 4 2 2 0 000-4zm-4-4a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zm-4-4a2 2 0 100 4 2 2 0 000-4z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11 0 3.722-1.85 7.01-4.68 9H22a1 1 0 110 2H12C5.925 23 1 18.075 1 12S5.925 1 12 1zm0 13a2 2 0 100 4 2 2 0 000-4zm-4-4a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zm-4-4a2 2 0 100 4 2 2 0 000-4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15285">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Movie2Fill.propTypes = {
  color: PropTypes.string
};

export default Movie2Fill;
