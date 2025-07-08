import React from 'react';
import PropTypes from 'prop-types';

const WebcamFill = props => {
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
      <g clipPath="url(#clip0_18_15567)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1110 8.945V21h4a1 1 0 110 2H7a1 1 0 110-2h4v-2.055C6.5 18.448 3 14.633 3 10zm5 0a4 4 0 118 0 4 4 0 01-8 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15567">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

WebcamFill.propTypes = {
  color: PropTypes.string
};

export default WebcamFill;
