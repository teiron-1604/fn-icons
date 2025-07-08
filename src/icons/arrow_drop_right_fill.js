import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropRightFill = props => {
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
      <path d="M14.457 12.957a1 1 0 000-1.414l-3.5-3.5a1 1 0 00-1.707.707v7a1 1 0 001.707.707l3.5-3.5z"></path>
    </svg>
  );
};

ArrowDropRightFill.propTypes = {
  color: PropTypes.string
};

export default ArrowDropRightFill;
