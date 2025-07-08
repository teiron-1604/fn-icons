import React from 'react';
import PropTypes from 'prop-types';

const LineChartFill = props => {
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
      <g clipPath="url(#clip0_18_14133)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2a1 1 0 011 1v16a1 1 0 001 1h16a1 1 0 110 2H5a3 3 0 01-3-3V3a1 1 0 011-1zm17.242 2.03a1 1 0 01.728 1.213c-.27 1.078-.927 2.918-1.856 4.51-.465.797-1.024 1.579-1.674 2.172C16.795 12.515 15.971 13 15 13c-1.545 0-2.324-1.178-2.774-1.857l-.058-.088C11.608 10.214 11.386 10 11 10c-.253 0-.535.116-.868.484-.343.379-.666.947-.959 1.65-.496 1.19-.824 2.548-1.072 3.574l-.13.534a1 1 0 11-1.941-.485l.117-.482c.245-1.015.617-2.558 1.18-3.91.332-.796.76-1.603 1.323-2.224C9.222 8.509 10.003 8 11 8c1.545 0 2.324 1.178 2.774 1.857l.058.088c.56.841.782 1.055 1.168 1.055.279 0 .642-.14 1.09-.55.445-.406.886-1 1.296-1.704.821-1.407 1.413-3.067 1.644-3.989a1 1 0 011.212-.727z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14133">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LineChartFill.propTypes = {
  color: PropTypes.string
};

export default LineChartFill;
