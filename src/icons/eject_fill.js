import React from 'react';
import PropTypes from 'prop-types';

const EjectFill = props => {
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
      <g clipPath="url(#clip0_18_15161)">
        <path d="M19.862 14.493A1.001 1.001 0 0119 16H3a1 1 0 01-.781-1.625l8-10a1 1 0 011.562 0l8 10 .081.118zM3 18h16a1 1 0 110 2H3a1 1 0 110-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15161">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

EjectFill.propTypes = {
  color: PropTypes.string
};

export default EjectFill;
