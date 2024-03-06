import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftSFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M9.707 12.707a1 1 0 010-1.414l3.586-3.586c.63-.63 1.707-.184 1.707.707v7.172c0 .89-1.077 1.337-1.707.707l-3.586-3.586z"></path>
    </svg>
  );
};

ArrowLeftSFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftSFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftSFill;
