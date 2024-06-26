import React from 'react';
import PropTypes from 'prop-types';

const DiscFill = props => {
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
      <path d="M13 9.17A3 3 0 1015 12V2.458c4.057 1.274 7 5.064 7 9.542 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.337 0 .671.017 1 .05v7.12z"></path>
    </svg>
  );
};

DiscFill.propTypes = {
  color: PropTypes.string
};

DiscFill.defaultProps = {
  color: 'currentColor'
};

export default DiscFill;
