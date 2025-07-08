import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropDownFill = props => {
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
      <path d="M11.293 14.707a1 1 0 001.414 0l3.5-3.5A1 1 0 0015.5 9.5h-7a1 1 0 00-.707 1.707l3.5 3.5z"></path>
    </svg>
  );
};

ArrowDropDownFill.propTypes = {
  color: PropTypes.string
};

export default ArrowDropDownFill;
