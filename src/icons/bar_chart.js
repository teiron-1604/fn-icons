import React from 'react';
import PropTypes from 'prop-types';

const BarChart = props => {
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
      <g clipPath="url(#clip0_18_14003)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 2a2 2 0 00-2 2v15.5a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2zm0 2h2v15.5h-2V4zm5 6a2 2 0 012-2h2a2 2 0 012 2v9.5a2 2 0 01-2 2h-2a2 2 0 01-2-2V10zm4 0h-2v9.5h2V10zM2 14a2 2 0 012-2h2a2 2 0 012 2v5.5a2 2 0 01-2 2H4a2 2 0 01-2-2V14zm4 0H4v5.5h2V14z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14003">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BarChart.propTypes = {
  color: PropTypes.string
};

export default BarChart;
