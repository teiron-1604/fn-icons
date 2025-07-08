import React from 'react';
import PropTypes from 'prop-types';

const Mail = props => {
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
      <g clipPath="url(#clip0_18_14143)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5a1 1 0 00-1 1v.45l8.503 5.404a.94.94 0 00.996-.001L21 6.45V6a1 1 0 00-1-1H4zm19 1.983V6a3 3 0 00-3-3H4a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V7.015v-.032zM21 8.82l-7.439 4.727a2.94 2.94 0 01-3.122 0l-.005-.003L3 8.82V18a1 1 0 001 1h16a1 1 0 001-1V8.82z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14143">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Mail.propTypes = {
  color: PropTypes.string
};

export default Mail;
