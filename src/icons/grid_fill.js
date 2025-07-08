import React from 'react';
import PropTypes from 'prop-types';

const GridFill = props => {
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
      <path d="M9 13a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a2 2 0 012-2h5z"></path>
      <path d="M20 13a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5a2 2 0 012-2h5z"></path>
      <path d="M9 2a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5z"></path>
      <path d="M20 2a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V4a2 2 0 012-2h5z"></path>
    </svg>
  );
};

GridFill.propTypes = {
  color: PropTypes.string
};

export default GridFill;
