import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightSFill = props => {
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
      <path d="M9.617 5.076a1 1 0 011.09.217l6 6a1 1 0 010 1.414l-6 6A1 1 0 019 18V6a1 1 0 01.617-.924z"></path>
    </svg>
  );
};

ArrowRightSFill.propTypes = {
  color: PropTypes.string
};

export default ArrowRightSFill;
