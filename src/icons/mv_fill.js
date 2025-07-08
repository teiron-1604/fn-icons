import React from 'react';
import PropTypes from 'prop-types';

const MvFill = props => {
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
      <g clipPath="url(#clip0_18_15304)">
        <path d="M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h7l4 4h-3.31a.69.69 0 00-.69.69v5.48A3 3 0 1014 15V8.414c0-.228.185-.414.414-.414H16a1 1 0 00.102-1.995L16 6l-4-4h7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15304">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MvFill.propTypes = {
  color: PropTypes.string
};

export default MvFill;
