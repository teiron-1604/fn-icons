import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleUp = props => {
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
        d="M6.293 18.707a1 1 0 001.414 0L12 14.414l4.293 4.293a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414zm0-7a1 1 0 001.414 0L12 7.414l4.293 4.293a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414z"
      ></path>
    </svg>
  );
};

ChevronDoubleUp.propTypes = {
  color: PropTypes.string
};

export default ChevronDoubleUp;
