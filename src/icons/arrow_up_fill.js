import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpFill = props => {
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
      <path d="M10.812 2.275a1 1 0 011.375 0l9.5 9A1 1 0 0121 13.001h-5v8a1 1 0 01-1 1H8l-.103-.005A1 1 0 017 21v-8H2l-.152-.012a1 1 0 01-.536-1.714l9.5-9z"></path>
    </svg>
  );
};

ArrowUpFill.propTypes = {
  color: PropTypes.string
};

export default ArrowUpFill;
