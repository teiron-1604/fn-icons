import React from 'react';
import PropTypes from 'prop-types';

const SkipBackMiniFill = props => {
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
      <path d="M17.684 5.099a1.001 1.001 0 00-1.059.12l-7.5 6a1 1 0 000 1.562l7.5 6a1.001 1.001 0 001.625-.78V6a1 1 0 00-.566-.902zM6.75 5.75a1 1 0 00-1 1v10.5a1 1 0 102 0V6.75a1 1 0 00-1-1z"></path>
      <path d="M17.684 5.099a1.001 1.001 0 00-1.059.12l-7.5 6a1 1 0 000 1.562l7.5 6a1.001 1.001 0 001.625-.78V6a1 1 0 00-.566-.902zM6.75 5.75a1 1 0 00-1 1v10.5a1 1 0 102 0V6.75a1 1 0 00-1-1z"></path>
    </svg>
  );
};

SkipBackMiniFill.propTypes = {
  color: PropTypes.string
};

export default SkipBackMiniFill;
