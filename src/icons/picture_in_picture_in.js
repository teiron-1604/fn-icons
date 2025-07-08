import React from 'react';
import PropTypes from 'prop-types';

const PictureInPictureIn = props => {
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
      <g clipPath="url(#clip0_18_15359)">
        <path d="M17 21h2a2 2 0 002-2m0-7v3M3 7V5a2 2 0 012-2m4 0h3"></path>
        <path d="M10 13H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1z"></path>
        <path d="M15.017 21H19a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4"></path>
        <path d="M15.102 9.037l5-5"></path>
        <path d="M18.398 10.24a.34.34 0 01-.24.579H14.32a1 1 0 01-1-1V5.98a.34.34 0 01.58-.24l4.498 4.498z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h6zm-6 8h6v-6H4v6z"
        ></path>
        <path d="M19 2a3 3 0 013 3v14a3 3 0 01-3 3h-3.983a1 1 0 010-2H19a1 1 0 001-1V5.554l-3.144 3.143 1.542 1.542a.34.34 0 01-.24.58H14.32a1 1 0 01-1-1V5.98a.34.34 0 01.58-.24l1.542 1.543L18.726 4H5a1 1 0 00-1 1v4a1 1 0 01-2 0V5a3 3 0 013-3h14z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15359">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PictureInPictureIn.propTypes = {
  color: PropTypes.string
};

export default PictureInPictureIn;
