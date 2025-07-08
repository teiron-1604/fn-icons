import React from 'react';
import PropTypes from 'prop-types';

const LogoutBoxR = props => {
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
      <g clipPath="url(#clip0_18_15723)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a1 1 0 00-1 1v14a1 1 0 001 1h4a1 1 0 110 2H5a3 3 0 01-3-3V5a3 3 0 013-3h4a1 1 0 010 2H5zm10.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L18.586 13H9a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15723">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LogoutBoxR.propTypes = {
  color: PropTypes.string
};

export default LogoutBoxR;
