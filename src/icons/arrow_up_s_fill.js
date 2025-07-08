import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpSFill = props => {
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
      <path d="M5.076 15.383a1 1 0 01.217-1.09l6-6a1 1 0 011.414 0l6 6A1 1 0 0118 16H6a1 1 0 01-.924-.617z"></path>
    </svg>
  );
};

ArrowUpSFill.propTypes = {
  color: PropTypes.string
};

export default ArrowUpSFill;
