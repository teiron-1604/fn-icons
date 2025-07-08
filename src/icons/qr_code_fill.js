import React from 'react';
import PropTypes from 'prop-types';

const QrCodeFill = props => {
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
      <g clipPath="url(#clip0_18_13496)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm5 0H4v3h3V4zm4-1a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm4 1a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V4zm5 0h-3v3h3V4zm-8 2a1 1 0 011 1v3a3 3 0 01-3 3H7a1 1 0 110-2h3a1 1 0 001-1V7a1 1 0 011-1zM2 12a1 1 0 011-1h.01a1 1 0 110 2H3a1 1 0 01-1-1zm13 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm6-1a1 1 0 011 1v.01a1 1 0 11-2 0V12a1 1 0 011-1zM2 17a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3zm5 0H4v3h3v-3zm5-2a1 1 0 011 1v.01a1 1 0 11-2 0V16a1 1 0 011-1zm3.879.879A3 3 0 0118 15h3a1 1 0 110 2h-3a1 1 0 00-1 1v3a1 1 0 11-2 0v-3a3 3 0 01.879-2.121zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9 1a1 1 0 011 1v.01a1 1 0 11-2 0V21a1 1 0 011-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13496">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

QrCodeFill.propTypes = {
  color: PropTypes.string
};

export default QrCodeFill;
