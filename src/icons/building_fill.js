import React from 'react';
import PropTypes from 'prop-types';

const BuildingFill = props => {
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
      <g clipPath="url(#clip0_18_12651)">
        <path d="M19 1a2 2 0 012 2v17h1a1 1 0 110 2H2a1 1 0 110-2h1v-8a2 2 0 012-2h4V3a2 2 0 012-2h8zM6 15.004a1 1 0 000 2h2a1 1 0 100-2H6zm8 0a1 1 0 000 2h2a1 1 0 100-2h-2zm0-4.5a1 1 0 000 2h2a1 1 0 100-2h-2zm0-4.5a1 1 0 000 2h2a1 1 0 100-2h-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12651">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BuildingFill.propTypes = {
  color: PropTypes.string
};

export default BuildingFill;
