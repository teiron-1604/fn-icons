import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpSFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M11.293 8.707a1 1 0 011.414 0l3.586 3.586c.63.63.184 1.707-.707 1.707H8.414c-.89 0-1.337-1.077-.707-1.707l3.586-3.586z"></path>
    </svg>
  );
};

ArrowUpSFill.propTypes = {
  color: PropTypes.string
};

ArrowUpSFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowUpSFill;
