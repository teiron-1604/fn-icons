import React from 'react';
import PropTypes from 'prop-types';

const SkipForwardMiniFill = props => {
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
      <path d="M6.316 5.099c.347-.167.759-.12 1.059.12l7.5 6a1 1 0 010 1.562l-7.5 6a1.001 1.001 0 01-1.625-.78V6a1 1 0 01.566-.902zm10.934.651a1 1 0 011 1v10.5a1 1 0 11-2 0V6.75a1 1 0 011-1z"></path>
    </svg>
  );
};

SkipForwardMiniFill.propTypes = {
  color: PropTypes.string
};

export default SkipForwardMiniFill;
