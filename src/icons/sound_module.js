import React from 'react';
import PropTypes from 'prop-types';

const SoundModule = props => {
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
      <g clipPath="url(#clip0_1624_201)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1zm8 0a1 1 0 011 1v4h1a1 1 0 110 2h-4a1 1 0 010-2h1V3a1 1 0 011-1zm8 0a1 1 0 011 1v9a1 1 0 11-2 0V3a1 1 0 011-1zm-8 9a1 1 0 011 1v9a1 1 0 11-2 0v-9a1 1 0 011-1zM1 14a1 1 0 011-1h4a1 1 0 110 2H5v6a1 1 0 11-2 0v-6H2a1 1 0 01-1-1zm16 2a1 1 0 011-1h4a1 1 0 110 2h-1v4a1 1 0 11-2 0v-4h-1a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1624_201">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SoundModule.propTypes = {
  color: PropTypes.string
};

export default SoundModule;
