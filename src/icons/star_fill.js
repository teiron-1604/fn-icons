import React from 'react';
import PropTypes from 'prop-types';

const StarFill = props => {
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
      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"></path>
    </svg>
  );
};

StarFill.propTypes = {
  color: PropTypes.string
};

StarFill.defaultProps = {
  color: 'currentColor'
};

export default StarFill;
