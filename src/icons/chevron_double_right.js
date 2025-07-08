import React from 'react';
import PropTypes from 'prop-types';

const ChevronDoubleRight = props => {
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
        d="M5.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12 5.293 7.707a1 1 0 010-1.414zm7 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L16.586 12l-4.293-4.293a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

ChevronDoubleRight.propTypes = {
  color: PropTypes.string
};

export default ChevronDoubleRight;
