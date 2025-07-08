import React from 'react';
import PropTypes from 'prop-types';

const ArrowThreeLeft = props => {
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
      <path d="M21.707 6.933a1 1 0 00-1.414 0l-4.39 4.39a1 1 0 00-.033 1.38l4.39 4.83a1 1 0 101.48-1.346l-3.749-4.124 3.716-3.716a1 1 0 000-1.414z"></path>
      <path d="M8.097 6.933a1 1 0 00-1.414 0l-4.39 4.39a1 1 0 00-.033 1.38l4.39 4.83a1 1 0 101.48-1.346l-3.749-4.124 3.716-3.716a1 1 0 000-1.414z"></path>
      <path d="M13.268 6.933a1 1 0 111.415 1.414l-3.716 3.716 3.748 4.124a1 1 0 01-1.48 1.345l-4.39-4.829a1 1 0 01.033-1.38l4.39-4.39z"></path>
    </svg>
  );
};

ArrowThreeLeft.propTypes = {
  color: PropTypes.string
};

export default ArrowThreeLeft;
