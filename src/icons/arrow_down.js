import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = props => {
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
      <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
    </svg>
  );
};

ArrowDown.propTypes = {
  color: PropTypes.string
};

ArrowDown.defaultProps = {
  color: 'currentColor'
};

export default ArrowDown;
