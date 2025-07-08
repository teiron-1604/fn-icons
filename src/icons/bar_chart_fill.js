import React from 'react';
import PropTypes from 'prop-types';

const BarChartFill = props => {
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
      <g clipPath="url(#clip0_18_14007)">
        <path d="M5.5 12a2 2 0 012 2v5.5a2 2 0 01-2 2H4a2 2 0 01-2-2V14a2 2 0 012-2h1.5zM13 2a2 2 0 012 2v15.5a2 2 0 01-2 2h-1.5a2 2 0 01-2-2V4a2 2 0 012-2H13zm7 6a2 2 0 012 2v9.5a2 2 0 01-2 2h-1.5a2 2 0 01-2-2V10a2 2 0 012-2H20z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14007">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BarChartFill.propTypes = {
  color: PropTypes.string
};

export default BarChartFill;
