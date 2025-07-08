import React from 'react';
import PropTypes from 'prop-types';

const ShareBoxFill = props => {
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
      <g clipPath="url(#clip0_18_14863)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-6a1 1 0 112 0v6a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h6a1 1 0 110 2H5zm10 0a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0V5.414l-7.293 7.293a1 1 0 01-1.414-1.414L18.586 4H15z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14863">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShareBoxFill.propTypes = {
  color: PropTypes.string
};

export default ShareBoxFill;
