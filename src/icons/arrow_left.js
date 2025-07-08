import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M8.293 5.293a1 1 0 111.414 1.414L5.414 11H21l.102.005a1 1 0 010 1.99L21 13H5.414l4.293 4.293.068.076a1 1 0 01-1.406 1.406l-.076-.068-6-6a1 1 0 010-1.414l6-6z"></path>
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string
};

export default ArrowLeft;
