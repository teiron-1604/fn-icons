import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropLeftFill = props => {
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
      <path d="M9.293 10.793a1 1 0 000 1.414l3.5 3.5A1 1 0 0014.5 15V8a1 1 0 00-1.707-.707l-3.5 3.5z"></path>
    </svg>
  );
};

ArrowDropLeftFill.propTypes = {
  color: PropTypes.string
};

export default ArrowDropLeftFill;
