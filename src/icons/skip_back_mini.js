import React from 'react';
import PropTypes from 'prop-types';

const SkipBackMini = props => {
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
      <path d="M17.684 5.099a1.001 1.001 0 00-1.059.12l-7.5 6a1 1 0 000 1.562l7.5 6a1.001 1.001 0 001.625-.78V6a1 1 0 00-.566-.902zM7.75 17.25V6.75a1 1 0 10-2 0v10.5a1 1 0 102 0zm8.5-1.332L11.352 12l4.898-3.919v7.837z"></path>
      <path d="M17.684 5.099a1.001 1.001 0 00-1.059.12l-7.5 6a1 1 0 000 1.562l7.5 6a1.001 1.001 0 001.625-.78V6a1 1 0 00-.566-.902zM7.75 17.25V6.75a1 1 0 10-2 0v10.5a1 1 0 102 0zm8.5-1.332L11.352 12l4.898-3.919v7.837z"></path>
    </svg>
  );
};

SkipBackMini.propTypes = {
  color: PropTypes.string
};

export default SkipBackMini;
