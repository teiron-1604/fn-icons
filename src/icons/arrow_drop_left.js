import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropLeft = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 13.207a1 1 0 010-1.414l3.5-3.5a1 1 0 111.414 1.414L11.414 12.5l2.793 2.793a1 1 0 01-1.414 1.414l-3.5-3.5z"
      ></path>
    </svg>
  );
};

ArrowDropLeft.propTypes = {
  color: PropTypes.string
};

export default ArrowDropLeft;
