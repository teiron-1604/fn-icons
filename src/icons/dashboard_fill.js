import React from 'react';
import PropTypes from 'prop-types';

const DashboardFill = props => {
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
      <g clipPath="url(#clip0_18_14483)">
        <path d="M9 15a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3a2 2 0 012-2h5zm11-4a2 2 0 012 2v7a2 2 0 01-2 2h-5a2 2 0 01-2-2v-7a2 2 0 012-2h5zM9 2a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5zm11 0a2 2 0 012 2v3a2 2 0 01-2 2h-5a2 2 0 01-2-2V4a2 2 0 012-2h5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14483">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

DashboardFill.propTypes = {
  color: PropTypes.string
};

export default DashboardFill;
