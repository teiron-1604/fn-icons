import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => {
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
      <g clipPath="url(#clip0_18_15268)">
        <path d="M20 5a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5zM8.528 7.118a1 1 0 011.027.05l6 4a1 1 0 010 1.664l-6 4A1 1 0 018 16V8a1 1 0 01.528-.882zM10 14.131L13.197 12 10 9.868v4.263zM22 19a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v14z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15268">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Movie.propTypes = {
  color: PropTypes.string
};

export default Movie;
