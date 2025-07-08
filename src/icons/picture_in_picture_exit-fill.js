import React from 'react';
import PropTypes from 'prop-types';

const PictureInPictureExitFill = props => {
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
      <g clipPath="url(#clip0_18_15353)">
        <path d="M10 13H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1z"></path>
        <path d="M15.017 21H19a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4"></path>
        <path d="M16.391 7.61L13 11.001"></path>
        <path d="M13.094 6.408a.34.34 0 01.24-.58h3.838a1 1 0 011 1v3.838a.34.34 0 01-.58.24l-4.498-4.498z"></path>
        <path d="M10 12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h6z"></path>
        <path d="M19 2a3 3 0 013 3v14a3 3 0 01-3 3h-3.983a1 1 0 010-2H19a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v4a1 1 0 01-2 0V5a3 3 0 013-3h14z"></path>
        <path d="M17.172 5.83a1 1 0 011 1v3.836a.34.34 0 01-.58.24L16.05 9.363l-2.344 2.345a1 1 0 11-1.414-1.414l2.344-2.345-1.541-1.54a.34.34 0 01.24-.58h3.838z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15353">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PictureInPictureExitFill.propTypes = {
  color: PropTypes.string
};

export default PictureInPictureExitFill;
