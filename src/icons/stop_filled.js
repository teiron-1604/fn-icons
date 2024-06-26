import React from 'react';
import PropTypes from 'prop-types';

const StopFilled = props => {
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
      <path d="M6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z"></path>
    </svg>
  );
};

StopFilled.propTypes = {
  color: PropTypes.string
};

StopFilled.defaultProps = {
  color: 'currentColor'
};

export default StopFilled;
