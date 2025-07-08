import React from 'react';
import PropTypes from 'prop-types';

const PieChartFill = props => {
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
      <g clipPath="url(#clip0_308_36)">
        <path d="M10 2.382c0-.625-.569-1.099-1.167-.92C4.302 2.823 1 7.027 1 12c0 6.075 4.925 11 11 11 4.974 0 9.177-3.302 10.537-7.833.18-.598-.294-1.167-.919-1.167H12a2 2 0 01-2-2V2.382z"></path>
        <path d="M13 1.045c-.55-.05-1 .403-1 .955v8a2 2 0 002 2h8c.552 0 1.005-.45.955-1A11.003 11.003 0 0013 1.046z"></path>
      </g>
      <defs>
        <clipPath id="clip0_308_36">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PieChartFill.propTypes = {
  color: PropTypes.string
};

export default PieChartFill;
