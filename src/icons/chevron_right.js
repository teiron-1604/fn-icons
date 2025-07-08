import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = props => {
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
        d="M14.457 11.543a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 011.414-1.414l3.5 3.5z"
      ></path>
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string
};

export default ChevronRight;
