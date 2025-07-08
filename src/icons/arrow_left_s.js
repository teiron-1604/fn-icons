import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftS = props => {
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
        d="M8.293 13.207a1 1 0 010-1.414l5.5-5.5a1 1 0 111.414 1.414L10.414 12.5l4.793 4.793a1 1 0 01-1.414 1.414l-5.5-5.5z"
      ></path>
    </svg>
  );
};

ArrowLeftS.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftS;
