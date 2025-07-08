import React from 'react';
import PropTypes from 'prop-types';

const HdFill = props => {
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
      <g clipPath="url(#clip0_18_15047)">
        <path d="M20 3a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h16zM9.958 9a.875.875 0 00-.875.875v1.75H6.75v-1.75a.875.875 0 10-1.75 0v5.25a.875.875 0 001.75 0v-1.75h2.333v1.75l.005.09a.875.875 0 001.745-.09v-5.25A.875.875 0 009.958 9zm4.209 0a1 1 0 00-1 1v5a1 1 0 001 1h2.5A2.333 2.333 0 0019 13.667v-2.334A2.333 2.333 0 0016.667 9h-2.5zm2.5 1.75a.583.583 0 01.583.583v2.334a.583.583 0 01-.583.583h-1.75v-3.5h1.75z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15047">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

HdFill.propTypes = {
  color: PropTypes.string
};

export default HdFill;
