import React from 'react';
import PropTypes from 'prop-types';

const Building = props => {
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
      <g clipPath="url(#clip0_18_12647)">
        <path d="M11 3v17h8V3h-8zM8 15.004l.103.006a1 1 0 010 1.989L8 17.004H6a1 1 0 110-2h2zm8 0l.102.006a1 1 0 010 1.989l-.102.005h-2a1 1 0 110-2h2zm0-4.5l.102.006a1 1 0 010 1.989l-.102.005h-2a1 1 0 110-2h2zm0-4.5l.102.006a1 1 0 010 1.989L16 8.004h-2a1 1 0 110-2h2zM5 20h4v-8H5v8zm16 0h1a1 1 0 110 2H2a1 1 0 110-2h1v-8a2 2 0 012-2h4V3a2 2 0 012-2h8a2 2 0 012 2v17z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12647">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Building.propTypes = {
  color: PropTypes.string
};

export default Building;
