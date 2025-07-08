import React from 'react';
import PropTypes from 'prop-types';

const PictureInPictureFill = props => {
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
      <g clipPath="url(#clip0_18_15363)">
        <path d="M17 21.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        <path d="M3 6.25a.75.75 0 110 1.5.75.75 0 010-1.5z"></path>
        <path d="M21 21.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        <path d="M3 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"></path>
        <path d="M21 17.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        <path d="M7 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"></path>
        <path d="M21 13.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        <path d="M11 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"></path>
        <path d="M17.5 21a.5.5 0 10-1 0 .5.5 0 001 0zm4 0a.5.5 0 10-1 0 .5.5 0 001 0zm0-4a.5.5 0 10-1 0 .5.5 0 001 0zm0-4a.5.5 0 10-1 0 .5.5 0 001 0zm-18-6a.5.5 0 10-1 0 .5.5 0 001 0zm0-4a.5.5 0 10-1 0 .5.5 0 001 0zm4 0a.5.5 0 10-1 0 .5.5 0 001 0zm4 0a.5.5 0 10-1 0 .5.5 0 001 0zM18 21a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0zM4 7a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
        <path d="M15 3h6v6"></path>
        <path d="M21 3l-6 6 6-6z"></path>
        <path d="M19.414 6l.586.586V5.414L19.414 6zM18 4.586L18.586 4h-1.172l.586.586zM22 9a1 1 0 01-1.707.707L18 7.414l-2.293 2.293a1 1 0 11-1.414-1.414L16.586 6l-2.293-2.293A1 1 0 0115 2h6l.102.005A1 1 0 0122 3v6z"></path>
        <path d="M6.674 15.495a.5.5 0 01.594.017l6.25 5.458A2.493 2.493 0 0111.5 22h-7A2.5 2.5 0 012 19.5v-.037l4.674-3.968zM11.5 10a2.5 2.5 0 012.5 2.5v6.235l-5.433-4.744-.024-.02-.172-.13a2.5 2.5 0 00-2.912.064l-.047.038L2 16.84V12.5A2.5 2.5 0 014.5 10h7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15363">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PictureInPictureFill.propTypes = {
  color: PropTypes.string
};

export default PictureInPictureFill;
