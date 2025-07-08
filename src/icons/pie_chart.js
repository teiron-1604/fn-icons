import React from 'react';
import PropTypes from 'prop-types';

const PieChart = props => {
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
      <g clipPath="url(#clip0_308_25)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 2.955c0-1.074.89-2.066 2.097-1.945a11 11 0 019.848 9.846c.121 1.205-.87 2.098-1.945 2.098l-8 .001a2 2 0 01-2-2v-8zm2 .056a9 9 0 017.945 7.943l-7.946.001V3.011zm-4.083-.627A1 1 0 018.4 3.701a9 9 0 1011.89 11.754 1 1 0 111.841.779A11 11 0 117.601 1.868a1 1 0 011.316.516z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_308_25">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PieChart.propTypes = {
  color: PropTypes.string
};

export default PieChart;
