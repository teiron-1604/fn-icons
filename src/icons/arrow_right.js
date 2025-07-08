import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = props => {
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
      <path d="M15.707 5.293a1 1 0 00-1.414 1.414L18.586 11H3l-.102.005a1 1 0 000 1.99L3 13h15.586l-4.293 4.293-.068.076a1 1 0 001.406 1.406l.076-.068 6-6a1 1 0 000-1.414l-6-6z"></path>
    </svg>
  );
};

ArrowRight.propTypes = {
  color: PropTypes.string
};

export default ArrowRight;
