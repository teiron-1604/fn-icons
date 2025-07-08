import React from 'react';
import PropTypes from 'prop-types';

const SkipForwardMini = props => {
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
      <path d="M6.316 5.099c.347-.167.759-.12 1.059.12l7.5 6a1 1 0 010 1.562l-7.5 6a1.001 1.001 0 01-1.625-.78V6a1 1 0 01.566-.902zM16.25 17.25V6.75a1 1 0 112 0v10.5a1 1 0 11-2 0zm-8.5-1.332L12.648 12 7.75 8.081v7.837z"></path>
    </svg>
  );
};

SkipForwardMini.propTypes = {
  color: PropTypes.string
};

export default SkipForwardMini;
