import React from 'react';
import PropTypes from 'prop-types';

const BuildingsFill = props => {
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
      <g clipPath="url(#clip0_2296_884)">
        <path d="M11.519 1.123c.348-.191.786-.16 1.106.096l10 8c.237.19.375.478.375.781v12a1 1 0 01-1 1h-6a1 1 0 01-1-1v-8H9v8a1 1 0 01-1 1H2a1 1 0 01-1-1V10c0-.303.138-.591.375-.781l10-8 .144-.096zM12 16a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2296_884">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BuildingsFill.propTypes = {
  color: PropTypes.string
};

export default BuildingsFill;
