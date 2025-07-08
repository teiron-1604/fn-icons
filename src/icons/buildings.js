import React from 'react';
import PropTypes from 'prop-types';

const Buildings = props => {
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
      <g clipPath="url(#clip0_18_11591)">
        <path d="M11.519 1.123a1 1 0 011.106.096l10 8A1 1 0 0123 10v12a1 1 0 01-1 1h-6a1 1 0 01-1-1v-8H9v8a1 1 0 01-1 1H2a1 1 0 01-1-1V10a1 1 0 01.375-.78l10-8 .144-.097zM11 22v-5a1 1 0 112 0v5a1 1 0 11-2 0zM3 10.48V21h4v-8a1 1 0 011-1h8a1 1 0 011 1v8h4V10.48l-9-7.198-9 7.199z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_11591">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Buildings.propTypes = {
  color: PropTypes.string
};

export default Buildings;
