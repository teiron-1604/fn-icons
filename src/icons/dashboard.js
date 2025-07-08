import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = props => {
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
      <g clipPath="url(#clip0_18_14477)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4a2 2 0 012-2h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm7 0H4v7h5V4zm4 0a2 2 0 012-2h5a2 2 0 012 2v3a2 2 0 01-2 2h-5a2 2 0 01-2-2V4zm7 0h-5v3h5V4zm-7 9a2 2 0 012-2h5a2 2 0 012 2v7a2 2 0 01-2 2h-5a2 2 0 01-2-2v-7zm7 0h-5v7h5v-7zM2 17a2 2 0 012-2h5a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3zm7 0H4v3h5v-3z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14477">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Dashboard.propTypes = {
  color: PropTypes.string
};

export default Dashboard;
