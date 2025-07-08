import React from 'react';
import PropTypes from 'prop-types';

const BellOffFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.37 14.992a.997.997 0 01-.577-.285L7.836 3.566a1 1 0 01.277-1.387 7 7 0 018.372.446c.129.072.24.172.327.291A7.001 7.001 0 0119 8c0 2.483.708 4.256 1.538 5.493a1 1 0 01-1.168 1.499zM2.707 1.293a1 1 0 00-1.414 1.414l3.856 3.856s-.485 4.916-.924 5.847c-.441.932-1.017 1.535-1.683 2.221A2 2 0 004 18.001h12.586l4.707 4.706a1 1 0 001.414-1.414L6.977 5.563a.993.993 0 00-.025-.025L2.707 1.293zM11.134 20.5a1 1 0 10-1.732 1 3 3 0 005.196 0 1 1 0 10-1.732-1 1 1 0 01-1.732 0z"
      ></path>
    </svg>
  );
};

BellOffFill.propTypes = {
  color: PropTypes.string
};

export default BellOffFill;
