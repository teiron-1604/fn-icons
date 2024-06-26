import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownSFill = props => {
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
      <path d="M12.707 15.293a1 1 0 01-1.414 0l-3.586-3.586c-.63-.63-.184-1.707.707-1.707h7.172c.89 0 1.337 1.077.707 1.707l-3.586 3.586z"></path>
    </svg>
  );
};

ArrowDownSFill.propTypes = {
  color: PropTypes.string
};

ArrowDownSFill.defaultProps = {
  color: 'currentColor'
};

export default ArrowDownSFill;
