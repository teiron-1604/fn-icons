import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = props => {
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
      <path d="M5.293 15.707a1 1 0 011.414-1.414L11 18.586V3l.005-.102a1 1 0 011.99 0L13 3v15.586l4.293-4.293.076-.068a1 1 0 011.406 1.406l-.068.076-6 6a1 1 0 01-1.414 0l-6-6z"></path>
    </svg>
  );
};

ArrowDown.propTypes = {
  color: PropTypes.string
};

export default ArrowDown;
