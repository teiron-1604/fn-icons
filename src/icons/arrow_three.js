import React from 'react';
import PropTypes from 'prop-types';

const ArrowThree = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M2.293 6.933a1 1 0 011.414 0l4.39 4.39a1 1 0 01.033 1.38l-4.39 4.83a1 1 0 11-1.48-1.346l3.749-4.124-3.716-3.716a1 1 0 010-1.414z"></path>
      <path d="M15.903 6.933a1 1 0 011.414 0l4.39 4.39a1 1 0 01.033 1.38l-4.39 4.83a1 1 0 11-1.48-1.346l3.749-4.124-3.716-3.716a1 1 0 010-1.414z"></path>
      <path d="M10.732 6.933a1 1 0 00-1.415 1.414l3.716 3.716-3.749 4.124a1 1 0 101.48 1.345l4.39-4.829a1 1 0 00-.032-1.38l-4.39-4.39z"></path>
    </svg>
  );
};

ArrowThree.propTypes = {
  color: PropTypes.string
};

export default ArrowThree;
