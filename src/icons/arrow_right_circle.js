import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightCircle = props => {
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
      <path d="M12 11V8l4 4-4 4v-3H8v-2h4zm0-9c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8z"></path>
    </svg>
  );
};

ArrowRightCircle.propTypes = {
  color: PropTypes.string
};

ArrowRightCircle.defaultProps = {
  color: 'currentColor'
};

export default ArrowRightCircle;
